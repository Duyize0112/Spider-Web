 <script setup>
  import Carousel from './components/Carousel.vue'
  import list from './components/list.vue'
  import menu from './components/menu.vue'
</script>

<template>
    <main>
    <Carousel/>
    <list/>
    <menu/>
</main>
    <router-view/>
</template>

<style scoped>

</style>