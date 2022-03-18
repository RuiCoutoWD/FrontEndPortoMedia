<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" class="navbar d-flex">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/"><img
          src="../assets/logo_portomedia_white.png"
          width="60px"
          height="60px"
          class="logo"
        /></router-link>
          <router-link to="/about" class="link"><span class="navBarItem">Quem somos</span></router-link>
          <router-link to="/outdoors" class="link"><span class="navBarItem">Outdoors</span></router-link>
          <router-link to="/contacts" class="link"><span class="navBarItem">Contactos</span></router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-dropdown
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
          class="userImg ms-auto p-5 align-items-center"
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
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",

}
</script>


<style scoped>

.link{
  text-decoration: none;
  margin-top: 10px;

}

.navbar {
  background-color: #000000;
  opacity: 79%;
  height: 65px;
  margin-top: 3rem;
}

.logo {
  padding: 0;
  margin-left: 6rem;
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
  margin-right: 1rem;
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

.dropdown{
  
}
</style>
