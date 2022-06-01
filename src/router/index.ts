import { createRouter, createWebHistory } from "vue-router";
import RoomView from "../views/RoomView.vue";
import WorkView from "../views/WorkView.vue";
import BookBlogView from "../views/BookBlogView.vue";
import MusicView from "../views/MusicView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "room",
      alias: "/room",
      component: RoomView,
    },
    {
      path: "/work",
      name: "work",
      component: WorkView,
    },
    {
      path: "/book_blog",
      name: "book_blog",
      component: BookBlogView,
    },
    {
      path: "/music",
      name: "music",
      component: MusicView,
    }
 
  ],
});

export default router;
