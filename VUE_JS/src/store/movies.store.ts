import type { Movie } from "@/model/movie.model";
import { defineStore } from "pinia";
import HTTP from "@/api/client-http";

export const useMoviesStores = defineStore('movie',{
   state: () => ({
      listMovies: [] as Movie[],
   }),
   actions:{
       async getMovies(search: string = 'movies') {
            const response = await HTTP.get('', {
                params: {
                    s: search,
                }
            })
            this.listMovies = response.data.Search;
            
        }
   }
});