<template>
  <div>
    <h1 class="text-white font-poppins font-semibold text-xl mb-5">
      Latest & Newest Manga
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
          <MangaCard
            v-for="(items, index) in mangas"
            :key="index"
            :manga="items"/>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center mt-6">
        <div class="flex flex-row mx-auto px-2 font-poppins font-semibold text-white">
          <button @click="previousPage" :disabled="page <= 1" class="bg-teriary rounded-l-md px-3 transition duration-300 ease-in-out hover:bg-purple focus:outline-none">
            <Icon name="arrow-left" />
          </button>
          <div class="text-center bg-main w-10 py-2 px-3 "> {{ page }} </div>
          <router-link 
            :to="{ name: 'manga-page', params: { page: pageNext } }"
            @click="nextPage" class="bg-teriary rounded-r-md px-3 transition duration-300 ease-in-out hover:bg-purple focus:outline-none">
            <Icon name="arrow-right" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LoadingCard from "@/components/LoadingCard.vue";
  import MangaCard from "@/components/MangaCard.vue";
  import Service from "@/services/services.js";

  export default {
  	props: {
  		page: Object
  	},
    components: {
      LoadingCard,
      MangaCard,
    },
    data() {
      return {
        mangas: [],
        currentPage: this.page++,
        pageNext: this.page + 1,
        loading: true,
        error: false,
      };
    },
    methods: {
      nextPage() {
        this.page += 1;
      },
      previousPage() {
        this.page -= 1;
      }
    },
    mounted() {
      let page = this.pageNext;

      Service.getMangas(page)
        .then((response) => {
          this.mangas = response.data.manga_list;
          console.log(this.mangas);
        })
        .catch((error) => {
          console.log("sorry there was an error " + error);
          this.error = true;
        })
        .finally(() => (this.loading = false));
    },
  };
</script>
