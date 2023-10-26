<template>
  <div
    class="container pt-[50px] 2xl:py-[150px] 2xl:px-[130px] 2xl:mt-[150px] m-auto bg-white 2xl:bg-[#F5F9FA]"
  >
    <div
      class="title flex 2xl:hidden items-center justify-center flex-col gap-1"
    >
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
      class="subtitle block 2xl:hidden pt-[12px] pb-[24px] m-auto w-[300px] text-[#47474F] text-[14px] font-normal text-center"
    >
      Kitobdagi 7 ta mashg'ulot orqali butkul boshqa insonga aylaning
    </div>
    <div class="2xlmain m-auto flex items-center justify-center">
      <div
        class="slice_images 2xl:hidden flex items-center justify-center gap-[2.5px]"
      >
        <img src="../assets/images/mobile/book_one.png" alt="#" />
        <img src="../assets/images/mobile/book_two.png" alt="#" />
      </div>

      <div
        class="slice_images m-auto hidden 2xl:flex items-center justify-center gap-[2.5px]"
      >
        <img
          class="w-[460px] h-[630px]"
          src="../assets/images/desktop/book_one.png"
          alt="#"
        />
        <img
          class="w-[240px] h-[630px]"
          src="../assets/images/desktop/book_two.png"
          alt="#"
        />
      </div>
      <div class="textSection hidden 2xl:flex items-center flex-col pl-[50px]">
        <div class="mainent">
          <h1 class="text-[#152221] text-[50px] font-bold">
            Yangilanish fursati
          </h1>
          <div class="subtree flex items-center justify-start gap-2">
            <h1 class="text-[#152221] text-[50px] font-bold">yetdi</h1>
            <div
              class="kitobi text-white text-[28px] font-extrabold px-[10px] py-[5px] h-[52px] bg-[#009789]"
            >
              <p class="h-[25px]">kitobi</p>
            </div>
          </div>
          <div
            class="subtitle pt-[12px] pb-[24px] w-[530px] text-[#47474F] text-[18px] font-medium border-[#C2C3D4] border-b-[1px]"
          >
            Kitobdagi 7 ta mashg'ulot orqali butkul boshqa insonga aylaning
          </div>
        </div>
        <div class="seventasks flex items-start justify-center pt-[30px]">
          <div class="firstfour">
            <div class="task flex gap-2 pb-[25px]">
              <img src="/src/assets/icons/trash.png" alt="#" />
              <div class="subtitl">
                <h1 class="text-[#009789] text-[18px] font-medium">1-kun</h1>
                <p class="text-[#47474F] text-[14px] font-medium">
                  To'sqinlar va chiqindilar
                </p>
              </div>
            </div>
            <div class="task flex gap-2 pb-[25px]">
              <img src="/src/assets/icons/stressed.png" alt="#" />
              <div class="subtitl">
                <h1 class="text-[#009789] text-[18px] font-medium">2-kun</h1>
                <p class="text-[#47474F] text-[14px] font-medium">
                  Qo'rquvlarimiz
                </p>
              </div>
            </div>
            <div class="task flex gap-2 pb-[25px]">
              <img src="/src/assets/icons/lonely.png" alt="#" />
              <div class="subtitl">
                <h1 class="text-[#009789] text-[18px] font-medium">3-kun</h1>
                <p class="text-[#47474F] text-[14px] font-medium">Qarorlar</p>
              </div>
            </div>
            <div class="task flex gap-2">
              <img src="/src/assets/icons/time.png" alt="#" />
              <div class="subtitl">
                <h1 class="text-[#009789] text-[18px] font-medium">4-kun</h1>
                <p class="text-[#47474F] text-[14px] font-medium">
                  O'tmishdagi asosiy kechinmalar
                </p>
              </div>
            </div>
          </div>
          <div class="firstthird">
            <div class="task flex gap-2 pb-[25px]">
              <img src="/src/assets/icons/backspace.png" alt="#" />
              <div class="subtitl">
                <h1 class="text-[#009789] text-[18px] font-medium">5-kun</h1>
                <p class="text-[#47474F] text-[14px] font-medium">
                  Krutilka usuli
                </p>
              </div>
            </div>
            <div class="task flex gap-2 pb-[25px]">
              <img src="/src/assets/icons/grees.png" alt="#" />
              <div class="subtitl">
                <h1 class="text-[#009789] text-[18px] font-medium">6-kun</h1>
                <p class="text-[#47474F] text-[14px] font-medium">
                  Obrazlarni almashtirish usuli
                </p>
              </div>
            </div>
            <div class="task flex gap-2">
              <img src="/src/assets/icons/increasing.png" alt="#" />
              <div class="subtitl">
                <h1 class="text-[#009789] text-[18px] font-medium">7-kun</h1>
                <p class="text-[#47474F] text-[14px] font-medium">
                  Rivojlanisshda bardavom bo'lish
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="ending flex items-center justify-center pt-[50px] ml-[30px]">
          <div
            class="btn flex items-center justify-center px-[30px] py-[16px] rounded-[5px] border-[#CFFFFA80] border-[3px] bg-[#0ACCBA] mr-[40px]"
          >
            <button
              class="text-white text-[16px] font-bold"
              @click="isModal = true"
            >
            <p class="w-[130px]">Buyurtma berish</p>
            </button>
          </div>
          <div
            class="car flex flex-col"
          >
            <div class="div flex items-center ">
              <p class="h-[20px] text-[#47474F] text-[14px] font-medium">
                O'zbekiston bo'ylab bepul yetkazib berish
              </p>
              <img
                class="pl-[5px]"
                src="../assets/icons/fast_delivery_dark.png"
                alt="#"
              />
            </div>

            <img
              class="m-auto max-w-[380px]"
              src="../assets/images/mobile/line.png"
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="seven_tasks gap-2 max-w-[360px] flex items-start justify-center flex-col m-auto pt-[28px] 2xl:hidden"
    >
      <div class="task flex gap-2">
        <img src="/src/assets/icons/trash.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">1-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">
            To'sqinlar va chiqindilar
          </p>
        </div>
      </div>
      <div class="task flex gap-2">
        <img src="/src/assets/icons/stressed.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">2-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">Qo'rquvlarimiz</p>
        </div>
      </div>
      <div class="task flex gap-2">
        <img src="/src/assets/icons/lonely.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">3-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">Qarorlar</p>
        </div>
      </div>
      <div class="task flex gap-2">
        <img src="/src/assets/icons/time.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">4-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">
            O'tmishdagi asosiy kechinmalar
          </p>
        </div>
      </div>
      <div class="task flex gap-2">
        <img src="/src/assets/icons/backspace.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">5-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">Krutilka usuli</p>
        </div>
      </div>
      <div class="task flex gap-2">
        <img src="/src/assets/icons/grees.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">6-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">
            Obrazlarni almashtirish usuli
          </p>
        </div>
      </div>
      <div class="task flex gap-2">
        <img src="/src/assets/icons/increasing.png" alt="#" />
        <div class="subtitl">
          <h1 class="text-[#009789] text-[18px] font-medium">7-kun</h1>
          <p class="text-[#47474F] text-[14px] font-medium">
            Rivojlanisshda bardavom bo'lish
          </p>
        </div>
      </div>
    </div>

    <div class="loading block 2xl:hidden m-auto max-w-[380px]">
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
      class="btn 2xl:hidden m-auto max-w-[350px] flex items-center justify-center px-[20px] py-[16px] rounded-[5px] border-[#CFFFFA80] border-[3px] bg-[#0ACCBA] mb-[50px]"
    >
      <button class="text-white text-[16px] font-bold" @click="isModal = true">
        Sotib oling
      </button>
      <teleport to="body">
        <div
          class="fixed inset-0 top-0 left-0 bottom-0 bg-[#00000099]"
          v-if="isModal"
        >
          <div
            class="modal w-full h-full flex items-center justify-center flex-col"
            v-if="isModal"
          >
            <button
              class="w-[390px] flex items-center justify-end"
              @click="isModal = false"
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
                <h2
                  class="text-[#0ACCBA] text-[18px] font-extrabold text-center"
                >
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
                <button class="text-white text-[16px] font-bold">
                  Yuborish
                </button>
              </div>
            </div>
          </div>
        </div>
      </teleport>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModal: false,
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
