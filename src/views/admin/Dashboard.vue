<template>
  <div>
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
</template>
<script>
import CardPageVisits from "@/components/Cards/CardPageVisits.vue";
import CardSocialTraffic from "@/components/Cards/CardSocialTraffic.vue";
import CardBunny from "@/components/Cards/CardBunny.vue";
import CardRhino from "@/components/Cards/Cardrhino.vue";
import CardSimba from "@/components/Cards/Cardsimba.vue";
export default {
  name: "dashboard-page",
  components: {
    CardBunny,
    CardPageVisits,
    CardSocialTraffic,
    CardRhino,
    CardSimba,
  },
};
</script>
