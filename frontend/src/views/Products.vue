<template>
  <div class="products-page">
    <h1>Products</h1>
    <div class="product-grid">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from 'components/ProductCard.vue'
import api from 'services/api'

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: []
    }
  },
  async created() {
    try {
      const response = await api.getProducts()
      this.products = response.data
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }
}
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
</style>
