<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "InteractiveImage",
  components: {},
  props: {
    image: String,
    imageOutline: String,
    routeLocation: String,
  },
  data: () => {
    return {
      isHover: false
    }
  },
  methods: {
    getImage() {
      const imageOutlineURL = new URL(
        `../assets/images/${this.imageOutline}`,
        import.meta.url
      ).href;
      const imageURL = new URL(
        `../assets/images/${this.image}`,
        import.meta.url
      ).href;

      if(this.isHover){
        return imageOutlineURL;
      } else {
        return imageURL;
      }
    },
    transition() {
      this.$router.push({name: this.routeLocation});
    }
  }

})
</script>

<template>
    <img 
      :src="getImage()"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
      @click="transition()"
    />
</template>

<style scoped>
</style>