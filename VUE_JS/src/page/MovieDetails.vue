<template>
    <div class="movie-detail-container w-100">
        <router-link to="/">
            <i class='bx bx-chevron-left'></i>
        </router-link>

        <MovieDetailCard :store-movie-details="store.movieDetails"></MovieDetailCard>


    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useMovieDetailsStores } from "@/store/movieDetails.store";
import MovieDetailCard from "@/components/movies/MovieDetailCard.vue";
import { onMounted } from 'vue';



const route = useRoute();
const movieId = route.params.id as string;
console.log(movieId);

const store = useMovieDetailsStores();

onMounted(() => {
    console.log('movie detail mounted')
    fetchMovieDetails(movieId)
})

async function fetchMovieDetails(movieId: string) {
    await store.getMovieDetails(movieId);
}

</script>

<style lang="scss" scoped>
.movie-detail-container {
    position: relative;
    display: flex;
    flex-direction: column;

    h1 {
        color: $white;
        text-align: center;
        margin-top: 50px;
    }

    i {
        color: $white;
        font-size: 40px;
        left: 40px;
        top: 20px;
        border-radius: 50%;
        border: 2px solid $white;
        position: absolute;
        transition: all 0.2s ease-in-out;
        z-index: 10;

        &:hover {
            background: $white;
            color: #222;
        }

    }
    
}
</style>