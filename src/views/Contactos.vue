<template>
  <div class="home">

    <div class="quemsomos">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h1 class="header">LOCALIZAÇÃO</h1>
            <div class="contactos">
              <img src="../assets/mapa.png" class="img">
              <p></p>
              <a>Zona Industrial Arcos do Sardão, Avenida Arcos do Sardão,<br>
Nº 391-A, 4430-434, Vila Nova de Gaia</a>
            </div>
            <h1 class="header">CONTACTOS</h1>
            <div class="contactos">
              <img src="../assets/email.png" alt="email" class="icons">
              <a>: mail@planetapublicidade.com</a>
              <p></p>
              <img src="../assets/telefone.png" alt="telefone" class="icons">
              <a>: 22 145 01 20</a>
            </div>
          </b-col>
          <b-col>
            <h1 class="header">CONTACTE-NOS</h1></b-col>
            <input v-model="message" placeholder="edit me">
            <p>Message is: {{ message }}</p>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Navbar from "@/components/Navbar.vue";

export default {
  name: "About",
  components: {
    //Navbar,
  },
};
</script>

<style scoped>

.icons {
  width: 30px;
  height: 30px;
}

.contactos {
text-align: left;
}
.header {
  font-family: Kayak Sans;
  font-size: 35px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  margin-top: 40px;
}

.historia {
  text-align: left;
}

.img{
  width: 450px;
  height: 280px;
}
</style>

