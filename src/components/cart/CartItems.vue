<template>
  <div class="cart-item">
    <p>{{ index + 1 }}</p>
    <p>{{ item.name }}</p>
    <img :src="item.image" alt="Product Image" class="product-image" />
    <div class="item-quantity">
      <span @click="store.incrementItem(item)">+</span>
      <p>{{ item.quantity }}</p>
      <span class="minus-button" @click="store.decrementItem(item)">-</span>
    </div>
    <p>{{ item.price }}</p>
    <i @click="store.deleteProduct(item)" class="material-icons item-delete"
      >delete</i
    >
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/store";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const store = useAppStore();
</script>

<style scoped>
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

.minus-button {
  padding: 5px 6px;
}
.item-quantity {
  display: flex;
  align-items: center;
}

span {
  border: 1px solid rgb(142, 141, 141);
  padding: 4px;
  margin-inline: 0.5rem;
  transition: 0.4ms ease;
  border-radius: 4px;
}
span:hover {
  background-color: #c2c2c2;
  cursor: pointer;
}
span:active {
  transform: scale(0.9) translateY(4px);
}

.item-delete:hover {
  cursor: pointer;
  color: #ff1a1a;
}
span {
  border: 1px solid rgb(142, 141, 141);
  padding: 4px;
  margin-inline: 0.5rem;
  transition: 0.4ms ease;
  border-radius: 4px;
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
</style>
