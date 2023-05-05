// import { defineNuxtConfig } from 'nuxt';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@vite-pwa/nuxt'],
    css: [
        'assets/css/global.css',
        'vuetify/lib/styles/main.css',
        /*'@mdi/font/css/materialdesignicons.min.css',*/ 'ant-design-vue/dist/antd.css',
    ],
    build: {
        transpile: ['vuetify'],
    },
    devtools: true,
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    runtimeConfig: {
        public: {
            BASE_API_URL: process.env.NUXT_PUBLIC_API_URL,
        },
    },
});
