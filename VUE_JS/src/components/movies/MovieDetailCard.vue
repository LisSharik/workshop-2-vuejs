<template>
    <div class="card w-100">
        <div class="info w-80">
            <img  :src="props.storeMovieDetails.Poster" :alt="'image ' + props.storeMovieDetails.Title">
            
            
            <div class="info-content w-55">
                <h1> {{ props.storeMovieDetails.Title }}</h1>
                <div class="details d-middle">
                    <p>{{ props.storeMovieDetails.Year }}</p>
                   
                    <div class="metascore d-middle">
                        <i class='bx bx-trophy'></i>
                        <p>{{ props.storeMovieDetails.Metascore }} / 100</p>
                    </div>
                    <p>{{ props.storeMovieDetails.Genre }}</p>
                    <p>{{ props.storeMovieDetails.Runtime }}</p>
                </div>
                <h3>Plot</h3>
               <p>{{ props.storeMovieDetails.Plot }}</p>
               <h3>Ratings</h3>
               <div class="ratings d-middle">
                    <div class="rating d-middle" v-for="rating in props.storeMovieDetails.Ratings" :key="rating.Source">
                        <p>{{ rating.Source }}</p>
                        <p>{{ rating.Value }}</p>
                         
                    </div>
               </div>
               <h3>Actors</h3>
               <p>{{ props.storeMovieDetails.Actors }}</p>
               <h3>Director</h3>
               <p>{{ props.storeMovieDetails.Director }}</p>
               <h3>More Details</h3>
               <p><strong>Writer:</strong> {{ props.storeMovieDetails.Writer }}</p>
               <p><strong>Language:</strong> {{ props.storeMovieDetails.Language }}</p>
               <p><strong>Country:</strong> {{ props.storeMovieDetails.Country }}</p>
               <p><strong>Awards:</strong> {{ props.storeMovieDetails.Awards }}</p>
              

            </div>
            
                   
        </div>

        <div class="background w-100 h-100"></div>

    </div>

</template>

<script setup lang="ts">

import { defineProps } from "vue"
import type { MovieDetails } from "@/model/movieDetails.model";

interface IProps {
    storeMovieDetails: MovieDetails;
}

const props = defineProps<IProps>();

</script>

<style lang="scss" scoped>

.card{
   position: relative;
   display: flex;
   justify-content: center;
   align-items: flex-start;
   margin-bottom: 50px;
   p{
    font-weight: 300;
   }
   img{
        width: 300px;
        height: 500px;
   }
   .background {
       position: fixed;
       top: 0;
       left: 0;
       background-image: url('@/assets/images/banner-bg.png');
       background-size: cover;
       filter: blur(2px);
       filter: brightness(.8);
       background-repeat: no-repeat;
       z-index: -1;
   }

   .info {
        background-color: #222222c7;
        margin-top: 70px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 50px;
        gap: 50px;
        border-radius: 20px;
        border: 3px solid $primary;
        color: $white;

        .info-content{
            display: flex;
            flex-direction: column;
            gap: 15px;
            .details{
                justify-content: space-between;
                .metascore{
                    gap: 5px;
                }
            }
           
            strong{
                font-weight: 500;
            }

        }
        .ratings{
            justify-content: space-between;
            .rating{
                flex-direction: column;
            }
        }

   }
}

@media only screen and (max-width: 768px) {
    .card{
        .info{
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 0;
            padding: 50px 10px;

            .info-content{
                width: 90% !important;
                h1{
                    text-align: center;
                }
             
            }
        }

    }
}

</style>

