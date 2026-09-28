// One-off script to create an example blog post so the template can be
// verified end-to-end and Lucas has a working reference inside Sanity
// Studio. Safe to delete the resulting document from Studio at any time.
import { createClient } from "next-sanity";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const key = () => Math.random().toString(36).slice(2, 10);

async function main() {
  const imagePath = path.join(__dirname, "../public/mockup-seo.png");
  const imageAsset = await client.assets.upload("image", readFileSync(imagePath), {
    filename: "example-post-header.png",
  });

  const body = [
    {
      _type: "block",
      _key: key(),
      style: "normal",
      children: [
        {
          _type: "span",
          _key: key(),
          text: "This is an example post so you can see exactly how the blog template works before you write your first real article. Feel free to edit every field, or delete this post entirely once you're comfortable.",
        },
      ],
    },
    {
      _type: "block",
      _key: key(),
      style: "h2",
      children: [{ _type: "span", _key: key(), text: "How the table of contents works" }],
    },
    {
      _type: "block",
      _key: key(),
      style: "normal",
      children: [
        {
          _type: "span",
          _key: key(),
          text: "Every heading you style as \"Título H2\" or \"Título H3\" in the editor automatically appears in the \"On this page\" index — on the left on desktop, and in a collapsible \"On this page\" toggle on mobile. You don't need to do anything else; just use the style dropdown in the toolbar when writing a subtitle.",
        },
      ],
    },
    {
      _type: "block",
      _key: key(),
      style: "h3",
      children: [{ _type: "span", _key: key(), text: "Sub-sections use H3" }],
    },
    {
      _type: "block",
      _key: key(),
      style: "normal",
      children: [
        {
          _type: "span",
          _key: key(),
          text: "H3 headings are nested slightly under their H2 in the index, for articles with more detailed structure.",
        },
      ],
    },
    {
      _type: "block",
      _key: key(),
      style: "h2",
      children: [{ _type: "span", _key: key(), text: "The two CTA buttons" }],
    },
    {
      _type: "block",
      _key: key(),
      style: "normal",
      children: [
        {
          _type: "span",
          _key: key(),
          text: "The two buttons above (\"Get your free consultation\" and \"See our services\") come from the CTA fields on this post, in the \"Botones CTA\" tab. Change the text or link per article, or leave the defaults.",
        },
      ],
    },
  ];

  const doc = {
    _type: "post",
    title: "Welcome to the Lucaseo blog — how this template works",
    slug: { current: "welcome-to-the-lucaseo-blog" },
    excerpt:
      "A quick tour of the blog template: the header photo, the auto-generated table of contents, and the two CTA buttons — before you publish your first real article.",
    author: "Lucas",
    publishedAt: new Date().toISOString(),
    headerImage: { _type: "image", asset: { _type: "reference", _ref: imageAsset._id }, alt: "Example blog header image" },
    body,
    cta1Label: "Get your free consultation",
    cta1Href: "https://calendly.com/lucaseo/30min?back=1",
    cta2Label: "See our services",
    cta2Href: "/seo",
  };

  const result = await client.createIfNotExists({ _id: "example-welcome-post", ...doc });
  console.log("Created/updated:", result._id);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
