<template>
  <div class="home">
    <div class="quemsomos">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h1 class="header">OS NOSSOS OUTDOORS</h1>
            <div @click="showModal()">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              <img src="../assets/Face1.png" class="face">
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              <img src="../assets/Face4.png" class="face">
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              <img src="../assets/Face7.png" class="face">
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              <img src="../assets/Face10.png" class="face">
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              <img src="../assets/Face13.png" class="face">
              </b-card>
            </div>

          </b-col>
          <b-col class="space">
                        <div @click="showModal()">
              <b-card
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              <img src="../assets/Face2.png" class="face">
              </b-card>
                        </div> 
                                    <div @click="showModal()">
              <b-card
                
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              <img src="../assets/Face5.png" class="face">
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              <img src="../assets/Face8.png" class="face">
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              <img src="../assets/Face11.png" class="face">
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              <img src="../assets/Face14.png" class="face">
              </b-card>
            </div>

             </b-col>
          <b-col class="space"> 
                        <div @click="showModal()">
              <b-card
                
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              <img src="../assets/Face3.png" class="face">
              </b-card>
                        </div>
                                    <div @click="showModal()">
              <b-card
                
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              <img src="../assets/Face6.png" class="face">
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
               
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              <img src="../assets/Face9.png" class="face">
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              <img src="../assets/Face12.png" class="face">
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              <img src="../assets/Face15.png" class="face">
              </b-card>
            </div>
          </b-col>
        </b-row>
              <b-modal
              size="lg"
                ref="my-modal"
                hide-footer
                centered
                class="modal"
              >
              <template #modal-header>
                <span class="nome">Face 01</span>
              </template>
              <img src="../assets/Face1.png" width="766px" overlay>
                <p></p>
                <button @click="hideModal"  class="confirmar">Pedir Orçamento</button>
              </b-modal>

              <b-modal
              size=""
                ref="my-modal2"
                hide-footer
                centered
                title="Edite os seus dados pessoais"
                class="modal"
              >
              <div class="contactos">
              <input v-model="message" class="edittext" placeholder="Nome*" />
              <p></p>
              <input v-model="message" class="edittext" placeholder="Email*" />
              <p></p>
              <input v-model="message" class="edittext" placeholder="Número" />
              <p></p>
              <textarea
                v-model="message"
                class="edittext"
                placeholder="Mensagem"
              ></textarea>
              <p></p>
              <button class="botao">Enviar</button>
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
    hideModal2() {
      this.$refs["my-modal2"].hide();
    },
  },
};
</script>

<style scoped>
.nome {
  font-family: ChaletComprime CologneEighty;
  font-size: 28pt;
  color: #a58c57;
}

.edittext {
  width: 464px;
  font-weight: bold;
  font-size: 14px;
}

.face{
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
  margin-left: 36.6rem;
  width: 180px;
  border-radius: 6px;
  border-color: #e80b0b;
  border-width: 1px;
}

.confirmar:hover {
  color: #fcfff7;
  background-color: #e80b0b;
  margin-left: 36.6rem;
  width: 180px;
  border-radius: 6px;
}
</style>