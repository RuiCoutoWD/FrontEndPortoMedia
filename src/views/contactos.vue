<template>
  <div class="home">
    <div class="quemsomos">
      <!-- ------------------------------------- Imagens de fundo ------------------------------------- -->
      <img src="../assets/Fundosimagem-08.png" class="fundo">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <!-- ------------------------------------- Secção localização ------------------------------------- -->
            <h1 class="header">LOCALIZAÇÃO</h1>
            <div class="contactos">
              <img src="../assets/mapa.png" class="img" />
              <p class="morada">
                Zona Industrial Arcos do Sardão, Avenida Arcos do Sardão,<br />
                Nº 391-A, 4430-434, Vila Nova de Gaia
              </p>
            </div>

            <!-- ------------------------------------- Secção contactos ------------------------------------- -->
            <h1 class="header2">CONTACTOS</h1>
            <div class="contactos">
              <img src="../assets/email.png" alt="email" class="icons" />
              <a>: mail@planetapublicidade.com </a>
              <p></p>
              <img src="../assets/telefone.png" alt="telefone" class="icons" />
              <a>: 22 145 01 20</a>
            </div>
          </b-col>
          <b-col>
            <!-- ------------------------------------- Secção do formulário ------------------------------------- -->
            <h1 class="header">CONTACTE-NOS</h1>
            <div class="contactos">
              <input v-model="message" class="edittext" placeholder="Nome*" />
              <p class="space"></p>
              <input v-model="message" class="edittext" placeholder="Email*" />
              <p class="space"></p>
              <input v-model="message" class="edittext" placeholder="Número" />
              <p class="space"></p>
              <textarea v-model="message" class="edittext2" placeholder="Mensagem"></textarea>
              <p></p>
              <button class="botao">Enviar</button>
            </div>

            <!-- Secção das redes sociais ------------------------------------- -->
            <div class="redes">
              <h1 class="header2">REDES SOCIAIS</h1>
              <a href="https://www.instagram.com/planetapublicidade/" target="_blank"><img src="../assets/instagram.png" class="icons" /></a>
              <a href="https://www.facebook.com/planetapublicidadeexterior/" target="_blank"><img src="../assets/facebook.png" class="facebook"></a>
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

/* ------------------------------------- Imagem de fundo ------------------------------------- */
.fundo{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  opacity: 40%;
}

/* ------------------------------------- Ícones dos contactos ------------------------------------- */
.icons {
  width: 30px;
  height: 30px;
}

/* ------------------------------------- Ícones das redes sociais ------------------------------------- */
.facebook {
  width: 30px;
  height: 30px;
  margin-left: 1rem;
}

/* ------------------------------------- Área dos edittext ------------------------------------- */
.contactos {
  text-align: left;
}

/* ------------------------------------- Título das páginas ------------------------------------- */
.header {
  font-family: Kayak Sans;
  font-size: 35px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  margin-top: 9rem;
}

/* ------------------------------------- Título das páginas ------------------------------------- */
.header2 {
  font-family: Kayak Sans;
  font-size: 35px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  margin-top: 2rem;
}

/* ------------------------------------- Área das redes ------------------------------------- */
.redes {
  text-align: left;
  margin-bottom: 1rem;
}

/* ------------------------------------- Mapa ------------------------------------- */
.img {
  width: 450px;
  height: 280px;
}

/* ------------------------------------- Edittext ------------------------------------- */
.edittext {
  width: 500px;
  font-weight: bold;
  font-size: 14px;
}

/* ------------------------------------- Espaço entre objetos ------------------------------------- */
.space {
  height: 6px;
}

/* ------------------------------------- Edittext ------------------------------------- */
.edittext2 {
  width: 500px;
  height: 130px;
  font-weight: bold;
  font-size: 14px;
}

/* ------------------------------------- Texto morada ------------------------------------- */
.morada {
  font-size: 15px;
  text-decoration: none;
}

/* ------------------------------------- Botão enviar ------------------------------------- */
.botao {
  background-color: #fcfff7;
  color: #303d7a;
  width: 100px;
  border-width: 1px;
  margin-left: 25rem;
  border-radius: 6px;
}

.botao:hover {
  background-color: #303d7a;
  color: #fcfff7;
}

</style>

