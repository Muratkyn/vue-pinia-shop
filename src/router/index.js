import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/main/HomePage.vue";
import CartPage from "@/components/main/CartPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartPage,
    },
  ],
});

export default router;
