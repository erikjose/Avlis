<template>
  <div class="container-post">
    <div class="title">
      <h1>{{ $route.params.title }}</h1>
    </div>
    <div class="content">
      <p v-for="(el, index) in $route.params.content" :key="index">{{ el }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  created() {
    if (Object.keys(this.$route.params).length == 0) {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container-post {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.title {
  width: 100%;
  background: rgb(41, 109, 228);
  background: linear-gradient(
    90deg,
    rgba(41, 109, 228, 1) 0%,
    rgba(50, 225, 238, 1) 100%
  );
  padding: 30px 5%;
  h1 {
    color: #fff;
    font-weight: 400;
    font-size: 34px;
    text-align: center;
  }
}

.content {
  margin-top: 34px;
  width: 50vw;
  p {
    font-size: 18px;
    color: #505050;
    line-height: 1.5;
    margin-bottom: 20px;
  }
}
</style>
