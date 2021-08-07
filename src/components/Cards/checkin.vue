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
        <h6 class="text-blueGray-700 text-xl font-bold">TruthFull Hope Investments</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          <b>BALANCE:</b> {{ this.balance }}
        </h6>
        <hr class="mt-6 border-b-1 border-blueGray-300" />
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-1">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                AMOUNT
              </label>
              <input
                id="amount"
                min="0"
                v-model="form.amount"
                type="number"
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
        </div>
        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          truthfull hope is the Way to higher financial attitude.
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
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
                @click="invest()"
              >
                25% ROI for 2DAYS
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
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
                @click="invest1()"
              >
                50% ROI for 4DAYS
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
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
                @click="invest2()"
              >
                75% ROI for 6DAYS
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      plan1: 0,
      plan2: 0,
      plan3: 0,
      plan4: 0,
      plan: "",
      balance: 0,
      email: null,
      username: null,
      phonenumber: null,
      form: {
        amount: null,
        rate: null,
      },
    };
  },
  methods: {
    invest: function () {
      if (this.form.amount > 0 && this.form.amount <= this.balance) {
        if (this.form.amount <= 5000 && this.form.amount >= 300) {
          let amount = parseFloat(this.form.amount);
          let db = firebase.firestore();
          db.collection("users")
            .doc(this.email)
            .get()
            .then((snapshot) => {
              let data = snapshot.data();
              let balance = data.balance;
              let nb = balance - amount;
              db.collection("users").doc(this.email).update({
                balance: nb,
              });
            });
          db.collection("investments").add({
            id: Math.floor(Math.random() * 10000 + 1),
            amount: amount,
            starttime: firebase.firestore.Timestamp.now().seconds,
            stopdate: firebase.firestore.Timestamp.now().seconds + 172800,
            stoptime: firebase.firestore.Timestamp.now().seconds + 172800,
            state: "running",
            profit: amount + amount * 0.25,
            cashed: false,
            email: firebase.auth().currentUser.email,
          });
          this.$swal({
            title: "your investment was successful",
          });
        } else {
          this.$swal({
            icon: "alert",
            title: "enter an amount between 300 - 5000 for this package",
          });
        }
      } else {
        this.$swal({
          icon: "alert",
          title: "you have insufficient funds ",
        });
      }
    },
    invest1: function () {
      if (this.form.amount > 0 && this.form.amount <= this.balance) {
        if (this.form.amount <= 5000 && this.form.amount >= 500) {
          let amount = parseFloat(this.form.amount);
          let db = firebase.firestore();
          db.collection("users")
            .doc(this.email)
            .get()
            .then((snapshot) => {
              let data = snapshot.data();
              let balance = data.balance;
              let nb = balance - amount;
              db.collection("users").doc(this.email).update({
                balance: nb,
              });
            });
          db.collection("investments").add({
            id: Math.floor(Math.random() * 10000 + 1),
            amount: amount,
            starttime: firebase.firestore.Timestamp.now().seconds,
            stoptime: firebase.firestore.Timestamp.now().seconds + 345600,
            state: "running",
            profit: amount + amount * 0.5,
            cashed: false,
            email: firebase.auth().currentUser.email,
          });
          this.$swal({
            title: "your investment was successful",
          });
        } else {
          this.$swal({
            icon: "alert",
            title: "enter an amount between 300 - 5000 for this package",
          });
        }
      } else {
        this.$swal({
          icon: "alert",
          title: "you have insufficient funds ",
        });
      }
    },
    invest2: function () {
      if (this.form.amount > 0 && this.form.amount <= this.balance) {
        if (this.form.amount <= 10000 && this.form.amount >= 5000) {
          let amount = parseFloat(this.form.amount);
          let db = firebase.firestore();
          db.collection("users")
            .doc(this.email)
            .get()
            .then((snapshot) => {
              let data = snapshot.data();
              let balance = data.balance;
              let nb = balance - amount;
              db.collection("users").doc(this.email).update({
                balance: nb,
              });
            });
          db.collection("investments").add({
            id: Math.floor(Math.random() * 10000 + 1),
            amount: amount,
            starttime: firebase.firestore.Timestamp.now().seconds,
            stoptime: firebase.firestore.Timestamp.now().seconds + 518400,
            state: "running",
            profit: amount + amount * 0.75,
            cashed: false,
            email: firebase.auth().currentUser.email,
          });
          this.$swal({
            title: "your investment was successful",
          });
        } else {
          this.$swal({
            icon: "alert",
            title: "enter an amount between 5000 - 10000 for this package",
          });
        }
      } else {
        this.$swal({
          icon: "alert",
          title: "you have insufficient funds ",
        });
      }
    },
  },
  created() {
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    document.getElementsByTagName("head")[0].appendChild(script);
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
          this.phonenumber = data.phonenumber;
          this.email = data.email;
        });
    });
    console.log(this.plans);
  },
};
</script>
