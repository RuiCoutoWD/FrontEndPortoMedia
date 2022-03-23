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
              <div class="btn">
              <button class="botao" @click="showModal">Editar</button></div>
              <b-modal
                ref="my-modal"
                hide-footer
                centered title="Edite os seus dados pessoais"
              >
              <input v-model="message" class="edittext2" placeholder="Nome" />
              <p class="space"></p>
              <input v-model="message" class="edittext2" placeholder="Email" />
              <p class="space"></p>
              <input v-model="message" class="edittext2" placeholder="Número" />
              <p class="space"></p>
              <input v-model="message" class="edittext2" placeholder="Empresa" />
              <p class="space"></p>
              <input v-model="message" class="edittext2" placeholder="Nova Palavra Passe"/>
              <p class="space"></p>
              <input v-model="message" class="edittext2" placeholder="Repetir Nova Palavra Passe"/>
              <p></p>
              <button @click="hideModal" class="confirmar">Confirmar</button>
              </b-modal>
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
  methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
  }
};
</script>

<style scoped>


.btn {
  margin-left: 24.2rem;
}

.confirmar {
  color: #303d7a;
  background-color: #fcfff7;
  margin-left: 23.6rem;

}

.confirmar:hover {
  background-color: #303d7a;
  color: #fcfff7;
  margin-left: 23.6rem;

}

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

.edittext2 {
  width: 465px;
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