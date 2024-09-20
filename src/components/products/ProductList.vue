<template>
  <div>
    <div class="products-wrapper">
      <div
        class="product-item"
        v-for="product in store.products"
        :key="product.id"
      >
        <SingleProduct :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/store";
import SingleProduct from "./SingleProduct.vue";

const store = useAppStore();
</script>

<style scoped>
.products-wrapper {
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 2rem;
  background-color: white;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  gap: 1rem;
}
.product-item {
  width: 300px;
  margin: 1rem auto;
  padding: 2rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
}
</style>
