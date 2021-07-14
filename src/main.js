import { createApp } from "vue";
import firebase from "firebase";

//sweet alert
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
import checkout from "@/views/admin/checkout.vue";
import admin from "@/views/admin/admin.vue";
// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Profile from "@/views/Profile.vue";
var firebaseConfig = {
  apiKey: "AIzaSyCLY8VsA-XikCg-S48VscgD-zlA4NqWsx8",
  authDomain: "promax-cash.firebaseapp.com",
  projectId: "promax-cash",
  storageBucket: "promax-cash.appspot.com",
  messagingSenderId: "232140560376",
  appId: "1:232140560376:web:e9a10ee05f2da842d9e80d",
  measurementId: "G-RR4H5ZPTBE",
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

createApp(App).use(router).use(VueSweetalert2).mount("#app");
