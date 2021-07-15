<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">Bunny Queue</h3>
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
            2
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
              phone
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
              Verified
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
              actions
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
              {{ p.phone }}
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
              {{ p.amount }}
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
              {{ p.verified }}
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
                @click="verify(p.id)"
              >
                verify
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
    };
  },
  methods: {
    verify: function (id) {
      console.log(id);
      let db = firebase.firestore();
      db.collection("bunny")
        .where("id", "==", id)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            db.collection("bunny").doc(doc.id).update({
              verified: true,
            });
            db.collection("bunny")
              .doc(doc.id)
              .delete()
              .then(() => {
                console.log("deleted");
              });
          });
        });
      db.collection("bunny")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            db.collection("bunny")
              .doc(doc.id)
              .get()
              .then((snapshot) => {
                let data = snapshot.data();
                let id = data.id;
                let new_id = id - 1;
                db.collection("bunny").doc(doc.id).update({
                  id: new_id,
                });
              });
          });
        });
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
          this.email = data.email;
          this.downline_bonus = data.downline_bonus;
        });
      db.collection("bunny")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            this.bunny.push(doc.data());
          });
        });
    });
  },
};
</script>
