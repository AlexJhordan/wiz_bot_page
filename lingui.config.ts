import { defineConfig } from "@lingui/cli"
import { languages } from "./src/const/languages"

export default defineConfig({
  sourceLocale: "en",
  locales: languages,
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
})
