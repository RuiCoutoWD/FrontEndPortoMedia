<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" class="navbar d-flex">
      <b-navbar-brand href="#">
        <img
          src="../assets/logo_portomedia_white.png"
          width="60px"
          height="60px"
          class="logo"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <a class="navBarItem p-3" href="#">Quem Somos</a>
          <a class="navBarItem p-3" href="#">Outdoors</a>
          <a class="navBarItem p-3" href="#">Contactos</a>  
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto userImg ms-auto p-3">
          <a href="#">
            <img
              src="../assets/user.png"
              class="m-3"
              height="30px"
              width="30px"
            />
          </a>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #000000;
  opacity: 79%;
  height: 65px;
  margin-top: 3rem;
}

.logo {
  padding: 0;
  margin-left: 3rem;
}

.navBarItem {
  font-family: Kayak Sans;
  font-size: 25px;
  margin-left: 1rem;
  color: #fcfff7;
  text-decoration: none;
}

.navBarItem:hover {
  color: #a58c57;
  text-decoration: none;
}

.userImg {
  position: relative;
  margin-right: 1rem;
}
</style>
