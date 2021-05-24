<template>
  <router-link :to="{ name: 'manga-details', params: { manga: manga.endpoint } }" class="w-full">
    <div
    	class="flex h-full max-h-50 bg-secondary text-white hover:text-ternary shadow-md rounded-md transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
    	<img :src="thumb" :alt="title" class="rounded-l-md w-52 h-36 object-cover">
    	<div class="absolute items-baseline l-0 m-2">
    		<div class="flex font-nunito font-semibold text-xs bg-gray-300 rounded-full px-2">
    			<BaseIcon name="clock" width="15" class="text-black"/>
    			<span v-html="updated_on" class="ml-0.5 mt-0.5 text-black"></span>
    		</div>
    	</div>
      <div class="px-3 pt-2">
      	<h1 v-html="title" class="font-ptserif text-md mb-1"></h1>
      	<span v-html="chapter" class="font-nunito text-white text-xs"></span>
      </div>
    </div>
  </router-link>
</template>

<script>
	export default {
		props: {
			manga: Object
		},
		data() {
			return {
				thumb: this.manga.thumb,
				title: this.manga.title,
				chapter: this.manga.chapter,
				updated_on: this.manga.updated_on + " lalu",
			};
		}
	}
</script>