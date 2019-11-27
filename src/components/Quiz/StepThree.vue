<template>
  <div class="quiz">
    <h1>Você gosta de desenhar?</h1>
    <div class="response">
      <button @click.prevent="handlerStep()">Não</button>
      <router-link class="btn" :to="{ name: 'quiz-four' }">Sim</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "quiz-3",
  methods: {
    handlerStep() {
      this.$router.push({
        name: "trilhas",
        params: {
          title: "Back-end",
          content: [
            "A Web é a plataforma de programação mais importante do mundo. Mas... tudo aquilo que aparece bonito para o usuário não seria útil se não houvessem regras e operações por 'detrás da tela'. Por isso, o Back-end é uma parte essencial para o funcionamento de uma aplicação para web e mobile. É aqui que tudo acontece! Alinhado ao que hoje o mercado está utilizando (ou pelo menos migrando), nossa Trilha do Back-end entrega uma base sólida para você, aluno, partindo do zero para se tornar um profissional de ponta, utilizando o Node.JS."
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