<template>
  <div
    class="wrapper bg-mainBg bg-center bg-cover bg-no-repeat py-[50px] px-[16px]"
  >
    <div
      class="info m-auto max-w-[390px] bg-[#73B2AC59] border-[1px] border-[#FFFFFF80] backdrop-blur-[20px] rounded-[15px] px-[18px] py-[16px]"
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
          src="../../public/images/desktop/book.png"
          alt="#"
        />
      </div>

      <div
        class="delv flex justify-center items-center bg-[#C6FFF91A] backdrop-blur-[17px] rounded-[10px] py-[8px] gap-2"
      >
        <img
          class="w-[45px] h-[45px]"
          src="../../public/icons/fast_delivery.png"
          alt="#"
        />
        <h2 class="w-[220px] text-white text-[15px] font-semibold">
          O'zbekiston bo'ylab yetkazib <br />
          berish bepul
        </h2>
      </div>
    </div>

    <div
      class="discount m-auto max-w-[390px] flex items-center justify-between mt-[10px] bg-[#73B2AC59] border-[#FFFFFF80] border-[1px] rounded-[15px] backdrop-blur-[20px] px-[28px]"
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
      class="btn m-auto max-w-[390px] flex items-center justify-center mt-[24px] py-[16px] rounded-[5px] border-[#CFFFFA80] border-[3px] bg-[#0ACCBA]"
    >
      <button class="text-white text-[16px] font-bold">Sotib oling</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.book {
  content: "";
  position: absolute;
  top: 15%;
  left: 15%;
  transform: translate(50%, -50%);
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
