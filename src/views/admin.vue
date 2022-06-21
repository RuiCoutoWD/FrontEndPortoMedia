<template>
  <div class="home">
    <div class="quemsomos">
      <b-container class="bv-example-row pt-3">
        <div class="row">
          <div class="col-6">
            <!-- Alterar email -->
            <h1 class="header">ALTERAÇÃO DE EMAIL</h1>
            <div class="contactos">
              <p class="currentEmailTxt">
                <b>Email Atual: </b>{{ currentEmail }}
              </p>
              <input
                class="inputCurrentEmail py-1 px-2"
                id="editEmail"
                placeholder="Novo Email"
              />
              <div class="pt-3">
                <input
                  class="inputCurrentEmail py-1 px-2"
                  id="editEmailAgain"
                  placeholder="Repetir Novo Email"
                />
              </div>
              <div class="pt-3">
                <button class="botao p-1" @click="changeCurrentEmail()">
                  Confirmar
                </button>
              </div>
            </div>

            <!-- Registo de alugueres -->
            <div class="pt-5">
              <h1 class="header">REGISTO DE ALUGUERES</h1>
              <div class="contactos">
                <input
                  class="inputRent py-1 px-2"
                  id="inputClName"
                  placeholder="Nome de Cliente"
                />
                <p class="space"></p>
                <input
                  class="inputRent py-1 px-2"
                  id="inputClEmail"
                  placeholder="Email"
                />
                <p class="space"></p>
                <input
                  class="inputRent py-1 px-2"
                  id="inputClFace"
                  placeholder="Face Alugada"
                />
                <p class="space"></p>
                <input
                  class="inputRent py-1 px-2"
                  placeholder="Preço do aluguer (€)"
                  id="inputClPrice"
                />
              </div>
              <!--  -->
              <p></p>
              <div class="calendar">
                <b-form-datepicker
                  id="datepickerBegin"
                  class="mb-2 datePicker"
                  placeholder="Data de Início"
                  v-model="datePickerBegin"
                ></b-form-datepicker>
                <b-form-datepicker
                  id="datepickerEnd"
                  class="mb-2 datePicker"
                  placeholder="Data de Término"
                  v-model="datePickerEnd"
                ></b-form-datepicker>
              </div>
              <div class="d-flex mx-auto justify-content-start">
                <button class="btnconfirm py-1" @click="createOutdoorRent()">
                  Confirmar
                </button>
                <button @click="generateReport" class="btnexport">
                  Exportar Base de Dados
                </button>
              </div>
            </div>
          </div>

          <!-- Alterar os outdoors visíveis -->
          <div class="col-6">
            <h1 class="header">ALTERAÇÃO DE OUTDOORS VISÍVEIS</h1>
            <!-- <button class="botaoAlterar" @click="showModalFav()">
              Alterar outdoors
            </button> -->
            <p class="d-flex justify-content-start pOutNumber">
              <b class="mr-1">Outdoors visíveis: </b>
              {{ visibleOutdoorsNumber() }} de 15
            </p>
            <div class="divVisOutdoors">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col" class="tableTxt">Face</th>
                    <th scope="col" class="tableTxt">Estado</th>
                    <th scope="col" class="tableTxt">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="outdoor in outdoors" :key="outdoor.id">
                    <th scope="row" class="tableTxt pt-3">
                      {{ outdoor.number }}
                    </th>
                    <td v-if="outdoor.visible == 1" class="tableTxt pt-3">
                      Visível
                    </td>
                    <td v-else class="tableTxt textInvis pt-3">Invisível</td>
                    <td v-if="outdoor.visible == 1">
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="
                          changeOutdoorVisibility(outdoor.id, outdoor.visible)
                        "
                      >
                        <i class="far fa-eye"></i
                        ><img src="../assets/hide.png" />
                      </button>
                    </td>
                    <td v-else>
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="
                          changeOutdoorVisibility(outdoor.id, outdoor.visible)
                        "
                      >
                        <i class="far fa-eye"></i
                        ><img src="../assets/show.png" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </b-container>
    </div>
    <!-- <b-modal size="lg" ref="my-modalfav" hide-footer centered class="modal">
      <template #modal-header>
        <span class="nome">Outdoors</span>
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
              <button type="button" class="btn btn-primary">
                <i class="far fa-eye"></i><img src="../assets/hide.png" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">002</th>
            <td>Não Visível</td>
            <td>
              <button type="button" class="btn btn-primary">
                <i class="far fa-eye"></i><img src="../assets/show.png" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">003</th>
            <td>Não Visível</td>
            <td>
              <button type="button" class="btn btn-primary">
                <i class="far fa-eye"></i><img src="../assets/show.png" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">004</th>
            <td>Não Visível</td>
            <td>
              <button type="button" class="btn btn-primary">
                <i class="far fa-eye"></i><img src="../assets/show.png" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">005</th>
            <td>Visível</td>
            <td>
              <button type="button" class="btn btn-primary">
                <i class="far fa-eye"></i><img src="../assets/hide.png" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">006</th>
            <td>Não Visível</td>
            <td>
              <button type="button" class="btn btn-primary">
                <i class="far fa-eye"></i><img src="../assets/show.png" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">007</th>
            <td>Não Visível</td>
            <td>
              <button type="button" class="btn btn-primary">
                <i class="far fa-eye"></i><img src="../assets/show.png" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">008</th>
            <td>Visível</td>
            <td>
              <button type="button" class="btn btn-primary">
                <i class="far fa-eye"></i
                ><img src="../assets/hide.png" id="img" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </b-modal> -->
  </div>
</template>



<script>
const axios = require("axios");

export default {
  computed: {
    rows() {
      return this.items.length;
    },
  },
  name: "About",
  components: {},
  data() {
    return {
      currentEmail: "",
      outdoors: [],
      datePickerBegin: "",
      datePickerEnd: "",
    };
  },
  mounted: function () {
    axios({
      method: "get",
      url: "https://portomedia.herokuapp.com/admin/changeEmail",
      headers: {
        "x-access-token": this.$store.getters.getToken.token,
      },
    }).then(
      (response) => {
        this.currentEmail = response.data.email;
        console.log(response);
        console.log(this.currentEmail);
      },
      (error) => {
        console.log(error);
      }
    );

    axios({
      method: "get",
      url: "https://portomedia.herokuapp.com/admin/outdoors",
    }).then(
      (response) => {
        this.outdoors = response.data;
        console.log(this.outdoors);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  methods: {
    showModalFav() {
      this.$refs["my-modalfav"].show();
    },
    hideModalFav() {
      this.$refs["my-modalfav"].hide();
    },
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
    // ------------------------------------- Função do SweetAlert -------------------------------------
    pedidoAlert(text, normalText, timer) {
      this.$swal.fire({
        icon: "success",
        title: `<div style='font-family:ChaletComprime CologneEighty;color:#a58c57;font-size:35pt;font-weight:400'>${text}</div>`,
        html: `<div style='font-family:Kayak Sans;font-size:16pt'>${normalText}</div>`,
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
    visibleOutdoorsNumber() {
      let count = 0;

      for (const outdoor of this.outdoors) {
        if (outdoor.visible == 1) {
          count += 1;
        }
      }

      return count;
    },
    changeCurrentEmail() {
      const email = document.getElementById("editEmail").value;
      const repeatEmail = document.getElementById("editEmailAgain").value;

      if (email == "" || repeatEmail == "") {
        this.failedAlert("Preencha os dois campos antes de submeter", 3000);
      } else {
        axios({
          method: "put",
          url: "https://portomedia.herokuapp.com/admin/changeEmail",
          headers: {
            "x-access-token": this.$store.getters.getToken.token,
          },
          data: {
            email: email,
            repeatEmail: repeatEmail,
          },
        }).then(
          (response) => {
            this.pedidoAlert("Email Mudado!", response.data.message, 3000);
            axios({
              method: "get",
              url: "https://portomedia.herokuapp.com/admin/changeEmail",
              headers: {
                "x-access-token": this.$store.getters.getToken.token,
              },
            }).then(
              (response) => {
                this.currentEmail = response.data.email;
              },
              (error) => {
                console.log(error);
              }
            );
            document.getElementById("editEmail").value = "";
            document.getElementById("editEmailAgain").value = "";
          },
          (error) => {
            this.failedAlert("O email que inseriu não é valido!", 3000);
            console.log(error);
          }
        );
      }
    },
    changeOutdoorVisibility(id, visible) {
      console.log("hello");
      let visibility = 0;
      if (visible == 0) {
        visibility = 1;
      }
      axios({
        method: "put",
        url: "https://portomedia.herokuapp.com/admin/outdoors/" + id,
        headers: {
          "x-access-token": this.$store.getters.getToken.token,
        },
        data: {
          visible: visibility,
        },
      }).then(
        (response) => {
          this.pedidoAlert(response.data.message, "", 2000);
          //? Atualizar array com todos os outdoors
          axios({
            method: "get",
            url: "https://portomedia.herokuapp.com/admin/outdoors",
          }).then(
            (response) => {
              this.outdoors = response.data;
              console.log(this.outdoors);
            },
            (error) => {
              console.log(error);
            }
          );
          //? Atualizar os outdoors visiveis para o cliente
          axios({
            method: "get",
            url: "https://portomedia.herokuapp.com/outdoors",
          }).then(
            (response) => {
              this.$store.commit("SET_OUTDOORS", {
                outdoors: response.data,
              });
              console.log(response.data);
            },
            (error) => {
              console.log(error);
            }
          );
        },
        () => {
          this.failedAlert("Ocorreu um erro! Tente novamente", 2000);
        }
      );
    },
    createOutdoorRent() {
      // const name = document.getElementById("inputClName").value;
      // const email = document.getElementById("inputClEmail").value;
      // const face = document.getElementById("inputClFace").value;
      // const price = document.getElementById("inputClPrice").value;

      this.datePickerBegin = "";
      this.datePickerEnd = "";
    },
  },
};
</script>

<style scoped>
.quemsomos {
  position: absolute;
  overflow-y: hidden;
  width: 100%;
  z-index: -1;
  margin-top: 10rem;
}

.dropdw {
  text-align: left;
}

.header {
  font-family: ChaletComprime CologneEighty;
  font-size: 45px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
}

.calendar {
  text-align: left;
}

.contactos {
  text-align: left;
}

.botao {
  background-color: #fcfff7;
  color: #303d7a;
  width: 100px;
  border-width: 1px;
  border-radius: 6px;
  font-family: Kayak Sans;
  font-size: 18px;
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

.btnconfirm {
  background-color: #fcfff7;
  font-size: 16px;
  color: #303d7a;
  width: 100px;
  border-width: 1px;
  border-radius: 6px;
  margin-right: 1rem;
  font-family: Kayak Sans;
}

.btnconfirm:hover {
  background-color: #303d7a;
  color: #fcfff7;
}

.btnexport {
  font-size: 16px;
  background-color: #fcfff7;
  color: #303d7a;
  width: 180px;
  border-width: 1px;
  border-radius: 6px;
  font-family: Kayak Sans;
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

.currentEmailTxt {
  font-family: Kayak Sans;
  font-size: 16pt;
}

.inputCurrentEmail {
  width: 85%;
  font-family: Kayak Sans;
  border-radius: 6px;
  border-width: 1px;
  font-size: 16px;
}

.inputRent {
  width: 85%;
  font-family: Kayak Sans;
  border-radius: 6px;
  border-width: 1px;
  font-size: 16px;
}

.datePicker {
  width: 85%;
  font-family: Kayak Sans;
  border-radius: 6px;
  border-width: 1px;
  font-size: 16px;
}

.divVisOutdoors {
  overflow: auto;
  height: 37rem;
}

.tableTxt {
  font-family: Kayak Sans;
  font-size: 18px;
}

.textInvis {
  color: red;
}

.btn {
  background-color: white;
  border-width: 1px;
  border-color: #303d7a;
}

.pOutNumber {
  font-family: Kayak Sans;
  font-size: 16pt;
}
</style>