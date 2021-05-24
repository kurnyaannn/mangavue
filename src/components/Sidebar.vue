<template>
  <div class="flex">
	  <!-- Sidebar -->
	  <nav class="bg-secondary w-16 flex flex-col justify-between h-screen sticky top-0">
	    <div class="mb-10">
	      <ul>
	        <li>
	          <router-link to="/" class="flex justify-center items-center h-16 w-16 bg-secondary border-b border-gray-100 border-opacity-30">
	            <svg width="35" height="35" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
	              <path fill-rule="evenodd" clip-rule="evenodd" d="M150 290C227.32 290 290 227.32 290 150C290 72.6801 227.32 10 150 10C72.6801 10 10 72.6801 10 150C10 227.32 72.6801 290 150 290ZM150 300C232.843 300 300 232.843 300 150C300 67.1573 232.843 0 150 0C67.1573 0 0 67.1573 0 150C0 232.843 67.1573 300 150 300Z" fill="white" />
	              <path d="M72.8742 40.9551L88.7744 40.9551L158.299 235.05L140.264 235.05L72.8742 40.9551Z" fill="white" />
	              <path d="M92.8742 100.031H109.874L109.874 265.031H92.8742L92.8742 100.031Z" fill="white" />
	              <path d="M191 100.031H208V265.031H191V100.031Z" fill="white" />
	              <path d="M212.349 40.6885L229.374 40.6885L159.054 234.529L141.299 234.045L212.349 40.6885Z" fill="white" />
	            </svg>
	          </router-link>
	        </li>
	        <li class="flex flex-col h-16 justify-center">
	          <router-link to="/">
	            <span>
	              <BaseIcon name="star" class="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-ternary transition ease-in-out duration-200" />
	            </span>
	          </router-link>
	        </li>
	        <li class="flex flex-col h-16 justify-center">
	          <router-link to="/">
	            <span>
	              <BaseIcon name="trending-up" class="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-ternary transition ease-in-out duration-200" />
	            </span>
	          </router-link>
	        </li>
	        <li class="flex flex-col h-16 justify-center">
	          <router-link to="/">
	            <span>
	              <BaseIcon name="book" class="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-ternary transition ease-in-out duration-200" />
	            </span>
	          </router-link>
	        </li>
	      </ul>
	    </div>
	    <div class="flex flex-col h-16 justify-center">
			  <router-link to="/">
			    <span>
			      <BaseIcon name="info" class="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-ternary transition ease-in-out duration-200" />
			    </span>
			  </router-link>
	    </div>
	  </nav>
	  <!-- Content -->
	  <div class="w-full">
	  	<Header />
	    <Contents />
	  </div>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import Contents from "@/views/Contents.vue";

	export default {
	  components: {
	  	Header,
	  	Contents,
	  },
	};
</script>
