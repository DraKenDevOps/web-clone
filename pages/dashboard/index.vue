<template>
    <div>
        <h1>Dashboard</h1>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'default',
    middleware: 'auth',
});
</script>

<style scoped></style>
