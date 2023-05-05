<template>
    <div>
        <v-row no-gutters>
            <v-col lg="9" sm="12" xs="12">
                <v-carousel cycle height="897px" hide-delimiter-background show-arrows="hover">
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                        <v-sheet :color="colors[i]" height="100%">
                            <div class="d-flex fill-height justify-center align-center">
                                <div class="text-h2">{{ slide }} Slide</div>
                            </div>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col lg="3" sm="12" xs="12">
                <v-sheet color="primary" height="100%">
                    <h1>form</h1>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
definePageMeta({
    layout: 'default',
});

const colors = ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'];
const slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
</script>
