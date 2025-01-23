import * as React from "react";
import { FC, ReactElement } from "react";

export type DescriptionListProps = {
  children:
    | ReactElement<DescriptionItemProps>
    | ReactElement<DescriptionItemProps>[];
};

export const DescriptionList: FC<DescriptionListProps> = ({ children }) => {
  return <dl className="grid grid-cols-1">{children}</dl>;
};

export type DescriptionItemProps = {
  children:
    | ReactElement<DescriptionTermProps>
    | ReactElement<DescriptionDetailsProps>[];
};

export const DescriptionItem: FC<DescriptionItemProps> = ({ children }) => {
  return <>{children}</>;
};

export type DescriptionTermProps = {
  children: ReactElement | ReactElement[] | string;
};

export const DescriptionTerm: FC<DescriptionTermProps> = ({ children }) => {
  return <dt>{children}</dt>;
};

export type DescriptionDetailsProps = {
  children: ReactElement | ReactElement[] | string;
};

export const DescriptionDetails: FC<DescriptionDetailsProps> = ({
  children,
}) => {
  return <dd>{children}</dd>;
};
