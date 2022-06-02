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
      require(this.imageOutline);
      require(this.image);
      if(this.isHover){
        return this.imageOutline;
      } else {
        return this.image;
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