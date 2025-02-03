<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image">
    <h3>{{ product.name }}</h3>
    <p class="price">${{ product.price }}</p>
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  text-align: center;
}

.product-image {
  max-width: 200px;
  height: auto;
}

.price {
  color: #42b983;
  font-weight: bold;
}
</style>