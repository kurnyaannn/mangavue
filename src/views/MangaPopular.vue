<template>
  <div>
    <!-- Error -->
    <ErrorMsg v-if="error" />

    <!-- Loading -->
    <div v-else class="bg-gray-700 rounded-sm p-4">
      <div v-if="loading" class="font-ptserif font-bold text-center text-white">
        Loading Data...
      </div>

      <!-- Retrieve Successfull -->
      <div v-else>
        <h1 class="text-white font-ptserif font-bold text-xl mb-5">
          Most Popular Manga
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
    popularity: Object,
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
    let popularity = this.popularity;

    Service.getMangaPopular(popularity)
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
