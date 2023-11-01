<template>
  <div id="footer" class="wrapper m-auto pb-[50px] pt-[50px]">
    <div
      data-aos="zoom-in-up"
      class="payment max-w-[380px] xl:min-w-[900px] m-auto flex items-center flex-col p-[20px] bg-[#FFFFFF1A] rounded-[10px] backdrop-blur-[39px] xl:mt-[25px]"
    >
      <h1
        class="text-white text-[24px] xl:text-[32px] font-bold xl:font-extrabold text-center"
      >
        Kursga to'lov qilish
      </h1>
      <div
        class="card_num xl:w-[700px] flex items-center justify-between px-[15px] py-[12px] backdrop-blur-[8px] rounded-[10px] mt-[30px]"
        @click="copyTextNoInput"
      >
        <div class="part_one flex items-center">
          <img src="../assets/icons/card.svg" alt="#" />
          <div class="subtitle pl-[10px] pr-[50px]">
            <h2 class="text-white text-[12px] font-medium">
              Siddiqova Shahnozaxon
            </h2>
            <h1 class="text-white text-[16px] font-bold" ref="message">
              8600 0304 5497 4787
            </h1>
          </div>
          <div
            class="copy block cursor-pointer xl:hidden"
            @click="copyTextNoInput"
          >
            <img src="../assets/icons/copy.svg" alt="#" />
          </div>
        </div>
        <div
          class="copy hidden cursor-pointer xl:block"
          @click="copyTextNoInput"
        >
          <img src="../assets/icons/copy.svg" alt="#" />
        </div>
      </div>
      <div
        class="price_list flex items-center justify-evenly pt-[30px] gap-4 xl:gap-10"
      >
        <div class="money flex items-center">
          <img class="pr-[10px]" src="../assets/icons/money.svg" alt="#" />
          <div class="subtitle flex items-start justify-center flex-col">
            <h2 class="text-white text-[14px] font-normal">Kurs narxi:</h2>
            <h1 class="text-white text-[16px] font-semibold">79.000 so'm</h1>
          </div>
        </div>

        <div class="info w-[180px] flex items-center">
          <img
            class="w-[40px] h-[30px] pr-[10px]"
            src="../assets/icons/info.svg"
            alt="#"
          />
          <h1 class="text-white text-[14px] font-normal">
            To'lovni qilib bo'lgach, skrinshotni jo'nating
          </h1>
        </div>
      </div>
      <button class="mt-[30px]">
        <a
          class="btn text-white text-[14px] font-bold xl:w-[700px] px-[35px] py-[21px] xl:py-[15px] flex items-center justify-center bg-[#0ACCBA] border-[#7AE4D980] border-[3px] rounded-[5px]"
          target="_blank"
          href="https://t.me/shaxnoza_siddiqova_manager"
          >CHEKNI YUBORISH</a
        >
      </button>

      <div class="last_info hidden xl:block">
        <h1
          class="m-auto text-center text-white text-[32px] font-extrabold leading-8 pt-[40px] pb-[30px]"
        >
          Ma'lumot olish
        </h1>
        <form>
          <div
            id="name"
            class="name flex items-center justify-center px-[15px] py-[8px] mb-[20px] bg-[#FFFFFF1A] rounded-[10px] border border-[rgba(0,0,0,0)]"
          >
            <img class="pr-[10px]" src="../assets/icons/user.svg" alt="#" />
            <input
              class="w-[246px] xl:w-[630px] flex items-center outline-none bg-[#FFFFFF1A] gap-[15px]"
              type="text"
              placeholder="Ism familiyangiz *"
              v-model="name"
              @input="formatNameValue()"
            />
          </div>
          <div
            id="input"
            class="num flex items-center justify-center px-[15px] py-[8px] mb-[20px] bg-[#FFFFFF1A] rounded-[10px] border border-[rgba(0,0,0,0)]"
          >
            <img src="../assets/icons/phone.svg" alt="#" />
            <input
              class="w-[246px] xl:w-[630px] flex items-center outline-none bg-[#FFFFFF1A] gap-[8px] pl-2"
              type="tel"
              placeholder="Telefon raqamingiz *"
              v-model="phone"
              @focus="onFocus()"
              @input="formatPhoneNumber()"
            />
          </div>
        </form>
      </div>

      <button
        @click="sendData"
        class="btn hidden w-[700px] text-white text-[14px] font-bold px-[35px] py-[15px] xl:flex items-center justify-center bg-[#0ACCBA] border-[#7AE4D980] border-[3px] rounded-[5px] mb-[30px]"
      >
        YUBORISH
      </button>
    </div>
    <div
      class="send_info m-auto max-w-[380px] flex xl:hidden items-center justify-center flex-col gap-3 p-[20px] mt-[50px] bg-[#FFFFFF1A] rounded-[10px]"
    >
      <h1 class="text-white text-[24px] font-bold">Ma'lumot olish</h1>
      <form>
        <div
          id="name1"
          class="name flex items-center justify-center px-[15px] py-[8px] mb-[20px] bg-[#FFFFFF1A] rounded-[10px] border border-[rgba(0,0,0,0)]"
        >
          <img class="pr-[10px]" src="../assets/icons/user.svg" alt="#" />
          <input
            class="w-[246px] flex items-center outline-none bg-[#FFFFFF1A] gap-[15px]"
            type="text"
            placeholder="Ism familiyangiz *"
            v-model="name"
            @input="formatNameValue()"
          />
        </div>
        <div
          id="input1"
          class="num flex items-center justify-center px-[15px] py-[8px] mb-[20px] bg-[#FFFFFF1A] rounded-[10px] border border-[rgba(0,0,0,0)]"
        >
          <img src="../assets/icons/phone.svg" alt="#" />
          <input
            class="w-[246px] flex items-center outline-none bg-[#FFFFFF1A] gap-[8px] pl-2"
            type="tel"
            placeholder="Telefon raqamingiz *"
            v-model="phone"
            @focus="onFocus()"
            @input="formatPhoneNumber()"
          />
        </div>
      </form>

      <button
        @click="sendData"
        class="btn w-[310px] text-white text-[14px] font-bold px-[35px] py-[21px] flex items-center justify-center bg-[#0ACCBA] border-[#7AE4D980] border-[3px] rounded-[5px]"
      >
        YUBORISH
      </button>
    </div>
  </div>

  <div
    class="fixed w-[300px] rounded-[8px] bg-white z-10 px-5 py-2 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out"
    :class="isCopied ? 'top-2.5' : '-top-full'"
  >
    <h1 class="text-[16px] font-semibold text-[#0ACCBA] text-center">
      Nusxa Olindi!
    </h1>
  </div>
  <div
    class="fixed w-[300px] rounded-[8px] bg-[white] flex z-10 px-5 py-2 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out gap-3"
    :class="isSent ? 'top-2.5' : '-top-full'"
  >
    <img src="../assets/icons/success_blue.svg" alt="#" />
    <h1 class="text-[#0ACCBA] text-[16px] font-bold">
      Muvaffaqiyatli yuborildi!
    </h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isSent: false,
      phone: null,
      name: null,
      isValid: null,
      validName: null,
      message: "",
      isCopied: false,
    };
  },
  methods: {
    copyTextNoInput() {
      const storage = document.createElement("textarea");
      storage.value = "8600 0304 5497 4787";
      document.body.appendChild(storage);
      storage.select();
      document.execCommand("copy");
      this.isCopied = true;
      if ((this.isCopied = true)) {
        setTimeout(() => {
          this.isCopied = false;
        }, 3000);
      }
    },
    formatPhoneNumber() {
      const num = document.getElementById("input");
      const num1 = document.getElementById("input1");
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
        num1.classList.add("invalid");
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
        num1.classList.add("invalid");
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
        num1.classList.add("invalid");
        this.isValid = false;
      }

      if (inputValue.length == 9) {
        num.classList.remove("invalid");
        num1.classList.remove("invalid");
        this.isValid = true;
      }
    },
    formatNameValue() {
      const name = document.getElementById("name");
      const name1 = document.getElementById("name1");
      let inputValue = this.name;
      if (inputValue.length == 0) {
        name.classList.add("invalid");
        name1.classList.add("invalid");
        this.validName = false;
      } else if (inputValue.length >= 1) {
        name.classList.remove("invalid");
        name1.classList.remove("invalid");
        this.validName = true;
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
        this.validName !== true ||
        this.isValid !== true ||
        this.validName == null ||
        this.isValid == null
      ) {
        const name = document.getElementById("name");
        const num = document.getElementById("input");
        const name1 = document.getElementById("name1");
        const num1 = document.getElementById("input1");
        num.classList.add("invalid");
        name.classList.add("invalid");
        num1.classList.add("invalid");
        name1.classList.add("invalid");
      } else if (this.isValid == true && this.validName == true) {
        const name = document.getElementById("name");
        const num = document.getElementById("input");
        const name1 = document.getElementById("name1");
        const num1 = document.getElementById("input1");
        num.classList.remove("invalid");
        name.classList.remove("invalid");
        num1.classList.remove("invalid");
        name1.classList.remove("invalid");
        this.isSent = true;
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
.wrapper {
  background: linear-gradient(180deg, #18524c 0%, #02201c 100%);
  backdrop-filter: blur(50px);
}

input {
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  color: white;
  -moz-appearance: textfields;
}

.invalid {
  border: 1px solid rgba(255, 107, 107, 0.4);
  background: rgba(255, 138, 138, 0.1);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.btn:hover {
  border: 3px solid #00ffe6;
  background: #0accba;
}
.btn:active {
  border: 3px solid #7ae4d980;
  background: #009789;
}
</style>
