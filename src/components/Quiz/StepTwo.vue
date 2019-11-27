<template>
  <div class="quiz">
    <h1>Você gostaria de programar para a web ou aprendizagem de máquina?</h1>
    <div class="response">
      <button @click.prevent="handlerStep()">Aprendizagem de máquina</button>
      <router-link class="btn" :to="{ name: 'quiz-three' }">Web</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "quiz-2",
  methods: {
    handlerStep() {
      this.$router.push({
        name: "trilhas",
        params: {
          title: "Machine Learning",
          content: [
            "Machine learning é uma área da ciência da computação que significa 'aprendizado da máquina'. Faz parte do conceito de inteligência artificial, que estuda meios para que máquinas posam fazer tarefas que seriam executadas por pessoas. É uma programação usada nos computadores, formada por regras previamente definidas que permitem que os computadores tomem decisões com base nos dados prévios e em dados usados pelo usuário.",
            "Na aprendizagem supervisionada existe um conjunto prévio de dados inseridos na máquina e as sugestões que serão dadas ao usuário devem ser parecidas com os dados registrados. Basicamente as informações são usadas para prever um resultado esperado pelo usuário ou para fazer a classificação de elementos usados.",
            "Na aprendizagem não supervisionada não existe um resultado específico esperado, ou seja, não é possível prever os resultados do cruzamento das informações. Nesse tipo de aprendizagem os dados são agrupados e os resultados mudam de acordo com as variáveis."
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