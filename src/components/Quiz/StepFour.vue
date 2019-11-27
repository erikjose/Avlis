<template>
  <div class="quiz">
    <h1>Você se considera uma pessoa com um bom raciocínio lógico?</h1>
    <div class="response">
      <button @click.prevent="handlerStep()">Não</button>
      <router-link class="btn" :to="{ name: 'quiz-five' }">Sim</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "quiz-4",
  methods: {
    handlerStep() {
      this.$router.push({
        name: "trilhas",
        params: {
          title: "Design",
          content: [
            "Dentro do design, encontramos o UX Design e o UI Design. O fato é que as duas áreas são importantes e as duas áreas tem grande sinergias. Apesar de diferentes e de tratarem de determinadas camadas dentro de um projeto, elas trabalham em conjunto. E elas estão com bastante visibilidade ultimamente, principalmente porque designers e criativos em geral, enxergam nessas áreas possibilidades de melhores ganhos financeiros e reconhecimento profissional.",
            "A área de UX Design não é nova, mas sua importância como departamento distinto vem aumentando com o aparecimento de novas tecnologias. O User Experience Design – ou design da experiência do usuário – se preocupa com o ponto de contato de um produto/serviço, com as pessoas. Este produto/serviço pode ser um website, um aplicativo, uma máquina, um dispositivo móvel, ponto de venda, entre outras plataformas de interação.",
            "UI Design significa User Interface Design (Design de Interface do Usuário). UI é área do Design que elabora, cria e planeja  o meio pela qual uma pessoa (chamado normalmente de usuário) interage e controla um determinado dispositivo. Esse dispositivo pode ser um sistema, software, produto, serviço, aplicativo, etc."
          ]
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

.quiz {
  @include quiz;
}
</style>