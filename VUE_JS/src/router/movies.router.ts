import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: () => import("@/page/Home.vue"),
    },
    {
        path: "/movies/:id",
        name: "movie-details",
        component: () => import("@/page/MovieDetails.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;