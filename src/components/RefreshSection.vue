<template>
  <div class="container pt-[50px] m-auto bg-white">
    <div class="title flex items-center justify-center flex-col gap-1">
      <h1 class="text-[#152221] text-[28px] font-bold text-center">
        Yangilanish fursati
      </h1>
      <div class="subtree flex gap-2">
        <h1 class="text-[#152221] text-[28px] font-bold">yetdi</h1>
        <div
          class="kitobi text-white text-[16px] font-extrabold px-[10px] py-[5px] h-[35px] bg-[#009789]"
        >
          <p class="h-[25px]">kitobi</p>
        </div>
      </div>
    </div>

    <div
      class="subtitle pt-[12px] pb-[24px] m-auto w-[300px] text-[#47474F] text-[14px] font-normal text-center"
    >
      Kitobdagi 7 ta mashg'ulot orqali butkul boshqa insonga aylaning
    </div>

    <div class="slice_images flex items-center justify-center gap-[2.5px]">
      <img src="../assets/images/mobile/book_one.png" alt="#" />
      <img src="../assets/images/mobile/book_two.png" alt="#" />
    </div>

    <div
      class="seven_tasks gap-2 max-w-[360px] flex items-start justify-center flex-col m-auto pt-[28px]"
    >
      <div class="task flex gap-2" >
        <img src="/src/assets/icons/trash.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">1-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">To'sqinlar va chiqindilar</p>
        </div>
      </div>
      <div class="task flex gap-2" >
        <img src="/src/assets/icons/stressed.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">2-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">Qo'rquvlarimiz</p>
        </div>
      </div>
      <div class="task flex gap-2" >
        <img src="/src/assets/icons/lonely.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">3-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">Qarorlar</p>
        </div>
      </div>
      <div class="task flex gap-2" >
        <img src="/src/assets/icons/time.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">4-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">O'tmishdagi asosiy kechinmalar</p>
        </div>
      </div>
      <div class="task flex gap-2" >
        <img src="/src/assets/icons/backspace.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">5-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">Krutilka usuli</p>
        </div>
      </div>
      <div class="task flex gap-2" >
        <img src="/src/assets/icons/grees.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">6-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">Obrazlarni almashtirish usuli</p>
        </div>
      </div>
      <div class="task flex gap-2" >
        <img src="/src/assets/icons/increasing.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">7-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">Rivojlanisshda bardavom bo'lish</p>
        </div>
      </div>
    </div>

    <div class="loading m-auto max-w-[380px]">
      <div
        class="car flex items-center justify-start pt-[40px] pl-[15px] gap-2"
      >
        <p class="text-[#47474F] text-[14px] font-medium">
          O'zbekiston bo'ylab bepul yetkazib berish
        </p>
        <img class="" src="../assets/icons/fast_delivery_dark.png" alt="#" />
      </div>
      <img
        class="m-auto max-w-[380px] pb-[25px]"
        src="../assets/images/mobile/line.png"
        alt="#"
      />
    </div>

    <div
      class="btn m-auto max-w-[350px] flex items-center justify-center px-[20px] py-[16px] rounded-[5px] border-[#CFFFFA80] border-[3px] bg-[#0ACCBA] mb-[50px]"
    >
      <button class="text-white text-[16px] font-bold">Sotib oling</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
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
</style>
