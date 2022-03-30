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
                  @click="setActiveNavItem('home')"
              /></router-link>
              <!-- Navbar items -->
              <router-link to="/about" class="link"
                ><span class="navBarItem p-2" @click="setActiveNavItem(0)"
                  >Quem somos</span
                ></router-link
              >
              <router-link to="/outdoors" class="link"
                ><span class="navBarItem p-2" @click="setActiveNavItem(1)"
                  >Outdoors</span
                ></router-link
              >
              <router-link to="/contacts" class="link"
                ><span class="navBarItem p-2" @click="setActiveNavItem(2)"
                  >Contactos</span
                ></router-link
              >
            </b-navbar-nav>
            <!-- Profile icon (appears when the user is logged) -->
            <div
              id="profileIcon"
              class="userImg ms-auto align-items-center invisible"
            >
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
                <b-dropdown-item @click="logOut()"
                  ><a href="#" class="dropdown userButton logOutButton"
                    >Sair</a
                  ></b-dropdown-item
                >
              </b-dropdown>
            </div>
            <div id="logInIcon">
              <!-- Log in button (appears when the user is logged OFF) -->
              <b-button class="logInButton" v-b-modal.logInModal
                >Entrar</b-button
              >
              <!-- Login modal -->
              <b-modal id="logInModal" hide-footer centered ref="logInModal">
                <template #modal-header
                  ><span class="modalTitle mx-3">ENTRAR</span></template
                >
                <b-container fluid>
                  <label for="emailInput" class="modalLabel">Email</label><br />
                  <input type="text" id="emailInput" class="modalInput" /><br />
                  <label for="passwordInput" class="modalLabel mt-4"
                    >Password</label
                  ><br />
                  <input
                    type="password"
                    id="passwordInput"
                    class="modalInput"
                  />
                  <b-row class="mt-2">
                    <b-col>
                      <p
                        class="modalText"
                        v-b-modal.registerModal
                        @click="hideModal('logInModal')"
                      >
                        Não tem conta? Registe-se!
                      </p>
                    </b-col>
                    <b-col class="recoverPassword">
                      <p
                        class="modalText"
                        v-b-modal.lostPasswordModal
                        @click="hideModal('logInModal')"
                      >
                        Recuperar Password
                      </p>
                    </b-col>
                  </b-row>
                  <b-row class="divModalButton">
                    <button
                      class="modalButton mx-3"
                      @click="loginSuccessAlert()"
                    >
                      Entrar
                    </button>
                  </b-row>
                </b-container>
              </b-modal>
              <!-- Register Modal -->
              <b-modal
                id="registerModal"
                hide-footer
                centered
                ref="registerModal"
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
                    <!-- <p class="registerText">
                      Será-lhe enviado um email com uma palavra passe!
                    </p> -->
                  </b-row>
                  <b-row class="divModalButton">
                    <button
                      class="modalButton mx-3 mt-3"
                      @click="registerFailedAlert()"
                    >
                      Registar
                    </button>
                  </b-row>
                </b-container>
              </b-modal>
              <!-- Lost password modal -->
              <b-modal
                id="lostPasswordModal"
                hide-footer
                centered
                ref="lostPasswordModal"
              >
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
                      @click="recoverPasswordFailedAlert()"
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
            <div class="hambMenu">
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
              <div id="logInDiv">
                <b-nav-item href="#" v-b-modal.logInModal>
                  <span class="smallNavbarItem">Entrar</span></b-nav-item
                >
              </div>
            </div>
            <div id="loggedDiv" class="invisible">
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
              <b-nav-item href="#" class="logOutSmallNavItem" @click="logOut()"
                ><span class="smallNavbarItem logOutSmallNav"
                  >Sair</span
                ></b-nav-item
              >
            </div>
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
    return {};
  },
  methods: {
    hideModal(modal) {
      this.$refs[modal].hide();
    },
    setActiveNavItem(item) {
      const items = document.getElementsByClassName("navBarItem");
      if (item != "home") {
        for (let i = 0; i < items.length; i++) {
          if (i === item) {
            items[i].classList.add("navBarItemActive");
            console.log("ola");
          } else {
            items[i].classList.remove("navBarItemActive");
          }
        }
      } else {
        for (let i = 0; i < items.length; i++) {
          items[i].classList.remove("navBarItemActive");
        }
      }
    },
    // Alert that shows when the user makes a successfull log in.
    loginSuccessAlert() {
      this.$swal.fire({
        icon: "success",
        title:
          "<div style='font-family:ChaletComprime CologneEighty;color:#a58c57;font-size:35pt;font-weight:400'>Login efetuado com sucesso!</div>",
        timer: 3000,
        timerProgressBar: true,
      });

      // For big navbar
      const divLogInIcon = document.getElementById("logInIcon");
      const divProfileIcon = document.getElementById("profileIcon");
      divLogInIcon.classList.add("invisible");
      divProfileIcon.classList.remove("invisible");

      // For small navbar
      const loggedDiv = document.getElementById("loggedDiv");
      const logInDiv = document.getElementById("logInDiv");
      loggedDiv.classList.remove("invisible");
      loggedDiv.classList.add("hambMenu");
      logInDiv.classList.add("invisible");

      // For both navbars
      this.hideModal("logInModal");
    },
    // Alert that shows when the user makes a mistake trying to log in.
    loginFailedAlert() {
      this.$swal.fire({
        icon: "error",
        title:
          "<div style='font-family:ChaletComprime CologneEighty;color:#a58c57;font-size:35pt;font-weight:400'>Login não efetuado</div>",
        html: "<div style='font-family:Kayak Sans;font-size:16pt'>Email ou password incorretos!</div>",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
      });
    },
    // Alert that shows when the user makes a successfull register.
    registerSuccessAlert() {
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
    // Alert that shows when the user makes a mistake trying to log in.
    registerFailedAlert() {
      this.$swal.fire({
        icon: "error",
        title:
          "<div style='font-family:ChaletComprime CologneEighty;color:#a58c57;font-size:35pt;font-weight:400'>Registo não efetuado</div>",
        html: "<div style='font-family:Kayak Sans;font-size:16pt'>O email que inseriu já se encontra em uso!</div>",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
      });
    },
    // Alert that shows when the user makes a successfull password recovery.
    recoverPasswordSuccessAlert() {
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
    // Alert that shows when the email the user inserted doesn't exist in the database.
    recoverPasswordFailedAlert() {
      this.$swal.fire({
        icon: "error",
        title:
          "<div style='font-family:ChaletComprime CologneEighty;color:#a58c57;font-size:35pt;font-weight:400'>Recuperação não efetuada!</div>",
        html: "<div style='font-family:Kayak Sans;font-size:16pt'>O email que inseriu não está registado!</div>",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
      });
    },
    // Alert that shows when the user logs out.
    logOut() {
      this.$swal
        .fire({
          icon: "warning",
          title:
            "<div style='font-family:ChaletComprime CologneEighty;color:#a58c57;font-size:35pt;font-weight:400'>Tem a certeza que pretende terminar sessão?</div>",
          showConfirmButton: true,
          // showCancelButton: true,
          showDenyButton: true,
          denyButtonText: "Sair",
          confirmButtonText: "Cancelar",
        })
        .then((result) => {
          if (result.isDenied) {
            this.$swal.fire({
              icon: "success",
              title:
                "<div style='font-family:ChaletComprime CologneEighty;color:#a58c57;font-size:35pt;font-weight:400'>Sessão Terminada</div>",
              timer: 3000,
              timerProgressBar: true,
            });

            // For big navbar
            const divLogInIcon = document.getElementById("logInIcon");
            const divProfileIcon = document.getElementById("profileIcon");
            divLogInIcon.classList.remove("invisible");
            divProfileIcon.classList.add("invisible");

            // For small navbar
            const loggedDiv = document.getElementById("loggedDiv");
            const logInDiv = document.getElementById("logInDiv");
            loggedDiv.classList.add("invisible");
            loggedDiv.classList.remove("hambMenu");
            logInDiv.classList.remove("invisible");

            // For both navbars
            const logInModal = document.getElementById("logInModal");
            logInModal.classList.remove("invisible");

            this.$router.push({ name: "Home" });
          }
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
  opacity: 79%;
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

.navBarItemActive {
  color: #a58c57;
}

.activeItem {
  color: #a58c57 !important;
}

/* Profile icon */
.userImg {
  position: relative;
  margin-right: -6rem;
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

#passwordInput {
  font-family: Arial, Helvetica, sans-serif;
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
  background-color: white;
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
}

.hambMenu {
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

#loggedDiv {
  margin-top: -2.9rem;
}

/* Make something invisible */
.invisible {
  visibility: hidden;
}

.transparent {
  background-color: transparent;
}
</style>
