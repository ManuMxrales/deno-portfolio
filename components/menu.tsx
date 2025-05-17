import Language from "../islands/language.tsx";
import type { State } from "../utils/types.ts";

export default function Menu(data: { lang: State["lang"] }) {
  return (
    <div class="
      flex flex-col gap-2  items-end mt-0.8 lg:justify-start lg:items-center lg:flex-row lg:mt-0 lg:mb-2 md:justify-end md:items-center md:-mb-4 md:gap-1 md:mt-0
      ">
      <Language lang={data.lang} />
      <a
        class="text-gray-dark font-bold text-md cursor-pointer group hover:text-blue-600 transition-colors dark:text-neutral-50"
        target="_blank"
        href="https://www.linkedin.com/in/francisco-manuel-sanchez/"
      >
        LinkedIn
      </a>
    </div>
  );
}
