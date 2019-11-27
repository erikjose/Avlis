<template>
  <div class="quiz">
    <h1>Você prefere estudar para programar para celular ou para computador (desktop, laptop)?</h1>
    <div class="response">
      <button @click.prevent="handlerStep()">Celular</button>
      <router-link
        class="btn"
        :to="{ name: 'trilhas',  params: { title: 'Front-end', content: ['A Web é a plataforma de programação mais importante do mundo. Suas tecnologias principais como o HTML, o CSS e o JavaScript, são as mais utilizadas. E quem domina essas tecnologias, suas boas práticas e seus recursos mais avançados, hoje está no mercado de Front-end. Alinhado ao que hoje o mercado está utilizando (ou pelo menos migrando), nossa Trilha do Front-end entrega uma base sólida para você, aluno, partindo do zero para se tornar um profissional de ponta, utilizando o React framework.'] }}"
      >Computador</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "quiz-5",
  methods: {
    handlerStep() {
      this.$router.push({
        name: "trilhas",
        params: {
          title: "Mobile",
          content: [
            "Mobile. Essa é a palavra do momento e está literalmente nas mãos de muitas pessoas. Para aqueles que gostam de utilizar aplicativos e possuem uma ideia que gostaria de por em prática em um app, essa é a trilha perfeita. Saiba que a carreira de desenvolvimento mobile não exige o curso superior (embora algumas empresas ainda peçam uma graduação na área), sendo uma ótima opção para quem quer entrar rápido no mercado de desenvolvimento. A nossa Trilha de Mobile entrega uma base sólida para você, aluno, partindo do zero para se tornar um profissional de ponta, utilizando uma das tecnologias mais estabelecidas no mercado, o React Native."
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