<template>
  <div class="home">
    <div>
      <!-- ------------------------------------- Imagens de fundo ------------------------------------- -->
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
      <b-container class="bv-example-row">
        <div class="row">
          <div class="row pt-3 firstRow">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4 pb-4">
              <h1 class="header">DADOS PESSOAIS</h1>
              <div class="contactos">
                <h1 class="userInfoH1 pt-3">
                  Nome:
                  <span class="userInfoSpan" v-if="user.name == null"
                    >Ainda não adicionou o seu nome!</span
                  ><span class="userInfoSpan" v-else>{{ user.name }}</span>
                </h1>
                <h1 class="userInfoH1 pt-3">
                  Email:
                  <span class="userInfoSpan" v-if="user.email == null"
                    >Ainda não adicionou o seu email!</span
                  ><span class="userInfoSpan" v-else>{{ user.email }}</span>
                </h1>
                <h1 class="userInfoH1 pt-3">
                  Contacto:
                  <span class="userInfoSpan" v-if="user.phone_number == null"
                    >Ainda não adicionou o seu contacto!</span
                  ><span class="userInfoSpan" v-else>{{
                    user.phone_number
                  }}</span>
                </h1>
                <h1 class="userInfoH1 pt-3">
                  Empresa:
                  <span class="userInfoSpan" v-if="user.company == null"
                    >Ainda não adicionou a sua empresa!</span
                  ><span class="userInfoSpan" v-else>{{ user.company }}</span>
                </h1>
                <b-row>
                  <div
                    class="col-3 d-flex mx-auto justify-content-start pt-3 pb-3"
                  >
                    <button class="botao" @click="showModal">Editar</button>
                  </div>
                  <div class="col-9 pt-3 pb-3">
                    <button class="botaoPassword" @click="showModalPassword">
                      Mudar Palavra-Passe
                    </button>
                  </div>
                </b-row>
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
                  <label for="editName" class="editProfileLabel">Nome:</label>
                  <input
                    id="editName"
                    class="editProfileInput mb-2"
                    :placeholder="user.name"
                  />
                  <label for="editEmail" class="editProfileLabel">Email:</label>
                  <input
                    id="editEmail"
                    class="editProfileInput mb-2"
                    :placeholder="user.email"
                  />
                  <label for="editContact" class="editProfileLabel"
                    >Contacto:</label
                  >
                  <input
                    id="editContact"
                    class="editProfileInput mb-2"
                    :placeholder="user.phone_number"
                  />
                  <label for="editCompany" class="editProfileLabel"
                    >Empresa:</label
                  >
                  <input
                    id="editCompany"
                    class="editProfileInput mb-4"
                    :placeholder="user.company"
                  />
                  <div class="buttons">
                    <button @click="editPersonalData()" class="confirmar">
                      Confirmar
                    </button>
                  </div>
                </b-modal>
                <!-- -------------------------------------------------------------------- -->
                <b-modal ref="modalPassword" hide-footer centered class="mod">
                  <template #modal-header>
                    <span class="nome">Mudar Palavra-Passe</span>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      @click="hideModalPassword()"
                    >
                      X
                    </button>
                  </template>
                  <label for="password" class="editProfileLabel"
                    >Nova palavra-passe:</label
                  >
                  <input
                    id="password"
                    type="password"
                    class="editPasswordInput mb-2"
                  />
                  <label for="repeatPassword" class="editProfileLabel"
                    >Repetir palavra-passe:</label
                  >
                  <input
                    id="repeatPassword"
                    type="password"
                    class="editPasswordInput mb-2"
                  />
                  <div class="buttons">
                    <button @click="changePassword()" class="confirmar">
                      Confirmar
                    </button>
                  </div>
                </b-modal>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4 pb-4">
              <h1 class="header">ÚLTIMOS ALUGUERES</h1>

              <table class="table">
                <thead class="thead">
                  <tr>
                    <th scope="col" class="tableTxt">Face</th>
                    <th scope="col" class="tableTxt">Data Início</th>
                    <th scope="col" class="tableTxt">Data Término</th>
                    <th scope="col" class="tableTxt">Preço (€)</th>
                    <th scope="col" class="tableTxt">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="rent in rents" :key="rent.id">
                    <td class="tableTxt">Face {{ rent.outdoorNumber }}</td>
                    <td class="tableTxt">{{ rent.begin_date }}</td>
                    <td class="tableTxt">{{ rent.end_date }}</td>
                    <td class="tableTxt">{{ rent.monthly_price }}</td>
                    <td
                      class="text-center tableTxt"
                      v-if="rent.status == 'Aceite'"
                      style="color: green"
                    >
                      {{ rent.status }}
                    </td>
                    <td
                      class="text-center tableTxt"
                      v-else-if="rent.status == 'Terminado'"
                    >
                      {{ rent.status }}
                    </td>
                    <td
                      class="text-center tableTxt"
                      v-else
                      style="color: #e80b0b"
                    >
                      {{ rent.status }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row pt-3 divFav">
          <h1 class="header2">FAVORITOS</h1>
          <b-row>
            <div
              class="
                col-xl-2 col-lg-3 col-md-4 col-sm-4 col-xs-6
                d-flex
                justify-content-center
                mb-3
              "
              v-for="outdoor in filteredFavorites()"
              :key="outdoor.id"
            >
              <b-card
                no-body
                @click="showModalFav(outdoor.id, outdoor.name, outdoor.number)"
                title="Image Overlay"
                img-alt="Image"
                img-height="100px"
                img-top
                tag="article"
                style="
                  max-width: 200px;
                  text-align: left;
                  background-color: #303d7a;
                "
                class="border-0 card"
                footer-tag="footer"
                :id="outdoor.id"
              >
                <img
                  :src="photosSrc[outdoor.number - 1]"
                  class="favOutdoorImage"
                />
                <template #footer>
                  <span class="foot">{{ outdoor.name }}</span>
                </template>
              </b-card>
            </div>
          </b-row>
          <div class="span pb-5" v-if="favOutdoors.length > 6">
            <span @click="showModal2()" class="txt"
              >Ver todos os favoritos!</span
            >
          </div>
          <div class="span" v-else-if="favOutdoors.length == 0">
            Ainda não adicionou nenhum outdoor aos favoritos!
          </div>
          <b-modal size="lg" ref="my-modal2" hide-footer centered>
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
              <div
                class="
                  col-lg-4 col-md-6 col-sm-6 col-xs-12
                  d-flex
                  justify-content-center
                  mb-3
                "
                v-for="outdoor in favOutdoors"
                :key="outdoor.id"
              >
                <b-card
                  no-body
                  @click="
                    showModalFav(outdoor.id, outdoor.name, outdoor.number)
                  "
                  title="Image Overlay"
                  img-alt="Image"
                  img-height="100px"
                  img-top
                  tag="article"
                  style="
                    max-width: 200px;
                    text-align: left;
                    background-color: #303d7a;
                  "
                  class="border-0 card"
                  footer-tag="footer"
                  :id="outdoor.id"
                >
                  <img
                    :src="photosSrc[outdoor.number - 1]"
                    class="favOutdoorImage"
                  />
                  <template #footer>
                    <span class="foot">{{ outdoor.name }}</span>
                  </template>
                </b-card>
              </div>
            </b-row>
          </b-modal>
        </div>
      </b-container>
      <b-modal size="lg" ref="my-modalfav" hide-footer centered class="modal">
        <template #modal-header>
          <span class="nome">{{ outdoorName }}</span>
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
        <img :src="ftSrc[outdoorNumber - 1]" width="100%" overlay />
        <p></p>
        <div class="buttons">
          <div class="row">
            <div class="col-2 d-flex justify-content-start">
              <img src="../assets/exportar.png" class="export" />
            </div>
            <div class="col-10 d-flex justify-content-end">
              <button class="favorito" @click="addAndRemoveFavorite()">
                {{ favBtn }}
              </button>
            </div>
          </div>
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
  data() {
    return {
      user: {},
      outdoors: [],
      userFavorites: [],
      photosSrc: [],
      ftSrc: [],
      favOutdoors: [],
      rents: [],
      outdoorId: 0,
      outdoorName: "",
      outdoorNumber: 0,
      favBtn: "Remover dos Favoritos",
    };
  },
  mounted: function () {
    this.user = this.$store.getters.getUser.user;
    this.outdoors = this.$store.getters.getOutdoors.outdoors;
    this.userFavorites = this.$store.getters.getUserFavorites.userFavorites;
    this.photosSrc = this.$store.getters.getPhotosSrc;
    this.ftSrc = this.$store.getters.getFTSrc;

    for (const outdoor of this.outdoors) {
      for (const fav of this.userFavorites) {
        if (outdoor.id === fav.outdoorId) {
          this.favOutdoors.push(outdoor);
        }
      }
    }

    axios({
      method: "get",
      url: "https://portomedia.herokuapp.com/profile/rents",
      headers: {
        "x-access-token": this.$store.getters.getToken.token,
      },
    }).then((response) => {
      this.rents = response.data;
      console.log(this.rents);
    });

    console.log(this.favOutdoors);
  },
  methods: {
    showModalFav(id, name, number) {
      this.outdoorId = id;
      this.outdoorName = name;
      this.outdoorNumber = number;
      this.favBtn = "Remover dos Favoritos";
      this.$refs["my-modalfav"].show();
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    showModal2() {
      this.$refs["my-modal2"].show();
    },
    showModalPassword() {
      this.$refs["modalPassword"].show();
    },
    hideModalPassword() {
      this.$refs["modalPassword"].hide();
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
    editPersonalData() {
      let name = document.getElementById("editName").value;
      let email = document.getElementById("editEmail").value;
      let phone_number = document.getElementById("editContact").value;
      let company = document.getElementById("editCompany").value;

      let data = {};

      if (name != "") {
        data.name = name;
      }
      if (email != "") {
        data.email = email;
      }
      if (phone_number != "") {
        data.phone_number = phone_number;
      }
      if (company != "") {
        data.company = company;
      }

      console.log(data);

      axios({
        method: "put",
        url: "https://portomedia.herokuapp.com/profile",
        data: data,
        headers: {
          "x-access-token": this.$store.getters.getToken.token,
        },
      }).then(
        (response) => {
          console.log(response);
          this.pedidoAlert("Dados editados com sucesso!", 4000);

          axios({
            method: "get",
            url: "https://portomedia.herokuapp.com/profile/user",
            headers: {
              "x-access-token": this.$store.getters.getToken.token,
            },
          }).then((response) => {
            console.log(response);
            this.$store.commit("SET_USER", {
              user: response.data,
            });
            this.user = this.$store.getters.getUser.user;
            console.log(this.user);
          });
        },
        (error) => {
          this.failedAlert(
            "Ocorreu um erro! Por favor tente mais tarde!",
            4000
          );
          console.log(error);
        }
      );
    },
    addAndRemoveFavorite() {
      axios({
        method: "post",
        url:
          "https://portomedia.herokuapp.com/outdoors/favorite/" +
          this.outdoorId,
        headers: {
          "x-access-token": this.$store.getters.getToken.token,
        },
      }).then(
        (response) => {
          if (response.data.message === "Outdoor adicionado aos favoritos!") {
            this.pedidoAlert(response.data.message, 2000);
            this.favBtn = "Remover dos Favoritos";
          } else {
            this.failedAlert(response.data.message, 2000);
            this.favBtn = "Adicionar aos Favoritos";
          }
          axios({
            method: "get",
            url: "https://portomedia.herokuapp.com/profile/favorites",
            headers: {
              "x-access-token": this.$store.getters.getToken.token,
            },
          }).then((response) => {
            console.log(response);
            this.$store.commit("SET_USERFAVORITES", {
              userFavorites: response.data,
            });
            this.userFavorites = response.data;

            this.favOutdoors = [];
            for (const outdoor of this.outdoors) {
              for (const fav of this.userFavorites) {
                if (outdoor.id === fav.outdoorId) {
                  this.favOutdoors.push(outdoor);
                }
              }
            }
          });
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    filteredFavorites() {
      return this.favOutdoors.slice(0, 6);
    },
    changePassword() {
      axios({
        method: "put",
        url: "https://portomedia.herokuapp.com/trocar-password",
        headers: {
          "x-access-token": this.$store.getters.getToken.token,
        },
        data: {
          password: document.getElementById("password").value,
          repeatPassword: document.getElementById("repeatPassword").value,
        },
      }).then(
        (response) => {
          this.pedidoAlert(response.data.message, 2000);
          this.$refs["modalPassword"].hide();
          console.log(response);
        },
        (error) => {
          this.failedAlert(error.response.data.message, 2000);
          this.$refs["modalPassword"].hide();
          console.log(error);
        }
      );
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: Kayak Sans;
  src: url(../fonts/Kayak_Sans_Regular.otf);
}

@font-face {
  font-family: ChaletComprime CologneEighty;
  src: url(../fonts/ChaletComprime_CologneEighty.otf);
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
  transform: translateX(calc((75% - 100vw) / 2));
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

.firstRow {
  margin-top: 9rem;
}

.card-link {
  color: #e80b0b;
  text-decoration: none;
}

.cardNot {
  background-color: #fcfff7;
  border-radius: 6px;
  text-align: left;
}

.thead {
  color: #303d7a;
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
  color: #6b79b6;
}

.span {
  text-align: right;
  font-family: Kayak Sans;
  font-size: 16pt;
  text-decoration: none;
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
  font-family: Kayak Sans;
  font-size: 16px;
}

.favorito {
  background-color: #fcfff7;
  color: #a58c57;
  width: 200px;
  height: 30px;
  border-radius: 6px;
  border-color: #a58c57;
  border-width: 1px;
  font-family: Kayak Sans;
  font-size: 16px;
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
  height: 30px;
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
  height: 30px;
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
  color: #303d7a;
  width: 150px;
  border-radius: 10px;
  border-color: #303d7a;
  border-width: 1px;
  font-family: Kayak Sans;
  font-size: 20px;
}

.confirmar:hover {
  color: #fcfff7;
  background-color: #303d7a;
}

.header {
  font-family: ChaletComprime CologneEighty;
  font-size: 45px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
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
}

.contactos {
  text-align: left;
}

.edittext {
  width: 100%;
  font-weight: bold;
  font-size: 14px;
}

.editProfileInput {
  width: 100%;
  font-weight: 0;
  font-size: 18px;
  font-family: Kayak Sans;
  border-radius: 10px;
  border-width: 1px;
  padding: 4px;
}

.editPasswordInput {
  width: 100%;
  font-weight: 0;
  font-size: 18px;
  border-radius: 10px;
  border-width: 1px;
  padding: 4px;
}

.editProfileLabel {
  font-family: Kayak Sans;
  font-size: 18px;
  font-weight: bold;
}

.botao {
  background-color: #fcfff7;
  font-family: Kayak Sans;
  font-size: 20px;
  color: #303d7a;
  border-color: #303d7a;
  width: 120px;
  border-width: 1px;
  border-radius: 10px;
}

.botao:hover {
  background-color: #303d7a;
  color: #fcfff7;
}

.botaoPassword {
  background-color: #fcfff7;
  font-family: Kayak Sans;
  font-size: 20px;
  color: #303d7a;
  border-color: #303d7a;
  width: 200px;
  border-width: 1px;
  border-radius: 10px;
}

.botaoPassword:hover {
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

.userInfoH1 {
  font-family: Kayak Sans;
  font-weight: bold;
  font-size: 22px;
}

.userInfoSpan {
  font-family: Kayak Sans;
  font-weight: lighter;
  font-size: 22px;
}

.favOutdoorImage {
  height: 150px;
  width: 100%;
  object-fit: cover;
  border-radius: 6px 6px 0 0;
}

.tableTxt {
  font-family: Kayak Sans;
  font-size: 18px;
}

.divFav {
  z-index: -1 !important;
}
</style>
