import type { FC } from "react";

export type HeaderMenuProps = {
  href: string;
  text: string;
};

export const HeaderMenu: FC<HeaderMenuProps> = ({ href, text }) => {
  return (
    <header className="grid h-12 w-full grid-cols-2 grid-rows-1 place-items-center items-center border-b border-gray-200 px-4 sm:grid-cols-1 lg:px-0">
      <div className="flex h-full w-full max-w-5xl flex-row justify-between">
        <a href={href} className="flex flex-row items-center gap-2">
          <span className="text-md font-bold">{text}</span>
        </a>
      </div>
    </header>
  );
};
