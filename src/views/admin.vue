<template>
  <div class="home">
    <div class="quemsomos">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h1 class="header">Alteração de Email</h1>
            <div class="contactos">
              <label><b>Email atual:</b> mail@planetapublicidade.pt </label>
              <p class="space"></p>
              <input
                v-model="message"
                class="edittext"
                placeholder="Editar Email"
              />
              <p class="space"></p>
              <input
                v-model="message"
                class="edittext"
                placeholder="Repetir Novo Email"
              />
              <p class="space"></p>
            </div>
            <button class="botao">Confirmar</button>
            <h1 class="header2">Alteração de outdoors visíveis</h1>
          </b-col>
          <b-col>
            <h1 class="header">Registo de alugueres</h1>
            <div class="contactos">
              <input
                v-model="message"
                class="edittext"
                placeholder="Nome de Cliente"
              />
              <p class="space"></p>
              <input v-model="message" class="edittext" placeholder="Email" />
              <p class="space"></p>
              <input
                v-model="message"
                class="edittext"
                placeholder="Face Alugada"
              />
              <p class="space"></p>
              <input
                v-model="message"
                class="edittext"
                placeholder="Preço do aluguer"
              />
            </div>
            <p></p>
            <div class="calendar">
              <label for="example-datepicker">Data de início de aluguer</label>
              <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
              <label for="example-datepicker">Data de fim de aluguer</label>
              <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            </div>
            <div class="d-flex mx-auto justify-content-end">
              <button @click="showModal" class="btnconfirm">Confirmar</button>
            </div>
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
  name: "About",
  components: {
    //Navbar,
  },
};
</script>

<style scoped>
.header {
  font-family: Kayak Sans;
  font-size: 25px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  margin-top: 9rem;
}

.header2 {
  font-family: Kayak Sans;
  font-size: 25px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  margin-top: 3rem;
}

.calendar {
  text-align: left;
}

.contactos {
  text-align: left;
}

.edittext {
  width: 100%;
  font-weight: bold;
  font-size: 14px;
}

.botao {
  background-color: #fcfff7;
  color: #303d7a;
  width: 100px;
  border-width: 1px;
  margin-right: 34rem;
  border-radius: 6px;
}

.botao:hover {
  background-color: #303d7a;
  color: #fcfff7;
}

.btnconfirm{
  background-color: #fcfff7;
  color: #303d7a;
  width: 100px;
  border-width: 1px;
  border-radius: 6px;
}

.btnconfirm:hover {
  background-color: #303d7a;
  color: #fcfff7;
}
</style>