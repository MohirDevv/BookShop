<template>
  <EntranceSection />
  <YoutubeSection />
  <AboutShs />
  <RefreshSection />
  <TextSection />
  <AccordionSection />
  <FooterSection />
</template>

<script>
import AOS from 'aos'
import EntranceSection from "./components/EntranceSection.vue";
import YoutubeSection from "./components/YoutubeSection.vue";
import AboutShs from "./components/AboutShs.vue";
import RefreshSection from "./components/RefreshSection.vue";
import TextSection from "./components/TextSection.vue";
import AccordionSection from "./components/AccordionSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  data() {
    return {
      
    };
  },
  components: {
    EntranceSection,
    YoutubeSection,
    AboutShs,
    RefreshSection,
    TextSection,
    AccordionSection,
    FooterSection,
  },

  mounted() {
    AOS.init();
  }
 
};
</script>
