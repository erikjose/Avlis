<template>
  <div class="container">
    <Header />
    <div class="home">
      <div class="item-home">
        <h1>Transformando informação através da educação</h1>
        <p>
          Transforme a sua vida hoje, utilizando nossas trilhas de conteúdo e dê
          o próximo passo na sua carreira profissional, encontrando o caminho
          para o mundo da tecnologia, aliado às tendências de mercado.
        </p>
        <div class="trilhas">
          <router-link
            :to="{ name: 'trilhas', params: {
            title: 'Front-end',
            content: ['A Web é a plataforma de programação mais importante do mundo. Suas tecnologias principais como o HTML, o CSS e o JavaScript, são as mais utilizadas. E quem domina essas tecnologias, suas boas práticas e seus recursos mais avançados, hoje está no mercado de Front-end. Alinhado ao que hoje o mercado está utilizando (ou pelo menos migrando), nossa Trilha do Front-end entrega uma base sólida para você, aluno, partindo do zero para se tornar um profissional de ponta, utilizando o React framework.']
          }}"
          >
            <span>Trilha</span>
            <strong>Front-end</strong>
          </router-link>
          <router-link
            :to="{ name: 'trilhas', params: {
            title: 'Back-end',
            content: ['A Web é a plataforma de programação mais importante do mundo. Mas... tudo aquilo que aparece bonito para o usuário não seria útil se não houvessem regras e operações por detrás da tela. Por isso, o Back-end é uma parte essencial para o funcionamento de uma aplicação para web e mobile. É aqui que tudo acontece! Alinhado ao que hoje o mercado está utilizando (ou pelo menos migrando), nossa Trilha do Back-end entrega uma base sólida para você, aluno, partindo do zero para se tornar um profissional de ponta, utilizando o Node.JS.']
          }}"
          >
            <span>Trilha</span>
            <strong>Back-end</strong>
          </router-link>
          <router-link
            :to="{ name: 'trilhas', params: {
            title: 'Infraestrutura',
            content: ['A infraestrutura de TI consiste nos componentes e serviços que fornecem a base para sustentar todos os sistemas de informação de uma organização. Ter uma organização competitiva exige uma grande variedade de equipamentos, softwares e ferramentas de comunicação para funcionar e fazer o básico, além dos serviços de um profissional treinado que saiba operar e administrar toda essa tecnologia. Cada organização deve projetar e administrar cuidadosamente sua infraestrutura, de modo que ela contenha o conjunto de serviços tecnológicos necessários para o trabalho que se quer realizar, seja com Hardware, Software, Redes ou Serviços. A nossa Trilha de Infraestrutura entrega uma base sólida para você, aluno, partindo do zero para se tornar um profissional de ponta, utilizando as tecnologias mais estabelecidas no mercado.']
          }}"
          >
            <span>Trilha</span>
            <strong>Infraestrutura</strong>
          </router-link>
        </div>
      </div>
      <div class="item-home">
        <img :src="require('@/assets/images/app-marketing-illustration-02-4.png')" alt="Foto" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    Header: () => import("@/components/Header/Header.vue")
  }
};
</script>

<style src="./style.scss" lang="scss" scoped />
