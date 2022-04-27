<template>
  <div class="home">
    <div class="quemsomos">
      <!-- ------------------------------------- Imagens de fundo ------------------------------------- -->
      <img src="../assets/Fundosimagem-08.png" class="fundo">
      <b-container class="bv-example-row">
        <b-row>
          <!-- ------------------------------------- Cards para as 15 faces ------------------------------------- -->
          <b-col>
            <h1 class="header">OS NOSSOS OUTDOORS</h1>

            <div @click="showModal()" class="div">
              <b-card no-body title="Image Overlay" img-alt="Image" img-height="200px" img-top tag="article" style="max-width: 400.3px; text-align: left; background-color: #303d7a" class="mb-2 border-0 card" footer-tag="footer">
                <img src="../assets/Face1.png" class="face" />
                <template #footer>
                  <span class="foot">Face 001</span>
                </template>
              </b-card>
            </div>

            <div @click="showModal()" class="div">
              <b-card no-body overlay:true title="Image Overlay" img-alt="Image" img-height="200px" img-top tag="article" style="max-width: 400.3px; text-align: left; background-color: #303d7a" class="mb-2 border-0" footer-bg-variant="transparent">
                <img src="../assets/Face4.png" class="face" />
                <template #footer>
                  <span class="foot">Face 004</span>
                </template>
              </b-card>
            </div>

            <div @click="showModal()" class="div">
              <b-card no-body img-alt="Image" img-height="200px" img-top tag="article" style="max-width: 400.3px; text-align: left; background-color: #303d7a" class="mb-2 border-0" footer-bg-variant="transparent">
                <img src="../assets/Face7.png" class="face" />
                <template #footer>
                  <span class="foot">Face 007</span>
                </template>
              </b-card>
            </div>

            <div @click="showModal()" class="div">
              <b-card no-body img-alt="Image" img-height="200px" img-top tag="article" style="max-width: 400.3px; text-align: left; background-color: #303d7a" class="mb-2 border-0" footer-bg-variant="transparent">
                <img src="../assets/Face10.png" class="face" />
                <template #footer>
                  <span class="foot">Face 010</span>
                </template>
              </b-card>
            </div>

            <div @click="showModal()" class="div">
              <b-card no-body img-alt="Image" img-height="200px" img-top tag="article" style="max-width: 400.3px; text-align: left; background-color: #303d7a" class="mb-2 border-0" footer-bg-variant="transparent">
                <img src="../assets/Face13.png" class="face" />
                <template #footer>
                  <span class="foot">Face 013</span>
                </template>
              </b-card>
            </div>

          </b-col>
          <b-col class="space">
            <div @click="showModal()" class="div">
              <b-card no-body img-alt="Image" img-height="200px" img-top tag="article" style="max-width: 400.3px; text-align: left; background-color: #303d7a" class="mb-2 border-0" footer-bg-variant="transparent">
                <img src="../assets/Face2.png" class="face" />
                <template #footer>
                  <span class="foot">Face 002</span>
                </template>
              </b-card>
            </div>

            <div @click="showModal()" class="div">
              <b-card no-body img-alt="Image" img-height="200px" img-top tag="article" style="max-width: 400.3px; text-align: left; background-color: #303d7a" class="mb-2 border-0" footer-bg-variant="transparent">
                <img src="../assets/Face5.png" class="face" />
                <template #footer>
                  <span class="foot">Face 005</span>
                </template>
              </b-card>
            </div>

            <div @click="showModal()" class="div">
              <b-card no-body img-alt="Image" img-height="200px" img-top tag="article" style="max-width: 400.3px; text-align: left; background-color: #303d7a" class="mb-2 border-0" footer-bg-variant="transparent">
                <img src="../assets/Face8.png" class="face" />
                <template #footer>
                  <span class="foot">Face 008</span>
                </template>
              </b-card>
            </div>

            <div @click="showModal()" class="div">
              <b-card no-body img-alt="Image" img-height="200px" img-top tag="article" style="max-width: 400.3px; text-align: left; background-color: #303d7a" class="mb-2 border-0" footer-bg-variant="transparent">
                <img src="../assets/Face11.png" class="face" />
                <template #footer>
                  <span class="foot">Face 011</span>
                </template>
              </b-card>
            </div>

            <div @click="showModal()" class="div">
              <b-card no-body img-alt="Image" img-height="200px" img-top tag="article" style="max-width: 400.3px; text-align: left; background-color: #303d7a" class="mb-2 border-0" footer-bg-variant="transparent">
                <img src="../assets/Face14.png" class="face" />
                <template #footer>
                  <span class="foot">Face 014</span>
                </template>
              </b-card>
            </div>

          </b-col>
          <b-col class="space">
            <div @click="showModal()" class="div">
              <b-card no-body img-alt="Image" img-height="200px" img-top tag="article" style="max-width: 400.3px; text-align: left; background-color: #303d7a" class="mb-2 border-0" footer-bg-variant="transparent">
                <img src="../assets/Face3.png" class="face" />
                <template #footer>
                  <span class="foot">Face 003</span>
                </template>
              </b-card>
            </div>

            <div @click="showModal()" class="div">
              <b-card no-body img-alt="Image" img-height="200px" img-top tag="article" style="max-width: 400.3px; text-align: left; background-color: #303d7a" class="mb-2 border-0" footer-bg-variant="transparent" >
                <img src="../assets/Face6.png" class="face" />
                <template #footer>
                  <span class="foot">Face 006</span>
                </template>
              </b-card>
            </div>

            <div @click="showModal()" class="div">
              <b-card no-body img-alt="Image" img-height="200px" img-top tag="article" style="max-width: 400.3px; text-align: left; background-color: #303d7a" class="mb-2 border-0" footer-bg-variant="transparent">
                <img src="../assets/Face9.png" class="face" />
                <template #footer>
                  <span class="foot">Face 009</span>
                </template>
              </b-card>
            </div>

            <div @click="showModal()" class="div">
              <b-card no-body img-alt="Image" img-height="200px" img-top tag="article" style="max-width: 400.3px; text-align: left; background-color: #303d7a" class="mb-2 border-0" footer-bg-variant="transparent">
                <img src="../assets/Face12.png" class="face" />
                <template #footer>
                  <span class="foot">Face 012</span>
                </template>
              </b-card>
            </div>

            <div @click="showModal()" class="div">
              <b-card no-body img-alt="Image" img-height="200px" img-top tag="article" style="max-width: 400.3px; text-align: left; background-color: #303d7a" class="mb-2 border-0" footer-bg-variant="transparent">
                <img src="../assets/Face15.png" class="face" />
                <template #footer>
                  <span class="foot">Face 015</span>
                </template>
              </b-card>
            </div>
          </b-col>
        </b-row>

        <!-- ------------------------------------- Modal das faces ------------------------------------- -->

        <b-modal size="lg" ref="my-modal" hide-footer centered class="modal">
          <template #modal-header>
            <span class="nome">Face 01</span>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideModal3()">X</button>
          </template>
          <img src="../assets/FT1.png" width="766px" overlay />
          <p></p>
          <div class="buttons">
            <b-row>
              <b-col>
                <img @click="generateReport" src="../assets/exportar.png" class="export"/>
              </b-col>
              <b-col>
                <button class="favorito">Adicionar aos Favoritos</button>
              </b-col>
              <b-col>
                <button @click="hideModal" class="confirmar">Pedir Orçamento</button>
              </b-col>
            </b-row>
          </div>
        </b-modal>

        <!-- ------------------------------------- Modal para os orçamentos ------------------------------------- -->

        <b-modal ref="my-modal2" hide-footer centered class="modal">
          <template #modal-header>
            <span class="nome">Pedir Orçamento</span>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideModal2()">X</button>
          </template>
          <div class="contactos">
            <input v-model="message" class="edittext" placeholder="Nome*" />
            <p></p>
            <input v-model="message" class="edittext" placeholder="Email*" />
            <p></p>
            <input v-model="message" class="edittext" placeholder="Contacto" />
            <p></p>
            <textarea v-model="message" class="edittext" placeholder="Mensagem"></textarea>
            <p></p>
            <button class="confirmar2" @click="pedidoAlert()">Enviar</button>
          </div>
        </b-modal>
      </b-container>
    </div>
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
            <img src="../assets/FT1.png" >
        </section>
    </VueHtml2pdf>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Navbar from "@/components/Navbar.vue";
import VueHtml2pdf from 'vue-html2pdf'

export default {
  name: "Outdoors",
  components: {
    //Navbar,
    VueHtml2pdf
  },
  methods: {
    // ------------------------------------- Abrir modal das faces -------------------------------------
    showModal() {
      this.$refs["my-modal"].show();
    },
    // ------------------------------------- Abrir modal do orçamento e fechar o das faces -------------------------------------
    hideModal() {
      this.$refs["my-modal"].hide();
      this.$refs["my-modal2"].show();
    },
    // ------------------------------------- Fechar modas das faces -------------------------------------
    hideModal3() {
      this.$refs["my-modal"].hide();
    },
    // ------------------------------------- Fechar modal do orçamento -------------------------------------
    hideModal2() {
      this.$refs["my-modal2"].hide();
    },
     generateReport () {
            this.$refs.html2Pdf.generatePdf()
    },
    // ------------------------------------- Função do SweetAlert -------------------------------------
    pedidoAlert() {
      // this.logInModalShow = false;
      // this.registerModalShow = false;
      this.$swal.fire({
        icon: "success",
        title:
          "<div style='font-family:ChaletComprime CologneEighty;color:#a58c57;font-size:35pt;font-weight:400'>Pedido de orçamento enviado com sucesso!</div>",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
      });
    },
  },
};
</script>

<style scoped>

/* ------------------------------------- Estilização da imagem de fundo ------------------------------------- */
.fundo{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  opacity: 40%;
}

/* ------------------------------------- Estilização do footer das faces ------------------------------------- */
.foot{
  color: #fcfff7;
  font-family: Kayak Sans;
  font-size: 20px;
  font-weight: bold;
}

/* ------------------------------------- Estilização da área dos edit text ------------------------------------- */
.contactos {
  text-align: right;
}

/* ------------------------------------- Estilização do botão de fechar modal ------------------------------------- */
.close {
  font-size: 20px;
  border-width: 0px;
  background-color: #ffffff;
  align-content: space-between;
  color: #e80b0b;
}

/* ------------------------------------- Estilização do botão de exportar ------------------------------------- */
.export {
  width: 30px;
}

.export:hover {
  cursor: pointer;
}

/* ------------------------------------- Hover das faces ------------------------------------- */
.div:hover {
  cursor: pointer;
}

/* ------------------------------------- Títulos dos modals ------------------------------------- */
.nome {
  font-family: ChaletComprime CologneEighty;
  font-size: 28pt;
  color: #a58c57;
}

/* ------------------------------------- EditText ------------------------------------- */
.edittext {
  width: 100%;
  font-weight: bold;
  font-size: 14px;
}

/* ------------------------------------- Faces ------------------------------------- */
.face {
  width: 400px;
  height: 280px;
}

/* ------------------------------------- Espaços entre objetos ------------------------------------- */
.space {
  margin-top: 12rem;
}

/* ------------------------------------- Posição dos cards ------------------------------------- */
.card {
  z-index: -1;
}

/* ------------------------------------- Título das páginas ------------------------------------- */
.header {
  font-family: Kayak Sans;
  font-size: 35px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  margin-top: 8.9rem;
}

/* ------------------------------------- Botão ------------------------------------- */
.confirmar {
  background-color: #fcfff7;
  color: #e80b0b;
  width: 180px;
  border-radius: 6px;
  border-color: #e80b0b;
  border-width: 1px;
}

.confirmar:hover {
  color: #fcfff7;
  background-color: #e80b0b;
  width: 180px;
  border-radius: 6px;
}

/* ------------------------------------- Botão de favoritos ------------------------------------- */
.favorito {
  background-color: #fcfff7;
  color: #a58c57;
  margin-left: 15.6rem;
  width: 200px;
  border-radius: 6px;
  border-color: #a58c57;
  border-width: 1px;
}

.favorito:hover {
  color: #fcfff7;
  background-color: #a58c57;
  width: 200px;
  border-radius: 6px;
  border-color: #a58c57;
  border-width: 1px;
}

/* ------------------------------------- Botão ------------------------------------- */
.confirmar2 {
  background-color: #fcfff7;
  color: #e80b0b;
  width: 140px;
  border-radius: 6px;
  border-color: #e80b0b;
  border-width: 1px;
  align-content: flex-end;
}

.confirmar2:hover {
  color: #fcfff7;
  background-color: #e80b0b;
  border-radius: 6px;
}
</style>