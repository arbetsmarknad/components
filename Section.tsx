import type { FC, ReactElement } from "react";
import { cn } from "./utils";

export type SectionProps = {
  children: ReactElement | ReactElement[];
  className?: string;
};

export const Section: FC<SectionProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        "flex flex-col items-start space-y-4 max-w-full overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
};
