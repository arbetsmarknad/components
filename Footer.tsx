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
    <footer className="grid place-items-center w-full py-8">
      <Container className="flex flex-col gap-y-8 md:flex-row md:justify-between">
        <div className="flex flex-col gap-y-4 pb-8">
          <h2 className="text-md">Sidan drivs av</h2>
          <ol className="flex flex-col gap-y-2">
            {sourceCode.map((project) => (
              <li key={project}>
                <a
                  href={`https://github.com/${project}`}
                  className="text-blue-600 underline text-sm"
                >
                  {project.split("/").join(" / ")}
                </a>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-md">Arbetsmarknadsdokumentation</h2>
          <ol className="flex flex-col gap-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-blue-600 underline text-sm">
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
