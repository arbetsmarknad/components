import type { FC, PropsWithChildren } from "react";

export type PageProps = PropsWithChildren;

export const Page: FC<PageProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center divide-y divide-solid divide-background-secondary">
      {children}
    </div>
  );
};
