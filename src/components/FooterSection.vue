<template>
  <div class="wrapper m-auto pb-[50px] pt-[15px] 2xl:pb-[150px]">
    <div
      class="success m-auto flex 2xl:hidden items-center justify-center gap-2 pb-[15px]"
      v-if="isSent"
    >
      <img src="../assets/icons/success.svg" alt="#" />
      <h1 class="text-white text-[16px] font-bold">
        Muvaffaqiyatli yuborildi!
      </h1>
    </div>
    <div
      class="success hidden w-[900px] bg-white rounded-[10px] m-auto 2xl:flex items-center justify-center gap-2 py-[10px] mt-[50px]"
      v-if="isSent"
    >
      <img src="../assets/icons/success_blue.svg" alt="#" />
      <h1 class="text-[#0ACCBA] text-[16px] font-bold">
        Muvaffaqiyatli yuborildi!
      </h1>
    </div>
    <div
      class="payment max-w-[380px]  2xl:min-w-[900px] m-auto flex items-center flex-col p-[20px] bg-[#FFFFFF1A] rounded-[10px] backdrop-blur-[39px] 2xl:mt-[25px]"
    >
      <h1
        class="text-white text-[24px] 2xl:text-[32px] font-bold xl:font-extrabold text-center"
      >
        Kursga to'lov qilish
      </h1>
      <div
        class="card_num 2xl:w-[700px] flex items-center justify-between px-[15px] py-[12px] backdrop-blur-[8px] rounded-[10px] mt-[30px]"
      >
        <div class="part_one flex items-center">
          <img src="../assets/icons/card.svg" alt="#" />
          <div class="subtitle pl-[10px] pr-[50px]">
            <h2 class="text-white text-[12px] font-medium">
              Siddiqova Shahnozaxon
            </h2>
            <h1 class="text-white text-[16px] font-bold">
              8600 0304 5497 4787
            </h1>
          </div>
          <div class="copy block 2xl:hidden">
            <img cll src="../assets/icons/copy.svg" alt="#" />
          </div>
        </div>
        <div class="copy hidden 2xl:block">
          <img cll src="../assets/icons/copy.svg" alt="#" />
        </div>
      </div>
      <div
        class="price_list flex items-center justify-evenly pt-[30px] gap-4 2xl:gap-10"
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
      <div
        class="btn 2xl:w-[700px] mt-[30px] px-[35px] py-[21px] 2xl:py-[15px] flex items-center justify-center bg-[#0ACCBA] border-[#7AE4D980] border-[3px] rounded-[5px]"
      >
        <button class="text-white text-[14px] font-bold" @click="isSent = true">
          <a target="_blank" href="https://t.me/shaxnoza_siddiqova_manager"
            >Chekni Yuborish</a
          >
        </button>
      </div>

      <h1
        class="m-auto text-white text-[32px] font-extrabold leading-8 pt-[40px] pb-[30px]"
      >
        Ma'lumot olish
      </h1>
      <form>
        <div
          class="name flex items-center justify-center px-[15px] py-[8px] mb-[20px] bg-[#FFFFFF1A] rounded-[10px]"
        >
          <img class="pr-[10px]" src="../assets/icons/user.svg" alt="#" />
          <input
            class="w-[246px] 2xl:w-[630px] flex items-center outline-none bg-[#FFFFFF1A] gap-[15px]"
            type="text"
            placeholder="Ism familiyangiz *"
          />
        </div>
        <div
          class="num flex items-center justify-center px-[15px] py-[8px] mb-[20px] bg-[#FFFFFF1A] rounded-[10px]"
        >
          <img src="../assets/icons/phone.svg" alt="#" />
          <input
            class="w-[246px] 2xl:w-[630px] flex items-center outline-none bg-[#FFFFFF1A] gap-[8px] pl-2"
            type="tel"
            placeholder="Telefon raqamingiz *"
          />
        </div>
      </form>
      <button
        class="btn hidden w-[700px] text-white text-[14px] font-bold px-[35px] py-[15px] 2xl:flex items-center justify-center bg-[#0ACCBA] border-[#7AE4D980] border-[3px] rounded-[5px] mb-[30px]"
      >
        Yuborish
      </button>
    </div>
    <div
      class="send_info m-auto max-w-[380px] flex 2xl:hidden items-center justify-center flex-col gap-3 p-[20px] mt-[50px] bg-[#FFFFFF1A] rounded-[10px]"
    >
      <h1 class="text-white text-[24px] font-bold">Ma'lumot olish</h1>
      <form>
        <div
          class="name flex items-center justify-center px-[15px] py-[8px] mb-[20px] bg-[#FFFFFF1A] rounded-[10px]"
        >
          <img class="pr-[10px]" src="../assets/icons/user.svg" alt="#" />
          <input
            class="w-[246px] flex items-center outline-none bg-[#FFFFFF1A] gap-[15px]"
            type="text"
            placeholder="Ism familiyangiz *"
          />
        </div>
        <div
          class="num flex items-center justify-center px-[15px] py-[8px] mb-[20px] bg-[#FFFFFF1A] rounded-[10px]"
        >
          <img src="../assets/icons/phone.svg" alt="#" />
          <input
            class="w-[246px] flex items-center outline-none bg-[#FFFFFF1A] gap-[8px] pl-2"
            type="tel"
            placeholder="Telefon raqamingiz *"
          />
        </div>
      </form>

      <button
        class="btn w-[310px] text-white text-[14px] font-bold px-[35px] py-[21px] flex items-center justify-center bg-[#0ACCBA] border-[#7AE4D980] border-[3px] rounded-[5px]"
      >
        Yuborish
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSent: false,
    };
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
