<template>
  <section id="home" ref="sectionRef" class="section">
    <div
      ref="bgRef"
      class="bg-position-[center_top_0rem] bg-cover bg-no-repeat bg-center background"
      :style="{ backgroundImage: `url(${bgImage})` }"
    ></div>
    <div ref="contentRef" class="content"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgImage from "@/assets/hero.jpg";
gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref();
const bgRef = ref();
const contentRef = ref();

onMounted(() => {
  const contentItems = contentRef.value.querySelectorAll(".content-item");
  gsap.set(bgRef.value, { y: "0%" });
  gsap.set(contentItems, { opacity: 0, y: 50 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top top",
      end: "+=200%",
      scrub: 2,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      fastScrollEnd: true,pin: true,            pinSpacing: true,
      markers: false,
      pinSpacing: true,
    },
  });

  tl.to(
    contentItems,
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    },
    ">-0.3"
  );
});
</script>

<style scoped>
.section {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2rem;
  text-align: center;
}
</style>
