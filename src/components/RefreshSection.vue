<template>
  <div
    class="container w-[340px] xl:w-full pt-[50px] xl:py-[150px] 2xl:px-[130px] xl:mt-[150px] m-auto bg-white xl:bg-[#F5F9FA] overflow-x-hidden"
  >
    <div
      data-aos="fade-up"
      class="title flex xl:hidden items-center justify-center flex-col gap-1"
    >
      <h1 class="text-[#152221] text-[28px] font-bold text-center">
        Yangilanish fursati
      </h1>
      <div class="subtree flex gap-2">
        <h1 class="text-[#152221] text-[28px] font-bold">yetdi</h1>
        <div
          class="kitobi text-white text-[16px] font-extrabold px-[10px] py-[5px] h-[35px] bg-[#009789] mt-[5px]"
        >
          <p class="h-[25px]">kitobi</p>
        </div>
      </div>
    </div>

    <div
      class="subtitle block xl:hidden pt-[12px] pb-[24px] m-auto w-[300px] text-[#47474F] text-[14px] font-normal text-center"
    >
      Kitobdagi 7 ta mashg'ulot orqali butkul boshqa insonga aylaning
    </div>
    <div class="xlmain m-auto flex items-center justify-center">
      <div
        class="slice_images1 xl:hidden flex items-center justify-center gap-[2.5px]"
      >
        <img
          src="../assets/images/mobile/book_one.png"
          alt="#"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <img
          src="../assets/images/mobile/book_two.png"
          alt="#"
          data-aos="fade-down"
          data-aos-duration="1000"
        />
      </div>

      <div
        class="slice_images2 hidden xl:flex items-center justify-center gap-[2.5px] pr-[30px]"
      >
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          class="img1 w-[400px] h-[630px]"
          src="../assets/images/desktop/book_one.png"
          alt="#"
        />
        <img
          data-aos="fade-down"
          data-aos-duration="1000"
          class="img2 w-[220px] h-[630px]"
          src="../assets/images/desktop/book_two.png"
          alt="#"
        />
      </div>
      <div
        data-aos="zoom-out"
        class="textSection hidden xl:flex xl:items-center xl:justify-center flex-col 2xl:pl-[50px] xl:mr-[20px]"
      >
        <div class="mainent">
          <h1 class="text-[#152221] text-[50px] font-bold">
            Yangilanish fursati
          </h1>
          <div class="subtree flex items-center justify-start gap-2">
            <h1 class="text-[#152221] text-[50px] font-bold">yetdi</h1>
            <div
              class="kitobi text-white text-[28px] font-extrabold px-[10px] py-[5px] h-[52px] bg-[#009789]"
            >
              <p class="h-[25px]">kitobi</p>
            </div>
          </div>
          <div
            class="subtitle pt-[12px] pb-[24px] w-[530px] text-[#47474F] text-[18px] font-medium border-[#C2C3D4] border-b-[1px]"
          >
            Kitobdagi 7 ta mashg'ulot orqali butkul boshqa insonga aylaning
          </div>
        </div>
        <div class="seventasks flex items-start justify-center pt-[30px]">
          <div class="firstfour">
            <div class="task flex gap-2 pb-[25px]">
              <img src="/src/assets/icons/trash.png" alt="#" />
              <div class="subtitl">
                <h1 class="text-[#009789] text-[18px] font-medium">1-kun</h1>
                <p class="text-[#47474F] text-[14px] font-medium">
                  To'sqinlar va chiqindilar
                </p>
              </div>
            </div>
            <div class="task flex gap-2 pb-[25px]">
              <img src="/src/assets/icons/stressed.png" alt="#" />
              <div class="subtitl">
                <h1 class="text-[#009789] text-[18px] font-medium">2-kun</h1>
                <p class="text-[#47474F] text-[14px] font-medium">
                  Qo'rquvlarimiz
                </p>
              </div>
            </div>
            <div class="task flex gap-2 pb-[25px]">
              <img src="/src/assets/icons/lonely.png" alt="#" />
              <div class="subtitl">
                <h1 class="text-[#009789] text-[18px] font-medium">3-kun</h1>
                <p class="text-[#47474F] text-[14px] font-medium">Qarorlar</p>
              </div>
            </div>
            <div class="task flex gap-2">
              <img src="/src/assets/icons/time.png" alt="#" />
              <div class="subtitl">
                <h1 class="text-[#009789] text-[18px] font-medium">4-kun</h1>
                <p class="text-[#47474F] text-[14px] font-medium">
                  O'tmishdagi asosiy kechinmalar
                </p>
              </div>
            </div>
          </div>
          <div class="firstthird">
            <div class="task flex gap-2 pb-[25px]">
              <img src="/src/assets/icons/backspace.png" alt="#" />
              <div class="subtitl">
                <h1 class="text-[#009789] text-[18px] font-medium">5-kun</h1>
                <p class="text-[#47474F] text-[14px] font-medium">
                  Krutilka usuli
                </p>
              </div>
            </div>
            <div class="task flex gap-2 pb-[25px]">
              <img src="/src/assets/icons/grees.png" alt="#" />
              <div class="subtitl">
                <h1 class="text-[#009789] text-[18px] font-medium">6-kun</h1>
                <p class="text-[#47474F] text-[14px] font-medium">
                  Obrazlarni almashtirish usuli
                </p>
              </div>
            </div>
            <div class="task flex gap-2">
              <img src="/src/assets/icons/increasing.png" alt="#" />
              <div class="subtitl">
                <h1 class="text-[#009789] text-[18px] font-medium">7-kun</h1>
                <p class="text-[#47474F] text-[14px] font-medium">
                  Rivojlanishda bardavom bo'lish
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="ending flex items-center justify-center pt-[50px] 2xl:ml-[30px]"
        >
          <button
            class="btn flex items-center justify-center px-[30px] py-[16px] rounded-[5px] border-[#CFFFFA80] border-[3px] bg-[#0ACCBA] mr-[30px] text-white text-[16px] font-bold"
            @click="isModal = true"
          >
            <p class="w-[130px]">Buyurtma berish</p>
          </button>
          <div class="car w-[320px] flex flex-col">
            <div class="div w-[310px] relative flex items-center">
              <p class="h-[20px] text-[#47474F] text-[14px] font-medium">
                O'zbekiston bo'ylab bepul yetkazib berish
              </p>
              <img
                id="carIcon"
                :class="{ carainm2: isVisible }"
                class="absolute top-[10%]"
                src="../assets/icons/animcar1.svg"
                alt="#"
              />
              <img
                class="pl-[10px] w-[40px] h-[40px]"
                src="../assets/icons/fast_delivery_dark.svg"
                alt="#"
              />
            </div>

            <img
              class="m-auto w-[300px]"
              src="../assets/images/mobile/line.png"
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="seven_tasks gap-2 max-w-[360px] flex items-start justify-center flex-col m-auto pt-[28px] xl:hidden"
    >
      <div class="task flex gap-2" data-aos="fade-up">
        <img src="/src/assets/icons/trash.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">1-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">
            To'sqinlar va chiqindilar
          </p>
        </div>
      </div>
      <div class="task flex gap-2" data-aos="fade-up">
        <img src="/src/assets/icons/stressed.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">2-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">Qo'rquvlarimiz</p>
        </div>
      </div>
      <div class="task flex gap-2" data-aos="fade-up">
        <img src="/src/assets/icons/lonely.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">3-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">Qarorlar</p>
        </div>
      </div>
      <div class="task flex gap-2" data-aos="fade-up">
        <img src="/src/assets/icons/time.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">4-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">
            O'tmishdagi asosiy kechinmalar
          </p>
        </div>
      </div>
      <div class="task flex gap-2" data-aos="fade-up">
        <img src="/src/assets/icons/backspace.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">5-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">Krutilka usuli</p>
        </div>
      </div>
      <div class="task flex gap-2" data-aos="fade-up">
        <img src="/src/assets/icons/grees.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">6-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">
            Obrazlarni almashtirish usuli
          </p>
        </div>
      </div>
      <div class="task flex gap-2" data-aos="fade-up">
        <img src="/src/assets/icons/increasing.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">7-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">
            Rivojlanishda bardavom bo'lish
          </p>
        </div>
      </div>
    </div>

    <div
      class="loading block xl:hidden m-auto max-w-[340px] overflow-x-hidden"
      ref="target"
    >
      <div
        class="car relative w-[340px] flex items-center justify-start pt-[40px] pl-[15px] gap-2"
      >
        <p class="text-[#47474F] text-[14px] font-medium animate-[drive]">
          O'zbekiston bo'ylab bepul yetkazib berish
        </p>
        <img
          class="w-[30px] h-[30px]"
          src="../assets/icons/fast_delivery_dark.svg"
          alt="#"
        />
        <img
          id="carIcon1"
          :class="{ carainm: isVisible }"
          class="absolute top-[50%]"
          src="../assets/icons/animcar.svg"
          alt="#"
        />
      </div>
      <img
        class="m-auto max-w-[340px] pb-[25px]"
        src="../assets/images/mobile/line.png"
        alt="#"
      />
    </div>

    <div
      class="btn xl:hidden m-auto max-w-[350px] flex items-center justify-center px-[20px] py-[16px] rounded-[5px] border-[#CFFFFA80] border-[3px] bg-[#0ACCBA] mb-[50px]"
      @click="isModal = true"
    >
      <button class="text-white text-[16px] font-bold cursor-pointer">
        SOTIB OLISH
      </button>
      <teleport to="body">
        <div class="" v-if="isModal">
          <div
            @click="isModal = false"
            class="fixed inset-0 top-0 left-0 bottom-0 bg-[#00000099] z-[1]"
          ></div>
          <div
            class="fixed modal top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col z-[2]"
            v-if="isModal"
          >
            <button
              class="w-[390px] xl:w-[700px] flex items-center justify-end"
              @click="isModal = false"
            >
              <img src="../assets/icons/remove.png" alt="#" />
            </button>
            <div
              class="bg-white rounded-lg flex items-center justify-center flex-col"
            >
              <div class="text text-center pt-[24px] pb-[24px]">
                <h3 class="block xl:hidden text-black text-[12px] font-normal">
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
                class="btn w-[350px] xl:w-[600px] flex items-center justify-center py-[16px] rounded-[8px] border-[#CFFFFA80] border-[3px] bg-[#0ACCBA] mb-[24px] xl:mb-[50px] text-white text-[16px] font-bold"
                @click="sendData"
              >
                YUBORISH
              </button>
            </div>
          </div>
        </div>
      </teleport>
    </div>

    <div
      class="fixed w-[300px] rounded-[8px] bg-[white] flex z-10 px-5 py-2 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out gap-3"
      :class="isInfoSent ? 'top-2.5' : '-top-full'"
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
      isInfoSent: false,
      isModal: false,
      phone: null,
      name: null,
      is__Valid: null,
      valid__Name: null,
      isVisible: false,
    };
  },
  mounted() {
    this.isVisible = this.isElementInViewport();
    document.addEventListener("scroll", () => {
      if (!this.isVisible) {
        this.isVisible = this.isElementInViewport();
      }
    });
  },
  methods: {
    isElementInViewport() {
      const el = document.getElementById("carIcon");
      const el1 = document.getElementById("carIcon1");
      if (!el || !el1) return;

      var rect = el.getBoundingClientRect();
      var rect1 = el1.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect1.top >= 0 &&
        rect.left >= 0 &&
        rect1.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect1.bottom <=
          (window.innerHeight || document.documentElement.$(window).height()) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        rect1.right <=
          (window.innerWidth || document.documentElement.$(window).width())
      );
    },
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
        this.is__Valid = false;
      }

      if (inputValue.length == 9) {
        num.classList.remove("invalid");
        this.is__Valid = true;
      }
    },
    formatNameValue() {
      const name = document.getElementById("validator_name");
      let inputValue = this.name;
      if (inputValue.length == 0) {
        name.classList.add("invalid");
        this.valid__Name = false;
      } else if (inputValue.length >= 1) {
        name.classList.remove("invalid");
        this.valid__Name = true;
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
        this.valid__Name !== true ||
        this.is__Valid !== true ||
        this.valid__Name == null ||
        this.is__Valid == null
      ) {
        const name = document.getElementById("validator_name");
        const num = document.getElementById("validator_num");

        num.classList.add("invalid");
        name.classList.add("invalid");
      } else if (this.is__Valid == true && this.valid__Name == true) {
        const name = document.getElementById("validator_name");
        const num = document.getElementById("validator_num");

        num.classList.remove("invalid");
        name.classList.remove("invalid");
        this.isInfoSent = true;
        setTimeout(() => {
          this.isModal = false;
        }, 3000);
        setTimeout(() => {
          this.isInfoSent = false;
        }, 2000);
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
  watch: {},
};
</script>

<style scoped>
.modal {
  transition: 0.5s;
}
.btn:hover {
  border: 3px solid #00ffe6;
  background: #0accba;
}
.btn:active {
  border: 3px solid #7ae4d980;
  background: #009789;
}

.invalid {
  border: 1px solid rgba(255, 107, 107, 0.4);
  background: rgba(255, 138, 138, 0.1);
}

.carainm {
  position: absolute;
  animation: drive 5s linear;
  animation-fill-mode: forwards;
}
.carainm2 {
  animation: drive2 5s linear;
  animation-fill-mode: forwards;
}
.container {
  width: 100%;
  max-width: 100%;
}

@keyframes drive {
  0% {
    left: 5%;
  }
  50% {
  }
  100% {
    left: 84.5%;
    display: none;
  }
}
@keyframes drive2 {
  0% {
    left: 0%;
  }
  50% {
  }
  100% {
    left: 86.5%;
    display: none;
  }
}
</style>
