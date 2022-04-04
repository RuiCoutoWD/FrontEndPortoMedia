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
            <div class="overflow-auto">
              <b-pagination
              pills
              align="fill"
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
              ></b-pagination>
              <p class="mt-3">Current Page: {{ currentPage }}</p>

              <b-table
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                small
              ></b-table>
            </div>
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
  data() {
     return {
        perPage: 5,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
          { id: 10, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 11, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 12, first_name: 'Pearl', last_name: 'Slaghoople' },
          { id: 13, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 14, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 15, first_name: 'Pearl', last_name: 'Slaghoople' },
        ],
      }
    },
  computed: {
    rows() {
      return this.items.length
    }
  },
  name: "About",
  components: {
    //Navbar,
  },
  
};
</script>

<style scoped>
.dropdw{
  text-align: left;
}

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