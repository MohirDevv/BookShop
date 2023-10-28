<template>
  <div class="container m-auto">
    <div
      class="entrance 2xl:hidden flex items-center justify-center flex-col gap-[12px]"
    >
      <div
      data-aos="fade-down"
        class="title max-w-[310px] text-[#152221] text-[24px] text-center font-bold"
      >
        Mening har bir trening darsim hozir 300.000 so’mni tashkil qiladi.
        «Yangilanish fursati yetdi!» kitobi esa 99.000 so’m edi.
      </div>
      <div
      data-aos="fade-down"
        class="subtitle max-w-[350px] text-[#47474F] text-[14px] text-center font-medium leading-[20px] pb-[24px]"
      >
        Siz esa ATIGI 79.000 evaziga men bilan 12 ta online treningga ega
        bo’lasiz, hamda «Yangilanish fursati yetdi!» kitobiga ega bo’lasiz.
        Bundan tashqari kitobimizni O’zbekistoning istalgan nuqtasiga 1 kun
        ichida BEPUL yetkazib berishadi. Bunday imkoniyatdan unumli foydalaning
        chunki chegirma uchun joylar chegaralangan.
      </div>
    </div>
  </div>

  <div
    class="wrapper 2xl:hidden pt-[50px] flex items-center justify-start sm:justify-center pb-[50px] bg-[url('/src/assets/images/mobile/text_bg.png')]"
  >
    <div
      class="cover w-[390px] mr-[16px] flex items-start justify-start bg-[#FFFFFF33] backdrop-blur-[10px]"
    >
      <div class="title pl-[16px]">
        <h1
        data-aos="fade-right"
          class="max-w-[320px] text-white text-[24px] font-bold pb-[15px] pt-[16px]"
        >
          "Yangilanish fursati yetdi" kitobi
        </h1>
        <p
        data-aos="fade-right"
          class="max-w-[330px] text-[14px] text-[#FDFDFD] font-medium leading-[20px]"
        >
          Bu shunchaki oddiy kitob emas. Har bir mavzu so'ngida qaydlar uchun
          joylar qoldirilgan. Siz ushbu kataklarni kitobda aytilgan mavzu hamda
          vazifalar bo’yicha to’ldirasiz va guruhga vazifani tashlaysiz.
        </p>
        <div class="subtitle">
          <p
          data-aos="fade-right"
            class="paragraf text-white text-[14px] pl-[10px] mt-[15px] font-bold leading-[20px] border-[#F0F1F8] border-l-[4px] max-w-[330px] backdrop-blur-[5px]"
          >
            1 haftada 1 marta online darslar bo'lib o'tadi. Darslaramiz 3 oy
            davom etadi.
          </p>
          <div class="pb-[10px]"></div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="container m-auto hidden 2xl:flex justify-between mt-[150px] bg-[#F5F9FA]"
  >
    <div
      class="entrance pl-[130px] pr-[50px] py-[70px]"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <h1 class="text-[#152221] text-[34px] font-bold w-[760px]">
        Mening har bir trening darsim hozir 300.000 so’mni tashkil qiladi.
        «Yangilanish fursati yetdi!» kitobi esa 99.000 so’m edi.
      </h1>
      <p class="text-[#47474F] text-[18px] font-medium leading-6 w-[660px]">
        Siz esa ATIGI <span class="font-extrabold">79.000</span> evaziga men
        bilan 12 ta online treningga ega bo’lasiz, hamda «Yangilanish fursati
        yetdi!» kitobiga ega bo’lasiz. Bundan tashqari kitobimizni
        O’zbekistoning istalgan nuqtasiga 1 kun ichida BEPUL yetkazib berishadi.
        Bunday imkoniyatdan unumli foydalaning chunki chegirma uchun joylar
        chegaralangan.
      </p>
    </div>

    <div
    data-aos="fade-left"
      data-aos-duration="1000"
      class="wrapper hidden pt-[50px] 2xl:flex items-center justify-start pb-[50px] bg-[url('/src/assets/images/mobile/text_bg.png')] bg-cover w-[650px]"
    >
      <div
        class="cover w-[550px] flex items-start justify-start bg-[#FFFFFF33] backdrop-blur-[10px]"
       
      >
        <div class="title pl-[16px]">
          <h1 class="text-white text-[34px] font-bold pb-[15px] pt-[16px]">
            "Yangilanish fursati yetdi" kitobi
          </h1>
          <p
            class="max-w-[330px] text-[18px] text-[#FDFDFD] font-medium leading-[20px]"
          >
            Bu shunchaki oddiy kitob emas. Har bir mavzu so'ngida qaydlar uchun
            joylar qoldirilgan. Siz ushbu kataklarni kitobda aytilgan mavzu
            hamda vazifalar bo’yicha to’ldirasiz va guruhga vazifani tashlaysiz.
          </p>
          <div class="subtitle">
            <p
              class="paragraf text-white text-[14px] pl-[10px] mt-[15px] font-bold leading-[20px] border-[#F0F1F8] border-l-[4px] max-w-[330px] backdrop-blur-[5px]"
            >
              1 haftada 1 marta online darslar bo'lib o'tadi. Darslaramiz 3 oy
              davom etadi.
            </p>
            <div class="pb-[10px]"></div>
          </div>
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
.container {
  width: 100%;
  max-width: 100%;
}
.cover {
  border-radius: 0px 12px 12px 0px;
}

.paragraf {
  border-radius: 0px 12px 12px 0px;
}

@media screen and (min-width: 1536px) {
  .wrapper {
    border-radius: 20px 0 0 20px;
  }
}
</style>
