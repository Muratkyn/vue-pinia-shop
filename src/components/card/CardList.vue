<template>
  <div>
    <div class="products-wrapper">
      <div
        class="product-item"
        v-for="product in store.products"
        :key="product.id"
      >
        <SingleCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/store";
import { storeToRefs } from "pinia";
import SingleCard from "./SingleCard.vue";

const store = useAppStore();
const { products } = storeToRefs(store);
</script>

<style scoped>
.products-wrapper {
  width: 85%;
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
