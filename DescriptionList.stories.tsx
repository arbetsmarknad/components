import React from "react";
import {
  DescriptionDetails,
  DescriptionItem,
  DescriptionList,
  DescriptionTerm,
} from "./DescriptionList";

export default {
  title: "DescriptionList",
};

export const Default = () => (
  <DescriptionList>
    <DescriptionItem>
      <DescriptionTerm>Term 1</DescriptionTerm>
      <DescriptionDetails>Description 1</DescriptionDetails>
    </DescriptionItem>
    <DescriptionItem>
      <DescriptionTerm>Term 2</DescriptionTerm>
      <DescriptionDetails>Description 2</DescriptionDetails>
    </DescriptionItem>
  </DescriptionList>
);
