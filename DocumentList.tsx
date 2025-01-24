import * as React from "react";
import { FC, ReactElement } from "react";
import { cn } from "./utils";

export type DocumentListProps = {
  children: ReactElement<DocumentItemProps> | ReactElement<DocumentItemProps>[];
  className?: string;
};

export const DocumentList: FC<DocumentListProps> = ({
  children,
  className,
}) => {
  return <ol className={cn("flex flex-col gap-y-4", className)}>{children}</ol>;
};

export type DocumentItemProps = {
  children: ReactElement | ReactElement[];
  className?: string;
};

export const DocumentItem: FC<DocumentItemProps> = ({
  children,
  className,
}) => {
  return <li className={cn("", className)}>{children}</li>;
};

export type DocumentIconProps = {
  src?: string;
  className?: string;
};

export const DocumentIcon: FC<DocumentIconProps> = ({ src, className }) => {
  return (
    <div
      className={cn(
        "aspect-[707/1000] w-16 shrink-0 border-2 border-slate-200",
        className
      )}
    >
      <img alt="" src={src} />
    </div>
  );
};

export type DocumentLinkProps = {
  href: string;
  className?: string;
  children: string;
};

export const DocumentLink: FC<DocumentLinkProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <a className={cn("text-blue-600 underline", className)} href={href}>
      {children}
    </a>
  );
};

export type DocumentDescriptionProps = {
  className?: string;
  children: string;
};

export const DocumentDescription: FC<DocumentDescriptionProps> = ({
  className,
  children,
}) => {
  return <div className={cn("", className)}>{children}</div>;
};
