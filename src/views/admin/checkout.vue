<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-12/12 px-4">
      <Checkout />
    </div>
  </div>
</template>
<script>
import Checkout from "../../components/Cards/checkout.vue";
export default {
  components: {
    Checkout,
  },
};
</script>
