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
      <b-container class="bv-example-row">
        <b-row class="mainRow">
          <b-col>
            <!-- ------------------------------------- Secção localização ------------------------------------- -->
            <div class="contactos">
              <h1 class="header">LOCALIZAÇÃO</h1>
              <img src="../assets/mapa.png" class="img-fluid img" />
              <p class="morada">
                Zona Industrial Arcos do Sardão, Avenida Arcos do Sardão,<br />
                Nº 391-A, 4430-434, Vila Nova de Gaia
              </p>
            </div>
          </b-col>
          <b-col>
            <!-- ------------------------------------- Secção do formulário ------------------------------------- -->
            <h1 class="header">CONTACTE-NOS</h1>
            <div class="contactos">
              <input class="edittext" placeholder="Nome*" />
              <p class="space"></p>
              <input class="edittext" placeholder="Email*" />
              <p class="space"></p>
              <input class="edittext" placeholder="Número" />
              <p class="space"></p>
              <textarea class="edittext2" placeholder="Mensagem"></textarea>
              <p></p>
              <div class="divb">
                <button class="botao">Enviar</button>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="my-4">
          <b-col>
            <!-- ------------------------------------- Secção contactos ------------------------------------- -->
            <div class="contactos">
              <h1 class="header2">CONTACTOS</h1>
              <img src="../assets/email.png" alt="email" class="icons" />
              <a> : mail@planetapublicidade.com </a>
              <p></p>
              <img src="../assets/telefone.png" alt="telefone" class="icons" />
              <a> : 22 145 01 20</a>
            </div>
          </b-col>
          <b-col>
            <!-- Secção das redes sociais ------------------------------------- -->
            <div class="redes">
              <h1 class="header2">REDES SOCIAIS</h1>
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

.quemsomos {
  position: absolute;
  overflow-y: scroll;
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
  font-size: 15pt;
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
  font-weight: bold;
  font-size: 14px;
}

/* ------------------------------------- Espaço entre objetos ------------------------------------- */
.space {
  height: 6px;
}

/* ------------------------------------- Edittext ------------------------------------- */
.edittext2 {
  width: 100%;
  height: 130px;
  font-weight: bold;
  font-size: 14px;
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

