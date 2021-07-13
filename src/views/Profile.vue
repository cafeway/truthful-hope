Skip to content Search or jump to… Pull requests Issues Marketplace Explore @cafeway
creativetimofficial / vue-notus 9 228 58 Code Issues Pull requests Actions Projects Wiki Security
Insights vue-notus/src/components/Cards/CardTable.vue @einazare einazare refactor: change coolGray
with blueGray Latest commit 66c1aa2 on Mar 19 History 1 contributor 517 lines (514 sloc) 18.4 KB

<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            Package Tables
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Amount
            </th>
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Package Name
            </th>
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Users in Queue
            </th>
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Choose Package
            </th>
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
                text-left
                flex
                items-center
              "
            >
              <span
                class="iconify"
                style="width: 40px; height: 40px"
                data-icon="emojione:panda-face"
                data-inline="false"
              ></span>
              <span
                class="ml-3 font-bold"
                :class="[color === 'light' ? 'text-blueGray-600' : 'text-white']"
              >
                Panda
              </span>
            </th>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              500
            </td>

            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              <div class="flex">
                <img
                  :src="team1"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                />
                <img
                  :src="team2"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team3"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team4"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
              </div>
            </td>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              <div class="flex items-center">
                <button
                  class="
                    bg-emerald-500
                    active:bg-emerald-600
                    uppercase
                    text-white
                    font-bold
                    hover:shadow-md
                    shadow
                    text-xs
                    px-4
                    py-2
                    rounded
                    outline-none
                    focus:outline-none
                    sm:mr-2
                    mb-1
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="button"
                  @click="panda('panda')"
                >
                  Initiate Push
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
                text-left
                flex
                items-center
              "
            >
              <span
                class="iconify"
                style="width: 40px; height: 40px"
                data-icon="fxemoji:bunny"
                data-inline="false"
              ></span>
              <span
                class="ml-3 font-bold"
                :class="[color === 'light' ? 'text-blueGray-600' : 'text-white']"
              >
                Bunny
              </span>
            </th>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              1000
            </td>

            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              <div class="flex">
                <img
                  :src="team1"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                />
                <img
                  :src="team2"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team3"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team4"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
              </div>
            </td>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              <div class="flex items-center">
                <button
                  class="
                    bg-emerald-500
                    active:bg-emerald-600
                    uppercase
                    text-white
                    font-bold
                    hover:shadow-md
                    shadow
                    text-xs
                    px-4
                    py-2
                    rounded
                    outline-none
                    focus:outline-none
                    sm:mr-2
                    mb-1
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="button"
                  @click="bunny('bunny')"
                >
                  Initiate Push
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
                text-left
                flex
                items-center
              "
            >
              <span
                class="iconify"
                style="width: 40px; height: 40px"
                data-icon="emojione:fox"
                data-inline="false"
              ></span>
              <span
                class="ml-3 font-bold"
                :class="[color === 'light' ? 'text-blueGray-600' : 'text-white']"
              >
                Fox
              </span>
            </th>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              1500
            </td>

            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              <div class="flex">
                <img
                  :src="team1"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                />
                <img
                  :src="team2"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team3"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team4"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
              </div>
            </td>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              <div class="flex items-center">
                <button
                  class="
                    bg-emerald-500
                    active:bg-emerald-600
                    uppercase
                    text-white
                    font-bold
                    hover:shadow-md
                    shadow
                    text-xs
                    px-4
                    py-2
                    rounded
                    outline-none
                    focus:outline-none
                    sm:mr-2
                    mb-1
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="button"
                  @click="fox('fox')"
                >
                  Initiate Push
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
                text-left
                flex
                items-center
              "
            >
              <span
                class="iconify"
                style="width: 40px; height: 40px"
                data-icon="twemoji:rhinoceros"
                data-inline="false"
              ></span>
              <span
                class="ml-3 font-bold"
                :class="[color === 'light' ? 'text-blueGray-600' : 'text-white']"
              >
                Rhino
              </span>
            </th>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              2000
            </td>

            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              <div class="flex">
                <img
                  :src="team1"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                />
                <img
                  :src="team2"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team3"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team4"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
              </div>
            </td>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              <div class="flex items-center">
                <button
                  class="
                    bg-emerald-500
                    active:bg-emerald-600
                    uppercase
                    text-white
                    font-bold
                    hover:shadow-md
                    shadow
                    text-xs
                    px-4
                    py-2
                    rounded
                    outline-none
                    focus:outline-none
                    sm:mr-2
                    mb-1
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="button"
                  @click="rhino('rhino')"
                >
                  Initiate Push
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
                text-left
                flex
                items-center
              "
            >
              <span
                class="iconify"
                style="width: 40px; height: 40px"
                data-icon="emojione:lion-face"
                data-inline="false"
              ></span>
              <span
                class="ml-3 font-bold"
                :class="[color === 'light' ? 'text-blueGray-600' : 'text-white']"
              >
                Simba
              </span>
            </th>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              5000
            </td>

            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              <div class="flex">
                <img
                  :src="team1"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                />
                <img
                  :src="team2"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team3"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
                <img
                  :src="team4"
                  alt="..."
                  class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                />
              </div>
            </td>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              <div class="flex items-center">
                <button
                  class="
                    bg-emerald-500
                    active:bg-emerald-600
                    uppercase
                    text-white
                    font-bold
                    hover:shadow-md
                    shadow
                    text-xs
                    px-4
                    py-2
                    rounded
                    outline-none
                    focus:outline-none
                    sm:mr-2
                    mb-1
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="button"
                  @click="simba('simba')"
                >
                  Initiate Push
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import bootstrap from "@/assets/img/bootstrap.jpg";
import angular from "@/assets/img/angular.jpg";
import sketch from "@/assets/img/sketch.jpg";
import react from "@/assets/img/react.jpg";
import vue from "@/assets/img/react.jpg";
import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";
import team3 from "@/assets/img/team-3-800x800.jpg";
import team4 from "@/assets/img/team-4-470x470.png";
import firebase from "firebase";
export default {
  data() {
    return {
      bootstrap,
      angular,
      sketch,
      react,
      vue,
      team1,
      team2,
      team3,
      team4,
      upline: "",
      lv1: "",
      lv2: "",
      username: "",
      email: "",
      phonenumber: "",
      size: 0,
    };
  },
  created() {
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "https://code.iconify.design/1/1.0.7/iconify.min.js");
    document.head.appendChild(recaptchaScript);
    firebase.auth().onAuthStateChanged((user) => {
      var user_mail = user.email;
      const db = firebase.firestore();
      db.collection("users")
        .doc(user_mail)
        .get()
        .then((snapshot) => {
          var data = snapshot.data();
          this.phonenumber = data.phonenumber;
          this.email = data.email;
          this.username = data.username;
          this.upline = data.upline;
        });
    });
  },
  methods: {
    panda: function (name) {
      let username = this.username;
      let phonenumber = this.phonenumber;
      let email = this.email;
      let db = firebase.firestore();
      window.FlutterwaveCheckout({
        public_key: "FLWPUBK-6adfe081d70c4de8b32b60ba48a6297a-X",
        tx_ref: "registration fees" + new Date(),
        amount: 1,
        currency: "KES",
        country: "KE",
        payment_option: "mpesa,card,ussd,account",
        customer: {
          email: this.email,
          phone_number: this.phone,
          name: this.username,
        },
        callback: function () {
          let user = username;
          let phone = phonenumber;
          let mail = email;
          db.collection(name)
            .get()
            .then((snapshot) => {
              let size = snapshot.size;
              db.collection(name).add({
                id: size,
                username: user,
                phone: phone,
                amount: 500,
                verified: false,
                email: mail,
              });
            });
        },
      });
    },
    bunny: function (name) {
      let username = this.username;
      let phonenumber = this.phonenumber;
      let db = firebase.firestore();
      window.FlutterwaveCheckout({
        public_key: "FLWPUBK-6adfe081d70c4de8b32b60ba48a6297a-X",
        tx_ref: "registration fees" + new Date(),
        amount: 1000,
        currency: "KES",
        country: "KE",
        payment_option: "mpesa,card,ussd,account",
        customer: {
          email: this.email,
          phone_number: this.phone,
          name: this.username,
        },
        callback: function () {
          let phone = phonenumber;
          let uname = username;
          db.collection(name)
            .get()
            .then((snapshot) => {
              let size = snapshot.size;
              db.collection(name).add({
                id: size,
                name: uname,
                phone: phone,
                amount: 1000,
                verified: false,
              });
            });
        },
      });
    },
    fox: function (name) {
      let username = this.username;
      let phonenumber = this.phonenumber;
      let db = firebase.firestore();
      window.FlutterwaveCheckout({
        public_key: "FLWPUBK-6adfe081d70c4de8b32b60ba48a6297a-X",
        tx_ref: "registration fees" + new Date(),
        amount: 1500,
        currency: "KES",
        country: "KE",
        payment_option: "mpesa,card,ussd,account",
        customer: {
          email: this.email,
          phone_number: this.phone,
          name: this.username,
        },
        callback: function () {
          let phone = phonenumber;
          let uname = username;
          db.collection(name)
            .get()
            .then((snapshot) => {
              let size = snapshot.size;
              db.collection(name).add({
                id: size,
                name: uname,
                phone: phone,
                amount: 1500,
                verified: false,
              });
            });
        },
      });
    },
    rhino: function (name) {
      let username = this.username;
      let phonenumber = this.phonenumber;
      let db = firebase.firestore();
      window.FlutterwaveCheckout({
        public_key: "FLWPUBK-6adfe081d70c4de8b32b60ba48a6297a-X",
        tx_ref: "registration fees" + new Date(),
        amount: 2000,
        currency: "KES",
        country: "KE",
        payment_option: "mpesa,card,ussd,account",
        customer: {
          email: this.email,
          phone_number: this.phone,
          name: this.username,
        },
        callback: function () {
          let phone = phonenumber;
          let uname = username;
          db.collection(name)
            .get()
            .then((snapshot) => {
              let size = snapshot.size;
              db.collection(name).add({
                id: size,
                name: uname,
                phone: phone,
                amount: 2000,
                verified: false,
              });
            });
        },
      });
    },
    simba: function (name) {
      let db = firebase.firestore();
      window.FlutterwaveCheckout({
        public_key: "FLWPUBK-6adfe081d70c4de8b32b60ba48a6297a-X",
        tx_ref: "registration fees" + new Date(),
        amount: 5000,
        currency: "KES",
        country: "KE",
        payment_option: "mpesa,card,ussd,account",
        customer: {
          email: this.email,
          phone_number: this.phone,
          name: this.username,
        },
        callback: function () {
          db.collection(name)
            .get()
            .then((snapshot) => {
              let size = snapshot.size;
              db.collection(name).add({
                id: size,
                username: this.username,
                phone: this.phone,
                amount: 5000,
                verified: false,
              });
            });
          db.collection("users")
            .where("uid", "==", this.upline)
            .get()
            .then((snapshot) => {
              snapshot.forEach((doc) => {
                let id = doc.id;
                db.collection("users")
                  .doc(id)
                  .get()
                  .then((snapshot) => {
                    let data = snapshot.data();
                    let dbonus = data.downline_bonus;
                    let bonus = dbonus + 50;
                    db.collection("users").update({
                      downline_bonus: bonus,
                    });
                  });
              });
            });
          db.collection("users")
            .where("uid", "==", this.upline)
            .get()
            .then((snapshot) => {
              snapshot.forEach((doc) => {
                let id = doc.id;
                db.collection("users")
                  .doc(id)
                  .get()
                  .then((snapshot) => {
                    let data = snapshot.data();
                    let dbonus = data.downline_bonus;
                    let bonus = dbonus + 500;
                    db.collection("users").update({
                      downline_bonus: bonus,
                    });
                  });
              });
            });
        },
      });
    },
  },
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
};
</script>
