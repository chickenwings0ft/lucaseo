import { NextResponse } from "next/server";
import { writeClient } from "@/lib/sanity";

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

    if (!writeClient || !process.env.SANITY_API_TOKEN) {
      console.error("Sanity no configurado — lead:", doc);
      return NextResponse.json({ error: "Servidor no configurado" }, { status: 500 });
    }

    await writeClient.create(doc);
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
