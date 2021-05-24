import Vue from "vue";
import VueRouter from "vue-router";
import MangaLists from "../components/MangaLists.vue";
// import Contents from "../components/Contents.vue";
import MangaDetails from "../components/MangaDetails.vue";
import MangaGenre from "../views/MangaGenre.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "manga-lists",
    component: MangaLists,
  },
  {
    path: "/manga-details/:manga",
    name: "manga-details",
    component: MangaDetails,
    props: true,
  },
  {
    path: "/manga-genre/:genre",
    name: "manga-genre",
    component: MangaGenre,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
