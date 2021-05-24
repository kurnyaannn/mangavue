<template>
  <div class="pl-5 pr-10 py-6 grid grid-cols-12 gap-4">
    <MainContent class="col-start-1 col-span-10" />
    <SideContent class="col-start-11 col-span-12" />
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
