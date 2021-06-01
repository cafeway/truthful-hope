<template>
  <div>
    <navbar />
    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');
          "
        >
          <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div
          class="
            top-auto
            bottom-0
            left-0
            right-0
            w-full
            absolute
            pointer-events-none
            overflow-hidden
            h-70-px
          "
          style="transform: translateZ(0)"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div
            class="
              relative
              flex flex-col
              min-w-0
              break-words
              bg-white
              w-full
              mb-6
              shadow-xl
              rounded-lg
              -mt-64
            "
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div class="relative">
                    <img
                      alt="..."
                      src="https://i.pinimg.com/736x/2e/eb/55/2eeb55e19b5e8c16ba6b616461b571e3.jpg"
                      class="
                        shadow-xl
                        rounded-full
                        h-auto
                        align-middle
                        border-none
                        absolute
                        -m-16
                        -ml-20
                        lg:-ml-16
                        max-w-150-px
                      "
                    />
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      class="
                        bg-emerald-500
                        active:bg-emerald-600
                        uppercase
                        text-white
                        font-bold
                        hover:shadow-md
                        shadow
                        text-xs
                        px-4
                        py-2
                        rounded
                        outline-none
                        focus:outline-none
                        sm:mr-2
                        mb-1
                        ease-linear
                        transition-all
                        duration-150
                      "
                      type="button"
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8"></div>
                </div>
              </div>
              <div class="text-center mt-12">
                <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Choose an Investment Plan
                </h3>
                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  Los Angeles, California
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <div class="wrapper">
                      <div class="plan">
                        <header>
                          <span
                            class="iconify"
                            data-icon="fxemoji:waterbuffalo"
                            data-inline="false"
                            style="width: 100px; height: 50px"
                          ></span>
                          <h4 class="plan-title">Nyati Package</h4>
                          <div class="plan-cost">
                            <span class="plan-price">min:1k max:15k</span
                            ><span class="plan-type"></span>
                          </div>
                        </header>
                        <ul class="plan-features">
                          <li>8% per 24hrs</li>
                          <li>22% per 48hrs</li>
                          <li>34% per 72hrs</li>
                          <li>84% per 96hrs</li>
                        </ul>
                        <div class="plan-select"><a href="">Select Plan</a></div>
                      </div>
                      <div class="plan">
                        <header>
                          <span
                            class="iconify"
                            data-icon="noto-v1:rhinoceros"
                            data-inline="false"
                            style="width: 100px; height: 50px"
                          ></span>
                          <h4 class="plan-title">Kifaru Package</h4>
                          <div class="plan-cost">
                            <span class="plan-price">min:15k max:30k</span
                            ><span class="plan-type"></span>
                          </div>
                        </header>
                        <ul class="plan-features">
                          <li>11% per 24hrs</li>
                          <li>25% per 48hrs</li>
                          <li>37% per 72hrs</li>
                          <li>87% per 96hrs</li>
                        </ul>
                        <div class="plan-select"><a href="">Select Plan</a></div>
                      </div>
                      <div class="plan featured">
                        <header>
                          <span
                            class="iconify"
                            data-icon="twemoji:elephant"
                            data-inline="false"
                            style="width: 100px; height: 50px"
                          ></span>
                          <h4 class="plan-title">Ndovu Package</h4>
                          <div class="plan-cost">
                            <span class="plan-price">min:30k max:50k</span
                            ><span class="plan-type"></span>
                          </div>
                        </header>
                        <ul class="plan-features">
                          <li>15% per 24hrs</li>
                          <li>28% per 48hrs</li>
                          <li>40% per 72hrs</li>
                          <li>90% per 96hrs</li>
                        </ul>
                        <div class="plan-select"><a href="">Select Plan</a></div>
                      </div>
                      <div class="plan">
                        <header>
                          <span
                            class="iconify"
                            data-icon="emojione-monotone:lion-face"
                            data-inline="false"
                            style="width: 100px; height: 50px"
                          ></span>
                          <h4 class="plan-title">Simba Package</h4>
                          <div class="plan-cost">
                            <span class="plan-price">100,000/=</span
                            ><small><span class="plan-type">/month</span></small>
                          </div>
                        </header>
                        <ul class="plan-features">
                          <h3>Coming soon</h3>
                        </ul>
                        <div class="plan-select"><a href="">Select Plan</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component />
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
import firebase from "firebase";
export default {
  data() {
    return {
      navbarOpen: false,
      username: "ble",
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
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "https://code.iconify.design/1/1.0.7/iconify.min.js");
    document.head.appendChild(recaptchaScript);
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
          document.getElementById("username").value = data.username;
          document.getElementById("email").value = data.email;
          document.getElementById("phonenumber").value = data.phonenumber;
          document.getElementById("wallet").value = data.uid;
        });
    });
  },
  components: {
    Navbar,
    FooterComponent,
  },
};
</script>
<style scoped>
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,500,800);
@import url(https://fonts.googleapis.com/css?family=Montserrat:800);

.wrapper {
  font-family: "Raleway", Arial, sans-serif;
  color: #ffffff;
  text-align: left;
  font-size: 16px;
  width: 100%;
  max-width: 1000px;
  margin: 50px 10px 10px;
}
.wrapper .plan {
  margin: 0;
  width: 25%;
  position: relative;
  float: left;
  background-color: #262626;
  border: 1px solid #1e1e1e;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
}
.wrapper .plan:hover,
wrapper .plan.hover {
  background-color: #1c1c1c;
}
.wrapper .plan:hover i,
wrapper .plan.hover i {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.wrapper * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
}
.wrapper header {
  position: relative;
  padding: 20px 10px;
}
.wrapper header i {
  font-size: 56px;
  margin: 0 15px;
  color: #f39c12;
  display: inline-block;
  float: left;
}
.wrapper .plan-title {
  top: 0;
  font-weight: 800;
  margin: 10px 0 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.wrapper .plan-cost {
  margin: 0;
  opacity: 0.2;
}
.wrapper .plan-price {
  font-family: "Montserrat", Arial, sans-serif;
  font-weight: 800;
  font-size: 1.3em;
}
.wrapper .plan-type {
  opacity: 0.8;
  font-size: 0.7em;
  text-transform: uppercase;
}
.wrapper .plan-features {
  padding: 0;
  margin: 0 0 40px;
  text-align: center;
  list-style: outside none none;
  font-size: 0.8em;
  text-align: left;
}
.wrapper .plan-features li {
  padding: 5px 5%;
  font-weight: 500;
  opacity: 0.5;
  border-left: 5px solid #f39c12;
  margin: 2px 20px;
}
.wrapper .plan-select {
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
}
.wrapper .plan-select a {
  color: #ffffff;
  text-decoration: none;
  padding: 15px 20px;
  margin: 20px;
  border-radius: 40px;
  font-size: 0.75em;
  font-weight: 800;
  text-transform: uppercase;
  display: inline-block;
  background-color: #f39c12;
}
.wrapper .plan-select a:hover {
  background-color: #262626;
}
.wrapper .featured {
  margin-top: -10px;
  background-color: #262626;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.wrapper .featured .plan-select a {
  margin: 30px 20px;
}
@media only screen and (max-width: 767px) {
  .wrapper .plan {
    width: 50%;
  }
  .wrapper .plan-title,
  .wrapper .plan-select a {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .wrapper .plan-select a,
  .wrapper .featured .plan-select a {
    margin: 20px;
  }
  .wrapper .featured {
    margin-top: 0;
  }
}

@media only screen and (max-width: 440px) {
  .wrapper .plan {
    width: 100%;
  }
}
</style>
