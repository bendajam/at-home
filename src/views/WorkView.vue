<script setup lang="ts">
  import BackLink from "@/components/BackLink.vue";

</script>

<script lang="ts">
  import { defineComponent } from "@vue/runtime-core";
  export default defineComponent({
    name: "WorkView",
    methods: {}
  });
</script>



<template>
  <div>
    <h1>Daily Occupation</h1>
    <p>
      I've worked in the software development field for over a decade with a focus
      in the healthcare space for over 6 of those years.
      I currently work for <a href="https://sema4.com/">sema4</a> which is based on the east coast.
    </p>
    <BackLink/>
  </div>
</template>