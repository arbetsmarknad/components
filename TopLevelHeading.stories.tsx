import React from "react";
import { TopLevelHeading } from "./TopLevelHeading";

export default {
  title: "TopLevelHeading",
  component: TopLevelHeading,
};

export const Default = () => (
  <TopLevelHeading
    text="Svenska modellen Starter Project"
    subtext="Another Bit Of Text"
  />
);

export const VeryLongSubText = () => (
  <TopLevelHeading
    text="Svenska modellen Starter Project"
    subtext="Ett dokumentationsnav om den svenska arbetmarknaden"
  />
);
