<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="nav-box">
        <router-link class="router-link" :to="{ name: 'Home'}">Home</router-link>
        <router-link class="router-link" :to="{ name: 'Register'}">Register</router-link>
      </div>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {}
</script>

<style scoped>
  .nav-box{
    display: flex;
    flex-direction: row;
  }
  .router-link{
    color: white;
    margin: 0 5px;
    text-decoration: none;
  }
</style>