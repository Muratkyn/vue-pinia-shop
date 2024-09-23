<template>
  <div>
    <div class="products-wrapper">
      <div
        class="product-item"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <SingleProduct :product="product" />
      </div>
      <div v-if="filteredProducts.length <= 0">
        <h1 style="color: red">No item found..</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useAppStore } from "@/store/store";
import SingleProduct from "./SingleProduct.vue";

const store = useAppStore();

const filteredProducts = computed(() => {
  const searchItem = store.searchValue.toLowerCase();
  if (searchItem) {
    return store.products.filter((product) =>
      product.name.toLowerCase().includes(searchItem.toLowerCase())
    );
  }
  return store.products;
});
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
