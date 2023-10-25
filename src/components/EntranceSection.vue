<template>
  <div
    class="wrapper relative bg-[url('/src/assets/images/desktop/main_bg.png')] bg-center bg-cover bg-no-repeat py-[50px] px-[16px]"
  >
    <div
      class="info m-auto max-w-[380px] bg-[#73B2AC59] border-[1px] border-[#FFFFFF80] backdrop-blur-[20px] rounded-[15px] px-[18px] py-[16px]"
    >
      <div class="mainEntrance flex justify-start items-center gap-1">
        <div class="w-[10px] h-[1.5px] bg-[#fff]"></div>
        <h2 class="text-white text-[15px] font-semibold tracking-[1px]">
          Shaxsiy rivojlanish bo'yicha trening
        </h2>
      </div>

      <div class="about">
        <h1 class="h-[40px] text-white text-[34px] font-bold tracking-[1.7px]">
          3 oylik
        </h1>
        <h1 class="h-[50px] text-white text-[42px] font-extrabold">
          YANGILANISH
        </h1>
        <p class="text-white text-[24px] font-bold">Kursi</p>
      </div>

      <div
        class="bonus flex items-center bg-[#C6FFF91A] rounded-[10px] backdrop-blur-[12.5px] mt-[45px] mb-[12px]"
      >
        <span
          class="flex items-center justify-center h-[30px] mb-[8px] text-[#00FFE6F2] text-[44px] font-bold pl-[15px]"
          >+</span
        >
        <h1 class="text-[#00FFE6] text-[24px] font-extrabold py-[13px]">
          BONUS
        </h1>
        <img
          class="book relative w-[200px] h-[200px]"
          src="../assets/images/desktop/book.png"
          alt="#"
        />
      </div>

      <div
        class="delv flex justify-center items-center bg-[#C6FFF91A] backdrop-blur-[17px] rounded-[10px] py-[8px] gap-2"
      >
        <img
          class="w-[45px] h-[45px]"
          src="../assets/icons/fast_delivery.png"
          alt="#"
        />
        <h2 class="w-[220px] text-white text-[15px] font-semibold">
          O'zbekiston bo'ylab yetkazib <br />
          berish bepul
        </h2>
      </div>
    </div>

    <div
      class="discount m-auto max-w-[380px] flex items-center justify-between mt-[10px] bg-[#73B2AC59] border-[#FFFFFF80] border-[1px] rounded-[15px] backdrop-blur-[20px] px-[28px]"
    >
      <div class="oldprice flex flex-col pb-1">
        <h1
          class="h-[35px] text-[#FFFFFFB2] text-[30px] font-black line-through"
        >
          4.980.000
        </h1>
        <p class="text-[#FFFFFFB2] text-[15px] font-medium">kurs narxi</p>
      </div>

      <div class="newprice flex flex-col pb-1">
        <h1 class="h-[35px] text-white text-[30px] font-black">79.000</h1>
        <p class="text-white text-[15px] font-medium">dan oyiga</p>
      </div>
    </div>

    <div
      class="btn m-auto max-w-[380px] flex items-center justify-center mt-[24px] py-[16px] rounded-[5px] border-[#CFFFFA80] border-[3px] bg-[#0ACCBA]"
      @click="isOpen = true"
    >
      <button class="text-white text-[16px] font-bold" @click="isOpen = true">
        Sotib oling
      </button>
    </div>
    <teleport to="body">
      <div
        class="fixed inset-0 top-0 left-0 bottom-0 bg-[#00000099]"
        v-if="isOpen"
      >
        <div
          class="modal w-full h-full flex items-center justify-center flex-col"
          v-if="isOpen"
        >
          <button
            class="w-[390px] flex items-center justify-end"
            @click="isOpen = false"
          >
            <img src="../assets/icons/remove.png" alt="#" />
          </button>
          <div
            class="bg-white rounded-lg flex items-center justify-center flex-col"
          >
            <div class="text text-center pt-[24px] pb-[24px]">
              <h3 class="text-black text-[12px] font-normal">
                Menejerdan ma’lumot olish uchun
              </h3>
              <h2 class="text-[#0ACCBA] text-[18px] font-extrabold text-center">
                Raqamingizni Qoldiring
              </h2>
            </div>

            <input
              class="w-[350px] border-[1px] border-[#C6C6C6] rounded-lg mx-[15px] px-[15px] py-[16px] mb-[12px]"
              type="text"
              placeholder="Ismingiz"
            />
            <input
              class="w-[350px] border-[1px] border-[#C6C6C6] rounded-lg mx-[15px] px-[15px] py-[16px] mb-[24px]"
              type="tel"
              placeholder="Telefon raqamingiz"
            />

            <div
              class="btn w-[350px] flex items-center justify-center py-[16px] rounded-[8px] border-[#CFFFFA80] border-[3px] bg-[#0ACCBA] mb-[24px]"
            >
              <button class="text-white text-[16px] font-bold">Yuborish</button>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>

<style scoped>
.book {
  content: "";
  position: absolute;
  top: 10%;
  left: 10%;
  transform: translate(50%, -50%);
}

.modal {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
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
