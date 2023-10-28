<template>
  <div
    class="container m-auto pt-[50px] 2xl:pt-[150px] bg-white overflow-x-hidden"
  >
    <h1
      class="m-auto max-w-[300px] 2xl:max-w-[690px] text-[28px] 2xl:text-[50px] text-center font-bold text-[#152221] pb-[24px]"
    >
      Tez-tez so'raladigan savollar
    </h1>
  </div>

  <div class="container m-auto pb-[50px] overflow-x-hidden">
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      class="faq-drawer flex items-center justify-center flex-col m-auto max-w-[380px]"
    >
      <input
        class="faq-drawer__trigger"
        id="faq-drawer"
        type="checkbox"
        name="name1"
        checked
      /><label class="faq-drawer__title" for="faq-drawer" name="name1"
        >Kitob olganimdan keyin <br class="block 2xl:hidden" /> to'lov 
        qilsam bo'ladimi?</label
      >
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
          <p
            class="m-auto max-w-[330px] xl:min-w-[800px] pl-[13px] xl:pl-[0px] xl:pt-[15px]"
          >
            Albatta, qo'lingizga kitob yetib kelgandan keyin to'lov qilish
            imkoniyati ham bor
          </p>
        </div>
      </div>
    </div>

    <div
      data-aos="fade-left"
      data-aos-duration="1500"
      class="faq-drawer flex items-center justify-center flex-col m-auto max-w-[380px] xl:w-[700px]"
    >
      <input
        class="faq-drawer__trigger"
        id="faq-drawer-2"
        type="checkbox"
        name="name1"
      /><label
        class="faq-drawer__title border-[#DEDEE4] border-t-[2px]"
        for="faq-drawer-2"
        name="name1"
        >Bir nechta kitobdan xarid qilsam chegirma bormi?</label
      >
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
          <p
            class="m-auto max-w-[330px] xl:min-w-[800px] pl-[13px] xl:pl-[0px] xl:pt-[15px]"
          >
            Agar siz 2 ta kitob xarid qilsanigz 1 ta kitobni BEPUL qo’lga
            kiritasiz.
          </p>
        </div>
      </div>
    </div>

    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      class="faq-drawer flex items-center justify-center flex-col m-auto max-w-[380px]"
    >
      <input
        class="faq-drawer__trigger"
        id="faq-drawer-3"
        type="checkbox"
        name="name1"
      /><label
        class="faq-drawer__title border-[#DEDEE4] border-t-[2px]"
        for="faq-drawer-3"
        name="name1"
        >Chegirma muddati qancha <br class="block 2xl:hidden" />
         vaqt davom etadi?</label
      >
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
          <p
            class="m-auto max-w-[330px] xl:min-w-[800px] pl-[13px] xl:pl-[0px] xl:pt-[15px]"
          >
            Chegirmamiz joylar soni tugaguncha davom etadi.
          </p>
        </div>
      </div>
    </div>

    <div
      data-aos="fade-left"
      data-aos-duration="1500"
      class="faq-drawer flex items-center justify-center flex-col m-auto max-w-[380px]"
    >
      <input
        class="faq-drawer__trigger"
        id="faq-drawer-4"
        type="checkbox"
        name="name1"
      /><label
        class="faq-drawer__title border-[#DEDEE4] border-t-[2px]"
        for="faq-drawer-4"
        name="name1"
        >Kitob qanday yetkazib beriladi?</label
      >
      <div class="faq-drawer__content-wrapper">
        <div class="faq-drawer__content">
          <p
            class="m-auto max-w-[330px] xl:min-w-[750px] pl-[13px] xl:pl-[0px] xl:pt-[15px] xl:mr-[50px]"
          >
            Pochta orqali O’zbekistoning istalgan joyiga 1 kun ichida yetkazib
            beriladi. Kitob kelishi bilan sizga pochtadan telefon qilishadi va
            pochtaga kelib olib ketishingiz kerak bo’ladi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-drawer {
  margin-bottom: 30px;
}

.faq-drawer__content-wrapper {
  font-size: 1.25em;
  line-height: 1.4em;
  max-height: 0px;
  overflow: hidden;
  transition: 0.25s ease-in-out;
}

.faq-drawer__title {
  width: 300px;
  cursor: pointer;
  display: block;
  font-size: 1.25em;
  font-weight: 700;
  padding: 30px 5px 0 0;
  position: relative;
  margin-bottom: 0;
  transition: all 0.25s ease-out;
}

.faq-drawer__title::after {
  /* border-style: solid;
  border-width: 1px 1px 0 0; */
  background-image: url("../assets/icons/add-circle.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  content: " ";
  display: block;
  float: right;
  position: relative;
  right: 0px;
  top: -10px;
  /* transform: rotate(135deg); */
  transition: 0.35s ease-in-out;
  width: 25px;
  height: 25px;
}

/* OPTIONAL HOVER STATE */
.faq-drawer__title:hover {
  color: #4e4b52;
}

.faq-drawer__trigger:checked
  + .faq-drawer__title
  + .faq-drawer__content-wrapper {
  max-height: 350px;
}

.faq-drawer__trigger:checked + .faq-drawer__title::after {
  transform: rotate(-180deg);
  transition: 0.25s ease-in-out;
  background-image: url("../assets/icons/clear-circle.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

input[type="checkbox"] {
  display: none;
}

@media screen and (min-width: 1536px) {
  .faq-drawer__title {
    width: 800px;
    cursor: pointer;
    display: block;
    font-size: 24px;
    font-weight: 600;
    padding: 30px 0 0 0;
    position: relative;
    margin-bottom: 0;
    transition: all 0.25s ease-out;
  }

  .faq-drawer__title::after {
    /* border-style: solid;
  border-width: 1px 1px 0 0; */
    background-image: url("../assets/icons/add-circle.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    content: " ";
    display: block;
    float: right;
    position: relative;
    right: 0px;
    top: 5px;
    /* transform: rotate(135deg); */
    transition: 0.35s ease-in-out;
    width: 25px;
    height: 25px;
  }

  .faq-drawer {
    margin-bottom: 30px;
    min-width: 700px;
  }
}
</style>
