import Language from "../islands/language.tsx";
import DownloadCV from "../islands/download_cv.tsx";

import type { State } from "../utils/types.ts";
import type { Translation } from "../utils/types.ts";

export default function Menu(data: { lang: State["lang"], translation: Translation["me"] }) {
  return (
    <div class="
      flex flex-col gap-2 items-center mt-0.8 lg:justify-start lg:items-center lg:flex-row lg:mt-0 lg:mb-2 md:justify-between md:items-center md:gap-1 md:mt-0 md:flex-row
      ">
      <Language lang={data.lang} />
      <DownloadCV label={data.translation?.download_cv ?? "Download CV"} />
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
