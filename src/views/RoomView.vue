
<script setup lang="ts">
  import InteractiveImage from "@/components/InteractiveImage.vue";
</script>

<template>
  <div class="room">

      <InteractiveImage class="amp"
        image="/src/assets/images/amp.png"
        imageOutline="/src/assets/images/amp-hover.png"
        routeLocation="music"
        />

    <div class="shelf-area">
      <img src="@/assets/images/shelf.png">
      <InteractiveImage class="lanyard"
        image="/src/assets/images/lanyard.png"
        imageOutline="/src/assets/images/lanyard-hover.png"
        routeLocation="work"
        />
      <InteractiveImage class="books"
        image="/src/assets/images/books.png"
        imageOutline="/src/assets/images/books-hover.png"
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
    z-index: 1;
  }
  div {
    z-index: 0;
  }
  .room {
    width: 1000px;
    height: 1000px;
  }
  .shelf-area {
    position: relative;
    left:51.5%;
    top:40%;
  }
  .desk-area {
    position: relative;
    left:55%;
    top:50%;
  }
  .desk {
    position: relative;
    left: 4%;
    top: -40%;
  }
  .amp {
    position: relative;
    left: 50%;
    top: 62%;
  }
  .monitor {
    position: absolute;
    left: 16%;
    top: -40%;
  }
  .books {
    position: absolute;
    left: 3%;
    top: 42%;
  }
  .lanyard {
    position: absolute;
    left: 8.6%;
    top: 96%;
  }
  .keyboard {
    position: absolute;
    left: 7%;
    top: 14%;
  }
  .chair {
    position: absolute;
    left:56%;
    top:73%;
  }

</style>