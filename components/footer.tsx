export default function Footer() {
  return (
    <footer class="col-span-2 lg:col-span-1 flex gap-1 mt-10 justify-between items-center">
      <div class="flex flex-col items-center gap-2">
        <a href="https://fresh.deno.dev" target="_blank">
          <img
            loading="lazy"
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge-dark.svg"
            alt="Made with Fresh"
          />
        </a>
      </div>
      <p class="text-xs text-gray-500">
        &copy; 2024 ManuMxrales. All rights reserved.
      </p>
      <a
        class="relative w-4 dark:invert"
        width="16"
        height="16"
        href="https://github.com/manumxrales"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img
          class="w-full"
          loading="lazy"
          src="vectors/github-mark.svg"
          alt="Logo von GitHub"
        />
      </a>
    </footer>
  );
}
