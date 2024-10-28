import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

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
});
