<template>
  <header class="header">
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">SHOgun</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/products">Products</router-link>
        <router-link to="/cart">
          Cart ({{ cartItemCount }})
        </router-link>
        <router-link v-if="!isAuthenticated" to="/login">Login</router-link>
        <router-link v-if="!isAuthenticated" to="/register">Register</router-link>
        <button v-else @click="logout">Logout</button>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['cartItemCount', 'isAuthenticated'])
  },
  methods: {
    ...mapActions(['logoutUser']),
    logout() {
      this.logoutUser()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #333;
  color: white;
}

.nav-links a {
  color: white;
  margin-left: 1.5rem;
  text-decoration: none;
}

.nav-links a:hover {
  color: #42b983;
}
</style>