import type { FC } from "react";
import { Container } from "./Container";

const links = [
  {
    href: "https://arbetsmarknad.github.io/",
    text: "Arbetsmarknad",
  },
  {
    href: "https://arbetsmiljo.github.io/",
    text: "Arbetsmiljö",
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
    <footer className="grid place-items-center">
      <Container className="divide-y divide-solid divide-gray-200 md:divide-none flex flex-col gap-y-8 md:flex-row md:justify-between md:items-start ">
        <div className="text-center flex flex-col items-center gap-y-4 pb-8 md:text-left md:items-start">
          <h2 className="text-lg">Sidan drivs av</h2>
          <ol className="flex flex-col items-center gap-y-4 md:items-start">
            {sourceCode.map((project) => (
              <li key={project}>
                <a
                  href={`https://github.com/${project}`}
                  className="text-blue-600 underline"
                >
                  {project.split("/").join(" / ")}
                </a>
              </li>
            ))}
          </ol>
        </div>
        <div className="text-center flex flex-col items-center gap-y-4 md:items-start">
          <h2 className="text-lg">Arbetsmarknadsdokumentation</h2>
          <ol className="flex flex-col items-center gap-y-4 md:items-start">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-blue-600 underline">
                  {link.text}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </footer>
  );
};
