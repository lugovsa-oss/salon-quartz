import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
header: [
  Component.CustomHeader(),
],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Main site": "https://alugovskoy.net/",
      Contact: "https://alugovskoy.net/contact/",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [],
  left: [],
  right: [],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [],
  left: [],
  right: [],
}