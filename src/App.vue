<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    hasToken() {
      const token = localStorage.getItem("token");
      if (token) {
        router.push({ path: "/analytics", name: "analytics" });
      } else if (this.$route.path !== "/") {
        router.push({ path: "/", name: "authorization" });
      }
    },
  },
  beforeMount() {
    this.hasToken();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
