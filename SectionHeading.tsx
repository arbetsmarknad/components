import type { FC, ReactElement } from "react";
import { cn } from "./utils";

export type SectionHeadingProps = {
  asChild?: boolean;
  children: ReactElement | ReactElement[] | string;
  className?: string;
};

export const SectionHeading: FC<SectionHeadingProps> = ({
  asChild,
  children,
  className,
}) => {
  const Component = asChild ? "div" : "section";
  return (
    <Component className={cn("text-2xl font-bold", className)}>
      {children}
    </Component>
  );
};
