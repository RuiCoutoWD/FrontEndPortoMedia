<template>
  <div class="home">
    <div class="quemsomos">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h1 class="header">OS NOSSOS OUTDOORS</h1>
            <div @click="showModal()" class="div">
              <b-card style="max-width: 20rem" class="mb-2 border-0">
                <img src="../assets/Face1.png" class="face" />
              </b-card>
            </div>
            <div @click="showModal()" class="div">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
                <img src="../assets/Face4.png" class="face" />
              </b-card>
            </div>
            <div @click="showModal()" class="div">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
                <img src="../assets/Face7.png" class="face" />
              </b-card>
            </div>
            <div @click="showModal()" class="div">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
                <img src="../assets/Face10.png" class="face" />
              </b-card>
            </div>
            <div @click="showModal()" class="div">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
                <img src="../assets/Face13.png" class="face" />
              </b-card>
            </div>
          </b-col>
          <b-col class="space">
            <div @click="showModal()" class="div">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
                <img src="../assets/Face2.png" class="face" />
              </b-card>
            </div>
            <div @click="showModal()" class="div">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
                <img src="../assets/Face5.png" class="face" />
              </b-card>
            </div>
            <div @click="showModal()" class="div">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
                <img src="../assets/Face8.png" class="face" />
              </b-card>
            </div>
            <div @click="showModal()" class="div">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
                <img src="../assets/Face11.png" class="face" />
              </b-card>
            </div>
            <div @click="showModal()" class="div">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
                <img src="../assets/Face14.png" class="face" />
              </b-card>
            </div>
          </b-col>
          <b-col class="space">
            <div @click="showModal()" class="div">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
                <img src="../assets/Face3.png" class="face" />
              </b-card>
            </div>
            <div @click="showModal()" class="div">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
                <img src="../assets/Face6.png" class="face" />
              </b-card>
            </div>
            <div @click="showModal()" class="div">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
                <img src="../assets/Face9.png" class="face" />
              </b-card>
            </div>
            <div @click="showModal()" class="div">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
                <img src="../assets/Face12.png" class="face" />
              </b-card>
            </div>
            <div @click="showModal()" class="div">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
                <img src="../assets/Face15.png" class="face" />
              </b-card>
            </div>
          </b-col>
        </b-row>
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
          <img src="../assets/Face1.png" width="766px" overlay />
          <p></p>
          <div class="buttons">
            <b-row>
              <b-col>
                <img src="../assets/exportar.png" class="export" />
              </b-col>
              <b-col>
                <button class="favorito">Adicionar aos Favoritos</button>
              </b-col>
              <b-col>
                <button @click="hideModal" class="confirmar">
                  Pedir Orçamento
                </button>
              </b-col>
            </b-row>
          </div>
        </b-modal>

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
            <input v-model="message" class="edittext" placeholder="Nome*" />
            <p></p>
            <input v-model="message" class="edittext" placeholder="Email*" />
            <p></p>
            <input v-model="message" class="edittext" placeholder="Contacto" />
            <p></p>
            <textarea
              v-model="message"
              class="edittext"
              placeholder="Mensagem"
            ></textarea>
            <p></p>
            <button class="confirmar2" @click="pedidoAlert()">Enviar</button>
          </div>
        </b-modal>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Navbar from "@/components/Navbar.vue";

export default {
  name: "Outdoors",
  components: {
    //Navbar,
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
      this.$refs["my-modal2"].show();
    },
    hideModal3() {
      this.$refs["my-modal"].hide();
    },
    hideModal2() {
      this.$refs["my-modal2"].hide();
    },
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
.contactos {
  text-align: right;
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

.div:hover {
  cursor: pointer;
}

.nome {
  font-family: ChaletComprime CologneEighty;
  font-size: 28pt;
  color: #a58c57;
}

.edittext {
  width: 100%;
  font-weight: bold;
  font-size: 14px;
}

.face {
  width: 400px;
  height: 280px;
}

.space {
  margin-top: 12rem;
}

.card {
  z-index: -1;
}

.header {
  font-family: Kayak Sans;
  font-size: 35px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  margin-top: 9rem;
}

.confirmar {
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

.confirmar2 {
  background-color: #fcfff7;
  color: #e80b0b;
  width: 140px;
  border-radius: 6px;
  border-color: #e80b0b;
  border-width: 1px;
  align-content: flex-end;
}

.confirmar:hover {
  color: #fcfff7;
  background-color: #e80b0b;
  width: 180px;
  border-radius: 6px;
}

.confirmar2:hover {
  color: #fcfff7;
  background-color: #e80b0b;
  border-radius: 6px;
}
</style>