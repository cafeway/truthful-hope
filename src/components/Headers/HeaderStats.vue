<template>
  <!-- Header -->
  <div class="relative bg-emerald-600 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div
              class="
                relative
                flex flex-col
                min-w-0
                break-words
                bg-white
                rounded
                mb-6
                xl:mb-0
                shadow-lg
              "
            >
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">Account Balance</h5>
                    <span class="font-semibold text-xl text-blueGray-700" style="color: #025928">
                      {{ this.balance }}
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="50"
                        fill="#025928"
                        class="bi bi-cash-coin"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
                        />
                        <path
                          d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"
                        />
                        <path
                          d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"
                        />
                        <path
                          d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-blueGray-400 mt-4">
                  <span class="mr-2" :class="[statPercentColor]">
                    <i :class="[statArrow === 'up' ? `fas fa-arrow-up` : `fas fa-arrow-down`]"></i>
                    {{ statPercent }}%
                  </span>
                  <span class="whitespace-nowrap">{{ statDescripiron }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div
              class="
                relative
                flex flex-col
                min-w-0
                break-words
                bg-white
                rounded
                mb-6
                xl:mb-0
                shadow-lg
              "
            >
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">Downlines</h5>
                    <span class="font-semibold text-xl text-blueGray-700" style="color: #7d4403">
                      {{ this.downlines }}
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="50"
                        fill="#7D4403"
                        class="bi bi-person-check-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                        />
                        <path
                          d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-blueGray-400 mt-4">
                  <span class="mr-2" :class="[statPercentColor]"> </span>
                  <span class="whitespace-nowrap">{{ statDescripiron }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div
              class="
                relative
                flex flex-col
                min-w-0
                break-words
                bg-white
                rounded
                mb-6
                xl:mb-0
                shadow-lg
              "
            >
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">Revenue</h5>
                    <span class="font-semibold text-xl text-blueGray-700" style="color: #06374f">
                      {{ this.downlines }}
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="50"
                        fill="#06374F"
                        class="bi bi-cart-check-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-blueGray-400 mt-4">
                  <span class="mr-2" :class="[statPercentColor]">
                    <i :class="[statArrow === 'up' ? `fas fa-arrow-up` : `fas fa-arrow-down`]"></i>
                    {{ statPercent }}%
                  </span>
                  <span class="whitespace-nowrap">{{ statDescripiron }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div
              class="
                relative
                flex flex-col
                min-w-0
                break-words
                bg-white
                rounded
                mb-6
                xl:mb-0
                shadow-lg
              "
            >
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">Bonuses</h5>
                    <span class="font-semibold text-xl text-blueGray-700" style="color: #7d1c03">
                      {{ this.downline_bonus }}
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="50"
                        fill="#7D1C03"
                        class="bi bi-trophy-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-blueGray-400 mt-4">
                  <span class="mr-2" :class="[statPercentColor]">
                    <i :class="[statArrow === 'up' ? `fas fa-arrow-up` : `fas fa-arrow-down`]"></i>
                    {{ statPercent }}%
                  </span>
                  <span class="whitespace-nowrap">{{ statDescripiron }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        });
    });
  },
};
</script>
