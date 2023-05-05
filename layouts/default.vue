<template>
    <v-app>
        <v-navigation-drawer v-model="sidebar.value" app location="right">
            <v-list>
                <v-list-tile v-for="(item, idx) in menuItems" :key="idx" :to="item.path">
                    <v-list-tile-content>{{ item.title }}</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar app class="bg-white b-shadow">
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">
                    <aside class="navbar-evisa-logo">
                        <div class="e-logo"></div>
                    </aside>
                </router-link>
            </v-toolbar-title>
            <v-toolbar-items class="hidden-sm-only align-items-center">
                <v-btn flat to="/" variant="text" class="mx-2 h-75"> Home </v-btn>
                <v-menu open-on-hover>
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" v-bind="props" class="h-75"> Apply </v-btn>
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
                    class="mx-2 h-75"
                >
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <span class="hidden-sm-and-up">
                <v-toolbar-side-icon @click="sidebar.value = !sidebar.value"> </v-toolbar-side-icon>
            </span>
        </v-toolbar>

        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const sidebar = ref(false);
const menuItems = [
    { title: 'eVisa Fee', path: '/fee' },
    { title: 'Information', path: '/info' },
    { title: 'FAQ', path: '/faq' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
];
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

.b-shadow {
    box-shadow: 0 4px 2px -2px #eeeeee;
}
</style>
