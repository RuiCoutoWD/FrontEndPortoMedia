
<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
const axios = require("axios");

export default {
  name: "App",
  components: {
    Navbar,
  },
  mounted: function () {
    axios({
      method: "get",
      url: "https://portomedia.herokuapp.com/outdoors",
    }).then(
      (response) => {
        this.$store.commit("SET_OUTDOORS", {
          outdoors: response.data,
        });
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
