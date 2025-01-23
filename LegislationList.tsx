import * as React from "react";
import { FC, ReactElement } from "react";
import { cn } from "./utils";

export type LegislationListProps = {
  children:
    | ReactElement<LegislationItemProps>
    | ReactElement<LegislationItemProps>[];
  className?: string;
};

export const LegislationList: FC<LegislationListProps> = ({
  children,
  className,
}) => {
  return (
    <ol
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 lg:gap-y-16 max-w-xl lg:max-w-5xl",
        className
      )}
    >
      {children}
    </ol>
  );
};

export type LegislationItemProps = {
  children:
    | ReactElement<LegislationLinkProps>
    | ReactElement<LegislationDescriptionProps>[];
  className?: string;
};

export const LegislationItem: FC<LegislationItemProps> = ({
  children,
  className,
}) => {
  return (
    <li className={cn("relative group", className)}>
      <div
        aria-hidden
        className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 bg-slate-50 border-2 border-slate-200"
      />
      <div
        className={cn(
          "grid grid-cols-[min-content_auto] grid-rows-[min-content_auto] gap-x-4 gap-y-1 relative w-full h-full",
          className
        )}
      >
        {children}
      </div>
    </li>
  );
};

export type LegislationIconProps = {
  children?: ReactElement | ReactElement[] | string;
  className?: string;
};

export const LegislationIcon: FC<LegislationIconProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "col-span-0 row-span-2 left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 p-3 group-hover:ring-2 ring-blue-600 ring-offset-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export type LegislationLinkProps = {
  children: string;
  className?: string;
  href: string;
};

export const LegislationLink: FC<LegislationLinkProps> = ({
  children,
  className,
  href,
}) => {
  return (
    <>
      <a
        aria-label={children}
        aria-hidden
        tabIndex={-1}
        className="absolute inset-0"
        href={href}
      />
      <a
        className={cn("text-blue-600 font-bold underline", className)}
        href={href}
      >
        {children}
      </a>
    </>
  );
};

export type LegislationDescriptionProps = {
  children: ReactElement | ReactElement[] | string;
  className?: string;
};

export const LegislationDescription: FC<LegislationDescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("text-base leading-7 text-gray-600", className)}>
      {children}
    </div>
  );
};
