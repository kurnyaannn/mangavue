<template>
  <div>
    <h1 class="text-white font-poppins font-semibold text-xl mb-5">
      Most Popular Manga
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
      <div class="flex flex-col justify-center items-center mt-6">
        <div class="flex flex-row mx-auto px-2 font-poppins font-semibold text-white">
          <button
            @click="previousPage"
            :disabled="page <= 1"
            class="rounded-l-md px-3 transition duration-300 ease-in-out hover:bg-purple focus:outline-none"
            :class="[page <= 1 ? 'bg-gray-700' : 'bg-teriary hover:bg-purple']">
            <Icon name="arrow-left" />
          </button>
          <div class="text-center bg-main w-10 py-2 px-3 "> {{ page }} </div>
          <button @click="nextPage" class="bg-teriary rounded-r-md px-3 transition duration-300 ease-in-out hover:bg-purple focus:outline-none">
            <Icon name="arrow-right" />
          </button>
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
        page: 1,
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
      nextPage() {
        this.page += 1;
      },
      previousPage() {
        this.page -= 1;
      },
      async fetchData() {
        let popularity = this.popularity;
        let page = this.page;
        this.loading = true;

        Service.getMangaPopular(popularity, page)
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
