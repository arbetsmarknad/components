import type { FC } from "react";

export type TopLevelHeadingProps = {
  text: string;
  subtext?: string;
};

export const TopLevelHeading: FC<TopLevelHeadingProps> = ({
  text,
  subtext,
}) => {
  return (
    <h1 className={`flex flex-col text-2xl font-bold md:text-3xl space-y-2`}>
      <span className="font-normal md:font-extralight">{text}</span>
      {subtext && (
        <span className="leading-1 align-top text-lg font-light text-slate-500">
          {subtext}
        </span>
      )}
    </h1>
  );
};
