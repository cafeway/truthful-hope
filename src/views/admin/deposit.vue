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
        <h6 class="text-blueGray-700 text-xl font-bold">Deposit</h6>
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
                @click="kenya()"
              >
                Deposit in kenya
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
                @click="uganda()"
              >
                Deposit in Uganda
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
                @click="rwanda()"
              >
                Deposit in Rwanda
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
                @click="zambia()"
              >
                Deposit in Zambia
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
                @click="tanzania()"
              >
                Depsoit in Tanzania
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
      email: "",
      username: "",
      form: {
        amount: 0,
        rate: 0,
      },
    };
  },
  created() {
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  methods: {
    kenya: function () {
      this.$swal({
        icon: "success",
        title: "Pay To Till No 9022833",
      });
    },
    // tanzania: function () {
    //   alert("send money to mpesa: 0743126150 then contact admin");
    // },
    zambia: function () {
      let amount = this.form.amount;
      let balance = this.balance;
      let db = firebase.firestore();
      if (amount > 90) {
        window.FlutterwaveCheckout({
          public_key: "FLWPUBK-2f112d2d535638241086594afe278d17-X",
          tx_ref: "registration fees" + new Date(),
          amount: amount,
          currency: "ZMW",
          country: "zambia",
          payment_option: "mpesa,card,ussd,account",
          customer: {
            email: this.email,
            phone_number: this.phonenumber,
            name: this.username,
          },
          callback: function () {
            let nb = (amount + balance) * 6;
            db.collection("users").doc(firebase.auth().currentUser.email).update({
              balance: nb,
            });
          },
        });
      } else {
        alert("the amount selected must be greater than 90ZWM");
      }
    },
    rwanda: function () {
      let amount = this.form.amount;
      let balance = this.balance;
      let db = firebase.firestore();
      if (amount > 5000) {
        window.FlutterwaveCheckout({
          public_key: "FLWPUBK-2f112d2d535638241086594afe278d17-X",
          tx_ref: "registration fees" + new Date(),
          amount: amount,
          currency: "RWF",
          country: "rwanda",
          payment_option: "mpesa,card,ussd,account",
          customer: {
            email: this.email,
            phone_number: this.phonenumber,
            name: this.username,
          },
          callback: function () {
            let nb = (amount + balance) / 10;
            db.collection("users").doc(firebase.auth().currentUser.email).update({
              balance: nb,
            });
          },
        });
      } else {
        alert("the amount selected must be greater than 5000 RWF");
      }
    },
    uganda: function () {
      let amount = this.form.amount;
      let balance = this.balance;
      let db = firebase.firestore();
      if (amount > 90) {
        window.FlutterwaveCheckout({
          public_key: "FLWPUBK-2f112d2d535638241086594afe278d17-X",
          tx_ref: "registration fees" + new Date(),
          amount: amount,
          currency: "UGX",
          country: "uganda",
          payment_option: "mpesa,card,ussd,account",
          customer: {
            email: this.email,
            phone_number: this.phonenumber,
            name: this.username,
          },
          callback: function () {
            let nb = (amount + balance) * 33;
            db.collection("users").doc(firebase.auth().currentUser.email).update({
              balance: nb,
            });
          },
        });
      } else {
        alert("the amount selected must be greater than 5000UGX");
      }
    },
    tanzania: function () {
      let amount = this.form.amount;
      let balance = this.balance;
      let db = firebase.firestore();
      if (amount > 90) {
        window.FlutterwaveCheckout({
          public_key: "FLWPUBK-2f112d2d535638241086594afe278d17-X",
          tx_ref: "registration fees" + new Date(),
          amount: amount,
          currency: "TZS",
          country: "tanzania",
          payment_option: "mpesa,card,ussd,account",
          customer: {
            email: this.email,
            phone_number: this.phonenumber,
            name: this.username,
          },
          callback: function () {
            let nb = (amount + balance) * 22;
            db.collection("users").doc(firebase.auth().currentUser.email).update({
              balance: nb,
            });
          },
        });
      } else {
        alert("the amount selected must be greater than 11000 TZS");
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
          this.email = data.email;
        });
    });
    console.log(this.plans);
  },
};
</script>
