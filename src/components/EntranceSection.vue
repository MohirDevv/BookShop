<template>
  <div class="main block container m-auto xl:flex">
    <div
      class="wrapper relative xl:w-[100%] bg-[url('/src/assets/images/desktop/main_bg.png')] bg-center bg-cover bg-no-repeat py-[50px] px-[16px] xl:border-[#5F807D] xl:border-r-[20px]"
    >
      <div
        class="subwrapper 2xl:pl-[50px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          class="info m-auto max-w-[380px] xl:max-w-[780px] 2xl:max-w-[870px] bg-[#73B2AC59] border-[1px] border-[#FFFFFF80] backdrop-blur-[20px] rounded-[15px] px-[18px] xl:px-[41px] py-[16px] xl:py-[41px]"
        >
          <div
            class="mainEntrance flex justify-start items-center gap-1 xl:gap-3"
          >
            <div
              class="w-[15px] xl:w-[30px] h-[1.5px] xl:h-[2px] bg-[#fff]"
            ></div>
            <h2
              class="text-white text-[15px] xl:text-[20px] font-semibold tracking-[1px]"
            >
              Shaxsiy rivojlanish bo'yicha trening
            </h2>
          </div>

          <div class="about">
            <h1
              class="h-[40px] xl:h-[60px] text-white text-[34px] xl:text-[60px] xl:leading-[54px] font-bold tracking-[1.7px] xl:tracking-[3px] xl:pt-[2px]"
            >
              3 oylik
            </h1>
            <div class="mainTitle xl:flex xl:items-end">
              <h1
                class="h-[50px] xl:h-[100px] text-white text-[42px] xl:text-[80px] 2xl:text-[90px] font-extrabold xl:leading-[90px] xl:pr-[10px]"
              >
                YANGILANISH
              </h1>
              <p
                class="xl:h-[85px] text-white text-[24px] xl:text-[40px] 2xl:text-[50px] font-bold xl:leading-[90px] xl:lowercase"
              >
                kursi
              </p>
            </div>
          </div>

          <div
            class="screen_xl flex xl:justify-between xl:items-center flex-col xl:flex-row xl:gap-6"
          >
            <div
              class="bonus rounded-[10px] backdrop-blur-[12.5px] mt-[45px] mb-[12px] pb-[16px]"
            >
              <div class="flex items-center justify-start pl-[10px]">
                <span class="text-[40px] text-[#00FFE6] mb-[-8px] mt-[-2px]"
                  >+</span
                >
                <h1
                  class="text-[#00FFE6] text-[24px] xl:text-[40px] font-extrabold ml-[6px] mt-[7px] xl:pr-[230px]"
                >
                  BONUS
                </h1>
              </div>
              <span class="text-[15px] text-[#00FFE6] font-extrabold pl-[10px]">
                "YANGILANISH FURSATI YETDI" KITOBI
              </span>
              <div class="book w-[200px] h-[200px]">

              </div>
              <!-- <img
                class="book w-[200px] h-[200px]"
                src="../assets/images/desktop/book.png"
                alt="#"
              /> -->
            </div>

            <div
              class="delv xl:w-[330px] xl:h-[100px] flex justify-center items-center backdrop-blur-[17px] rounded-[10px] py-[8px] gap-2 xl:mt-[34px]"
            >
              <img
                class="w-[45px] h-[45px]"
                src="../assets/icons/fast_delivery.png"
                alt="#"
              />
              <h2
                class="w-[230px] text-white text-[15px] xl:text-[18px] 2xl:text-[22px] font-semibold"
              >
                O'zbekiston bo'ylab yetkazib <br class="block xl:hidden" />
                berish bepul
              </h2>
            </div>
          </div>
        </div>

        <div
          class="discount m-auto max-w-[380px] xl:max-w-[870px] mt-[10px] bg-[#73B2AC59] border-[#FFFFFF80] border-[1px] rounded-[15px] backdrop-blur-[20px] px-[28px] xl:px-[30px] xl:py-[20px]"
        >
          <div
            class="pricelist flex items-center justify-between m-auto max-w-[380px] xl:max-w-[890px] xl:flex xl:items-center xl:justify-normal 2xl:justify-between"
          >
            <div class="oldprice flex flex-col pb-1">
              <h1
                class="h-[35px] xl:h-[50px] text-[#FFFFFFB2] text-[30px] xl:text-[40px] font-black line-through"
              >
                3.700.000
              </h1>
              <p
                class="text-[#FFFFFFB2] text-[15px] xl:text-[28px] font-medium"
              >
                kurs narxi
              </p>
            </div>

            <div class="atigi hidden xl:block">
              <img src="/src/assets/images/desktop/atigi.png" alt="#" />
            </div>

            <div class="newprice flex flex-col pb-1 xl:pr-[25px]">
              <h1
                class="h-[35px] xl:h-[50px] text-white text-[30px] xl:text-[40px] font-black"
              >
                79.000
              </h1>
              <p class="text-white text-[15px] xl:text-[28px] font-medium">
                dan oyiga
              </p>
            </div>

            <div
              class="button hidden bg-[#0ACCBA] border-[#CFFFFA80] border-[3px] rounded-[5px] xl:flex items-center justify-center mr-[11px]"
              @click="scrollToFooter"
            >
              <button
                @click="scrollToFooter"
                class="text-white text-[20px] font-bold px-[20px] py-[16px] 2xl:px-[40px]"
              >
                <p class="w-[130px]">SOTIB OLISH</p>
              </button>
            </div>
          </div>
        </div>

        <div
          class="button m-auto xl:hidden max-w-[380px] flex items-center justify-center mt-[24px] py-[16px] rounded-[5px] border-[#CFFFFA80] border-[3px] bg-[#0ACCBA]"
          @click="scrollToFooter"
        >
          <button
            class="text-white text-[16px] font-bold"
            @click="scrollToFooter"
          >
            SOTIB OLISH
          </button>
        </div>
        <!--  -->
        <teleport to="body">
          <div class="" v-if="isOpen">
            <div
              @click="isOpen = false"
              class="fixed inset-0 top-0 left-0 bottom-0 bg-[#00000099] z-[1]"
            ></div>
            <div
              class="fixed modal top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col z-[2]"
              v-if="isOpen"
            >
              <button
                class="w-[390px] xl:w-[700px] flex items-center justify-end"
                @click="isOpen = false"
              >
                <img src="../assets/icons/remove.png" alt="#" />
              </button>
              <div
                class="bg-white rounded-lg flex items-center justify-center flex-col"
              >
                <div class="text text-center pt-[24px] pb-[24px]">
                  <h3
                    class="block xl:hidden text-black text-[12px] font-normal"
                  >
                    Menejerdan ma’lumot olish uchun
                  </h3>
                  <h2
                    class="block xl:hidden text-[#0ACCBA] text-[18px] font-extrabold text-center"
                  >
                    Raqamingizni qoldiring
                  </h2>
                  <h1
                    class="hidden xl:block text-black text-[50px] font-semibold px-[180px]"
                  >
                    Ma'lumot olish
                  </h1>
                </div>

                <input
                  id="validator_name"
                  class="w-[350px] xl:w-[600px] border-[1px] focus:border-[#C6C6C6] border-[#C6C6C6] rounded-lg mx-[15px] px-[15px] py-[16px] mb-[12px]"
                  type="text"
                  placeholder="Ismingiz"
                  v-model="name"
                  @input="formatNameValue()"
                />
                <input
                  id="validator_num"
                  class="w-[350px] xl:w-[600px] border-[1px] focus:border-[#C6C6C6] border-[#C6C6C6] rounded-lg mx-[15px] px-[15px] py-[16px] mb-[24px]"
                  type="tel"
                  placeholder="Telefon raqamingiz"
                  v-model="phone"
                  @focus="onFocus()"
                  @input="formatPhoneNumber()"
                />

                <button
                  class="button text-white text-[16px] font-bold w-[350px] xl:w-[600px] flex items-center justify-center py-[16px] rounded-[8px] border-[#CFFFFA80] border-[3px] bg-[#0ACCBA] mb-[24px] xl:mb-[50px]"
                  @click="sendData"
                >
                  YUBORISH
                </button>
              </div>
            </div>
          </div>
        </teleport>
      </div>
    </div>
    <div
      class="Lwrapper hidden px-[10px] w-[60%] bg-[url('/src/assets/images/desktop/tube_bg.png')] bg-center bg-cover bg-no-repeat xl:flex items-center justify-center"
    >
      <div class="tubevideo" data-aos="fade-down" data-aos-duration="1000">
        <iframe
          class="m-auto md:w-[470px] md:h-[330px] w-[340px] h-[280px] rounded-[8px] p-[10px] bg-[#73B2AC59]"
          src="https://www.youtube.com/embed/kaJdoGFT56o?si=DYlKKGderXm7WsZy&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div
      class="fixed w-[300px] rounded-[8px] bg-[white] flex z-10 px-5 py-2 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out gap-3"
      :class="isDataSent ? 'top-2.5' : '-top-full'"
    >
      <img src="../assets/icons/success_blue.svg" alt="#" />
      <h1 class="text-[#0ACCBA] text-[16px] font-bold">
        Muvaffaqiyatli yuborildi!
      </h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isDataSent: false,
      isOpen: false,
      isValidNum: null,
      isVAlidName: null,
      phone: null,
      name: null,
    };
  },
  methods: {
    scrollToFooter() {
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        footerElement.scrollIntoView({
          behavior: "smooth", // Optional for smooth scrolling
        });
      }
    },
    formatPhoneNumber() {
      const num = document.getElementById("validator_num");
      let inputValue = this.phone
        .replace(/\D/g, "")
        .replace("9", "")
        .replace("9", "")
        .replace("8", "");

      if (inputValue.length > 9) {
        inputValue = inputValue.substring(0, 9);
      }

      if (inputValue.length <= 2) {
        this.phone = "+998 " + inputValue;
        num.classList.add("invalid");
      } else if (inputValue.length <= 5) {
        this.phone =
          "+998 " + inputValue.substring(0, 2) + " " + inputValue.substring(2);
      } else if (inputValue.length <= 7) {
        this.phone =
          "+998 " +
          inputValue.substring(0, 2) +
          " " +
          inputValue.substring(2, 5) +
          "-" +
          inputValue.substring(5);
        num.classList.add("invalid");
      } else {
        this.phone =
          "+998 " +
          inputValue.substring(0, 2) +
          " " +
          inputValue.substring(2, 5) +
          "-" +
          inputValue.substring(5, 7) +
          "-" +
          inputValue.substring(7, 9);
        num.classList.add("invalid");
        this.isValidNum = false;
      }

      if (inputValue.length == 9) {
        num.classList.remove("invalid");
        this.isValidNum = true;
      }
    },
    formatNameValue() {
      const name = document.getElementById("validator_name");
      let inputValue = this.name;
      if (inputValue.length == 0) {
        name.classList.add("invalid");
        this.isVAlidName = false;
      } else if (inputValue.length >= 1) {
        name.classList.remove("invalid");
        this.isVAlidName = true;
      }
    },
    onFocus() {
      if (!this.phone) {
        this.phone = "+998 ";
      }
    },
    sendData() {
      const body = {
        name: this.name,
        phone_number: this.phone.replaceAll("-", "").replaceAll(" ", ""),
        project: "shaxnoza-siddiqova",
      };
      if (
        this.isVAlidName !== true ||
        this.isValidNum !== true ||
        this.isVAlidName == null ||
        this.isValidNum == null
      ) {
        const name = document.getElementById("validator_name");
        const num = document.getElementById("validator_num");

        num.classList.add("invalid");
        name.classList.add("invalid");
      } else if (this.isValidNum == true && this.isVAlidName == true) {
        const name = document.getElementById("validator_name");
        const num = document.getElementById("validator_num");

        num.classList.remove("invalid");
        name.classList.remove("invalid");
        this.isDataSent = true;
        setTimeout(() => {
          this.isOpen = false;
        }, 3000);
        setTimeout(() => {
          this.isDataSent = false;
        }, 2000);
        console.log("success");
        axios
          .post("https://crm.redapp.uz/api/customer/", body)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
            if (error) {
              alert("Xato!");
            }
          });
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.isOpen = true;
    }, 2000);
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 100%;
}

.book {
  content: "";
  position: absolute;
  top: -42%;
  left: 20%;
  transform: translate(50%, -50%);
  scale: 0.7;
  background-image: url(../assets/images/desktop/book.png);
  background-position: center;
  width: 200px;
  height: 200px;
}

.invalid {
  border: 1px solid rgba(255, 107, 107, 0.4);
  background: rgba(255, 138, 138, 0.1);
}

.modal {
  content: "";
  transition: 2s;
}

.modal {
  animation: fadeIn 0.7s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.button:hover {
  border: 3px solid #00ffe6;
  background: #0accba;
}
.button:active {
  border: 3px solid #7ae4d980;
  background: #009789;
}

@media screen and (min-width: 1280px) {
  .container {
    width: 100%;
  }
  .book {
    content: "";
    width: 250px;
    height: 250px;
    position: absolute;
    top: -10%;
    left: 12%;
    scale: 0.9;
    transform: translate(80%, -40%);
  }
}

@media screen and (min-width: 1280px) {
  iframe {
    width: 420px;
    height: 350px;
  }
}
@media screen and (min-width: 1536px) {
  iframe {
    width: 520px;
    height: 390px;
  }
}
@media screen and (min-width: 1980px) {
  iframe {
    width: 650px;
    height: 390px;
  }
}
</style>
