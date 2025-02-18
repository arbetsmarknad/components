import React from "react";
import { HeaderMenu } from "./HeaderMenu";

export default {
  title: "HeaderMenu",
  component: HeaderMenu,
};

export const Default = () => (
  <HeaderMenu
    canonicalUrl="https://example.org"
    deploymentUrl="https://example.org"
  />
);

export const Mirror = () => (
  <HeaderMenu
    canonicalUrl="https://example.org"
    deploymentUrl="https://example.com"
  />
);
