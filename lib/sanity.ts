import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";
import { config } from "./config";

export const urlFor = (source: any): any =>
  createImageUrlBuilder({
    projectId: config.projectId || "",
    dataset: config.dataset,
  }).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook({
  projectId: config.projectId || "",
  dataset: config.dataset,
});

export const PortableText = createPortableTextComponent({
  projectId: config.projectId || "",
  dataset: config.dataset,
  serializers: {},
});



export const useCurrentUser = createCurrentUserHook({
  projectId: config.projectId || "",
  dataset: config.dataset,
});
