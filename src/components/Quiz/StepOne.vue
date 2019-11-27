<template>
  <div class="quiz">
    <h1>
      Você gostaria de estudar a parte física
      <strong>(hardware)</strong> ou de
      programas de computador
      <strong>(software)</strong>?
    </h1>
    <div class="response">
      <button @click.prevent="handlerStep()">Hardware</button>
      <router-link class="btn" :to="{ name: 'quiz-two' }">Software</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "quiz-1",
  methods: {
    handlerStep() {
      this.$router.push({
        name: "trilhas",
        params: {
          title: "Infraestrutura",
          content: [
            "A infraestrutura de TI consiste nos componentes e serviços que fornecem a base para sustentar todos os sistemas de informação de uma organização. Ter uma organização competitiva exige uma grande variedade de equipamentos, softwares e ferramentas de comunicação para funcionar e fazer o básico, além dos serviços de um profissional treinado que saiba operar e administrar toda essa tecnologia. Cada organização deve projetar e administrar cuidadosamente sua infraestrutura, de modo que ela contenha o conjunto de serviços tecnológicos necessários para o trabalho que se quer realizar, seja com Hardware, Software, Redes ou Serviços. A nossa Trilha de Infraestrutura entrega uma base sólida para você, aluno, partindo do zero para se tornar um profissional de ponta, utilizando as tecnologias mais estabelecidas no mercado."
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
