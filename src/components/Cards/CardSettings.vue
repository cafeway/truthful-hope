<template>
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
      bg-blueGray-100
      border-0
    "
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">
          Invite link:
          <hr />
          <small>{{ this.link }}</small>
        </h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">User Information</h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Username
              </label>
              <input
                required="required"
                v-model="form.username"
                id="username"
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
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email address
              </label>
              <input
                required="required"
                v-model="form.email"
                id="email"
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
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                PhoneNumber
              </label>
              <input
                required="required"
                v-model="form.phone"
                id="phonenumber"
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
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Activation Status
              </label>
              <input
                required="required"
                v-model="form.activated"
                id="activated"
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
              />
            </div>
            <hr />
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                REFFERAl ID
              </label>
              <input
                id="wallet"
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
                readonly
              />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">More Information</h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                InviteLink
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-link-45deg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                    />
                  </svg>
                </span>
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
                id="inviteLink"
                readonly
              />
            </div>
          </div>
          <hr />
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
            @click="create()"
          >
            Update Profile
          </button>
          <!--<div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                City
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
              />
            </div>
          </div> -->
          <!-- <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Continent
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
                value="Africa"
              />
            </div>
          </div> -->
          <!--<div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Postal Code
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
                value="Postal Code"
              />
            </div>
          </div> -->
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <!-- <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">About Me</h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                About me
              </label>
              <textarea
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
                rows="4"
              >
                    A beautiful UI Kit and Admin for VueJS & Tailwind CSS. It is Free
                    and Open Source.
                  </textarea
              >
            </div>
          </div>
        </div> -->
      </form>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      username: "ble",
      phonenumber: "",
      activated: false,
      balance: 0,
      plan: "",
      uid: "",
      downlines: 0,
      cashout: 0,
      downline_bonus: 0,
      link: "",
      form: {
        phone: "",
        email: "",
        username: "",
      },
    };
  },
  mounted: function () {
    firebase.auth().onAuthStateChanged((user) => {
      var user_mail = user.email;
      this.uid = user.uid;
      const db = firebase.firestore();
      db.collection("users")
        .doc(user_mail)
        .get()
        .then((snapshot) => {
          let data = snapshot.data();
          this.username = data.username;
          this.balance = data.balance;
          this.activated = data.activated;
          this.downlines = data.downlines;
          this.plan = data.plan;
          this.activated = data.activated;
          this.downline_bonus = data.downline_bonus;
          console.log("....");
          document.getElementById("username").value = data.username;
          document.getElementById("email").value = data.email;
          document.getElementById("phonenumber").value = data.phonenumber;
          document.getElementById("wallet").value = data.uid;
          document.getElementById("activated").value = data.activated;
        })
        .catch((err) => {
          alert(err.message);
        });
      this.getlink();
    });
  },
  methods: {
    activate: function () {},
    getlink: function () {
      var urlgenerator = require("urlgenerator");
      var createURLwithParameters = urlgenerator.createURLwithParameters;
      var baseURL = "https://truthfulhope.com/auth/register";
      var referee = firebase.auth().currentUser.uid;
      var parameters = { uid: referee };
      var finalURL = createURLwithParameters(baseURL, parameters);
      document.getElementById("inviteLink").value = finalURL;
      this.link = finalURL;
    },
    create: function () {
      let db = firebase.firestore();
      db.collection("users").doc(firebase.auth().currentUser.email).set({
        username: this.form.username,
        email: this.form.email,
        phonenumber: this.form.phone,
        uid: firebase.auth().currentUser.uid,
        plan: "Nyati",
        balance: 0,
        downlines: 0,
        cashouts: 0,
        activated: false,
        downline_bonus: 0,
        admin: false,
        role: "admin",
      });
      this.$swal({
        icon: "success",
        text: "account updated successfully activate to use",
      });
    },
  },
};
</script>
