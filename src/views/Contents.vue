<template>
  <div class="flex flex-row justify-between">
    <Navbar class="w-1/12" />
    <div class="flex w-11/12 justify-between">
      <MainContent class="w-full" />
      <SideContent class="w-2/5" />
    </div>
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
