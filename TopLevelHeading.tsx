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
    <Root className={`flex flex-col text-2xl font-bold md:text-3xl`}>
      <Text className="font-normal md:font-extralight">{text}</Text>
      {subtext && (
        <Subtext className="align-top text-lg font-light text-slate-500">
          {subtext}
        </Subtext>
      )}
    </Root>
  );
};
