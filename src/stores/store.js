import { defineStore } from "pinia";
import { products } from "../../products.js";

export const useAppStore = defineStore("store", {
  state: () => {
    return {
      products,
      cartItems: [],
    };
  },
  actions: {
    addToCart(product) {
      const productExists = this.cartItems.find(
        (item) => item.id === product.id
      );
      if (productExists) {
        productExists.quantity++;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
  },
  getters: {
    getTotalCart() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
    cartIsEmpty() {
      return this.cartItems.length <= 0;
    },
  },
});
