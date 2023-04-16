// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ["stores/**", "utils/contracts/**"],
  },
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: [
      "defineStore",
      "storeToRefs",
      ["defineStore", "definePiniaStore"],
    ],
  },
});
