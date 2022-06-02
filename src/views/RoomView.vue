
<script setup lang="ts">
  import InteractiveImage from "@/components/InteractiveImage.vue";
</script>

<template>
  <div class="room">

      <InteractiveImage class="amp"
        image="amp.png"
        imageOutline="amp-hover.png"
        routeLocation="music"
        />

    <div class="shelf-area">
      <img src="@/assets/images/shelf.png">
      <InteractiveImage class="lanyard"
        image="lanyard.png"
        imageOutline="lanyard-hover.png"
        routeLocation="work"
        />
      <InteractiveImage class="books"
        image="books.png"
        imageOutline="books-hover.png"
        routeLocation="book_blog"
        />
    </div>
    <div class="desk-area">
      <img class="desk" src="@/assets/images/desk.png">
    </div>
    <img class="chair" src="@/assets/images/chair.png">
  </div>
</template>

<style scoped>
  img {
    transform: scale(1.5);
  }
  .room {
    width:500px;
    height: 844px;
    margin: 0 auto;
  }
  .shelf-area {
    max-width:1px;
    position: relative;
    left:51.5%;
    top:100px;
  }
  .desk-area {
    max-width:1px;
    position: relative;
    left:65%;
    top:230px;
  }
  .amp {
    position: relative;
    left: 48%;
    top: 350px;
  }
  .monitor {
    position: absolute;
    left: 16%;
    top: -50%;
  }
  .books {
    position: absolute;
    left: 25px;
    top: 37px;
  }
  .lanyard {
    position: absolute;
    left: 85px;
    top: 84px;
  }
  .keyboard {
    position: absolute;
    left: 7%;
    top: 14%;
  }
  .chair {
    position: relative;
    left:60%;
    top:150px;
  }

</style>