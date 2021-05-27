<template>
  <div>
    <h1 class="text-white font-poppins font-semibold text-xl mb-5">
      Recommended Manga
    </h1>
    <!-- Error -->
    <ErrorMsg v-if="error" />

    <!-- Loading -->
    <div v-else>
      <div v-if="loading">
        <LoadingCard />
      </div>

      <!-- Retrieve Successfull -->
      <div v-else>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <MangaAltCard
            v-for="(items, index) in mangas"
            :key="index"
            :manga="items"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MangaAltCard from "@/components/MangaAltCard.vue";
  import Service from "@/services/services.js";

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
    watch: {
      page: {
        handler: 'fetchData',
        deep: true,
        immediate: true
      },
    },
    methods: {
      async fetchData() {
        let popularity = this.popularity;
        let page = this.page;
        this.loading = true;

        Service.getMangaRecommended(popularity, page)
          .then((response) => {
            this.mangas = response.data.manga_list;
            console.log(this.mangas);
          })
          .catch((error) => {
            console.log("sorry there was an error " + error);
            this.error = true;
          })
          .finally(() => (this.loading = false));
      }
    },
    mounted() {
      this.fetchData();
    },
  };
</script>
