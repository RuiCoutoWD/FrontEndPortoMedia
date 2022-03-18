<template>
  <div class="row">
    <div class="contactos">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h1 class="header">LOCALIZAÇÃO</h1>
            <h1 class="header">CONTACTOS</h1>
          </b-col>
          <b-col>
            <h1 class="header">CONTACTE-NOS</h1>
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
  name: "Contacts",
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
  margin-top: 40px;
}
</style>

