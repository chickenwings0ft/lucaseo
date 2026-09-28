export interface TocItem {
  key: string;
  id: string;
  text: string;
  level: 2 | 3;
}

interface PortableTextSpan {
  text?: string;
}

interface PortableTextBlock {
  _key: string;
  _type: string;
  style?: string;
  children?: PortableTextSpan[];
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

/**
 * Walks a Portable Text body and pulls out every H2/H3 block to build a
 * table of contents. IDs are de-duplicated (repeat headings get -1, -2, ...)
 * so anchors always resolve to exactly one heading.
 */
export function extractToc(body: unknown): TocItem[] {
  const blocks = Array.isArray(body) ? (body as PortableTextBlock[]) : [];
  const seen = new Map<string, number>();

  return blocks
    .filter((b) => b?._type === "block" && (b.style === "h2" || b.style === "h3"))
    .map((b) => {
      const text = (b.children ?? []).map((c) => c.text ?? "").join("");
      const base = slugifyHeading(text) || "section";
      const count = seen.get(base) ?? 0;
      seen.set(base, count + 1);
      const id = count === 0 ? base : `${base}-${count}`;
      return { key: b._key, id, text, level: b.style === "h2" ? 2 : 3 } as TocItem;
    });
}
