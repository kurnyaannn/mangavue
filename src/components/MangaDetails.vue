<template>
	<div class="bg-gray-700 rounded-sm py-4 pl-2 pr-6">
		<h1 class="font-ptserif font-bold text-white text-xl px-3 mb-3">{{mangaDetails.title}}</h1>
		<div class="grid grid-cols-12 gap-4">
	  	<div class="col-start-1 col-span-3 pl-3">
	  		<img :src="mangaDetails.thumb" :alt="title" class="">
	  	</div>
	  	<div class="col-start-4 col-span-12">
	  		<p class="text-white font-ptserif text-justify">{{mangaDetails.synopsis}}</p>
	  	</div>
	  	<div class="col-start-4 col-span-12">
	  		<table class="table-fixed">
	  			<tbody>
	  				<tr>
	  					<td class="w-1/3">dataA</td>
	  					<td class="w-1/3">dataB</td>
	  				</tr>
	  			</tbody>
	  		</table>
	  	</div>
	  	<!-- <p class="text-white font-ptserif text-justify">{{mangaDetails.synopsis}}</p> -->
	  </div>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		props: ["manga"],
		data() {
			return {
				mangaDetails: [],
			};
		},
		created() {
			let manga = this.manga;

	    axios
	      .get(`https://mangamint.kaedenoki.net/api/manga/detail/${manga}`)
	      .then((response) => {
	        this.mangaDetails = response.data;
	      })
	      .catch((error) => {
	        console.log("sorry there was an error " + error.response);
	      });
	  },
	}
</script>
