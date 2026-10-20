import type { FC } from "react";

export type TopLevelHeadingProps = {
  text: string;
  subtext?: string;
  h1?: "both" | "textOnly";
};

export const TopLevelHeading: FC<TopLevelHeadingProps> = ({
  text,
  subtext,
  h1 = "both",
}) => {
  const Root = h1 === "both" ? "h1" : "div";
  const Text = h1 === "both" ? "span" : "h1";
  const Subtext = "span";
  return (
    <Root className={`flex flex-col font-serif text-2xl md:text-3xl`}>
      <Text className="font-bold italic leading-none">{text}</Text>
      {subtext && (
        <Subtext className="align-top font-lilex font-normal text-sm text-slate-500 dark:text-slate-400">
          {subtext}
        </Subtext>
      )}
    </Root>
  );
};
