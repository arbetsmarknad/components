import type { FC, ReactElement } from "react";

export type PageProps = {
  children: ReactElement | ReactElement[];
};

export const Page: FC<PageProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center divide-y divide-solid divide-gray-200">
      {children}
    </div>
  );
};
