<template>
  <div class="home">
    <div class="quemsomos">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h1 class="header">Alteração de Email</h1>
            <h1 class="header">Alteração de outdoors visíveis</h1>
          </b-col>
          <b-col>
            <h1 class="header">Registo de alugueres</h1>
            <div>
              <b-row>
                <b-col>
                  <div class="contactos">
                    <input
                      v-model="message"
                      class="edittext"
                      placeholder="Nome de Cliente"
                    />
                    <p class="space"></p>
                    <input
                      v-model="message"
                      class="edittext"
                      placeholder="Email"
                    />
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
                </b-col>
                <b-col>
                  <div class="calendar">
                    <b-calendar
                    width="200px"
                      v-model="value"
                      @context="onContext"
                      locale="pt-PT"
                      hide-header="true"
                    ></b-calendar>
                  </div>
                </b-col>
              </b-row>
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
  name: "About",
  components: {
    //Navbar,
  },
};
</script>

<style scoped>
.header {
  font-family: Kayak Sans;
  font-size: 25px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  margin-top: 9rem;
}

.calendar {
  margin-right: 6rem;
}

.contactos {
  text-align: left;
}
</style>