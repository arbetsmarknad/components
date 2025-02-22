import type { FC } from "react";
import { Container } from "./Container";

const links = [
  {
    href: "https://arbetsmarknad.codeberg.page/",
    text: "Arbetsmarknad",
  },
  {
    href: "https://arbetsmiljo.codeberg.page/",
    text: "Arbetsmiljö",
  },
  {
    href: "https://kollektivavtal.codeberg.page/",
    text: "Kollektivavtal",
  },
  {
    href: "https://lagstiftning.codeberg.page/",
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
                  href={`https://codeberg.org/${project}`}
                  className="text-link underline text-sm"
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
                <a href={link.href} className="text-link underline text-sm">
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
