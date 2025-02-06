import type { FC, PropsWithChildren } from "react";

export const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex flex-col items-center w-full py-4 min-h-[calc(100vh-8rem)]">
      {children}
    </main>
  );
};
