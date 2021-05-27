<template>
  <div class="flex flex-col-reverse md:flex-row justify-between md:h-full">
    <Navbar class="w-full flex-none md:w-2/12 lg:w-1/12 fixed bottom-0 z-50" />
    <div class="flex flex-row w-full md:w-10/12 lg:flex-row lg:justify-between lg:w-11/12">
      <MainContent 
        class="h-full w-full"
        :class="[isOpen ? 'hidden' : 'block']" />
      <SideContent
        class="w-full lg:w-5/12 lg:block"
        :class="[isOpen ? 'block' : 'hidden']" />
    </div>
    <div
      @click="toggleMenu"
      class="z-50 fixed right-0 top-0 text-white mt-5 mr-5 p-3 bg-teriary rounded-md cursor-pointer transition ease-in-out duration-300 hover:bg-purple lg:hidden">
      <Icon
        :name="[isOpen ? 'x' : 'menu']"/>
    </div>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import MainContent from "@/components/MainContent.vue";
  import SideContent from "@/components/SideContent.vue";

  export default {
    components: {
      Navbar,
      MainContent,
      SideContent,
    },
    data() {
      return {
        mangas: [],
        isOpen: false,
        iconName: 'menu'
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = this.isOpen ? false : true;
        this.iconName = this.isOpen ? false : true;
      },
    },
  };
</script>
