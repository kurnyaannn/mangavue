<template>
  <div>
    <!-- Error -->
    <ErrorMsg v-if="error" />

    <!-- Loading -->
    <div v-else class="bg-gray-700 rounded-md py-4 pl-2 pr-6">
      <div v-if="loading" class="font-ptserif font-bold text-center text-white">
        Loading Data...
      </div>

      <!-- Retrieve Successfull -->
      <div v-else>
        <h1 class="font-ptserif font-bold text-white text-2xl px-3 mb-3">
          {{ mangaDetails.title }}
        </h1>
        <div class="grid grid-cols-12 gap-4 pl-3">
          <div class="col-start-1 col-span-3">
            <div class="flex flex-col font-ptserif">
              <img :src="mangaDetails.thumb" :alt="title" class="w-full" />
              <div class="flex flex-col text-white">
                <div class="my-1">
                  <h1 class="-mb-1 text-xs font-cinzel font-bold">Author</h1>
                  <span>{{ mangaDetails.author }}</span>
                </div>
                <div class="my-1">
                  <h1 class="-mb-1 text-xs font-cinzel font-bold">Type</h1>
                  <span>{{ mangaDetails.type }}</span>
                </div>
                <div class="my-1">
                  <h1 class="-mb-1 text-xs font-cinzel font-bold">Status</h1>
                  <span>{{ mangaDetails.status }}</span>
                </div>
                <div class="my-1">
                  <h1 class="-mb-1 text-xs font-cinzel font-bold">Genre</h1>
                  <span
                    v-for="(items, index) in mangaDetails.genre"
                    :key="index"
                    >Genre : {{ items }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-start-4 col-span-12 text-white font-ptserif">
            <h1 class="-mb-1 text-xs font-cinzel font-bold">Synopsis</h1>
            <p>{{ mangaDetails.synopsis }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Service from "@/services/Services.js";

  export default {
    props: ["manga"],
    data() {
      return {
        mangaDetails: [],
        loading: true,
        error: false,
        isCollapsed: false,
      };
    },
    methods: {
      toggle() {
        this.isCollapsed = this.isCollapsed ? false : true;
      },
    },
    mounted() {
      let manga = this.manga;

      Service.getMangaDetails(manga)
        .then((response) => {
          this.mangaDetails = response.data;
        })
        .catch((error) => {
          console.log("sorry there was an error " + error);
          this.error = true;
        })
        .finally(() => (this.loading = false));
    },
  };
</script>
