<template>
  <div class="cart-wrapper" v-if="!store.cartIsEmpty">
    <div class="cart-header">
      <p>#</p>
      <p>Product Name</p>
      <p>Image</p>
      <p>Quantity</p>
      <p>Price</p>
    </div>
    <div v-for="(item, index) in store.cartItems" :key="index">
      <CartItems :item="item" :index="index" />
    </div>
    <div class="cart-total">
      <p class="total">Total: {{ store.getTotalValue }}</p>
    </div>
    <div class="item-center">
      <RouterLink to="/home">
        <button class="global-button">Return</button>
      </RouterLink>
    </div>
  </div>
  <div v-else>
    <EmptyCart />
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/store";
import EmptyCart from "../models/EmptyCart.vue";
import CartItems from "../cart/CartItems.vue";

const store = useAppStore();
</script>

<style scoped>
.cart-wrapper {
  width: 75%;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  padding: 2rem;
  background-color: white;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
}

.cart-header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  font-weight: bold;
  border-bottom: 1px solid #5e5e5e;
}

p {
  margin: 0;
}

.cart-total {
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
}
.total {
  margin-right: 26.5%;
}
</style>
