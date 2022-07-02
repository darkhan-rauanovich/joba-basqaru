<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style>
body {
  background: #f2f2f2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
}
</style>
