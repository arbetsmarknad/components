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
  return (
    <li
      className={cn(
        "grid group relative xxs:grid-cols-[64px_auto] xxs:grid-rows-[min-content_1fr]  xs:grid-rows-[1fr_1fr] xxs:gap-x-4 xxs:items-center",
        className
      )}
    >
      {children}
    </li>
  );
};

export type DocumentIconProps = {
  src?: string;
  className?: string;
};

export const DocumentIcon: FC<DocumentIconProps> = ({ src, className }) => {
  return (
    <div
      className={cn(
        "aspect-[707/1000] w-16 shrink-0 border-2 border-slate-200 xxs:row-span-2 group-hover:ring-2 ring-blue-200 ring-offset-1",
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
    <>
      <a
        aria-hidden
        tabIndex={-1}
        className="absolute top-0 right-0 bottom-0 left-0"
        href={href}
      />
      <a
        className={cn(
          "text-blue-600 underline font-bold xxs:col-start-2 xs:self-end",
          className
        )}
        href={href}
      >
        {children}
      </a>
    </>
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
  return (
    <div
      className={cn(
        "xxs:col-start-2 xxs:self-start xxs:line-clamp-2 xs:line-clamp-none",
        className
      )}
    >
      {children}
    </div>
  );
};
