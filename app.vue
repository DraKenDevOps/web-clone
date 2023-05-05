<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
<script setup lang="ts">
useHead({
    title: 'Lao eVisa',
    meta: [
        {
            name: 'description',
            content:
                'Lao eVisa or Lao Visa Online is an Electronic Travel Authorization to enter Laos for tourism. Get your Laos Visa Now!',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'INDEX, FOLLOW' },
        { name: 'author', content: 'Consular Department - Ministry of Foreign Affairs LAO PDR' },
        {
            name: 'keywords',
            content:
                'lao government e visa, official lao evisa,lao evisa, visa laos,laos e visa, e visa laos, evisa laos, e-visa laos, lao online visa, lao official online visa, lao visa, visa lao',
        },
        { name: 'date', content: '2019-07-09' },
        //   { httpEquiv: 'Content-Type', content: 'text/html' },
        //   { httpEquiv: 'Content-Language', content: 'en' },
        { property: 'og:title', content: 'Lao Visa Online | Lao eVisa Authorization Application' },
        { property: 'og:type', content: 'Service' },
        { charset: 'UTF-8' },
    ],
});
</script>
