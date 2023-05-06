<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" temporary location="right" width="400">
            <v-list density="compact">
                <v-list-item v-for="(item, idx) in menuItems" :key="idx" :to="item.path" active-color="primary">
                    <v-list-item-title> {{ item.title }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-btn prepend-icon="mdi-translate" @click="switchLang()" variant="tonal" rounded="xl">{{
                        lang
                    }}</v-btn>
                </v-list-item>
            </v-list>
            <div class="close-box">
                <v-btn class="mx-auto" icon="mdi-close" variant="text" @click="drawer = !drawer"></v-btn>
            </div>
        </v-navigation-drawer>

        <!-- TODO: make nav or toolbar or appbar to fixed top -->
        <v-toolbar fixed class="bg-white b-shadow">
            <v-toolbar-title>
                <nuxt-link to="/" style="cursor: pointer">
                    <aside class="navbar-evisa-logo">
                        <div class="e-logo"></div>
                    </aside>
                </nuxt-link>
            </v-toolbar-title>
            <v-toolbar-items class="hidable align-items-center">
                <v-btn flat to="/" variant="text" class="mx-2"> Home </v-btn>
                <v-menu open-on-hover>
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" v-bind="props"> Apply </v-btn>
                    </template>
                    <v-list>
                        <v-list-item to="/apply">
                            <v-list-item-title>Apply</v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/checkstatus">
                            <v-list-item-title>Status Enquiry</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-btn
                    flat
                    v-for="(item, idx) in menuItems"
                    :key="idx"
                    :to="item.path"
                    variant="text"
                    class="mx-2"
                    active-color="primary"
                >
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <div class="me-5">
                <v-btn
                    prepend-icon="mdi-translate"
                    @click="switchLang()"
                    class="hidable"
                    rounded="xl"
                    variant="tonal"
                    >{{ lang }}</v-btn
                >
                <span class="menu-btn">
                    <v-btn icon="mdi-menu" @click="drawer = !drawer"> </v-btn>
                </span>
            </div>
        </v-toolbar>

        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const drawer = ref(false);
const menuItems = [
    { title: 'eVisa Fee', path: '/fee' },
    { title: 'Information', path: '/info' },
    { title: 'FAQ', path: '/faq' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
];

const lang = ref<'en' | '中文'>('en');

const switchLang = () => {
    lang.value = lang.value === 'en' ? '中文' : 'en';
    localStorage.setItem('language', lang.value);
};
</script>

<style scoped>
.navbar-evisa-logo {
    position: fixed;
    top: -83px;
    left: 0;
    z-index: 9999;
    background-repeat: no-repeat;
    background-image: url(assets/images/navbar-logo2.png);
    background-size: contain;
    background-position: 0 84px;
    width: 255px;
    height: 255px;
}
@media (max-width: 1199px) {
    .navbar-evisa-logo {
        width: 200px;
        height: 200px;
        top: -42px;
        left: -4px;
        background-position: -20px 53px;
    }
}

@media (min-width: 992px) {
    .e-logo {
        margin-left: 25%;
        height: 70%;
        width: 40%;
        cursor: pointer;
    }
}
@media (max-width: 992px) {
    .e-logo {
        margin-left: 13%;
        height: 70%;
        width: 40%;
        cursor: pointer;
    }
}

@media (max-width: 900px) {
    .hidable {
        display: none;
    }
}

@media (min-width: 900px) {
    .menu-btn {
        display: none;
    }
}

.b-shadow {
    box-shadow: 0 4px 2px -2px #eeeeee;
}

.close-box {
    bottom: 0;
    display: block;
    position: absolute;
}
</style>
