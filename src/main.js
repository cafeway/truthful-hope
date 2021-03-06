import { createApp } from "vue";
import firebase from "firebase";

//sweet alert
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VueCountdownTimer from "vuejs-countdown-timer";
import { createWebHistory, createRouter } from "vue-router";
// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";
// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";
import checkout from "@/views/admin/checkout.vue";
import admin from "@/views/admin/admin.vue";
import invest from "@/views/admin/invest.vue";
import deposit from "@/views/admin/deposit.vue";
// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Profile from "@/views/Profile.vue";
// import Index from "@/views/Index.vue";
var firebaseConfig = {
  apiKey: "AIzaSyBV9CYlrp2RZqTSpSt0nPHHRYTI8mq8YGY",
  authDomain: "wise-fex.firebaseapp.com",
  projectId: "wise-fex",
  storageBucket: "wise-fex.appspot.com",
  messagingSenderId: "1027087323521",
  appId: "1:1027087323521:web:2b1a4a769248bd0b649880",
  measurementId: "G-E1E70NVLPY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
      {
        path: "/admin/deposit",
        component: deposit,
      },
      {
        path: "admin/invest",
        component: invest,
      },
      {
        path: "/admin/checkout",
        component: checkout,
      },
      {
        path: "/admin/admin",
        component: admin,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  // {
  //   path: "/landing",
  //   component: Landing,
  // },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Login,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(VueSweetalert2).use(VueCountdownTimer).mount("#app");
