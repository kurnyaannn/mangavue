<template>
  <div class="bg-gray-700 rounded-sm p-4">
    <h1 class="text-white font-ptserif font-bold text-xl mb-5">{{ genre }} Manga</h1>
    <div class="grid grid-cols-2 gap-4">
      <MangaGenreCard v-for="(items, index) in mangas" :key="index" :manga="items"/>
    </div>
  </div>
</template>

<script>
import MangaGenreCard from "@/components/MangaGenreCard.vue";
import axios from "axios";

export default {
  props: {
    genre: Object,
  },
  components: {
    MangaGenreCard,
  },
  data() {
    return {
      mangas: [],
    };
  },
  created() {
    let genre = this.genre;

    axios
      .get(`https://mangamint.kaedenoki.net/api/genres/${genre}/1`)
      .then((response) => {
        this.mangas = response.data.manga_list;
      })
      .catch((error) => {
        console.log("sorry there was an error " + error.response);
      });
  },
};
</script>
