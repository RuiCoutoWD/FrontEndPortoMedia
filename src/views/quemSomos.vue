<template>
  <div class="container">
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
    <div class="mainDiv">
      <b-container class="bv-example-row">
        <b-row>
          <div class="col-lg-6">
            <h1 class="title">A NOSSA HISTÓRIA</h1>
            <p class="text text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div class="col-lg-6">
            <h1 class="title">MISSÃO</h1>
            <p class="text text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
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
.mainDiv {
  position: fixed;
  margin-top: 10rem;
  z-index: -1;
}

.backgroundLarge {
  transform: translateX(calc((100% - 100vw) / 2));
  min-width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -2;
  bottom: 0;
  right: 0;
  opacity: 40%;
}

.backgroundMedium {
  transform: translateX(calc((70% - 100vw) / 2));
  min-width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -2;
  bottom: 0;
  right: 0;
  opacity: 40%;
}

.backgroundSmall {
  transform: translateX(calc((50% - 100vw) / 2));
  min-width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -2;
  bottom: 0;
  right: 0;
  opacity: 40%;
}

.title {
  font-family: ChaletComprime CologneEighty;
  font-size: 45px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  /* margin-top: 9rem; */
}

.text {
  text-align: left;
  font-family: Kayak Sans;
  font-size: 14pt;
}
</style>