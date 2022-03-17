<template>
  <div class="home">
    <Navbar />
    <div>
      <h1 class="header">OS NOSSOS OUTDOORS</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.header {
  font-family: Kayak Sans;
  font-size: 35px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  margin-left: 110px;
  margin-top: 40px;
}

</style>