<script lang="ts">
  import { defineComponent } from "@vue/runtime-core";
  export default defineComponent({
    name: "BackLink",
    methods: {
      back() {
        this.$router.go(-1);
      }
    }
  });
</script>


<template>
  <a type="button" @click="back()">Back</a>
</template>