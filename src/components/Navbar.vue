<template>
  <div>
    <div id="navbar" class="d-none d-sm-none d-md-none d-lg-block d-flex">
      <b-navbar toggleable="lg" type="dark" class="navbar" fluid>
        <b-container class="big-container">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <router-link to="/"
                ><img
                  src="../assets/logo_portomedia_white.png"
                  width="60px"
                  height="60px"
                  class="logo"
              /></router-link>
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

            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
              class="userImg ms-auto align-items-center"
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
              <b-dropdown-item class="dropdown"
                ><a href="#" class="userButton">Perfil</a></b-dropdown-item
              >
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item
                ><a href="#" class="userButton logOutButton"
                  >Sair</a
                ></b-dropdown-item
              >
            </b-dropdown>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
    <div class="navbarSmallDiv d-lg-none d-xl-none">
      <b-navbar toggleable type="dark" fluid class="navbarSmall">
        <b-container>
          <b-navbar-brand
            ><router-link to="/"
              ><img
                src="../assets/logo_portomedia_white.png"
                width="50px"
                height="50px"
                class="logoSmall" /></router-link
          ></b-navbar-brand>

          <b-navbar-toggle
            target="navbar-toggle-collapse"
            isnav
            class="navbarHambButton"
          >
          </b-navbar-toggle>
        </b-container>

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
.link {
  text-decoration: none;
  margin-top: 10px;
}

.navbar {
  background-color: #000000;
  opacity: 79%;
  height: 65px;
  margin-top: 3rem;
  width: 100%;
  position: fixed;
}

.logo {
  padding: 0;
  margin-right: 1rem;
}
.logoSmall {
  margin-top: -0.2rem;
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

.userImg {
  position: relative;
  margin-right: -2rem;
}

.userButton {
  font-family: Kayak Sans;
  font-size: 15pt;
  text-decoration: none;
  color: #000000;
}

.logOutButton {
  color: red;
}

.navbarSmallDiv {
  width: 100%;
  position: fixed;
}

.navbarSmall {
  background-color: #000000;
  height: 65px;
  opacity: 79%;
}

#navbar-toggle-collapse {
  background-color: #000000;
  width: 100%;
  margin-top: -0.5 rem;
}

.smallNavbarItem {
  font-family: Kayak Sans;
  font-size: 15pt;
  color: #fcfff7;
}

.smallNavbarItem:hover {
  color: #a58c57;
}

.logOutSmallNav:hover {
  color: red;
}

.logOutSmallNavItem {
  margin-bottom: 1rem;
}

.navbarHambButton {
  border: none;
}

.routerSmallNav {
  text-decoration: none;
}
</style>
