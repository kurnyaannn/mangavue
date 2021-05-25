<template>
  <router-link
    :to="{ name: 'manga-details', params: { manga: manga.endpoint } }"
    class="w-full">
    <div
      class=" flex h-full max-h-50 bg-secondary text-white hover:text-green shadow-md rounded-md transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <img
        :src="thumb"
        :alt="title"
        class="rounded-l-md w-52 h-36 object-cover"/>
      <div class="px-3 pt-2">
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
    data() {
      return {
        thumb: this.manga.thumb,
        title: this.manga.title,
      };
    },
  };
</script>
