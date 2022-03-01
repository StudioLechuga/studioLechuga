import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";
import { config } from "./config";

export const urlFor = (source: any): any =>
  createImageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const PortableText = createPortableTextComponent({
  projectId: config.projectId || "",
  dataset: config.dataset,
  serializers: {},
});

export const useCurrentUser = createCurrentUserHook(config);
