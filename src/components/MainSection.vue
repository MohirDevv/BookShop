<template>
  <div class="container">
    <div class="subHeader">
      <div
        class="course bg-mainBg bg-center bg-cover border-[#5F807D] border-r-[24px]"
      >
        <div class="info flex items-center justify-center flex-col pt-[130px]">
          <div
            class="wrapper bg-[#73B2AC59] border-[1px] border-[#FFFFFF80] backdrop-blur-[20px] rounded-[15px] mb-[30px]"
          >
            <div class="text px-[36px]">
              <div class="mainH flex items-center gap-2 pt-[35px]">
                <div class="w-[30px] h-[3px] bg-[#fff]"></div>
                <h2 class="text-white text-[20px] font-bold tracking-[1px]">
                  Shaxsiy rivojlanish bo'yicha trening
                </h2>
              </div>
              <div class="course_info">
                <h1
                  class="text-white text-[60px] font-bold tracking-[3px] leading-[54px]"
                >
                  3 oylik
                </h1>
                <h1
                  class="flex gap-[17px] text-white text-[100px] font-extrabold leading-[90px]"
                >
                  YANGILANISH
                  <p
                    class="flex items-end justify-end text-[50px] font-bold pt-[8px]"
                  >
                    kursi
                  </p>
                </h1>
              </div>
            </div>
            <div
              class="delivery gap-6 flex items-center justify-center pb-[30px] pt-[100px] px-[34px]"
            >
              <div
                class="bonus flex justify-center items-center bg-[#C6FFF91A] backdrop-blur-[17px] rounded-[10px] pl-[40px] pr-[210px]"
              >
                <span
                  class="flex items-center justify-center text-[#00FFE6F2] text-[75px] h-0 font-bold pb-[10px]"
                  >+</span
                >
                <h1 class="text-[#00FFE6] text-[50px] font-extrabold py-[16px]">
                  BONUS
                </h1>
                <img
                  class="book relative w-[210]"
                  src="../../public/images/desktop/book.png"
                  alt=""
                />
              </div>
              <div
                class="delv flex justify-center items-center bg-[#C6FFF91A] backdrop-blur-[17px] rounded-[10px] px-[24px] py-[20px] gap-2"
              >
                <img src="../../public/icons/fast_delivery.png" alt="#" />
                <h2 class="max-w-[223px] text-white text-[22px] font-semibold">
                  O'zbekiston bo'ylab yetkazib berish bepul
                </h2>
              </div>
            </div>
          </div>
          <div
            class="discount wrapper bg-[#73B2AC59] border-[1px] border-[#FFFFFF80] backdrop-blur-[20px] rounded-[15px] px-[20px] flex items-center justify-center mb-[130px]"
          >
            <div class="insider flex items-start justify-center flex-col">
              <h1 class="text-[#FFFFFFB2] text-[50px] font-black line-through">4.980.000</h1>
              <p class="text-[#FFFFFFB2] text-[28px] font-medium">kurs narxi</p>
            </div>
            <div class="atigi"></div>
            <div class="outsider">
              <h1 class="text-white text-[50px] font-black">79.000</h1>
              <p class="text-white text-[28px] font-medium relative">dan oyiga</p>
            </div>
            <div class="btn flex items-center justify-center pl-[43px]">
              <button class="py-[19px] px-[50px] rounded-[5px] border-[#CFFFFA80] border-[3px] bg-[#0ACCBA]">
                <p class="text-white text-[20px] font-bold">Sotib olish</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="video bg-tubeBg bg-center bg-cover">
        <div class="utube">
          <div class="youtube_icon"></div>
        </div>
      </div>
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
  top: 25%;
  left: 21%;
  transform: translate(50%, -50%);
}
</style>
