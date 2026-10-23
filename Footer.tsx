import type { FC } from "react";
import { Container } from "./Container";

const links = [
  {
    href: "https://arbetsmiljo.github.io/",
    text: "Arbetsmiljö",
  },
  {
    href: "https://fackforbund.github.io/",
    text: "Fackförbund",
  },
  {
    href: "https://kollektivavtal.github.io/",
    text: "Kollektivavtal",
  },
  {
    href: "https://lagstiftning.github.io/",
    text: "Lagstiftning",
  },
];

export const Footer: FC<{ sourceCode: string[] }> = ({ sourceCode }) => {
  return (
    <footer className="grid place-items-center w-full py-8">
      <Container className="flex flex-col gap-y-8 md:flex-row md:gap-x-8">
        <div className="flex flex-1 flex-col gap-y-2">
          <h2 className="text-lg font-serif">Svenska Modellen</h2>
          <ol className="flex flex-col gap-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-link underline text-sm font-lilex">
                  {link.text}
                </a>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-1 flex-col gap-y-2 pb-8">
          <h2 className="text-lg font-serif">Sidan drivs av</h2>
          <ol className="flex flex-col gap-y-1">
            {sourceCode.map((project) => (
              <li key={project}>
                <a
                  href={`https://github.com/${project}`}
                  className="text-link underline text-sm font-lilex"
                >
                  {project}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </footer>
  );
};
