import type { FC, PropsWithChildren } from "react";

export const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex flex-col items-center w-full pt-8 pb-8 min-h-[calc(100vh-8rem)]">
      {children}
    </main>
  );
};
