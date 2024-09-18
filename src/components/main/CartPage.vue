<template>
  <div class="cart-wrapper" v-if="!store.cartIsEmpty">
    <div class="cart-header">
      <p>#</p>
      <p>Product Name</p>
      <p>Image</p>
      <p>Quantity</p>
      <p>Price</p>
    </div>
    <div
      class="cart-item"
      v-for="(item, index) in store.cartItems"
      :key="item.id"
    >
      <p>{{ index + 1 }}</p>
      <p>{{ item.name }}</p>
      <img :src="item.image" alt="Product Image" class="product-image" />
      <div class="item-quantity">
        <p>{{ item.quantity }}</p>
      </div>
      <p>{{ item.price | currency }}</p>
      <i class="material-icons item-delete">delete</i>
    </div>

    <div class="cart-total">
      <p class="total">Total: {{}}</p>
    </div>
    <div class="item-center">
      <RouterLink to="/home">
        <button class="global-button">Return</button>
      </RouterLink>
    </div>
  </div>
  <div v-else>
    <EmptyCart></EmptyCart>
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/store";
import EmptyCart from "../models/EmptyCart.vue";

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

.cart-item {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #5e5e5e;
}

.product-image {
  width: 70px;
  height: 70px;
  margin-bottom: 8px;
  object-fit: cover;
}

.delete-button {
  background-color: #35495e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.delete-button:hover {
  cursor: pointer;
  background-color: #ff1a1a;
}

.delete-button:active {
  transform: scale(0.9) translateY(4px);
}

p {
  margin: 0;
}

.item-quantity {
  margin-left: 1.5rem;
}
.cart-total {
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
}
.total {
  margin-right: 30%;
}
</style>
