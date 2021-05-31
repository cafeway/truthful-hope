import { createApp } from "vue";
import firebase from "firebase";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
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

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";

const firebaseConfig = {
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
firebase.analytics();
// import Index from "@/views/Index.vue";

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
    component: Landing,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(VueSweetalert2).mount("#app");
