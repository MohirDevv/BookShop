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
      <img src="../assets/icons/checkmark_blue.png" alt="#" />
    </div>

    <div class="cards py-[24px]">
      <div
        class="card m-auto max-w-[380px] flex items-center mt-[10px] py-[8px] px-[10px] rounded-[10px] gap-[10px]"
        v-for="item in cardsArray"
        :key="item"
      >
        <img
          class="p-[10px] flex items-center justify-center rounded-[6px] bg-[#BDE5E126]"
          :src="item.image"
          alt="#"
        />
        <p class="w-[280px] text-white text-[14px] font-normal">
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardsArray: [
        {
          image: "/src/assets/icons/mentoring.png",
          text: "O'zbekistonda yagona Mentorlik klubi asoschisiasd asd",
        },
        {
          image: "/src/assets/icons/target.png",
          text: "Tadbirkor, bir necha biznes egasi.",
        },
        {
          image: "/src/assets/icons/student.png",
          text: "100 dan ortiq shogirdlar ustozi",
        },
        {
          image: "/src/assets/icons/business.png",
          text: "Biznes + Psixologiya bo'yicha trening yaratgan birinchi murabbiy",
        },
        {
          image: "/src/assets/icons/portfolio.png",
          text: "Ishbilarmon ayol 2019 ko'rik tanlovi Toshkent shaxar g'olibasi va shu yil Respublikada 2-o'rin sohibasi",
        },
        {
          image: "/src/assets/icons/cub.png",
          text: "100 ta eng yaxshi Innovasion  loyiha ko'rik tanlovi Respublika 1-o'rin g'olibasi",
        },
        {
          image: "/src/assets/icons/user.png",
          text: `2020-2022 yil tuman Deputati. Tadbirkor ayol "Xalqaro ishbilarmon ayollar assotsiatsiyasi biznes va marketing murabbiysi".`,
        },
        {
          image: "/src/assets/icons/checked.png",
          text: `O'zbekiston Respublikasi "Чернобыль" jamoat xayriya fond iqtisod va investitsiya bo'yicha Rais o'rinbosari.`,
        },
      ],
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
