import * as React from "react";
import { FC, ReactElement } from "react";
import { cn } from "./utils";

export type LegislationTableProps = {
  children:
    | ReactElement<LegislationTableRowProps>
    | ReactElement<LegislationTableRowProps>[];
  className?: string;
};

export const LegislationTable: FC<LegislationTableProps> = ({
  children,
  className,
}) => {
  return <table className={cn("", className)}>{children}</table>;
};

export type LegislationTableRowProps = {
  children:
    | ReactElement<LegislationTableCellProps>
    | ReactElement<LegislationTableCellProps>[];
  className?: string;
};

export const LegislationTableRow: FC<LegislationTableRowProps> = ({
  children,
  className,
}) => {
  return <tr className={cn("", className)}>{children}</tr>;
};

export type LegislationTableCellProps = {
  children: ReactElement | ReactElement[] | string;
  className?: string;
  href?: string;
  side: "left" | "right";
  type:
    | "document_heading"
    | "group_heading"
    | "chapter_heading"
    | "section_heading"
    | "paragraph_text";
};

export const LegislationTableCell: FC<LegislationTableCellProps> = ({
  children,
  className,
  href,
  side,
  type,
}) => {
  return (
    <td
      className={cn(
        "max-w-[50%] overflow-hidden",
        {
          "pr-1 md:pr-4": side === "left",
          "pl-1 md:pl-4": side === "right",
          "prose text-base lg:text-2xl font-normal align-top":
            type === "document_heading",
          "prose text-base lg:text-xl font-bold py-4 align-top text-ellipsis":
            type === "group_heading" || type === "chapter_heading",
          "prose text-base lg:text-xl font-bold pt-4 align-top":
            type === "section_heading",
          "prose text-xs md:text-base lg:text-lg py-4 align-top":
            type === "paragraph_text",
        },
        className
      )}
    >
      {href ? (
        <a href={href} className="text-blue-600 underline">
          {children}
        </a>
      ) : (
        children
      )}
    </td>
  );
};
