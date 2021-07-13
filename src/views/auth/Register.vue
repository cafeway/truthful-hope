<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
        <div
          class="
            relative
            flex flex-col
            min-w-0
            break-words
            w-full
            mb-6
            shadow-lg
            rounded-lg
            bg-blueGray-200
            border-0
          "
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">Sign up with</h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="
                  bg-white
                  active:bg-blueGray-50
                  text-blueGray-700
                  font-normal
                  px-4
                  py-2
                  rounded
                  outline-none
                  focus:outline-none
                  mr-2
                  mb-1
                  uppercase
                  shadow
                  hover:shadow-md
                  inline-flex
                  items-center
                  font-bold
                  text-xs
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="github" />
                Github
              </button>
              <button
                class="
                  bg-white
                  active:bg-blueGray-50
                  text-blueGray-700
                  font-normal
                  px-4
                  py-2
                  rounded
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                  uppercase
                  shadow
                  hover:shadow-md
                  inline-flex
                  items-center
                  font-bold
                  text-xs
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="google" />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign up with credentials</small>
            </div>
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  UserName
                </label>
                <input
                  type="text"
                  class="
                    border-0
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    bg-white
                    rounded
                    text-sm
                    shadow
                    focus:outline-none
                    focus:ring
                    w-full
                    ease-linear
                    transition-all
                    duration-150
                  "
                  placeholder="Name"
                  required="required"
                  v-model="form.username"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="
                    border-0
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    bg-white
                    rounded
                    text-sm
                    shadow
                    focus:outline-none
                    focus:ring
                    w-full
                    ease-linear
                    transition-all
                    duration-150
                  "
                  required="required"
                  placeholder="Email"
                  v-model="form.email"
                />
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  PhoneNumber
                </label>
                <input
                  type="text"
                  class="
                    border-0
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    bg-white
                    rounded
                    text-sm
                    shadow
                    focus:outline-none
                    focus:ring
                    w-full
                    ease-linear
                    transition-all
                    duration-150
                  "
                  required="required"
                  placeholder="e.g  0743******"
                  v-model="form.phonenumber"
                />
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="
                    border-0
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    bg-white
                    rounded
                    text-sm
                    shadow
                    focus:outline-none
                    focus:ring
                    w-full
                    ease-linear
                    transition-all
                    duration-150
                  "
                  placeholder="Password"
                  required="required"
                  v-model="form.password"
                />
              </div>

              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="
                      form-checkbox
                      border-0
                      rounded
                      text-blueGray-700
                      ml-1
                      w-5
                      h-5
                      ease-linear
                      transition-all
                      duration-150
                    "
                  />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">
                    I agree with the
                    <a href="javascript:void(0)" class="text-emerald-500"> Privacy Policy </a>
                  </span>
                </label>
              </div>

              <div class="text-center mt-6">
                <button
                  class="
                    bg-blueGray-800
                    text-white
                    active:bg-blueGray-600
                    text-sm
                    font-bold
                    uppercase
                    px-6
                    py-3
                    rounded
                    shadow
                    hover:shadow-lg
                    outline-none
                    focus:outline-none
                    mr-1
                    mb-1
                    w-full
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="button"
                  @click="submit()"
                >
                  Create Account
                </button>
              </div>
              <li class="items-center" @click="logout()">
                <router-link
                  class="
                    text-blueGray-700
                    hover:text-blueGray-500
                    text-xs
                    uppercase
                    py-3
                    font-bold
                    block
                  "
                  to="/auth/login"
                >
                  <i class="fas fa-sign-out-alt text-blueGray-300 mr-2 text-sm"></i>
                  Log in
                </router-link>
              </li>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import github from "@/assets/img/github.svg";
import google from "@/assets/img/google.svg";
import firebase from "firebase";
export default {
  data() {
    return {
      github,
      google,
      form: {
        username: "",
        email: "",
        phonenumber: "",
        password: "",
        referee_uid: "",
      },
    };
  },
  mounted: function () {
    this.referee_uid = "";
    let url = window.location.href;
    let splitted_urls = url.split("uid=");
    // eslint-disable-next-line camelcase
    let referee = splitted_urls[1];
    this.referee_uid = referee;
    console.log(referee);
  },
  methods: {
    submit: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          var user = firebase.auth().currentUser;
          user.sendEmailVerification();
          const db = firebase.firestore();
          db.collection("users").doc(this.form.email).set({
            username: this.form.username,
            email: this.form.email,
            phonenumber: this.form.phonenumber,
            uid: firebase.auth().currentUser.uid,
            plan: "Nyati",
            balance: 0,
            downlines: 0,
            cashouts: 0,
            activated: false,
            downline_bonus: 0,
            upline: this.referee_uid,
          });
          db.collection("users")
            .where("uid", "==", this.referee_uid)
            .get()
            .then((snapshot) => {
              snapshot.forEach((doc) => {
                let id = doc.id;
                db.collection("users")
                  .doc(id)
                  .collection("downlines")
                  .add({
                    id: Math.floor(Math.random() * 10000 + 1),
                    name: this.form.username,
                    phone: this.form.phonenumber,
                  });
              });
            });
          this.$swal({
            icon: "success",
            text: "account created successfully activate to use",
          });
        })
        .catch((err) => {
          this.$swal({
            icon: "warning",
            text: err.message,
          });
        });
    },
  },
};
</script>
