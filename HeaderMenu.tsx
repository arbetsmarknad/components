import type { FC } from "react";

export type HeaderMenuProps = {
  canonicalUrl: string;
  deploymentUrl: string;
};

export const HeaderMenu: FC<HeaderMenuProps> = ({
  canonicalUrl,
  deploymentUrl,
}) => {
  const canonicalHostname = new URL(canonicalUrl).hostname;
  const deploymentHostname = new URL(deploymentUrl).hostname;
  return (
    <header className="grid h-16 w-full grid-cols-2 grid-rows-1 place-items-center items-center border-b px-4 sm:grid-cols-1 lg:px-0">
      <div className="flex h-full w-full max-w-5xl flex-col justify-center">
        <a
          href={deploymentUrl}
          className="flex flex-row items-center text-md font-bold text-link underline"
        >
          {deploymentHostname}
        </a>
        {canonicalHostname !== deploymentHostname && (
          <div>
            speglar{" "}
            <a
              href={canonicalUrl}
              className="text-md font-bold text-link underline"
            >
              {canonicalHostname}
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
