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
                  ><router-link to="/profile" class="link"
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
              <b-button class="logInButton" v-b-modal.modal-1>Entrar</b-button>
              <!-- Login / Register modal -->
              <b-modal id="modal-1" centered>
                <template #modal-header
                  ><span class="modalTitle mx-3">LOGIN</span></template
                >
                <p class="my-4">LOGIN</p>
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
              ><router-link to="/perfil" class="routerSmallNav"
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

/* Login / Register modal */
.modal {
  font-family: Kayak Sans;
  font-size: 25pt;
}

/* Modal Title */
.modalTitle {
  font-family: Kayak Sans;
  font-size: 25pt;
  color: #a58c57;
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
