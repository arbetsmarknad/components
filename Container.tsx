import type { FC, ReactElement } from "react";

export type ContainerProps = {
  children: ReactElement | ReactElement[];
};

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex w-full max-w-5xl flex-col px-4 lg:px-0">
      {children}
    </div>
  );
};
