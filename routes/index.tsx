import Menu from "../components/menu.tsx";
import Me from "../components/me.tsx";
import Experience from "../components/experience.tsx";
import Projects from "../components/proyects.tsx";
import Education from "../components/education.tsx";
import Skills from "../components/skills.tsx";
import Footer from "../components/footer.tsx";

import type { State } from "../utils/types.ts";

import type { RouteContext } from "$fresh/server.ts";

export default function Home(ctx: RouteContext) {
  const lang = ctx.state.lang as State["lang"];
  const translation = ctx.state.translation as State["translation"];
  return (
    <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
      <Menu lang={lang} />
      <Me translation={translation?.me} />
      <Experience translation={translation?.experience} />
      <Projects translation={translation?.projects} />
      <Education translation={translation?.education} />
      <Skills translation={translation?.skills} />
      <Footer />
    </div>
  );
}
