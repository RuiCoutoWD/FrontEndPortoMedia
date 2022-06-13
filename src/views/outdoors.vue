<template>
  <!-- ------------------------------------- Fundo do website ------------------------------------- -->
  <div class="container">
    <img
      src="../assets/Fundosimagem-08.png"
      class="backgroundLarge d-none d-xl-block"
    />
    <img
      src="../assets/Fundosimagem-08.png"
      class="backgroundMedium d-none d-md-block d-xl-none"
    />
    <img
      src="../assets/Fundosimagem-08.png"
      class="backgroundSmall d-block d-md-none"
    />

    <div class="mainDiv">
      <b-container class="bv-example-row">
        <b-row>
          <h1 class="header">OS NOSSOS OUTDOORS</h1>
        </b-row>
        <b-row>
          <!-- ------------------------------------- Cards para as 15 faces ------------------------------------- -->
          <div class="col-4" v-for="outdoor of outdoors" :key="outdoor.id">
            <div @click="showModal()" class="div">
              <b-card
                no-body
                title="Image Overlay"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="
                  max-width: 400.3px;
                  text-align: left;
                  background-color: #303d7a;
                "
                class="mb-2 border-0 card"
                footer-tag="footer"
                :id="outdoor.id"
              >
                <img v-bind:src="photosSrc[outdoor.number - 1]" class="face" />
                <template #footer>
                  <span class="foot">{{ outdoor.name }}</span>
                </template>
              </b-card>
            </div>
          </div>
        </b-row>

        <!-- ------------------------------------- Modal das faces ------------------------------------- -->

        <b-modal size="lg" ref="my-modal" hide-footer centered class="modal">
          <template #modal-header>
            <span class="nome">Face 01</span>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="hideModal3()"
            >
              X
            </button>
          </template>
          <img src="../assets/FT1.png" width="766px" overlay />
          <p></p>
          <div class="buttons">
            <b-row>
              <b-col>
                <img
                  @click="generateReport"
                  src="../assets/exportar.png"
                  class="export"
                />
              </b-col>
              <b-col>
                <button @click="addAndRemoveFavorite()" class="favorito">
                  Adicionar aos Favoritos
                </button>
              </b-col>
              <b-col>
                <button @click="hideModal" class="confirmar">
                  Pedir Orçamento
                </button>
              </b-col>
            </b-row>
          </div>
        </b-modal>

        <!-- ------------------------------------- Modal para os orçamentos ------------------------------------- -->

        <b-modal ref="my-modal2" hide-footer centered class="modal">
          <template #modal-header>
            <span class="nome">Pedir Orçamento</span>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="hideModal2()"
            >
              X
            </button>
          </template>
          <div class="contactos">
            <input id="inputName" class="edittext" placeholder="Nome*" />
            <p></p>
            <input id="inputEmail" class="edittext" placeholder="Email*" />
            <p></p>
            <input
              id="inputContact"
              type="number"
              class="edittext"
              placeholder="Contacto"
            />
            <p></p>
            <input id="inputCompany" class="edittext" placeholder="Empresa" />
            <p></p>
            <textarea
              id="inputMessage"
              class="edittext"
              placeholder="Mensagem"
            ></textarea>
            <p></p>
            <button class="confirmar2" @click="outdoorBudgetRequest()">
              Enviar
            </button>
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
          <img src="../assets/FT1.png" />
        </section>
      </VueHtml2pdf>
    </div>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
const axios = require("axios");

export default {
  name: "Outdoors",
  components: {
    VueHtml2pdf,
  },
  data() {
    return {
      outdoors: [],
      photosSrc: [
        require("@/assets/faces/Face1.png"),
        require("@/assets/faces/Face2.png"),
        require("@/assets/faces/Face3.png"),
        require("@/assets/faces/Face4.png"),
        require("@/assets/faces/Face5.png"),
        require("@/assets/faces/Face6.png"),
        require("@/assets/faces/Face7.png"),
        require("@/assets/faces/Face8.png"),
        require("@/assets/faces/Face9.png"),
        require("@/assets/faces/Face10.png"),
        require("@/assets/faces/Face11.png"),
        require("@/assets/faces/Face12.png"),
        require("@/assets/faces/Face13.png"),
        require("@/assets/faces/Face14.png"),
        require("@/assets/faces/Face15.png"),
        // require("@/assets/faces/Face16.png"),
        // require("@/assets/faces/Face17.png"),
        // require("@/assets/faces/Face18.png"),
        // require("@/assets/faces/Face19.png"),
        // require("@/assets/faces/Face20.png"),
        // require("@/assets/faces/Face21.png"),
        // require("@/assets/faces/Face22.png"),
        // require("@/assets/faces/Face23.png"),
        // require("@/assets/faces/Face24.png"),
        // require("@/assets/faces/Face25.png"),
        // require("@/assets/faces/Face26.png"),
        // require("@/assets/faces/Face27.png"),
        // require("@/assets/faces/Face28.png"),
        // require("@/assets/faces/Face29.png"),
        // require("@/assets/faces/Face30.png"),
        // require("@/assets/faces/Face31.png"),
        // require("@/assets/faces/Face32.png"),
        // require("@/assets/faces/Face33.png"),
        // require("@/assets/faces/Face34.png"),
        // require("@/assets/faces/Face35.png"),
        // require("@/assets/faces/Face36.png"),
        // require("@/assets/faces/Face37.png"),
        // require("@/assets/faces/Face38.png"),
        // require("@/assets/faces/Face39.png"),
        // require("@/assets/faces/Face40.png"),
        // require("@/assets/faces/Face41.png"),
        // require("@/assets/faces/Face42.png"),
        // require("@/assets/faces/Face43.png"),
        // require("@/assets/faces/Face44.png"),
        // require("@/assets/faces/Face45.png"),
        // require("@/assets/faces/Face46.png"),
        // require("@/assets/faces/Face47.png"),
        // require("@/assets/faces/Face48.png"),
        // require("@/assets/faces/Face49.png"),
        // require("@/assets/faces/Face50.png"),
      ],
    };
  },
  mounted: function () {
    this.outdoors = this.$store.getters.getOutdoors.outdoors;
    console.log(this.outdoors);
    console.log(this.outdoors[0].photoSrc);
    console.log(this.photosSrc);
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
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
    // ------------------------------------- Função do SweetAlert -------------------------------------
    pedidoAlert(text, timer) {
      this.$swal.fire({
        icon: "success",
        title: `<div style='font-family:ChaletComprime CologneEighty;color:#a58c57;font-size:35pt;font-weight:400'>${text}</div>`,
        showConfirmButton: false,
        timer: timer,
        timerProgressBar: true,
      });
    },
    // ------------------------------------- Função do SweetAlert -------------------------------------
    failedAlert(text, timer) {
      this.$swal.fire({
        icon: "error",
        title: `<div style='font-family:ChaletComprime CologneEighty;color:#a58c57;font-size:35pt;font-weight:400'>${text}</div>`,
        showConfirmButton: false,
        timer: timer,
        timerProgressBar: true,
      });
    },
    outdoorBudgetRequest() {
      axios({
        method: "post",
        url: "https://portomedia.herokuapp.com/outdoors/1",
        // + outdoorId,
        data: {
          message: document.getElementById("inputMessage").value,
          name: document.getElementById("inputName").value,
          contact: document.getElementById("inputContact").value,
          email: document.getElementById("inputEmail").value,
          company: document.getElementById("inputCompany").value,
        },
        headers: {
          "x-access-token": this.$store.getters.getToken.token,
        },
      }).then(
        (response) => {
          this.pedidoAlert("Pedido de orçamento enviado com sucesso!", 4000);
          this.hideModal2();
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    addAndRemoveFavorite() {
      axios({
        method: "post",
        url: "https://portomedia.herokuapp.com/outdoors/favorite/1",
        headers: {
          "x-access-token": this.$store.getters.getToken.token,
        },
      }).then(
        (response) => {
          if (response.data.message === "Outdoor adicionado aos favoritos!") {
            this.pedidoAlert(response.data.message, 2000);
          } else {
            this.failedAlert(response.data.message, 2000);
          }
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<style scoped>
.mainDiv {
  margin-top: 10rem;
  z-index: -1;
  position: absolute;
  overflow-y: scroll;
  overflow-y: hidden;
}

.backgroundLarge {
  transform: translateX(calc((100% - 100vw) / 2));
  min-width: 100%;
  height: 100%;
  position: fixed;
  z-index: -2;
  bottom: 0;
  right: 0;
  opacity: 40%;
}

.backgroundMedium {
  transform: translateX(calc((70% - 100vw) / 2));
  min-width: 100%;
  height: 100%;
  position: fixed;
  z-index: -2;
  bottom: 0;
  right: 0;
  opacity: 40%;
}

.backgroundSmall {
  transform: translateX(calc((50% - 100vw) / 2));
  min-width: 100%;
  height: 100%;
  position: fixed;
  z-index: -2;
  bottom: 0;
  right: 0;
  opacity: 40%;
}

/* ------------------------------------- Estilização da imagem de fundo ------------------------------------- */
.fundo {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  opacity: 40%;
}

/* ------------------------------------- Estilização do footer das faces ------------------------------------- */
.foot {
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

/* ------------------------------------- Posição dos cards ------------------------------------- */
.card {
  z-index: -1;
}

/* ------------------------------------- Título das páginas ------------------------------------- */
.header {
  font-family: ChaletComprime CologneEighty;
  font-size: 45px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
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
