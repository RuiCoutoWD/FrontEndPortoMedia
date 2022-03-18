<template>
  <video-background src="../assets/city.mp4" style="max-height: 400px; height: 100vh">
  </video-background>
</template>

<script>
// @ is an alias to /src
import VideoBackground from "vue-responsive-video-background-player";

export default {
  name: "Home",
  components: {
    VideoBackground,
  },
};
</script>
