import type { FC, ReactElement, PropsWithChildren } from "react";
import { cn } from "./utils";

export type ContainerProps = PropsWithChildren & {
  className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn("flex w-full max-w-5xl flex-col px-4 lg:px-0", className)}
    >
      {children}
    </div>
  );
};
