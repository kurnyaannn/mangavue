<template>
  <div>
    <h1 class="text-white font-poppins font-bold text-xl mb-5">
      Search result for <span class="underline">{{ query }}</span>
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
        <div class="grid grid-cols-2 gap-4">
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
  import Service from "@/services/Services.js";

  export default {
    props: {
      query: Object,
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
        let query = this.query;
        this.loading = true;

        Service.getMangaSearch(query)
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
    created() {
      this.fetchData();
    },
  };
</script>
