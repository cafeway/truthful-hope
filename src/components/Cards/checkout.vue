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
        <h6 class="text-blueGray-700 text-xl font-bold">Withdraw to Mpesa</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          <b>BALANCE:</b> {{ this.balance }}
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                AMOUNT
              </label>
              <input
                id="amount"
                v-model="form.amount"
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
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">Invest</h6>
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
                @click="withdraw()"
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div v-if="this.role == 'admin'" class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Admin Panel</h6>
      </div>
    </div>
    <div v-if="this.role == 'admin'" class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email
              </label>
              <input
                id="email"
                v-model="form.email"
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
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                AMOUNT
              </label>
              <input
                id="amount"
                v-model="form.amount1"
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
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">Invest</h6>
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
                @click="update()"
              >
                Update Customer Balance
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
      phone: "",
      role: "",
      form: {
        email: "",
        amount1: 0,
        amount: 0,
        rate: 0,
      },
    };
  },
  methods: {
    update: function () {
      let db = firebase.firestore();
      db.collection("users")
        .doc(this.form.email)
        .get()
        .then((snapshot) => {
          let data = snapshot.data();
          let balance = data.balance;
          let nb = balance + parseFloat(this.form.amount1);
          db.collection("users").doc(this.form.email).update({
            balance: nb,
          });
        });
      this.$swal({
        icon: "success",
        title: "cash deposit succces",
      });
    },
    withdraw: function () {
      let db = firebase.firestore();
      let balance = this.balance;
      let amount = this.form.amount;
      if (this.form.amount <= this.balance) {
        let nb = balance - amount;
        db.collection("users").doc(firebase.auth().currentUser.email).update({
          balance: nb,
        });
        db.collection("cashouts").add({
          amount: this.form.amount,
          email: firebase.auth().currentUser.email,
          phone: this.phone,
          id: Math.floor(Math.random() * 10000 + 1),
        });
        this.$swal({
          icon: "success",
          title: "your cashout was succcesful and is pending delivery",
        });
      } else {
        alert("insuficient funds");
      }
    },
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
          this.uid = data.uid;
          this.phone = data.phonenumber;
          this.role = data.role;
        });
    });
    console.log(this.plans);
  },
};
</script>
