import React from "react";
import { Container } from "./Container";

export default {
  title: "Container",
  component: Container,
};

export const Default = () => (
  <div className="flex flex-col items-center">
    <Container>
      <div>Example 1</div>
      <div>Example 2</div>
    </Container>
  </div>
);
