<template>
  <div class="home">
    <div class="quemsomos">
      <img src="../assets/Fundosimagem-08.png" class="fundo" />
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h1 class="header">ÚLTIMOS ALUGUERES</h1>

            <table class="table">
              <thead class="thead">
                <tr>
                  <th scope="col">Face</th>
                  <th scope="col">Data do aluguer</th>
                  <th scope="col">Preço</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td @click="showModalFav()" class="td">Face 006</td>
                  <td>05/09/22</td>
                  <td></td>
                </tr>
                <tr>
                  <td @click="showModalFav()" class="td">Face 035</td>
                  <td>03/10/21</td>
                  <td></td>
                </tr>
                <tr>
                  <td @click="showModalFav()" class="td">Face 001</td>
                  <td>22/02/21</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <h1 class="header3">NOTIFICAÇÕES</h1>
            <div class="cardNot" style="width: 80%">
              <div class="card-body">
                <b-row>
                  <div class="col-10">
                    <p class="card-text">
                      A Face 06 estará disponível a partir de dia 05/07/22
                    </p>
                  </div>
                  <b-col>
                    <a href="#" class="card-link">X</a>
                  </b-col>
                </b-row>
              </div>
            </div>
            <p></p>
            <div class="cardNot" style="width: 80%">
              <div class="card-body">
                <b-row>
                  <div class="col-10">
                    <p class="card-text">
                      A Face 06 estará disponível a partir de dia 05/07/22
                    </p>
                  </div>
                  <b-col>
                    <a href="#" class="card-link">X</a>
                  </b-col>
                </b-row>
              </div>
            </div>
            <p></p>
            <div class="cardNot" style="width: 80%">
              <div class="card-body">
                <b-row>
                  <div class="col-10">
                    <p class="card-text">
                      A Face 06 estará disponível a partir de dia 05/07/22
                    </p>
                  </div>
                  <b-col>
                    <a href="#" class="card-link">X</a>
                  </b-col>
                </b-row>
              </div>
            </div>

            <p class="space2"></p>
          </b-col>
          <b-col>
            <h1 class="header">DADOS PESSOAIS</h1>
            <div class="contactos">
              <input class="edittext" placeholder="Nome" />
              <p class="space"></p>
              <input class="edittext" placeholder="Email" />
              <p class="space"></p>
              <input class="edittext" placeholder="Número" />
              <p class="space"></p>
              <input class="edittext" placeholder="Empresa" />
              <p></p>
              <div class="d-flex mx-auto justify-content-end">
                <button class="botao" @click="showModal">Editar</button>
              </div>
              <b-modal ref="my-modal" hide-footer centered class="mod">
                <template #modal-header>
                  <span class="nome">Editar os seus dados pessoais</span>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click="hideModal()"
                  >
                    X
                  </button>
                </template>
                <input id="editName" class="edittext2" placeholder="Nome" />
                <p class="space"></p>
                <input id="editEmail" class="edittext2" placeholder="Email" />
                <p class="space"></p>
                <input
                  id="editContact"
                  class="edittext2"
                  placeholder="Número"
                />
                <p class="space"></p>
                <input
                  id="editCompany"
                  class="edittext2"
                  placeholder="Empresa"
                />
                <p></p>
                <div class="buttons">
                  <button @click="editPersonalData()" class="confirmar">
                    Confirmar
                  </button>
                </div>
              </b-modal>
            </div>
            <h1 class="header2">FAVORITOS</h1>
            <div class="span">
              <p></p>
              <span @click="showModal2()" class="txt"
                >Veja os seus favoritos</span
              >
            </div>
            <b-modal ref="my-modal2" hide-footer centered>
              <template #modal-header>
                <span class="nome">Os seus favoritos</span>
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
              <b-row>
                <b-col>
                  <div class="div">
                    <b-card
                      no-body
                      @click="showModalFav()"
                      title="Image Overlay"
                      img-alt="Image"
                      img-height="200px"
                      img-top
                      tag="article"
                      style="
                        max-width: 200px;
                        text-align: left;
                        background-color: #303d7a;
                      "
                      class="mb-2 border-0 card"
                      footer-tag="footer"
                    >
                      <img src="../assets/faces/Face1.png" class="face" />
                      <template #footer>
                        <span class="foot">Face 001</span>
                      </template>
                    </b-card>
                  </div>
                </b-col>
                <b-col>
                  <div class="div">
                    <b-card
                      no-body
                      @click="showModalFav()"
                      title="Image Overlay"
                      img-alt="Image"
                      img-height="200px"
                      img-top
                      tag="article"
                      style="
                        max-width: 200px;
                        text-align: left;
                        background-color: #303d7a;
                      "
                      class="mb-2 border-0 card"
                      footer-tag="footer"
                    >
                      <img src="../assets/faces/Face1.png" class="face" />
                      <template #footer>
                        <span class="foot">Face 001</span>
                      </template>
                    </b-card>
                  </div>
                </b-col>
                <b-col>
                  <div class="div">
                    <b-card
                      no-body
                      @click="showModalFav()"
                      title="Image Overlay"
                      img-alt="Image"
                      img-height="200px"
                      img-top
                      tag="article"
                      style="
                        max-width: 200px;
                        text-align: left;
                        background-color: #303d7a;
                      "
                      class="mb-2 border-0 card"
                      footer-tag="footer"
                    >
                      <img src="../assets/faces/Face1.png" class="face" />
                      <template #footer>
                        <span class="foot">Face 001</span>
                      </template>
                    </b-card>
                  </div>
                </b-col>
              </b-row>
            </b-modal>
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
        <img src="../assets/faces/Face1.png" width="766px" overlay />
        <p></p>
        <div class="buttons">
          <b-row>
            <b-col>
              <div class="margem">
                <img src="../assets/exportar.png" class="export" />
              </div>
            </b-col>
            <b-col>
              <button class="favorito">Remover dos Favoritos</button>
            </b-col>
            <b-col>
              <button @click="hideModalFav()" class="confirmar2">
                Pedir Orçamento
              </button>
            </b-col>
          </b-row>
        </div>
      </b-modal>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
//import Navbar from "@/components/Navbar.vue";
const axios = require("axios");

export default {
  name: "Profile",
  components: {
    //Navbar,
  },
  methods: {
    showModalFav() {
      this.$refs["my-modalfav"].show();
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    showModal2() {
      this.$refs["my-modal2"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    hideModal2() {
      this.$refs["my-modal2"].hide();
    },
    hideModalFav() {
      this.$refs["my-modalfav"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    pedidoAlert() {
      // this.logInModalShow = false;
      // this.registerModalShow = false;
      this.$swal.fire({
        icon: "success",
        title:
          "<div style='font-family:ChaletComprime CologneEighty;color:#a58c57;font-size:35pt;font-weight:400'>Dados editados com sucesso!</div>",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
      });
    },
    editPersonalData() {
      axios({
        method: "put",
        url: "https://portomedia.herokuapp.com/profile",
        data: {
          name: document.getElementById("editName").value,
          email: document.getElementById("editEmail").value,
          phone_number: document.getElementById("editContact").value,
          company: document.getElementById("editCompany").value,
        },
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU0MTYwMTQ2LCJleHAiOjE2NTQyNDY1NDZ9.zT_8lUqQ_tF5f_RjLKXAurNzgoqdoJTjxMS6WTzyUgM",
        },
      }).then(
        (reponse) => {
          console.log(reponse);
          this.pedidoAlert();
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
.card-link {
  color: #e80b0b;
  text-decoration: none;
}

.cardNot {
  background-color: #fcfff7;
  border-radius: 6px;
  text-align: left;
}

.td:hover {
  cursor: pointer;
}

.thead {
  color: #303d7a;
}

.margem {
  text-align: left;
}

.table {
  width: 500px;
}

.buttons {
  text-align: right;
}

.txt {
  text-decoration: underline;
  color: #303d7a;
}

.txt:hover {
  text-decoration: underline;
  cursor: pointer;
  color: #303d7a;
}

.span {
  text-align: left;
}

.card:hover {
  cursor: pointer;
}

.confirmar2 {
  background-color: #fcfff7;
  color: #e80b0b;
  width: 180px;
  border-radius: 6px;
  border-color: #e80b0b;
  border-width: 1px;
}

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

.confirmar2:hover {
  color: #fcfff7;
  background-color: #e80b0b;
  width: 180px;
  border-radius: 6px;
}

.nome {
  font-family: ChaletComprime CologneEighty;
  font-size: 28pt;
  color: #a58c57;
}

.close {
  font-size: 20px;
  border-width: 0px;
  background-color: #ffffff;
  align-content: space-between;
  color: #e80b0b;
}

.export {
  width: 30px;
}

.fundo {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  opacity: 40%;
}

.foot {
  color: #fcfff7;
  font-family: Kayak Sans;
  font-size: 20px;
  font-weight: bold;
}

.btn {
  text-align: right;
}

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

.header {
  font-family: ChaletComprime CologneEighty;
  font-size: 45px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  margin-top: 9rem;
}

.header2 {
  font-family: ChaletComprime CologneEighty;
  font-size: 45px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  /* margin-top: 3rem; */
}

.header3 {
  font-family: ChaletComprime CologneEighty;
  font-size: 45px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  margin-top: 3rem;
}

.contactos {
  text-align: left;
}

.edittext {
  width: 100%;
  font-weight: bold;
  font-size: 14px;
}

.edittext2 {
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

.space {
  height: 6px;
}

.space2 {
  height: 20px;
}

.card-text {
  font-size: 15px;
}

.cross {
  font-size: 20px;
  text-align: right;
  text-decoration: none;
  color: #e80b0b;
}

.not {
  margin-right: 2rem;
  margin-top: -1rem;
}
</style>