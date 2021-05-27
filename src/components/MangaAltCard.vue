<template>
  <router-link
    :to="{ name: 'manga-details', params: { manga: manga.endpoint } }" exact
    class="w-full">
    <div
      class="flex flex-col md:flex-row h-full max-h-50 bg-secondary text-white hover:text-green shadow-md rounded-md transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <img
        :src="thumb"
        :alt="title"
        class="w-full rounded-t-md md:rounded-l-md md:rounded-t-none md:w-2/5 h-36 object-cover"/>
      <div class="p-3 md:pt-2 md:px-3">
        <h1 v-html="title" class="font-ptserif text-md mb-1"></h1>
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    props: {
      manga: Object,
    },
    computed: {
      thumb() { return this.manga.thumb },
      title() { return this.manga.title },
    },
  };
</script>
