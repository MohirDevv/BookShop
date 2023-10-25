<template>
  <div class="wrapper bg-[url('/src/assets/images/mobile/shS_bg.png')] bg-cover bg-no-repeat pt-[230px]">
    <img
      class="shS relative pb-[190px]"
      src="/src/assets/images/mobile/shS.png"
      alt="#"
    />

    <div
      class="mainCard m-auto max-w-[350px] flex items-center justify-center bg-[#599993b5] backdrop-blur-[18px] rounded-[10px]"
    >
      <h1 class="text-white text-[24px] font-extrabold px-[20px] py-[15px]">
        Shahnoza Siddiqova
      </h1>
      <img src="../assets/icons/checkmark_blue.svg" alt="#" />
    </div>

    <div class="cards py-[24px]">
      <div
        class="card m-auto max-w-[380px] flex items-center mt-[10px] py-[8px] px-[10px] rounded-[10px] gap-[10px]"
      >
        <img
          class="p-[10px] flex items-center justify-center rounded-[6px] bg-[#BDE5E126]"
          src="/src/assets/icons/mentoring.svg"
          alt="#"
        />
        <p class="w-[280px] text-white text-[14px] font-normal">
          O'zbekistonda yagona Mentorlik klubi asoschisiasd asd
        </p>
      </div>
      <div
        class="card m-auto max-w-[380px] flex items-center mt-[10px] py-[8px] px-[10px] rounded-[10px] gap-[10px]"
      >
        <img
          class="p-[10px] flex items-center justify-center rounded-[6px] bg-[#BDE5E126]"
          src="/src/assets/icons/target.svg"
          alt="#"
        />
        <p class="w-[280px] text-white text-[14px] font-normal">
          Tadbirkor, bir necha biznes egasi.
        </p>
      </div>
      <div
        class="card m-auto max-w-[380px] flex items-center mt-[10px] py-[8px] px-[10px] rounded-[10px] gap-[10px]"
      >
        <img
          class="p-[10px] flex items-center justify-center rounded-[6px] bg-[#BDE5E126]"
          src="/src/assets/icons/student.svg"
          alt="#"
        />
        <p class="w-[280px] text-white text-[14px] font-normal">
          100 dan ortiq shogirdlar ustozi
        </p>
      </div>
      <div
        class="card m-auto max-w-[380px] flex items-center mt-[10px] py-[8px] px-[10px] rounded-[10px] gap-[10px]"
      >
        <img
          class="p-[10px] flex items-center justify-center rounded-[6px] bg-[#BDE5E126]"
          src="/src/assets/icons/business.svg"
          alt="#"
        />
        <p class="w-[280px] text-white text-[14px] font-normal">
          Biznes + Psixologiya bo'yicha trening yaratgan birinchi murabbiy
        </p>
      </div>
      <div
        class="card m-auto max-w-[380px] flex items-center mt-[10px] py-[8px] px-[10px] rounded-[10px] gap-[10px]"
      >
        <img
          class="p-[10px] flex items-center justify-center rounded-[6px] bg-[#BDE5E126]"
          src="/src/assets/icons/portfolio.svg"
          alt="#"
        />
        <p class="w-[280px] text-white text-[14px] font-normal">
          Ishbilarmon ayol 2019 ko'rik tanlovi Toshkent shaxar g'olibasi va shu yil Respublikada 2-o'rin sohibasi
        </p>
      </div>
      <div
        class="card m-auto max-w-[380px] flex items-center mt-[10px] py-[8px] px-[10px] rounded-[10px] gap-[10px]"
      >
        <img
          class="p-[10px] flex items-center justify-center rounded-[6px] bg-[#BDE5E126]"
          src="/src/assets/icons/cub.svg"
          alt="#"
        />
        <p class="w-[280px] text-white text-[14px] font-normal">
          100 ta eng yaxshi Innovasion  loyiha ko'rik tanlovi Respublika 1-o'rin g'olibasi
        </p>
      </div>
      <div
        class="card m-auto max-w-[380px] flex items-center mt-[10px] py-[8px] px-[10px] rounded-[10px] gap-[10px]"
      >
        <img
          class="p-[10px] flex items-center justify-center rounded-[6px] bg-[#BDE5E126]"
          src="/src/assets/icons/shUser.svg"
          alt="#"
        />
        <p class="w-[280px] text-white text-[14px] font-normal">
          2020-2022 yil tuman Deputati. Tadbirkor ayol "Xalqaro ishbilarmon ayollar assotsiatsiyasi biznes va marketing murabbiysi".
        </p>
      </div>
      <div
        class="card m-auto max-w-[380px] flex items-center mt-[10px] py-[8px] px-[10px] rounded-[10px] gap-[10px]"
      >
        <img
          class="p-[10px] flex items-center justify-center rounded-[6px] bg-[#BDE5E126]"
          src="/src/assets/icons/checked.svg"
          alt="#"
        />
        <p class="w-[280px] text-white text-[14px] font-normal">
          O'zbekiston Respublikasi "Чернобыль" jamoat xayriya fond iqtisod va investitsiya bo'yicha Rais o'rinbosari.
        </p>
      </div>

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
.shS {
  content: "";
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  background: linear-gradient(
    90deg,
    rgba(198, 255, 249, 0.25) 0%,
    rgba(198, 255, 249, 0.2) 0.01%,
    rgba(255, 255, 255, 0.01) 100%
  );
}
</style>
