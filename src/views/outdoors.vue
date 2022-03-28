<template>
  <div class="home">
    <div class="quemsomos">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h1 class="header">OS NOSSOS OUTDOORS</h1>
            <div @click="showModal()">
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              </b-card>
            </div>
                          <b-modal
              size="lg"
                ref="my-modal"
                hide-footer
                centered
                title="Edite os seus dados pessoais"
                class="modal"
              >
              <img src="https://picsum.photos/600/300/?image=25" width="766px" overlay>
                <p></p>
                <button @click="hideModal" class="confirmar">Pedir Orçamento</button>
              </b-modal>
          </b-col>
          <b-col class="space">
                        <div @click="showModal()">
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              </b-card>
                        </div> 
                                    <div @click="showModal()">
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              </b-card>
            </div>

             </b-col>
          <b-col class="space"> 
                        <div @click="showModal()">
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              </b-card>
                        </div>
                                    <div @click="showModal()">
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              </b-card>
            </div>
                        <div @click="showModal()">
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-height="200px"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2 border-0"
              >
              </b-card>
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
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
  },
};
</script>

<style scoped>
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
  color: #fcfff7;
  background-color: #e80b0b;
  margin-left: 17.9rem;
  width: 180px;
}
</style>