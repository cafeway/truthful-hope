<template>
  <nav
    class="
      top-0
      absolute
      z-50
      w-full
      flex flex-wrap
      items-center
      justify-between
      px-2
      py-3
      navbar-expand-lg
    "
  >
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          class="
            text-white text-sm
            font-bold
            leading-relaxed
            inline-block
            mr-4
            py-2
            whitespace-nowrap
            uppercase
          "
          to="/"
        >
          {{ this.username }}
        </router-link>
        <button
          class="
            cursor-pointer
            text-xl
            leading-none
            px-3
            py-1
            border border-solid border-transparent
            rounded
            bg-transparent
            block
            lg:hidden
            outline-none
            focus:outline-none
          "
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"
        :class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a
              class="
                lg:text-white
                lg:hover:text-blueGray-200
                text-blueGray-700
                px-3
                py-4
                lg:py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
              "
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-auth-navbar"
            >
              <i
                class="
                  lg:text-blueGray-200
                  text-blueGray-400
                  far
                  fa-file-alt
                  text-lg
                  leading-lg
                  mr-2
                "
              />
              Learn Forex & Crypto
            </a>
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <PagesDropdown />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import PagesDropdown from "@/components/Dropdowns/PagesDropdown.vue";
import firebase from "firebase";
export default {
  data() {
    return {
      navbarOpen: false,
      username: "ble",
      phonenumber: "",
      activated: false,
      balance: 0,
      plan: "",
      uid: "",
      downlines: 0,
      cashout: 0,
      downline_bonus: 0,
    };
  },
  mounted: function () {
    firebase.auth().onAuthStateChanged((user) => {
      var user_mail = user.email;
      const db = firebase.firestore();
      db.collection("users")
        .doc(user_mail)
        .get()
        .then((snapshot) => {
          var data = snapshot.data();
          this.username = data.username;
          this.balance = data.balance;
          this.activated = data.activated;
          this.downlines = data.downlines;
          this.plan = data.plan;
          this.downline_bonus = data.downline_bonus;
        });
    });
  },
  methods: {
    setNavbarOpen() {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    PagesDropdown,
  },
};
</script>
