<!-- src/components/HomePage.vue -->

<template>
  <div class="design">
    <!-- Navbar -->
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signup" class="nav-link">Sign up</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
      </ul>
    </nav>

    <!-- Main Content -->
    <div class="container">
      <h1 class="app-name">Project Tracker Pro</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
/* Navbar styling */
.navbar {
  background-color: #000000c5;
  padding: 1rem;
  border-radius: 1px;
}

.navbar-nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.nav-item {
  margin: 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;
}

.nav-link:hover {
  background-color: #555;
  border-radius: 5px;
}

/* Main content styling */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* Center vertically */
  flex-direction: column;
}

.app-name {
  color: black;
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  margin-top: 0;
}

/* Optional: Add a subtitle or description */
.container p {
  color: black;
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
}
.design {
            background: linear-gradient(to right, #f0f2f0, #000c40);
            padding-bottom: 40px;
        }
</style>
