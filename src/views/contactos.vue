<template>
  <div class="home">
    <div class="quemsomos">
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
      <!-- ------------------------------------- Container Big Devices ------------------------------------- -->
      <b-container class="bv-example-row d-none d-xl-block">
        <b-row class="mainRow">
          <b-col>
            <!-- ------------------------------------- Secção localização ------------------------------------- -->
            <div class="contactos">
              <h1 class="header">LOCALIZAÇÃO</h1>
              <a
                target="_blank"
                href="https://www.google.pt/maps/dir//Planeta+Publicidade,+Zona+Industrial+dos+Arcos+do+Sardão+391,+4430-434+Vila+Nova+de+Gaia/@41.1169036,-8.5833931,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0xd247b5073b3d047:0x8e8e208c83d5a844!2m2!1d-8.5811991!2d41.1168996!3e0?hl=pt-PT"
              >
                <img src="../assets/mapa.png" class="img-fluid img"
              /></a>
              <p class="morada">
                Zona Industrial Arcos do Sardão, Avenida Arcos do Sardão,<br />
                Nº 391-A, 4430-434, Vila Nova de Gaia
              </p>
            </div> </b-col
          ><b-col>
            <!-- ------------------------------------- Secção do formulário ------------------------------------- -->
            <h1 class="header">CONTACTE-NOS</h1>
            <div class="contactos">
              <input class="edittext px-2" id="inputName" placeholder="Nome*" />
              <p class="space"></p>
              <input
                class="edittext px-2"
                id="inputEmail"
                placeholder="Email*"
              />
              <p class="space"></p>
              <input
                class="edittext px-2"
                id="inputContact"
                placeholder="Número"
              />
              <p class="space"></p>
              <textarea
                class="edittext2 px-2"
                id="inputMessage"
                placeholder="Mensagem"
              ></textarea>
              <p></p>
              <div class="divb">
                <button class="botao" @click="inputForm()">Enviar</button>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="my-4">
          <!-- ------------------------------------- Secção contactos ------------------------------------- -->
          <div class="contactos2 text-center">
            <h1 class="header2 text-center">CONTACTOS</h1>
            <img src="../assets/email.png" alt="email" class="icons" />
            <a> : geral@portomedia.pt </a>
            <p></p>
            <img src="../assets/telefone.png" alt="telefone" class="icons" />
            <a> : 22 145 01 20</a>
            <p></p>
            <a
              href="https://www.instagram.com/planetapublicidade/"
              target="_blank"
              ><img src="../assets/instagram.png" class="icons"
            /></a>
            <a
              href="https://www.facebook.com/planetapublicidadeexterior/"
              target="_blank"
              ><img src="../assets/facebook.png" class="facebook"
            /></a>
          </div>
        </b-row>
      </b-container>
      <!-- ------------------------------------- Container Small Devices ------------------------------------- -->
      <b-container class="bv-example-row d-xl-none">
        <b-row class="mainRow">
          <div class="col-lg-6">
            <!-- ------------------------------------- Secção localização ------------------------------------- -->
            <div class="contactos text-center">
              <h1 class="header text-center">LOCALIZAÇÃO</h1>
              <a
                target="_blank"
                href="https://www.google.pt/maps/dir//Planeta+Publicidade,+Zona+Industrial+dos+Arcos+do+Sardão+391,+4430-434+Vila+Nova+de+Gaia/@41.1169036,-8.5833931,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0xd247b5073b3d047:0x8e8e208c83d5a844!2m2!1d-8.5811991!2d41.1168996!3e0?hl=pt-PT"
              >
                <img src="../assets/mapa.png" class="img-fluid px-3"
              /></a>
              <p class="morada">
                Zona Industrial Arcos do Sardão, Avenida Arcos do Sardão,<br />
                Nº 391-A, 4430-434, Vila Nova de Gaia
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <!-- ------------------------------------- Secção contactos ------------------------------------- -->
            <div class="contactos text-center">
              <h1 class="header2 text-center">CONTACTOS</h1>
              <div class="mt-lg-5">
                <img src="../assets/email.png" alt="email" class="icons" />
                <a> : geral@portomedia.pt </a>
              </div>
              <div class="mt-4">
                <img
                  src="../assets/telefone.png"
                  alt="telefone"
                  class="icons"
                />
                <a> : 22 145 01 20</a>
              </div>
              <div class="mt-4">
                <a
                  href="https://www.instagram.com/planetapublicidade/"
                  target="_blank"
                  ><img src="../assets/instagram.png" class="icons"
                /></a>
                <a
                  href="https://www.facebook.com/planetapublicidadeexterior/"
                  target="_blank"
                  ><img src="../assets/facebook.png" class="facebook"
                /></a>
              </div>
            </div>
          </div>
        </b-row>
        <b-row class="my-4">
          <!-- ------------------------------------- Secção do formulário ------------------------------------- -->
          <h1 class="header">CONTACTE-NOS</h1>
          <div>
            <input class="edittext px-2" id="inputName" placeholder="Nome*" />
            <p class="space"></p>
            <input class="edittext px-2" id="inputEmail" placeholder="Email*" />
            <p class="space"></p>
            <input
              class="edittext px-2"
              id="inputContact"
              placeholder="Número"
            />
            <p class="space"></p>
            <textarea
              class="edittext2 px-2"
              id="inputMessage"
              placeholder="Mensagem"
            ></textarea>
            <p></p>
            <div class="divb">
              <button class="botao" @click="inputForm()">Enviar</button>
            </div>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Navbar from "@/components/Navbar.vue";
const axios = require("axios");

export default {
  name: "About",
  components: {
    //Navbar,
  },
  methods: {
    inputForm() {
      console.log("arroz");
      axios({
        method: "post",
        url: "https://portomedia.herokuapp.com/contacts",
        data: {
          name: document.getElementById("inputName").value,
          email: document.getElementById("inputEmail").value,
          contact: document.getElementById("inputContact").value,
          message: document.getElementById("inputMessage").value,
        },
      }).then(
        (reponse) => {
          this.contactSuccessAlert();
          console.log(reponse);
        },
        (error) => {
          this.contactFailedAlert();
          console.log(error);
        }
      );
    },
    contactSuccessAlert() {
      this.$swal.fire({
        icon: "success",
        title:
          "<div style='font-family:ChaletComprime CologneEighty;color:#a58c57;font-size:35pt;font-weight:400'>Mensagem enviada com sucesso!</div>",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
      });
    },
    contactFailedAlert() {
      this.$swal.fire({
        icon: "error",
        title:
          "<div style='font-family:ChaletComprime CologneEighty;color:#a58c57;font-size:35pt;font-weight:400'>Oops!</div>",
        html: "<div style='font-family:Kayak Sans;font-size:16pt'>Ocorreu um erro ao tentar enviar a mensagem, por favor tente novamente mais tarde!</div>",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
      });
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

/* ------------------------------------- Imagem de fundo ------------------------------------- */
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

.quemsomos {
  position: absolute;
  overflow-y: hidden;
  width: 100%;
  z-index: -1;
  margin-top: 10rem;
}

/* ------------------------------------- Ícones dos contactos ------------------------------------- */
.icons {
  width: 35px;
  height: 35px;
}

/* ------------------------------------- Ícones das redes sociais ------------------------------------- */
.facebook {
  width: 35px;
  height: 35px;
  margin-left: 1rem;
}

/* ------------------------------------- Área dos edittext ------------------------------------- */
.contactos {
  text-align: left;
  font-family: Kayak Sans;
  font-size: 16px;
}

.contactos2 {
  font-family: Kayak Sans;
  font-size: 20px;
}

/* ------------------------------------- Título das páginas ------------------------------------- */
.header {
  /* margin-top: 10rem; */
  font-family: ChaletComprime CologneEighty;
  font-size: 45px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
}

/* ------------------------------------- Título das páginas ------------------------------------- */
.header2 {
  font-family: ChaletComprime CologneEighty;
  font-size: 45px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  /* margin-top: 2rem; */
}

/* ------------------------------------- Área das redes ------------------------------------- */
.redes {
  text-align: left;
}

/* ------------------------------------- Mapa ------------------------------------- */
.img {
  padding-right: 3rem;
}

/* ------------------------------------- Edittext ------------------------------------- */
.edittext {
  width: 100%;
  font-size: 16px;
  border-radius: 6px;
  font-family: Kayak Sans;
  border-width: 1px;
  /* opacity: 80%; */
}

/* ------------------------------------- Espaço entre objetos ------------------------------------- */
.space {
  height: 6px;
}

/* ------------------------------------- Edittext ------------------------------------- */
.edittext2 {
  width: 100%;
  height: 130px;
  font-size: 16px;
  border-radius: 6px;
  border-width: 1px;
}

/* ------------------------------------- Texto morada ------------------------------------- */
.morada {
  font-size: 15px;
  text-decoration: none;
  font-family: Kayak Sans;
}

/* ------------------------------------- Botão enviar ------------------------------------- */
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

/* ------------------------------------- Área do botão enviar ------------------------------------- */
.divb {
  text-align: right;
}
</style>

