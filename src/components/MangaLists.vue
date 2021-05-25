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
        <div class="grid grid-cols-2 gap-4">
          <LoadingCard />
          <LoadingCard />
        </div>
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
    </div>
  </div>
</template>

<script>
  import LoadingCard from "@/components/LoadingCard.vue";
  import MangaCard from "@/components/MangaCard.vue";
  import Service from "@/services/Services.js";

  export default {
    components: {
      LoadingCard,
      MangaCard,
    },
    data() {
      return {
        mangas: [],
        loading: true,
        error: false,
      };
    },
    mounted() {
      Service.getMangas()
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
