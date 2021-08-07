<template>
  <div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-4/12 px-4">
        <card-social-traffic />
        <cashout />
        <simba />
      </div>
    </div>
  </div>
</template>
<script>
import CardSocialTraffic from "@/components/Cards/CardSocialTraffic.vue";
import Cashout from "@/components/Cards/Cardrhino.vue";
import simba from "@/components/Cards/Cardsimba.vue";
export default {
  name: "dashboard-page",
  components: {
    CardSocialTraffic,
    Cashout,
    simba,
  },
};
</script>
