<template>
  <div class="bg-secondary h-full px-7 pb-4">
    <div class="relative text-gray-600 py-6 sticky top-0 z-50 bg-secondary">
      <input
        class="bg-black font-poppins text-white w-full h-10 px-5 pr-12 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-green transition ease-in-out duration-300"
        name="search"
        @focus="focus = true"
        @blur="focus = false"
        placeholder="Search..." />
      <button type="submit" class="absolute right-0 top-0 mt-9 mr-4">
        <svg
          class="h-4 w-4 fill-current transition ease-in-out duration-300"
          :class="[focus ? 'text-green' : 'text-white']"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
          viewBox="0 0 56.966 56.966" xml:space="preserve"
          style="enable-background: new 0 0 56.966 56.966" width="512px" height="512px">
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>
    <div class="mt-12 pb-4">
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
        <div class="grid grid-cols-6 gap-1 font-ptserif text-white py-2 px-3">
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
        focus: false,
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
