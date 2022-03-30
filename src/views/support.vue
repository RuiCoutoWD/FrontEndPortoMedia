<template>
  <div class="home">
    <div class="quemsomos">
      <img src="../assets/Fundosimagem-08.png" class="fundo" />
      <b-container class="bv-example-row">
        <b-row>
          <b-col class="col">
            <h1 class="header">O que é um outdoor?</h1>
            <p>Um outdoor tem medidas padrões: <b> 9 metros de comprimento por 3 metros de altura </b> e são essas as dimensões que você precisa usar durante a criação. Se a arte não for criada ou adaptada corretamente com essas medidas, sua campanha corre o risco de ficar distorcida ou deformada.</p>
            <h1 class="header2">Formas de impressão</h1>
            <p>Ao fazer um outdoor também é importante pensar no <b> tipo de material que vai ser utilizado </b> nele. A arte pode ser impressa em <b> papel </b>, geralmente utilizada em campanhas mais curtas, ou então em <b> lona. </b></p>
            <b-row>
                <b-col>
                    <h2 class="header3">Impressão em papel</h2>
                    <p>É o tipo de outdoor <b>mais comum no mercado e que apresenta o menor custo </b> , além de ter produção e impressão mais rápidas. Em geral, o outdoor de papel tem um custo cerca de 85% menor que o de lona. Contudo, o principal problema desse tipo de outdoor é a durabilidade, afinal, o papel <b> não apresenta uma grande resistência e dificilmente essa impressão aguentará mais do que 14 dias.</b></p>
                    <p class="space"></p>
                    <img src="../assets/papel.jpg" width="300px" height="300px">
                </b-col>
                <b-col>
                    <h2 class="header3">Impressão em lona</h2>
                    <p>Esse outdoor é o que possui valor mais alto, principalmente devido às técnicas de impressão em lona, que são mais diferenciadas. A grande vantagem, contudo, <b> é a sua durabilidade que é bem superior ao papel. </b> No mercado, existem vários tipos de lonas e o valor está relacionado à qualidade do material. O tempo médio de duração da lona varia <b> de 6 meses a 3 anos </b>, dependendo das características climáticas do local onde o outdoor está instalado.</p>
                    <img src="../assets/lona.jpg" width="300px" height="300px">
                </b-col>
            </b-row>
            <h1 class="header2">Dicas de como fazer um outdoor</h1>
            <h1 class="header4">Foco na mensagem</h1>
            <p class="p">Antes de qualquer coisa, é preciso que sua equipe de criação tenha <b> bem claro qual a mensagem que precisa ser passada </b>, afinal, ela é a estrela do seu outdoor. Outro ponto importante é que o <b>produto ou serviço esteja em destaque, assim como o nome e logo da sua empresa. </b> Se alguém se interessar pelo o que está sendo anunciado, a pessoa <b> não pode ter dificuldades para descobrir quem é o dono daquela campanha e como entrar em contato ou procurar por ele. </b></p>
            <h1 class="header4">Simplicidade</h1>
            <p class="p">É preciso ser <b> assertivo e direto </b> e assim, prefira artes simples e impactantes. Coloque somente as <b> informações essenciais, da maneira mais sucinta possível e aposte em imagens cativantes.</b></p>
            <h1 class="header4">Equilibrio de elementos</h1>
            <p class="p">Cada centímetro de outdoor é valioso, por isso, faça bom uso do seu espaço e ocupe o que puder, mesmo que apenas com um toque de cor.</p>
            <h1 class="header4">Legibilidade</h1>
            <p class="p">É totalmente possível ter um outdoor criativo e que chame a atenção usando palavras, mas é preciso que seja feito do jeito certo e que ele seja, acima de tudo, legível.</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Navbar from "@/components/Navbar.vue";

export default {
  name: "Support",
  components: {
    //Navbar,
  },
  methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
  }
};
</script>

<style scoped>
.fundo {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  opacity: 40%;
}

.space {
    margin-top: 1rem;
}

.p {
    text-align: left;
}

.col {
    text-align: center;
}

.btn {
  margin-left: 24.2rem;
}

.confirmar {
  color: #303d7a;
  background-color: #fcfff7;
  margin-left: 23.6rem;

}

.confirmar:hover {
  background-color: #303d7a;
  color: #fcfff7;
  margin-left: 23.6rem;

}

.header {
  font-family: Kayak Sans;
  font-size: 35px;
  color: #a58c57;
  text-decoration: none;
  margin-top: 8rem;
}

.header2 {
  font-family: Kayak Sans;
  font-size: 35px;
  color: #a58c57;
  text-decoration: none;
  margin-top: 3rem;
}

.header3 {
  font-family: Kayak Sans;
  font-size: 25px;
  color: #a58c57;
  text-decoration: none;
  margin-top: 3rem;
}

.header4 {
  font-family: Kayak Sans;
  font-size: 25px;
  color: #a58c57;
  text-decoration: none;
  margin-top: 3rem;
  text-align: left;
}

.contactos {
  text-align: left;
}

.edittext {
  width: 500px;
  font-weight: bold;
  font-size: 14px;
}

.edittext2 {
  width: 465px;
  font-weight: bold;
  font-size: 14px;
}

.botao {
  background-color: #fcfff7;
  color: #303d7a;
  width: 100px;
  border-width: 1px;
}

.botao:hover {
  background-color: #303d7a;
  color: #fcfff7;
}

.space {
  height: 6px;
}
</style>