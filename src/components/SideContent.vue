<template>
  <div class="bg-secondary h-full px-6 pb-4">
    <div class="pb-4">
      <div class="flex justify-center items-center text-center text-white">
        <a
          v-for="project in projectDetails"
          :key="project"
          :href="project.url"
          class="flex flex-row w-full bg-teriary justify-center items-center px-2 py-2 rounded-md font-cinzel font-bold transition ease-in-out duration-300 transform hover:-translate-y-1 hover:bg-purple">
          <BaseIcon :name="project.icon"/>
          <span
            v-html="project.name"
            class="ml-3 font-cinzel font-bold text-xl"
          ></span>
        </a>
      </div>
    </div>
    <div class="py-4 mb-3">
      <h1 class="font-poppins font-bold text-white text-xl px-3 mb-3">
        Author
      </h1>
      <div class="flex flex-row justify-between text-white py-2 px-3">
        <a
          v-for="detail in authorDetails"
          :key="detail"
          :href="detail.url"
          target="_blank"
          class=" flex flex-col items-center justify-center w-8 h-8 bg-teriary rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-purple">
          <BaseIcon :name="detail.icon" />
        </a>
      </div>
    </div>
    <div class="rounded-md py-4 mb-3 border-2 border-gray-500">
      <h1 class="font-poppins font-bold text-white text-xl px-3 mb-3">
        Credits
      </h1>
      <div class="flex flex-row justify-between text-white py-2 px-3">
        <div
          v-for="credit in credits"
          :key="credit"
          class="flex flex-col justify-center items-center"
        >
          <a
            :href="credit.url"
            target="_blank"
            class="flex flex-col items-center justify-center w-8 h-8 rounded-full bg-teriary transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-purple">
            <BaseIcon :name="credit.icon" />
          </a>
          <span v-html="credit.name" class="font-ptserif font-bold"></span>
        </div>
      </div>
    </div>

    <!-- Error -->
    <ErrorMsg v-if="error" />

    <!-- Loading -->
    <div v-else class="bg-teriary rounded-md py-4">
      <div v-if="loading" class="font-ptserif font-bold text-center text-white">
        Loading Data...
      </div>

      <!-- Retrieve Successfull -->
      <div v-else>
        <h1 class="font-poppins font-bold text-white text-xl px-3 mb-3">
          Genres
        </h1>
        <div class="grid grid-cols-6 font-ptserif text-white py-2 px-3">
          <router-link
            v-for="(items, index) in genres"
            :key="index"
            :genre="items"
            :to="{ name: 'manga-genre', params: { genre: items.endpoint } }"
            class="col-span-3 rounded-sm px-1 transition duration-300 ease-in-out hover:bg-purple">
            <span v-html="items.genre_name" class=""></span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Service from "@/services/Services.js";

  export default {
    data() {
      return {
        mangaDetails: [],
        genres: [],
        authorDetails: [
          { icon: "globe", url: "https://kurnyaannn.github.io" },
          { icon: "linkedin", url: "https://linkedin.com/in/kurnyaannn" },
          { icon: "github", url: "https://github.com/kurnyaannn" },
          { icon: "facebook", url: "https://facebook.com/y21kurnia" },
          { icon: "instagram", url: "https://instagram.com/kurnyaannn" },
        ],
        credits: [
          {
            name: "API",
            icon: "share-2",
            url: "https://github.com/febryardiansyah/manga-api",
          },
          { name: "Manga", icon: "book", url: "https://komiku.id/" },
          { name: "Icons", icon: "feather", url: "https://feathericons.com/" },
          {
            name: "Design",
            icon: "layout",
            url: "https://dribbble.com/shots/15298655-Vanti",
          },
        ],
        projectDetails: [
          {
            name: "MangaVUE",
            icon: "github",
            url: "https://github.com/kurnyaannn/mangavue",
          },
        ],
        loading: true,
        error: false,
      };
    },
    mounted() {
      Service.getGenreLists()
        .then((response) => {
          this.genres = response.data.list_genre;
        })
        .catch((error) => {
          console.log("sorry there was an error " + error);
          this.error = true;
        })
        .finally(() => (this.loading = false));
    },
  };
</script>
