<template>
  <div class="product-wrapper">
    <div class="product">
      <img :src="product.image" alt="images" width="300px" height="250px" />
      <div>
        <h2>{{ product.name }}</h2>
        <p>{{ product.text }}</p>
        <button @click="store.addToCart(product)" class="global-button">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useAppStore } from "@/store/store";

const store = useAppStore();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
