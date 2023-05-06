import type { ThemeDefinition } from 'vuetify';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const defaultTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#1B75BA',
        secondary: '#666666',
        error: '#EB3422',
        info: '#01A9AC',
        success: '#0AC282',
        warning: '#FFC107',
        grey: '#6C757D',
        light: '#F8F9FA',
        dark: '#343A40',
    },
};

export const palette = {
    primary: '#1B75BA',
    secondary: '#666666',
    error: '#EB3422',
    info: '#01A9AC',
    success: '#0AC282',
    warning: '#FFC107',
    grey: '#6C757D',
    light: '#F8F9FA',
    dark: '#343A40',
};

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        theme: {
            defaultTheme: 'defaultTheme',
            themes: {
                defaultTheme,
            },
        },
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi
            }
        }
    });
    nuxtApp.vueApp.use(vuetify);
});
