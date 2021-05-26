<template>
  <div>
    <h1 v-html="chapterTitle" class="mb-5 text-white font-poppins font-semibold text-xl capitalize">
      
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
        <div v-for="(items, index) in chapterImageList" :key="index">
          <img :src="items.chapter_image_link">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LoadingCard from "@/components/LoadingCard.vue";
  import Service from "@/services/Services.js";

  export default {
    props: {
      chapter: Object,
    },
    components: {
      LoadingCard,
    },
    computed: {
      chapterTitle() { return this.chapter.replace(/\W/g, " ") },
      chapterImageList() { return this.chapterImage },
    },
    data() {
      return {
        chapterImage: [],
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
      async fetchData() {
        let chapter = this.chapter;

        Service.getMangaChapter(chapter)
          .then((response) => {
            this.chapterImage = response.data.chapter_image;
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
