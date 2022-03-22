<template>
  <div class="home">
    <div class="quemsomos">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h1 class="header">ÚLTIMOS ALUGUERES</h1>
            <h1 class="header2">NOTIFICAÇÕES</h1>
          </b-col>
          <b-col>
            <h1 class="header">DADOS PESSOAIS</h1>
            <div class="contactos">
              <input v-model="message" class="edittext" placeholder="Nome" />
              <p class="space"></p>
              <input v-model="message" class="edittext" placeholder="Email" />
              <p class="space"></p>
              <input v-model="message" class="edittext" placeholder="Número" />
              <p class="space"></p>
              <input v-model="message" class="edittext" placeholder="Empresa" />
              <p></p>
              <button class="botao">Editar</button>
            </div>
            <h1 class="header2">FAVORITOS</h1>
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

.header2 {
  font-family: Kayak Sans;
  font-size: 35px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  margin-top: 3rem;
}

.contactos {
  text-align: left;
}

.edittext {
  width: 500px;
  font-weight: bold;
  font-size: 14px;
}

.botao {
  background-color: #fcfff7;
  color: #303d7a;
  width: 100px;
  border-width: 1px;
}

.botao:hover {
  background-color: #303d7a;
  color: #fcfff7;
}

.space {
  height: 6px;
}

</style>