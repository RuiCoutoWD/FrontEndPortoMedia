<template>
<!-- ------------------------------------- Secção do vídeo ------------------------------------- -->
  <video autoplay muted loop id="myVideo">
  <source src="../assets/city3.mp4" type="video/mp4">
</video>
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
</style>
