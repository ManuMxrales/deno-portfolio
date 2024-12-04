import type { FreshContext } from "$fresh/server.ts";

import es from "../utils/i18n/es.json" with { type: "json" };
import en from "../utils/i18n/en.json" with { type: "json" };

import SecurityHeaders from "../utils/securityHeaders.ts";
import type { State } from "../utils/types.ts";

export const handler = [
  async function setLanguage(req: Request, ctx: FreshContext<State>) {
    const cookie = req.headers.get("cookie");
    if (cookie?.includes("lang")) {
      ctx.state.lang = cookie.split("=")[1] as "en" | "es";
      ctx.state.translation = ctx.state.lang === "en" ? en : es;
      return await ctx.next();
    }
    ctx.state.lang = req.headers.get("accept-language")?.includes("es")
      ? "es"
      : "en";
    ctx.state.translation = ctx.state.lang === "en" ? en : es;
    const res = await ctx.next();
    res.headers.set("Set-Cookie", `lang=${ctx.state.lang}`);
    return res;
  },
  async function setSecurityHeaders(_req: Request, ctx: FreshContext<State>) {
    const resp = await ctx.next();
    SecurityHeaders.map((header) => {
      resp.headers.set(header.key, header.value);
    });
    return resp;
  },
];
