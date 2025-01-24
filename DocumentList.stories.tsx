import React from "react";
import {
  DocumentList,
  DocumentItem,
  DocumentIcon,
  DocumentLink,
  DocumentDescription,
} from "./DocumentList";

export default {
  title: "DocumentList",
};

export const Default = () => (
  <DocumentList>
    <DocumentItem>
      <DocumentIcon src="https://placehold.co/64x91/EEE/31343C" />
      <DocumentLink href="https://example.org">Exempelavtalet</DocumentLink>
      <DocumentDescription>
        Ett kollektivavtal för exempelbranschen.
      </DocumentDescription>
    </DocumentItem>
    <DocumentItem>
      <DocumentIcon src="https://placehold.co/64x91/FCC/31343C" />
      <DocumentLink href="https://example.org">Ingetavtalet</DocumentLink>
      <DocumentDescription>Ett kollektivavtal för ingen.</DocumentDescription>
    </DocumentItem>
    <DocumentItem>
      <DocumentIcon src="https://placehold.co/64x91/CFF/31343C" />
      <DocumentLink href="https://example.org">Maffiaavtalet</DocumentLink>
      <DocumentDescription>
        Ett kollektivavtal för den organiserade brottsligheten.
      </DocumentDescription>
    </DocumentItem>
  </DocumentList>
);
