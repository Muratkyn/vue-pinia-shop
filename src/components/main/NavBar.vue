<template>
  <nav class="navbar">
    <div class="navbar-title">
      <img src="../../assets/pinia-logo.svg" alt="pinia" width="45px" />
      <h2>Pinia Shop</h2>
      <RouterLink to="/home"> <h2>Home</h2></RouterLink>
      <input
        for="search"
        type="text"
        placeholder="Search product.."
        v-model="store.searchValue"
      />
      <div class="cart-wrapper"></div>
      <RouterLink to="/cart">
        <h2>Cart ({{ store.getTotalItem }})</h2></RouterLink
      >
    </div>
  </nav>
</template>

<script setup>
import { useAppStore } from "@/store/store";

const store = useAppStore();
</script>

<style scoped>
.navbar {
  width: 75%;
  margin: 2rem auto;
  padding: 0 2rem;
  background-color: #35495e;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  color: aliceblue;
  font-weight: 600;
}
.navbar-title a {
  text-decoration: none;
}

h2 {
  cursor: pointer;
  color: white;
}

h2:hover {
  color: rgb(190, 255, 255);
}

.navbar-title {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: 2rem;
}

img {
  max-width: 60px;
}

.cart-wrapper {
  margin-left: auto;
}

.cart {
  margin: 2rem;
}
</style>
