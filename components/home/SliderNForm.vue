<template>
    <div>
        <v-row no-gutters>
            <v-col lg="9" md="6" sm="12" xs="12">
                <v-carousel cycle height="897px" hide-delimiter-background show-arrows="hover" color="white">
                    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide" cover> </v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col lg="3" md="6" sm="12" xs="12">
                <v-sheet color="primary" height="100%">
                    <div class="h-100">
                        <div class="w-100 pa-10">
                            <div class="mt-11 text-center">
                                <nuxt-link to="/apply">
                                    <v-btn color="error" variant="flat" :elevation="0" rounded="xl"> apply now </v-btn>
                                </nuxt-link>
                            </div>
                            <v-divider class="my-5"><span class="text-white text-center">OR</span></v-divider>
                            <h2 class="text-white">Check your eVisa status</h2>
                            <v-form @submit.stop="">
                                <v-text-field
                                    variant="solo"
                                    density="compact"
                                    rounded="xl"
                                    placeholder="Enter Application ID"
                                    :hint="false"
                                ></v-text-field>
                                <v-text-field
                                    variant="solo"
                                    density="compact"
                                    rounded="xl"
                                    placeholder="Enter Passport Number"
                                    :hint="false"
                                ></v-text-field>
                                <div class="d-flex justify-space-between bg-white rounded-xl mb-5 w-50">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Captcha.jpg"
                                        alt="captcha"
                                        width="130"
                                        height="45"
                                        class="ms-5 rounded-xl"
                                    />
                                    <v-btn icon="mdi-reload" variant="flat"> </v-btn>
                                </div>
                                <v-text-field
                                    variant="solo"
                                    density="compact"
                                    rounded="xl"
                                    placeholder="Please type a characters abover"
                                    :hint="false"
                                ></v-text-field>
                                <v-btn type="submit" color="warning" variant="flat" :elevation="0" rounded="xl">
                                    check status
                                </v-btn>
                            </v-form>
                        </div>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'SliderNForm',
});
</script>
<script setup lang="ts">
const slides = [
    'assets/images/Aws-04.jpg',
    'assets/images/Aws-01.jpg',
    'assets/images/Aws-02.jpg',
    'assets/images/Aws-03.jpg',
];
</script>
