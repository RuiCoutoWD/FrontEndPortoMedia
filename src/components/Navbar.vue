<template>
  <div>
    <!-- Navbar for big devices -->
    <div id="navbar" class="d-none d-sm-none d-md-none d-lg-block d-flex">
      <b-navbar toggleable="lg" type="dark" class="navbar" fluid>
        <b-container class="big-container">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <!-- Porto Media's logo -->
              <router-link to="/"
                ><img
                  src="../assets/logo_portomedia_white.png"
                  width="60px"
                  height="60px"
                  class="logo"
              /></router-link>
              <!-- Navbar items -->
              <router-link to="/about" class="link"
                ><span class="navBarItem p-2">Quem somos</span></router-link
              >
              <router-link to="/outdoors" class="link"
                ><span class="navBarItem p-2">Outdoors</span></router-link
              >
              <router-link to="/contacts" class="link"
                ><span class="navBarItem p-2">Contactos</span></router-link
              >
            </b-navbar-nav>
            <!-- Profile icon (appears when the user is logged) -->
            <div class="userImg ms-auto align-items-center invisible">
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <span class="sr-only"
                    ><img
                      src="../assets/user.png"
                      class="m-3"
                      height="30px"
                      width="30px"
                  /></span>
                </template>
                <!-- Profile icon dropdown menu -->
                <b-dropdown-item class="dropdown"
                  ><router-link to="/profile" class="link"
                    ><a class="userButton">Perfil</a></router-link
                  ></b-dropdown-item
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="dropdown"
                  ><router-link to="/support" class="link"
                    ><a class="userButton">Centro de Apoio</a></router-link
                  ></b-dropdown-item
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item
                  ><a href="#" class="dropdown userButton logOutButton"
                    >Sair</a
                  ></b-dropdown-item
                >
              </b-dropdown>
            </div>
            <div>
              <!-- Log in button (appears when the user is logged OFF) -->
              <b-button class="logInButton" v-b-modal.logInModal
                >Entrar</b-button
              >
              <!-- Login modal -->
              <b-modal
                id="logInModal"
                hide-footer
                centered
                v-if="logInModalShow"
              >
                <template #modal-header
                  ><span class="modalTitle mx-3">ENTRAR</span></template
                >
                <b-container fluid>
                  <label for="emailInput" class="modalLabel">Email</label><br />
                  <input type="text" id="emailInput" class="modalInput" /><br />
                  <label for="passwordInput" class="modalLabel mt-4"
                    >Password</label
                  ><br />
                  <input type="text" id="passwordInput" class="modalInput" />
                  <b-row class="mt-2">
                    <b-col>
                      <p class="modalText" v-b-modal.registerModal>
                        Não tem conta? Registe-se!
                      </p>
                    </b-col>
                    <b-col class="recoverPassword">
                      <p class="modalText" v-b-modal.lostPasswordModal>
                        Recuperar Password
                      </p>
                    </b-col>
                  </b-row>
                  <b-row class="divModalButton">
                    <button class="modalButton mx-3">Entrar</button>
                  </b-row>
                </b-container>
              </b-modal>
              <!-- Register Modal -->
              <b-modal
                id="registerModal"
                hide-footer
                centered
                v-if="registerModalShow"
              >
                <template #modal-header
                  ><span class="modalTitle mx-3">CRIAR CONTA</span></template
                >
                <b-container fluid>
                  <label for="emailInput2" class="modalLabel">Email</label
                  ><br />
                  <input
                    type="text"
                    id="emailInput2"
                    class="modalInput"
                  /><br />
                  <label for="repeatEmailInput" class="modalLabel mt-4"
                    >Repetir Email</label
                  ><br />
                  <input type="text" id="repeatEmailInput" class="modalInput" />
                  <b-row class="mt-2 divRegisterText">
                    <p class="registerText">
                      Será-lhe enviado um email com uma palavra passe!
                    </p>
                  </b-row>
                  <b-row class="divModalButton">
                    <button class="modalButton mx-3" @click="registerAlert()">
                      Registar
                    </button>
                  </b-row>
                </b-container>
              </b-modal>
              <!-- Lost password modal -->
              <b-modal id="lostPasswordModal" hide-footer centered>
                <template #modal-header
                  ><span class="modalTitle mx-3"
                    >RECUPERAR PASSWORD</span
                  ></template
                >
                <b-container fluid>
                  <label for="lostEmailInput" class="modalLabel">Email</label
                  ><br />
                  <input
                    type="text"
                    id="lostEmailInput"
                    class="modalInput"
                  /><br />
                  <b-row class="divModalButton mt-3 mb-2">
                    <button
                      class="modalButton mx-3"
                      @click="recoverPasswordAlert()"
                    >
                      Recuperar
                    </button>
                  </b-row>
                </b-container>
              </b-modal>
            </div>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
    <!-- Navbar for small devices -->
    <div class="navbarSmallDiv d-lg-none d-xl-none">
      <b-navbar toggleable type="dark" fluid class="navbarSmall">
        <b-container>
          <!-- Porto Media's logo -->
          <b-navbar-brand
            ><router-link to="/"
              ><img
                src="../assets/logo_portomedia_white.png"
                width="50px"
                height="50px"
                class="logoSmall" /></router-link
          ></b-navbar-brand>
          <!-- Hamburguer menu icon -->
          <b-navbar-toggle
            target="navbar-toggle-collapse"
            isnav
            class="navbarHambButton"
          >
          </b-navbar-toggle>
        </b-container>
        <!-- Hamburguer menu -->
        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#"
              ><router-link to="/about" class="routerSmallNav"
                ><span class="smallNavbarItem">Quem Somos</span></router-link
              ></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="/outdoors" class="routerSmallNav"
                ><span class="smallNavbarItem">Outdoors</span></router-link
              ></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="/contacts" class="routerSmallNav"
                ><span class="smallNavbarItem">Contactos</span></router-link
              ></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="/perfil" class="routerSmallNav"
                ><span class="smallNavbarItem">Perfil</span></router-link
              ></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="/support" class="routerSmallNav"
                ><span class="smallNavbarItem"
                  >Centro de Apoio</span
                ></router-link
              ></b-nav-item
            >
            <b-nav-item href="#" class="logOutSmallNavItem"
              ><span class="smallNavbarItem logOutSmallNav"
                >Sair</span
              ></b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      logInModalShow: true,
      registerModalShow: true,
    };
  },
  methods: {
    registerAlert() {
      // this.logInModalShow = false;
      // this.registerModalShow = false;
      this.$swal.fire({
        icon: "success",
        title:
          "<div style='font-family:ChaletComprime CologneEighty;color:#a58c57;font-size:35pt;font-weight:400'>Registado com sucesso!</div>",
        html: "<div style='font-family:Kayak Sans;font-size:16pt'>Foi-lhe enviado um email com a sua password!</div>",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
      });
    },
    recoverPasswordAlert() {
      this.$swal.fire({
        icon: "success",
        title:
          "<div style='font-family:ChaletComprime CologneEighty;color:#a58c57;font-size:35pt;font-weight:400'>Recuperar Password</div>",
        html: "<div style='font-family:Kayak Sans;font-size:16pt'>Foi-lhe enviado um email para poder repor a sua password!</div>",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
      });
    },
  },
};
</script>

<style scoped>
/* --------------- BIG NAVBAR ----------------------- */
/* Navbar for large devices */
.navbar {
  background-color: #000000;
  opacity: 90%;
  height: 65px;
  margin-top: 3rem;
  width: 100%;
  position: fixed;
}

/* Logo */
.logo {
  padding: 0;
  margin-right: 1rem;
}

.logoSmall {
  margin-top: -0.2rem;
}

/* Navbar Items */
link.router-link-active {
  color: #a58c57;
}

.link {
  text-decoration: none;
  margin-top: 10px;
}

.navBarItem {
  font-family: Kayak Sans;
  font-size: 25px;
  margin-left: 1rem;
  color: #fcfff7;
}

.navBarItem:hover {
  color: #a58c57;
  text-decoration: none;
}

.activeItem {
  color: #a58c57 !important;
}

/* Profile icon */
.userImg {
  position: relative;
  margin-right: -2rem;
}

/* Dropdown menu items */
.userButton {
  font-family: Kayak Sans;
  font-size: 15pt;
  text-decoration: none;
  color: #000000;
}

.logOutButton {
  color: red;
}

/* Login button (appears when the user is logged off) */
.logInButton {
  background-color: transparent;
  font-family: Kayak Sans;
  font-size: 25px;
  border: none;
}

.logInButton:hover {
  background-color: transparent;
  color: #a58c57;
}

/* Modal Title */
.modalTitle {
  font-family: ChaletComprime CologneEighty;
  font-size: 35pt;
  color: #a58c57;
}

/* Modal Inputs */
.modalInput {
  width: 100%;
  font-family: Kayak Sans;
  font-size: 20px;
  border-radius: 8px;
  border-width: 1px;
}

/* Modal Lable */
.modalLabel {
  font-family: Kayak Sans;
  font-size: 20px;
}

/* Modal Text */
.modalText {
  font-family: Kayak Sans;
  font-size: 15px;
  color: #155baa;
  text-decoration: underline;
}

.modalText:hover {
  cursor: pointer;
}

/* Recover password text */
.recoverPassword {
  text-align: end;
}

/* Modal's log in buttons */
.modalButton {
  font-family: Kayak Sans;
  font-size: 20px;
  border-radius: 6px;
  border-width: 1px;
  border-color: #155baa;
  color: #155baa;
  width: 100px;
}

.modalButton:hover {
  background-color: #155baa;
  color: white;
}

.divModalButton {
  justify-content: end;
}

/* Register Text */
.registerText {
  font-family: Kayak Sans;
  font-size: 15px;
}

.divRegisterText {
  text-align: center;
}

/* --------------- SMALL NAVBAR ----------------------- */
/* Navbar for small devices */
.navbarSmallDiv {
  width: 100%;
  position: fixed;
}

.navbarSmall {
  background-color: #000000;
  height: 65px;
  opacity: 79%;
}

/* Hamburguer menu */
#navbar-toggle-collapse {
  background-color: #000000;
  width: 100%;
  margin-top: -0.5 rem;
}

/* Hamburguer menu icon */
.navbarHambButton {
  border: none;
}

/* Hamburguer menu items */
.smallNavbarItem {
  font-family: Kayak Sans;
  font-size: 15pt;
  color: #fcfff7;
}

.smallNavbarItem:hover {
  color: #a58c57;
}

.logOutSmallNavItem {
  margin-bottom: 1rem;
}

.logOutSmallNav:hover {
  color: red;
}

.routerSmallNav {
  text-decoration: none;
}

/* Make something invisible */
.invisible {
  visibility: hidden;
}
</style>
