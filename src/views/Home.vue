<template>
  <div class="container">
    <!-- ------------------------------------- Secção do vídeo ------------------------------------- -->
    <video autoplay muted loop id="myVideo">
      <source src="../assets/Timeline3.mp4" type="video/mp4"/>
    </video>
    <img src="../assets/logo_portomedia_white.png" class="img" />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    // VideoBackground,
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

/* ------------------------------------- Estilização de vídeo ------------------------------------- */
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  transform: translateX(calc((100% - 100vw) / 2));
  z-index: -1;
}

.img {
  width: 15rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  /* opacity: 80%; */
  /* filter: brightness(85%); */
}
</style>
