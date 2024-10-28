import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import globals from 'globals'

export default createConfigForNuxt({
  features: {
    nuxt: false,
    stylistic: {
      arrowParens: true,
      commaDangle: "always-multiline",
      indent: 2,
      quotes: "double",
      semi: true,
    }
  }
}).prepend({
  ignores: ["dist/**", "vendor/**"],
  languageOptions: {
    globals: { ...globals.browser }
  }
});
