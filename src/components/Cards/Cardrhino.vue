<template>
  <div
    v-if="this.role == 'admin'"
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">Cashouts</h3>
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button
            class="
              bg-indigo-500
              text-white
              active:bg-indigo-600
              text-xs
              font-bold
              uppercase
              px-3
              py-1
              rounded
              outline-none
              focus:outline-none
              mr-1
              mb-1
              ease-linear
              transition-all
              duration-150
            "
            type="button"
          >
            admin panel
          </button>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead class="thead-light">
          <tr>
            <th
              class="
                px-6
                bg-blueGray-50
                text-blueGray-500
                align-middle
                border border-solid border-blueGray-100
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
            >
              Amount
            </th>
            <th
              class="
                px-6
                bg-blueGray-50
                text-blueGray-500
                align-middle
                border border-solid border-blueGray-100
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
            >
              Phone Number
            </th>
            <th
              class="
                px-6
                bg-blueGray-50
                text-blueGray-500
                align-middle
                border border-solid border-blueGray-100
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
            >
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in bunny" :key="p.id">
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
              "
            >
              {{ p.amount }}
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
              {{ p.phone }}
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
              {{ p.email }}
            </td>
            <td>
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
                @click="delet(p.id)"
              >
                confirm
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  data() {
    return {
      username: "",
      phonenumber: "",
      activated: false,
      balance: 0,
      plan: "",
      uid: "",
      downlines: 0,
      cashout: 0,
      downline_bonus: 0,
      email: "",
      bunny: [],
      role: "",
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
          this.email = data.email;
          this.downline_bonus = data.downline_bonus;
          this.role = data.role;
        });
      db.collection("cashouts")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            this.bunny.push(doc.data());
          });
        });
    });
  },
  methods: {
    delet: function (id) {
      let db = firebase.firestore();
      db.collection("cashouts")
        .where("id", "==", id)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            db.collection("cashouts").doc(doc.id).delete();
          });
        });
    },
  },
};
</script>
