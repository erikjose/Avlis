import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home/Home.vue")
  },
  {
    path: "/trilhas",
    name: "trilhas",
    component: () => import("../views/Trilha/Post.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile/Profile.vue"),
    children: [
      {
        path: "/profile/quiz",
        name: "quiz",
        component: () => import("@/components/Quiz/StepOne.vue")
      },
      {
        path: "/profile/quiz-2",
        name: "quiz-two",
        component: () => import("@/components/Quiz/StepTwo.vue")
      },
      {
        path: "/profile/quiz-3",
        name: "quiz-three",
        component: () => import("@/components/Quiz/StepThree.vue")
      },
      {
        path: "/profile/quiz-4",
        name: "quiz-four",
        component: () => import("@/components/Quiz/StepFour.vue")
      },
      {
        path: "/profile/quiz-5",
        name: "quiz-five",
        component: () => import("@/components/Quiz/StepFive.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
