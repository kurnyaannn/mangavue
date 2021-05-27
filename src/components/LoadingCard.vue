<template>
	<div class="flex flex-col">
		<div class="grid gap-4 lg:grid-cols-2 w-full">
			<div class="border border-gray-400 rounded-md w-full">
			  <div class="animate-pulse flex space-x-4">
			    <div class="bg-gray-400 w-36 md:w-48 h-36"></div>
			    <div class="flex-1 space-y-1 py-3 pr-3">
			      <div class="space-y-2">
			        <div class="h-4 bg-gray-400 rounded"></div>
			        <div class="h-4 bg-gray-400 rounded"></div>
			        <div class="h-4 bg-gray-400 rounded w-5/6"></div>
			      </div>
			    </div>
			  </div>
			</div>
			<div class="border border-gray-400 rounded-md w-full">
			  <div class="animate-pulse flex space-x-4">
			    <div class="bg-gray-400 w-36 md:w-48 h-36"></div>
			    <div class="flex-1 space-y-1 py-3 pr-3">
			      <div class="space-y-2">
			        <div class="h-4 bg-gray-400 rounded"></div>
			        <div class="h-4 bg-gray-400 rounded"></div>
			        <div class="h-4 bg-gray-400 rounded w-5/6"></div>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
		<div class="animate-pulse mx-auto flex justify-center bg-teriary rounded-md text-white font-poppins text-lg px-3 py-2 mt-3">
			Loading Data...
		</div>
	</div>
</template>

<script>
	export default {
	};
</script>