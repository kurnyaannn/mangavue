<template>
  <div class="grid grid-cols-12 gap-4">
    <Navbar class="col-start-1 col-span-1" />
    <MainContent class="col-start-2 col-span-8" />
    <SideContent class="col-start-10 col-span-9" />
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import MainContent from "@/components/MainContent.vue";
  import SideContent from "@/components/SideContent.vue";
  import axios from "axios";

  export default {
    components: {
      Navbar,
      MainContent,
      SideContent,
    },
    data() {
      return {
        mangas: [],
      };
    },
    created() {
      axios
        .get("https://mangamint.kaedenoki.net/api/recommended")
        .then((response) => {
          this.mangas = response.data.manga_list;
        })
        .catch((error) => {
          console.log("sorry there was an error " + error.response);
        });
    },
  };
</script>
