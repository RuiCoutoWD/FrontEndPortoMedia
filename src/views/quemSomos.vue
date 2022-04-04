<template>
  <!-- ------------------------------------- Fundo do website ------------------------------------- -->
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

    <!-- ------------------------------------- Textos do quem somos ------------------------------------- -->
    <div class="mainDiv">
      <b-container class="bv-example-row">
        <b-row>
          <div class="col-lg-6">
            <h1 class="title d-none d-lg-block">A NOSSA HISTÓRIA</h1>
            <h1 class="title d-lg-none d-xl-none text-center">
              A NOSSA HISTÓRIA
            </h1>
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
            <h1 class="title d-none d-lg-block">MISSÃO</h1>
            <h1 class="title d-lg-none d-xl-none text-center">MISSÃO</h1>
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
        <b-row class="mt-1 mb-2">
          <h1 class="title text-center">PARCEIROS</h1>
        </b-row>
        <b-row class="mb-3">
          <div class="col-1 d-flex align-items-center position-relative">
            <img
              src="../assets/arrow.png"
              class="align-self-center"
              width="50px"
              style="transform: rotate(180deg); opacity: 50%"
              @click="next()"
            />
          </div>
          <div class="col-10">
            <b-carousel
              id="multi-item-example"
              class="carousel slide carousel-multi-item"
              data-ride="carousel"
              ref="carousel"
              fade
            >
              <!--Slides-->
              <div class="carousel-inner" role="listbox">
                <!--First slide-->
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-md-3 col-sm-6">
                      <img
                        class="img-fluid p-3 carouselImg"
                        src="../assets/planeta_publicidade.jpg"
                        width="200px"
                        height="auto"
                      />
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <img
                        class="img-fluid p-3 carouselImg"
                        src="../assets/planeta_publicidade_white.jpg"
                        width="200px"
                        height="auto"
                      />
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <img
                        class="img-fluid p-3 carouselImg"
                        src="../assets/planeta_publicidade.jpg"
                        width="200px"
                        height="auto"
                      />
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <img
                        class="img-fluid p-3 carouselImg"
                        src="../assets/planeta_publicidade_white.jpg"
                        width="200px"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
                <!--/.First slide-->

                <!--Second slide-->
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-3 col-sm-6">
                      <img
                        class="img-fluid p-3 carouselImg"
                        src="../assets/planeta_publicidade_white.jpg"
                        width="200px"
                        height="auto"
                      />
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <img
                        class="img-fluid p-3 carouselImg"
                        src="../assets/planeta_publicidade.jpg"
                        width="200px"
                        height="auto"
                      />
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <img
                        class="img-fluid p-3 carouselImg"
                        src="../assets/planeta_publicidade_white.jpg"
                        width="200px"
                        height="auto"
                      />
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <img
                        class="img-fluid p-3 carouselImg"
                        src="../assets/planeta_publicidade.jpg"
                        width="200px"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
                <!--/.Second slide-->
              </div>
              <!--/.Slides-->
            </b-carousel>
          </div>
          <div class="col-1 d-flex justify-content-end position-relative">
            <img
              src="../assets/arrow.png"
              class="align-self-center"
              width="50px"
              style="opacity: 50%"
              @click="prev()"
            />
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  methods: {
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
  },
};
</script>

<style scoped>
/* ------------------------------------- Estilização das imagens de fundo ------------------------------------- */

.mainDiv {
  margin-top: 10rem;
  z-index: -1;
  position: absolute;
  overflow-y: scroll;
}

.backgroundLarge {
  transform: translateX(calc((100% - 100vw) / 2));
  min-width: 100%;
  height: 100%;
  position: fixed;
  z-index: -2;
  bottom: 0;
  right: 0;
  opacity: 40%;
}

.backgroundMedium {
  transform: translateX(calc((70% - 100vw) / 2));
  min-width: 100%;
  height: 100%;
  position: fixed;
  z-index: -2;
  bottom: 0;
  right: 0;
  opacity: 40%;
}

.backgroundSmall {
  transform: translateX(calc((50% - 100vw) / 2));
  min-width: 100%;
  height: 100%;
  position: fixed;
  z-index: -2;
  bottom: 0;
  right: 0;
  opacity: 40%;
}

/* ------------------------------------- Títulos da página ------------------------------------- */

.title {
  font-family: ChaletComprime CologneEighty;
  font-size: 45px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
}

/* ------------------------------------- Textos da página ------------------------------------- */

.text {
  text-align: left;
  font-family: Kayak Sans;
  font-size: 14pt;
}

/* ------------------------------------- Carousel Image ------------------------------------- */

.carouselImg {
  border-radius: 8%;
}
</style>