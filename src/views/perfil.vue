<template>
  <div class="home">
    <div class="quemsomos">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h1 class="header">ÚLTIMOS ALUGUERES</h1>
            <h1 class="header">NOTIFICAÇÕES</h1>
          </b-col>
          <b-col>
            <h1 class="header">DADOS PESSOAIS</h1>
            <h1 class="header">FAVORITOS</h1>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Navbar from "@/components/Navbar.vue";

export default {
  name: "Profile",
  components: {
    //Navbar,
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
  margin-top: 9rem;
}
</style>