<template>
  <div>
    <div class="bg-gray-700 rounded-sm py-4 mb-4">
      <h1 class="font-ptserif font-bold text-white text-xl px-3 mb-3">About the Project</h1>
      <div class="flex flex-col text-white py-2">
        <p class="px-3 text-center">
        	<span class="font-cinzel font-bold">MangaVUE</span> is an open source project built using VueJS and TailwindCSS. This project is just for educational purposes only.
        </p>
        <div class="font-bold text-center text-sm text-black p-2 mx-4 mt-3 bg-ternary rounded-sm">
        	SO I'M BEGGING YOU TO NOT MAKE THIS PROJECT FOR COMMERCIAL USE
        </div>
        <div class="flex flex-col justify-center items-center mt-3 px-3 text-center">
        	<p>
        		You can find more details about this project by visiting the project repo linked below. And if you like this project, a git star for this project would be really appreciated.
        	</p>
        	<a
        		v-for="project in projectDetails"
        		:key="project"
        		:href="project.url"
        		class="flex flex-row justify-center items-center mt-3 px-2 py-2 rounded-sm font-cinzel font-bold transition ease-in-out duration-300 bg-secondary hover:bg-ternary hover:text-secondary">
        		<BaseIcon :name="project.icon" />
        		<span v-html="project.name" class="ml-2"></span>
        	</a>
        </div>
      </div>
    </div>
    <div class="bg-gray-700 rounded-sm py-4 mb-4">
      <h1 class="font-ptserif font-bold text-white text-xl px-3 mb-3">About the Author</h1>
      <div class="flex flex-row justify-around text-white py-2">
        <a 
        	v-for="detail in authorDetails"
        	:key="detail" 
        	:href="detail.url"
        	target="_blank" 
        	class="flex flex-col items-center justify-center w-8 h-8 rounded-full transition duration-300 ease-in-out hover:bg-ternary hover:text-secondary">
          <BaseIcon :name="detail.icon" />
        </a>
      </div>
    </div>
    <div class="bg-gray-700 rounded-sm py-4 mb-4">
      <h1 class="font-ptserif font-bold text-white text-xl px-3 mb-3">Credits</h1>
      <div class="flex flex-row justify-around text-white py-2">
      	<div v-for="credit in credits" :key="credit" class="flex flex-col justify-center items-center">
      		<a 
	        	:href="credit.url"
	        	target="_blank" 
	        	class="flex flex-col items-center justify-center w-8 h-8 rounded-full transition duration-300 ease-in-out hover:bg-ternary hover:text-secondary">
	          <BaseIcon :name="credit.icon" />
	        </a>
        	<span v-html="credit.name" class="font-bold"></span>
      	</div>
      </div>
    </div>
    <div class="bg-gray-700 rounded-sm py-4 mb-4">
      <h1 class="font-ptserif font-bold text-white text-xl px-3 mb-3">Genres</h1>
      <div class="grid grid-cols-6 text-white py-2 px-3">
      		<router-link 
      			v-for="(items, index) in genres"
      			:key="index"
      			:genre="items"
      			:to="{ name: 'manga-genre', params: { genre: items.endpoint } }" 
	        	class="col-span-3 rounded-sm px-1 transition duration-300 ease-in-out hover:bg-ternary hover:text-secondary">
	        	<span v-html="items.genre_name" class=""></span>
	        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
	import axios from "axios";

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
					{ name: "API", icon: "share-2", url: "https://github.com/febryardiansyah/manga-api" },
					{ name: "Manga", icon: "book", url: "https://komiku.id/" },
					{ name: "Icons", icon: "feather", url: "https://feathericons.com/" },
				],
				projectDetails: [
					{ name: "MangaVUE", icon: "github", url: "https://github.com/kurnyaannn/mangavue" },
				]
			};
		},
		created() {
	    axios
	      .get("https://mangamint.kaedenoki.net/api/genres")
	      .then((response) => {
	        this.genres = response.data.list_genre;
	      })
	      .catch((error) => {
	        console.log("sorry there was an error " + error.response);
	      });
	  },
	}
</script>
