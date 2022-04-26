<template>
  <div class="home">
    <div class="quemsomos">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <!-- Alterar email -->
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
              <button class="botao">Confirmar</button>
            </div>
            
            <!-- Alterar os outdoors visíveis -->
            <h1 class="header2">Alteração de outdoors visíveis</h1>
            <button class="botaoAlterar" @click="showModalFav()">Alterar outdoors</button>
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
            <!--  -->
            <p></p>
            <div class="calendar">
              <label for="example-datepicker">Data de início de aluguer</label>
              <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
              <label for="example-datepicker">Data de fim de aluguer</label>
              <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            </div>
            <div class="d-flex mx-auto justify-content-end">
              <button @click="showModal" class="btnexport">Exportar Base de Dados</button>
              <button @click="showModal" class="btnconfirm">Confirmar</button>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-modal size="lg" ref="my-modalfav" hide-footer centered class="modal">
        <template #modal-header>
          <span class="nome">Face 01</span>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="hideModalFav()"
          >
            X
          </button>
        </template>
              <b-table
                id="my-table"
                :items="items"
                :per-page="pagina"
                :current-page="currentPage"
                small
              ></b-table>
      </b-modal>
    </div>
  </div>
  
</template>



<script>
// @ is an alias to /src
//import Navbar from "@/components/Navbar.vue";

export default {
  data() {
     return {
        pagina: 50,
        items: [
          { Face: "01", estado:'Visível', last_name: 'Flintstone' },
          { Face: "02", estado:'Visível', last_name: 'Flintstone' },
          { Face: "03", estado:'Visível', last_name: 'Rubble' },
          { Face: "04", estado:'Visível', last_name: 'Rubble' },
          { Face: "05", estado:'Visível', last_name: 'Flintstone' },
          { Face: "06", estado:'Visível', last_name: 'Rubble' },
          { Face: "07", estado:'Visível', last_name: 'Gazzoo' },
          { Face: "08", estado:'Visível', last_name: 'Slate' },
          { Face: "09", estado:'Visível', last_name: 'Slaghoople' },
          { Face: "10", estado:'Visível', last_name: 'Gazzoo' },
          { Face: "11", estado:'Visível', last_name: 'Slate' },
          { Face: "12", estado:'Visível', last_name: 'Slaghoople' },
          { Face: "13", estado:'Visível', last_name: 'Gazzoo' },
          { Face: "14", estado:'Visível', last_name: 'Slate' },
          { Face: "15", estado:'Visível', last_name: 'Slaghoople' },
          { Face: "16", estado:'Visível', last_name: 'Flintstone' },
          { Face: "17", estado:'Visível', last_name: 'Flintstone' },
          { Face: "18", estado:'Visível', last_name: 'Rubble' },
          { Face: "19", estado:'Visível', last_name: 'Rubble' },
          { Face: "20", estado:'Visível', last_name: 'Flintstone' },
          { Face: "21", estado:'Visível', last_name: 'Rubble' },
          { Face: "22", estado:'Visível', last_name: 'Gazzoo' },
          { Face: "23", estado:'Visível', last_name: 'Slate' },
          { Face: "24", estado:'Visível', last_name: 'Slaghoople' },
          { Face: "25", estado:'Visível', last_name: 'Gazzoo' },
          { Face: "26", estado:'Visível', last_name: 'Slate' },
          { Face: "27", estado:'Visível', last_name: 'Slaghoople' },
          { Face: "28", estado:'Visível', last_name: 'Gazzoo' },
          { Face: "29", estado:'Visível', last_name: 'Slate' },
          { Face: "30", estado:'Visível', last_name: 'Slaghoople' },
          { Face: "31", estado:'Visível', last_name: 'Flintstone' },
          { Face: "32", estado:'Visível', last_name: 'Flintstone' },
          { Face: "33", estado:'Visível', last_name: 'Rubble' },
          { Face: "34", estado:'Visível', last_name: 'Rubble' },
          { Face: "35", estado:'Visível', last_name: 'Flintstone' },
          { Face: "36", estado:'Visível', last_name: 'Rubble' },
          { Face: "37", estado:'Visível', last_name: 'Gazzoo' },
          { Face: "38", estado:'Visível', last_name: 'Slate' },
          { Face: "39", estado:'Visível', last_name: 'Slaghoople' },
          { Face: "40", estado:'Visível', last_name: 'Gazzoo' },
          { Face: "41", estado:'Visível', last_name: 'Slate' },
          { Face: "42", estado:'Visível', last_name: 'Slaghoople' },
          { Face: "43", estado:'Visível', last_name: 'Gazzoo' },
          { Face: "44", estado:'Visível', last_name: 'Slate' },
          { Face: "45", estado:'Visível', last_name: 'Slaghoople' },
          { Face: "46", estado:'Visível', last_name: 'Flintstone' },
          { Face: "47", estado:'Visível', last_name: 'Flintstone' },
          { Face: "48", estado:'Visível', last_name: 'Rubble' },
          { Face: "49", estado:'Visível', last_name: 'Rubble' },
          { Face: "50", estado:'Visível', last_name: 'Flintstone' },
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
    methods: {
    showModalFav() {
      this.$refs["my-modalfav"].show();
    },
    hideModalFav() {
      this.$refs["my-modalfav"].hide();
    },
    }
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
  border-radius: 6px;
}

.botao:hover {
  background-color: #303d7a;
  color: #fcfff7;
}

.botaoAlterar {
  background-color: #fcfff7;
  color: #303d7a;
  width: 150px;
  border-width: 1px;
  margin-right: 34rem;
  border-radius: 6px;
}

.botaoAlterar:hover {
  background-color: #303d7a;
  color: #fcfff7;
}

.btnconfirm{
  background-color: #fcfff7;
  font-size: 15px;
  color: #303d7a;
  width: 100px;
  border-width: 1px;
  border-radius: 6px;
}

.btnconfirm:hover {
  background-color: #303d7a;
  color: #fcfff7;
}

.btnexport{
  margin-right: 1rem;
  font-size: 15px;
  background-color: #fcfff7;
  color: #303d7a;
  width: 180px;
  border-width: 1px;
  border-radius: 6px;
}

.btnexport:hover {
  background-color: #303d7a;
  color: #fcfff7;
}
</style>