<template>
  <div>
    <!-- Error -->
    <ErrorMsg v-if="error" />

    <!-- Loading -->
    <div v-else class="bg-gray-700 rounded-sm p-4">
      <div v-if="loading">
        <LoadingCard />
      </div>

      <!-- Retrieve Successfull -->
      <div v-else>
        <h1 class="text-white font-ptserif font-bold text-xl mb-5">
          {{ genre }} Manga
        </h1>
        <div class="grid grid-cols-2 gap-4">
          <MangaAltCard
            v-for="(items, index) in mangas"
            :key="index"
            :manga="items"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MangaAltCard from "@/components/MangaAltCard.vue";
import Service from "@/services/Services.js";

export default {
  props: {
    genre: Object,
  },
  components: {
    MangaAltCard,
  },
  data() {
    return {
      mangas: [],
      loading: true,
      error: false,
    };
  },
  mounted() {
    let genre = this.genre;

    Service.getMangaGenre(genre)
      .then((response) => {
        this.mangas = response.data.manga_list;
      })
      .catch((error) => {
        console.log("sorry there was an error " + error);
        this.error = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
