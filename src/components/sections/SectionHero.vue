<template>
  <section ref="sectionRef" class="section">
    <div ref="bgRef" class="bg-position-[center_top_0rem] bg-no-repeat bg-center background"
      :style="{ backgroundImage: `url(${bgImage})` }"></div>
    <div ref="contentRef" class="content">
      <h1 class="font-bold text-5xl content-item">Chào mừng bạn đến với Aurora</h1>
      <p class="mt-5 text-xl content-item">Không gian sống đẳng cấp giữa lòng thành phố</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref();
const bgRef = ref();
const contentRef = ref();
const bgImage = '	https://admin.themarc88.com.vn/assets/68816070-d8ad-4818-b2e5-80c76d2b7e69'; // Replace with your image URL

onMounted(() => {
  const contentItems = contentRef.value.querySelectorAll('.content-item');
  gsap.set(bgRef.value, { y: '0%' });
  gsap.set(contentItems, { opacity: 0, y: 50 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top top',
      end: '+=200%',
      scrub: 1,
      pin: true,
    }
  });

  tl.to(contentItems, {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 1,
    ease: 'power2.out'
  }, '>-0.3');
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
