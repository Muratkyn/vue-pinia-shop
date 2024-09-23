import { defineStore } from "pinia";
import { products } from "../../products.js";

export const useAppStore = defineStore("store", {
  state: () => {
    return {
      products,
      cartItems: [],
      cartTotal: 0,
      searchValue: "",
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
    deleteProduct(product) {
      const foundIndex = this.cartItems.findIndex(
        (item) => item.id === product.id
      );

      if (foundIndex !== -1) {
        this.cartItems.splice(foundIndex, 1);
      }
    },

    incrementItem(product) {
      const foundItem = this.cartItems.find((item) => item.id === product.id);
      foundItem.quantity++;
    },
    decrementItem(product) {
      const foundItem = this.cartItems.find((item) => item.id === product.id);
      if (foundItem.quantity > 1) {
        foundItem.quantity--;
      } else {
        this.deleteProduct(product);
      }
    },
  },
  getters: {
    getTotalItem() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
    cartIsEmpty() {
      return this.cartItems.length <= 0;
    },
    // getTotalValue() {
    //   let total = 0;
    //   this.cartItems.forEach((item) => {
    //     total += item.quantity * item.price;
    //   });
    //   return (this.cartTotal = total);
    // },
    getTotalValue() {
      return (this.cartTotal = this.cartItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      ));
    },
  },
});
