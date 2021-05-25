<template>
  <div class="pl-5 grid grid-cols-12 gap-4">
    <MainContent class="col-start-1 col-span-9 pt-6 pb-4" />
    <SideContent class="col-start-10 col-span-9 pt-6" />
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import SideContent from "@/components/SideContent.vue";
import axios from "axios";

export default {
  components: {
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
