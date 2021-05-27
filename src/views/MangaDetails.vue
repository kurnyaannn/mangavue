<template>
  <div>
    <!-- Error -->
    <ErrorMsg v-if="error" />

    <!-- Loading -->
    <div v-else class="">
      <div v-if="loading">
        <LoadingDetails />
      </div>

      <!-- Retrieve Successfull -->
      <div v-else>
        <h1 v-html="title" class="font-poppins font-semibold text-white text-2xl mb-3"></h1>
        <div class="flex flex-col lg:grid lg:grid-cols-12 lg:gap-4">
          <div class="md:col-span-12 lg:col-start-1 lg:col-span-3">
            <div class="flex flex-col md:flex-row lg:flex-col font-ptserif">
              <img :src="thumb" :alt="title" class="w-full mb-1 md:pr-4 lg:pr-0" />
              <div class="flex flex-col text-white w-full">
                <div class="my-2 md:mt-0 lg:mt-2">
                  <h1 class="-mb-1 text-xs font-poppins font-semibold">Author</h1>
                  <span v-html="author"></span>
                </div>
                <div class="my-2">
                  <h1 class="-mb-1 text-xs font-poppins font-semibold">Type</h1>
                  <span v-html="type"></span>
                </div>
                <div class="my-2">
                  <h1 class="-mb-1 text-xs font-poppins font-semibold">Status</h1>
                  <span v-html="status"></span>
                </div>
                <div class="my-2">
                  <h1 class="-mb-1 text-xs font-poppins font-semibold">Genre</h1>
                  <span
                    v-for="(items, index) in genre"
                    :key="index">
                    {{ items.genre_name }},
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="my-2 md:my-0 lg:col-start-4 lg:col-span-12 text-white font-ptserif">
            <div class="mb-3">
              <div class="flex text-xs font-poppins font-semibold">
                <h1>Synopsis</h1>
                <div @click="toggle" class="ml-1 cursor-pointer">
                  [
                    <span v-if="showSynopsis" class="px-1 font-normal">Hide</span>
                    <span v-else class="px-1 font-normal">Show</span>
                  ]
                </div>
              </div>
              <p 
                v-html="synopsis" 
                :class="showSynopsis ? 'block' : 'hidden'"></p>
            </div>
            <div>
              <h1 class="text-xs font-poppins font-semibold mb-1">Chapter List</h1>
              <div class="ss-container w-full overflow-y-auto max-h-80 bg-secondary p-3 rounded-sm">
                <ul>
                  <li v-for="(items, index) in chapter" :key="index">
                    <router-link
                      :to="{ name: 'manga-chapter', params: { chapter: items.chapter_endpoint } }" exact
                      class="flex w-full py-1 px-2 rounded-sm hover:bg-purple">
                      {{ items.chapter_title }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Service from "@/services/services.js";

  export default {
    props: ["manga"],
    computed: {
      thumb() { return this.mangaDetails.thumb },
      title() { return this.mangaDetails.title },
      author() { return this.mangaDetails.author },
      status() { return this.mangaDetails.status },
      type() { return this.mangaDetails.type },
      genre() { return this.mangaDetails.genre_list },
      synopsis() { return this.mangaDetails.synopsis },
      chapter() { return this.mangaDetails.chapter },
    },
    data() {
      return {
        mangaDetails: [],
        loading: true,
        error: false,
        showSynopsis: false,
      };
    },
    watch: {
      manga: {
        handler: 'fetchData',
        deep: true,
        immediate: true
      },
    },
    methods: {
      toggle() {
        this.showSynopsis = this.showSynopsis ? false : true;
      },
      async fetchData() {
        let manga = this.manga;
        this.loading = true;

        Service.getMangaDetails(manga)
          .then((response) => {
            this.mangaDetails = response.data;
            console.log(this.mangaDetails);
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
      // let manga = this.manga;
      //   this.loading = true;

      //   Service.getMangaDetails(manga)
      //     .then((response) => {
      //       this.mangaDetails = response.data;
      //     })
      //     .catch((error) => {
      //       console.log("sorry there was an error " + error);
      //       this.error = true;
      //     })
      //     .finally(() => {
      //       if (this.mangaDetails != null) {
      //         this.loading = false;
      //       } else {
      //         this.loading = true;
      //       }
      //     });
    },
  };
</script>
