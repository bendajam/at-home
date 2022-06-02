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
      if(this.isHover){
        return require(this.imageOutline);
      } else {
        return require(this.image);
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