import type { State } from "../utils/types.ts";

const Language = (data: { lang: State["lang"] }) => {
  return (
    <button
      class="h-4 w-4 text-gray-dark font-bold text-md bg-slate-50 rounded-xl p-0.5 cursor-pointer group border-2 transition-colors border-transparent hover:border-gray-light dark:bg-black dark:text-neutral-50"
      type="button"
      onClick={() => {
        if (data.lang === "en") {
          document.cookie = "lang=es";
        } else {
          document.cookie = "lang=en";
        }
        location.reload();
      }}
    >
      {data.lang === "en" ? "EN" : "ES"}
    </button>
  );
};
export default Language;
