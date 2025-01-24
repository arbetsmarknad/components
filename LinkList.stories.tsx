import React from "react";
import { LinkList } from "./LinkList";

export default {
  title: "LinkList",
  component: LinkList,
};

export const Default = () => (
  <LinkList links={["https://example.org", "https://example.com"]} />
);
