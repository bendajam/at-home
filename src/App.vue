<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import RoomView from "./views/RoomView.vue";
</script>
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
@import "@/assets/base.css";

#app {
  width:100vw;
  height:100vh;
  margin: 0 auto;
  font-weight: normal;
}

.fade-enter-form,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

.content {
  width: 50vw;
  height: 50vw;
  padding-top: 15vw;
  margin: 0 auto;
}

@media (hover: hover) {
  a:hover {
    background-color: rgba(255, 255, 255, 0.865);
    padding: 5px;
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

}
</style>
