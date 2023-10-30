<template>
  <div
    class="container pt-[50px] 2xl:py-[150px] 2xl:px-[130px] 2xl:mt-[150px] m-auto bg-white 2xl:bg-[#F5F9FA]"
  >
    <div
      data-aos="fade-up"
      class="title flex 2xl:hidden items-center justify-center flex-col gap-1"
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
      class="subtitle block 2xl:hidden pt-[12px] pb-[24px] m-auto w-[300px] text-[#47474F] text-[14px] font-normal text-center"
    >
      Kitobdagi 7 ta mashg'ulot orqali butkul boshqa insonga aylaning
    </div>
    <div class="2xlmain m-auto flex items-center justify-center">
      <div
        class="slice_images 2xl:hidden flex items-center justify-center gap-[2.5px]"
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
        class="slice_images m-auto hidden 2xl:flex items-center justify-center gap-[2.5px]"
      >
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          class="w-[460px] h-[630px]"
          src="../assets/images/desktop/book_one.png"
          alt="#"
        />
        <img
          data-aos="fade-down"
          data-aos-duration="1000"
          class="w-[240px] h-[630px]"
          src="../assets/images/desktop/book_two.png"
          alt="#"
        />
      </div>
      <div
        data-aos="zoom-out"
        class="textSection hidden 2xl:flex items-center flex-col pl-[50px]"
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
                  Rivojlanisshda bardavom bo'lish
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="ending flex items-center justify-center pt-[50px] ml-[30px]"
        >
          <div
            class="btn flex items-center justify-center px-[30px] py-[16px] rounded-[5px] border-[#CFFFFA80] border-[3px] bg-[#0ACCBA] mr-[40px]"
          >
            <button
              class="text-white text-[16px] font-bold"
              @click="isModal = true"
            >
              <p class="w-[130px]">Buyurtma berish</p>
            </button>
          </div>
          <div class="car flex flex-col">
            <div
              class="div flex items-center"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <p class="h-[20px] text-[#47474F] text-[14px] font-medium">
                O'zbekiston bo'ylab bepul yetkazib berish
              </p>
              <img
                class="pl-[5px]"
                src="../assets/icons/fast_delivery_dark.png"
                alt="#"
              />
            </div>

            <img
              class="m-auto max-w-[380px]"
              src="../assets/images/mobile/line.png"
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="seven_tasks gap-2 max-w-[360px] flex items-start justify-center flex-col m-auto pt-[28px] 2xl:hidden"
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
            Rivojlanisshda bardavom bo'lish
          </p>
        </div>
      </div>
    </div>

    <div class="loading block 2xl:hidden m-auto max-w-[340px]">

      <div
        
        class="car flex items-center justify-start pt-[40px] pl-[15px] gap-2"
      >
      
        <p class="text-[#47474F] text-[14px] font-medium animate-[drive]">
          O'zbekiston bo'ylab bepul yetkazib berish
        </p>
        <img class="carainm absolute" src="../assets/icons/animcar.svg" alt="#" />
        
      </div>
      <img
        class="m-auto max-w-[340px] pb-[25px]"
        src="../assets/images/mobile/line.png"
        alt="#"
      />
    </div>

    <div
      class="btn 2xl:hidden m-auto max-w-[350px] flex items-center justify-center px-[20px] py-[16px] rounded-[5px] border-[#CFFFFA80] border-[3px] bg-[#0ACCBA] mb-[50px]"
    >
      <button class="text-white text-[16px] font-bold" @click="isModal = true">
        SOTIB OLISH
      </button>
      <teleport to="body">
        <div
          class="fixed inset-0 top-0 left-0 bottom-0 bg-[#00000099]"
          v-if="isModal"
        >
          <div
            data-aos="fade-down"
            class="modal w-full h-full flex items-center justify-center flex-col"
            v-if="isModal"
          >
            <button
              class="w-[390px] 2xl:w-[700px] flex items-center justify-end"
              @click="isModal = false"
            >
              <img src="../assets/icons/remove.png" alt="#" />
            </button>
            <div
              class="bg-white rounded-lg flex items-center justify-center flex-col"
            >
              <div class="text text-center pt-[24px] pb-[24px]">
                <h3 class="block 2xl:hidden text-black text-[12px] font-normal">
                  Menejerdan ma’lumot olish uchun
                </h3>
                <h2
                  class="block 2xl:hidden text-[#0ACCBA] text-[18px] font-extrabold text-center"
                >
                  Raqamingizni Qoldiring
                </h2>
                <h1
                  class="hidden 2xl:block text-black text-[50px] font-semibold px-[180px]"
                >
                  Ma'lumot olish
                </h1>

                <div
                  class="success flex items-center justify-center bg-[#0ACCBA] p-[10px] gap-3 mt-[10px]"
                  v-if="isInfoSent"
                  data-aos="fade-down"
                >
                  <h1 class="text-white text-[16px] font-bold">
                    Muvaffaqiyatli yuborildi!
                  </h1>
                  <img src="../assets/icons/success.svg" alt="#" />
                </div>
              </div>

              <input
                id="corname"
                class="w-[350px] 2xl:w-[600px] border-[1px] border-[#C6C6C6] rounded-lg mx-[15px] px-[15px] py-[16px] mb-[12px]"
                type="text"
                placeholder="Ismingiz"
                v-model="name"
                @input="formatNameValue()"
              />
              <input
                id="cornum"
                class="w-[350px] 2xl:w-[600px] border-[1px] border-[#C6C6C6] rounded-lg mx-[15px] px-[15px] py-[16px] mb-[24px]"
                type="tel"
                placeholder="Telefon raqamingiz"
                v-model="phone"
                @focus="onFocus()"
                @input="formatPhoneNumber()"
              />

              <div
                class="btn w-[350px] 2xl:w-[600px] flex items-center justify-center py-[16px] rounded-[8px] border-[#CFFFFA80] border-[3px] bg-[#0ACCBA] mb-[24px] 2xl:mb-[50px]"
              >
                <button
                  class="text-white text-[16px] font-bold"
                  @click="sendData"
                >
                  Yuborish
                </button>
              </div>
            </div>
          </div>
        </div>
      </teleport>
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
      const num = document.getElementById("cornum");
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
      const name = document.getElementById("corname");
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
      if (this.valid__Name !== true || this.is__Valid !== true) {
        const name = document.getElementById("corname");
        const num = document.getElementById("cornum");

        num.classList.add("invalid");
        name.classList.add("invalid");
      } else if (this.is__Valid == true && this.valid__Name == true) {
        console.log(this.is__Valid);
        const name = document.getElementById("corname");
        const num = document.getElementById("cornum");

        num.classList.remove("invalid");
        name.classList.remove("invalid");
        // this.isModal = false;
        this.isInfoSent = true;
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
};
</script>

<style scoped>
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

.carainm{
  animation: drive 5s linear;
  animation-fill-mode: forwards;
}

@keyframes drive {
    from {
        left: calc(50% - 180px);
    }
    to {
        left: 80%;
    } 
  }
</style>

