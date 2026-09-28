import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client, projectId, dataset } from "./sanity";

const builder = projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlForImage(source: SanityImageSource) {
  if (!builder || !client) return null;
  return builder.image(source);
}
