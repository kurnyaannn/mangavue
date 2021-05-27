import Vue from "vue";
import VueRouter from "vue-router";
import MangaDetails from "../views/MangaDetails.vue";
import MangaChapter from "../views/MangaChapter.vue";
import MangaLists from "../views/MangaLists.vue";
import MangaRecommended from "../views/MangaRecommended.vue";
import MangaPopular from "../views/MangaPopular.vue";
import MangaGenre from "../views/MangaGenre.vue";
import MangaSearch from "../views/MangaSearch.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "manga-lists",
    component: MangaLists,
  },
  {
    path: "/:popularity",
    name: "manga-popular",
    component: MangaPopular,
    props: true,
  },
  {
    path: "/recommended",
    name: "manga-recommended",
    component: MangaRecommended,
  },
  {
    path: "/manga/:manga",
    name: "manga-details",
    component: MangaDetails,
    props: true,
  },
  {
    path: "/manga/:chapter",
    name: "manga-chapter",
    component: MangaChapter,
    props: true,
  },
  {
    path: "/genre/:genre",
    name: "manga-genre",
    component: MangaGenre,
    props: true,
  },
  {
    path: "/search/:query",
    name: "manga-search",
    component: MangaSearch,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // linkActiveClass: "bg-purple",
});

export default router;
