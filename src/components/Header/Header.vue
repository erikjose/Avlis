<template>
  <nav id="manu">
    <div class="brand">
      <router-link to="/">
        <img
          :src="require('@/assets/images/avlis-symbolAsset 4.png')"
          alt="Avlis"
          height="50"
        />
      </router-link>
    </div>
    <div class="navigation">
      <ul>
        <li>
          <router-link to="/">Trilhas</router-link>
        </li>
        <li>
          <router-link to="/profile/quiz">Descubra sua carreira</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "header-main"
};
</script>

<style src="./style.scss" lang="scss" scoped />
