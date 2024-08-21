<template>
  <BannerComponent />
  <MovieList />
</template>


<script setup lang="ts">
import BannerComponent from '@/components/banner/Banner.vue'
import MovieList from "@/components/movies/ListMovies.vue";
</script>


<style>
a {
  transition: all 0.1s ease-in-out;
  &:hover {
    color: royalblue;
  }
}
</style>