<template>
  <div class="profile">
    <div class="quiz">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <div class="icon">
      <img
        :src="require('@/assets/images/app-marketing-illustration-03.png')"
        alt="Icon"
        height="100"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  created() {
    this.$router.push({
      path: "/profile/quiz"
    });
  }
};
</script>

<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter {
  transform: translate3d(0, -15px, 0);
}

.fade-leave-to {
  transform: translate3d(0px, 0, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.profile {
  height: 100vh;
  width: 100vw;
  background: rgb(41, 109, 228);
  overflow: hidden;
  background: linear-gradient(
    90deg,
    rgba(41, 109, 228, 1) 0%,
    rgba(50, 225, 238, 1) 100%
  );
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    position: absolute;
    bottom: -2px;
    left: 0;
  }
}

.quiz {
  width: 30vw;
}
</style>
