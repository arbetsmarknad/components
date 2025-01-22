import React from "react";
import { TopLevelHeading } from "./TopLevelHeading";

export default {
  title: "TopLevelHeading",
  component: TopLevelHeading,
};

export const Default = () => (
  <TopLevelHeading
    text="Arbetsmarknad Starter Project"
    subtext="Another Bit Of Text"
  />
);
