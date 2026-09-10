import { NextResponse } from "next/server";
import { writeClient } from "@/lib/sanity";
import { sendLeadEmails } from "@/lib/emails";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // honeypot / validación mínima
    if (!body.email || typeof body.email !== "string") {
      return NextResponse.json({ error: "Email requerido" }, { status: 400 });
    }

    const doc = {
      _type: "lead",
      name: str(body.name),
      company: str(body.company),
      email: str(body.email),
      phone: str(body.phone),
      goal: str(body.goal),
      message: str(body.message),
      status: "new",
      submittedAt: new Date().toISOString(),
    };

    // Guardar y avisar son independientes: si uno falla, el lead no se pierde.
    let saved = false;
    if (writeClient && process.env.SANITY_API_TOKEN) {
      try {
        await writeClient.create(doc);
        saved = true;
      } catch (err) {
        console.error("No se pudo guardar el lead en Sanity:", err);
      }
    }

    let emailed = false;
    try {
      emailed = await sendLeadEmails({
        name: doc.name,
        company: doc.company,
        email: doc.email!,
        phone: doc.phone,
        goal: doc.goal,
        message: doc.message,
      });
    } catch (err) {
      console.error("No se pudieron enviar los emails del lead:", err);
    }

    if (!saved && !emailed) {
      console.error("Lead sin registrar en ningún canal:", doc);
      return NextResponse.json({ error: "Servidor no configurado" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error guardando lead:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

function str(v: unknown): string | undefined {
  if (typeof v !== "string") return undefined;
  const t = v.trim();
  return t.length ? t.slice(0, 2000) : undefined;
}
