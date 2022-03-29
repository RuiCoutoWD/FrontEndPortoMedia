<template>
  <!-- <video-background src="../assets/city.mp4" style="max-height: 400px; height: 100vh"> -->
  <!-- </video-background> -->


  <video autoplay muted loop id="myVideo">
  <source src="../assets/city3.mp4" type="video/mp4">
</video>
</template>

<script>
// @ is an alias to /src
// import VideoBackground from "vue-responsive-video-background-player";

export default {
  name: "Home",
  components: {
    // VideoBackground,
  },
};
</script>

<style scoped>
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
