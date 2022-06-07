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
                id="editEmail"
                placeholder="Editar Email"
              />
              <p class="space"></p>
              <input
                v-model="message"
                class="edittext"
                id="editEmailAgain"
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
              <button @click="generateReport" class="btnexport">Exportar Base de Dados</button>
              <button @click="showModal" class="btnconfirm">Confirmar</button>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-modal size="lg" ref="my-modalfav" hide-footer centered class="modal">
    <template #modal-header>
            <span class="nome">Outdoors</span>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideModalFav()">X</button>
          </template>
          <p><b>Outdoors visíveis:</b> 3 de 8</p>
<table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Face</th>
            <th scope="col">Estado</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">001</th>
            <td>Visível</td>
            <td>
              <button type="button" class="btn btn-primary"><i class="far fa-eye"></i><img src="../assets/hide.png"></button>
            </td>
          </tr>
          <tr>
            <th scope="row">002</th>
            <td>Não Visível</td>
            <td>
              <button type="button" class="btn btn-primary"><i class="far fa-eye"></i><img src="../assets/show.png"></button>
            </td>
          </tr>
          <tr>
            <th scope="row">003</th>
            <td>Não Visível</td>
            <td>
              <button type="button" class="btn btn-primary"><i class="far fa-eye"></i><img src="../assets/show.png"></button>
            </td>
          </tr>
          <tr>
            <th scope="row">004</th>
            <td>Não Visível</td>
            <td>
              <button type="button" class="btn btn-primary"><i class="far fa-eye"></i><img src="../assets/show.png"></button>
            </td>
          </tr>
          <tr>
            <th scope="row">005</th>
            <td>Visível</td>
            <td>
              <button type="button" class="btn btn-primary"><i class="far fa-eye"></i><img src="../assets/hide.png"></button>
            </td>
          </tr>
          <tr>
            <th scope="row">006</th>
            <td>Não Visível</td>
            <td>
              <button type="button" class="btn btn-primary"><i class="far fa-eye"></i><img src="../assets/show.png"></button>
            </td>
          </tr>
          <tr>
            <th scope="row">007</th>
            <td>Não Visível</td>
            <td>
              <button type="button" class="btn btn-primary"><i class="far fa-eye"></i><img src="../assets/show.png"></button>
            </td>
          </tr>
          <tr>
            <th scope="row">008</th>
            <td>Visível</td>
            <td>
              <button type="button" class="btn btn-primary"><i class="far fa-eye"></i><img src="../assets/hide.png" id="img"></button>
            </td>
          </tr>
        </tbody>
      </table>
      </b-modal>
      <div>
     <VueHtml2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="myPDF"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="800px"
        ref="html2Pdf"
    >
        <section slot="pdf-content">
            <img src="../assets/faces/Face10.png" >
        </section>
    </VueHtml2pdf>
   </div>
    </div>
  </div>
</template>



<script>
// @ is an alias to /src
//import Navbar from "@/components/Navbar.vue";
import VueHtml2pdf from 'vue-html2pdf'

export default {
  computed: {
    rows() {
      return this.items.length
    }
  },
  name: "About",
  components: {
    //Navbar,
    VueHtml2pdf
  },
    methods: {
    showModalFav() {
      this.$refs["my-modalfav"].show();
    },
    hideModalFav() {
      this.$refs["my-modalfav"].hide();
    },
    generateReport () {
            this.$refs.html2Pdf.generatePdf()
    }
  }
}
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

.close {
  font-size: 20px;
  border-width: 0px;
  background-color: #ffffff;
  align-content: space-between;
  color: #e80b0b;
}

.nome {
  font-family: ChaletComprime CologneEighty;
  font-size: 28pt;
  color: #a58c57;
}
</style>