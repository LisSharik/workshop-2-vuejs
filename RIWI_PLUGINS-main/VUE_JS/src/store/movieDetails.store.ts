import type { MovieDetails } from "@/model/movieDetails.model";
import { defineStore } from "pinia";
import HTTP from "@/api/client-http";

export const useMovieDetailsStores = defineStore('movieDetails',{
    state: () => ({
        movieDetails:<MovieDetails>{}
    }),
    actions:{
        async getMovieDetails(movieId: string) {
            const response = await HTTP.get('', {
                params: {
                    i: movieId,
                }
            });
            this.movieDetails = response.data;
            console.log(response)
        }
    }
})


