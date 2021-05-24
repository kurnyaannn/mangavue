<template>
  <div class="pl-5 pr-10">
    <h1 class="text-white font-ptserif font-bold text-3xl mb-5">Latest and Newest Manga</h1>
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <MangaCard v-for="(items, index) in mangas" :key="index" :manga="items"/>
    </div>
  </div>
</template>

<script>
import MangaCard from "@/components/MangaCard.vue";
import axios from "axios";

export default {
  components: {
    MangaCard,
  },
  data() {
    return {
      mangas: [],
    };
  },
  created() {
    axios
      .get("https://mangamint.kaedenoki.net/api/recommended")
      .then((response) => {
        this.mangas = response.data.manga_list;
      })
      .catch((error) => {
        console.log("sorry there was an error " + error.response);
      });
  },
};
</script>
