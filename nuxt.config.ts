// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            BASE_API_URL: process.env.NUXT_PUBLIC_API_URL
        }
    }
})
