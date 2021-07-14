<template>
  <div>
    <div v-if="role !== 'admin'"></div>
    <div v-else>
      <div class="flex flex-wrap mt-4">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <card-page-visits />
        </div>
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <card-bunny />
        </div>
        <div class="w-full xl:w-4/12 px-4">
          <card-social-traffic />
        </div>
        <div class="w-full xl:w-4/12 px-4">
          <card-simba />
        </div>
        <div class="w-full xl:w-4/12 px-4">
          <card-rhino />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardPageVisits from "@/layouts/CardPageVisits.vue";
import CardSocialTraffic from "@/layouts/CardSocialTraffic.vue";
import CardBunny from "@/layouts/CardBunny.vue";
import CardRhino from "@/layouts/Cardrhino.vue";
import CardSimba from "@/layouts/Cardsimba.vue";
import firebase from "firebase";
export default {
  name: "dashboard-page",
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
      admin: null,
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
          this.downline_bonus = data.downline_bonus;
          this.uid = data.uid;
          this.admin = data.admin;
          this.role = data.role;
        });
    });
  },
  components: {
    CardBunny,
    CardPageVisits,
    CardSocialTraffic,
    CardRhino,
    CardSimba,
  },
};
</script>
