<template>
  <div v-html="svg"></div>
</template>

<script>
  import feather from "feather-icons";

  export default {
    props: {
      name: String,
      width: {
        type: [Number, String],
        default: 20,
      },
      height: {
        type: [Number, String],
        default: 20,
      },
    },
    computed: {
      svg() {
        return feather.icons[this.name].toSvg({
          class: "icon",
          width: this.width,
          height: this.height,
        });
      },
    },
  };
</script>
