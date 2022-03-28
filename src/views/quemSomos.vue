<template>
  <div class="home">

    <div class="quemsomos">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h1 class="header">A NOSSA HISTÓRIA</h1>
            <p class="historia">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br />
              Lorem Ipsum has been the industry's standard dummy text ever since
              the<br />
              1500s, when an unknown printer took a galley of type and scrambled
              it to<br />
              make a type specimen book. It has survived not only five
              centuries, but also<br />
              the leap into electronic typesetting, remaining essentially
              unchanged. It was<br />
              popularised in the 1960s with the release of Letraset sheets
              containing<br />
              Lorem Ipsum passages, and more recently with desktop publishing
              software<br />
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            </b-col>
          <b-col>
            <h1 class="header">MISSÃO</h1>
            <p class="historia">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br />
              Lorem Ipsum has been the industry's standard dummy text ever since
              the<br />
              1500s, when an unknown printer took a galley of type and scrambled
              it to<br />
              make a type specimen book. It has survived not only five
              centuries, but also<br />
              the leap into electronic typesetting, remaining essentially
              unchanged. It was<br />
              popularised in the 1960s with the release of Letraset sheets
              containing<br />
              Lorem Ipsum passages, and more recently with desktop publishing
              software<br />
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p></b-col>
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

.header {
  font-family: Kayak Sans;
  font-size: 35px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  margin-top: 9rem;
}

.header2 {
  font-family: Kayak Sans;
  font-size: 35px;
  color: #a58c57;
  text-decoration: none;
  text-align: left;
  margin-top: 2rem;
}

.historia {
  text-align: left;
}
</style>