<template>
  <section ref="sectionRef6" class="bg-[#d9d9d9] text-white section">
    <div ref="bgRef6" class="bg-[#d9d9d9] background"></div>

    <div ref="contentRef6"
      class="relative flex flex-col justify-center items-center w-screen h-screen overflow-hidden text-center">
      <!-- TEXT -->
      <h3 ref="titleRef6" class="absolute mt-12 mb-10 w-full font-bold text-5xl text-center">
        <span class="text-[#C6A456]">HƠN CẢ MỘT KHÔNG GIAN
        </span>LÀM VIỆC
      </h3>

      <!-- IMAGE-location STACK -->
      <div class="z-10 w-full h-full">
        <img v-for="(img, index) in arrImg" :key="index"
          class="left-1/2 z-[11] absolute w-[70vw] h-screen object-cover -translate-x-1/2 image-gallery"
          :class="`image-gallery${index + 1}`" :src="img" alt="image" />
      </div>
    </div>

  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const arrImg = [
  'https://admin.themarc88.com.vn/assets/0c81be9b-1ba8-4120-891e-d7b5ff32d759',
  'https://admin.themarc88.com.vn/assets/809d4b21-d78e-422f-8195-5ac53ae4318b',
  'https://admin.themarc88.com.vn/assets/7d373925-2b92-4ddd-b59f-7f35f33aac22',
  'https://admin.themarc88.com.vn/assets/4c3938a5-f193-417c-ba75-9e34718f1261',
];
const sectionRef6 = ref();
const bgRef6 = ref();
const contentRef6 = ref();
const titleRef6 = ref();
onMounted(() => {
  const images = contentRef6.value.querySelectorAll('.image-gallery');

  // 1. Set trạng thái ban đầu
  gsap.set(bgRef6.value, { y: '100%' });
  gsap.set(titleRef6.value, { opacity: 0, x: -300 });

  images.forEach((img, i) => {
    gsap.set(img, {
      opacity: 0,
      x: "-50%",
      y: 1000,
      scale: i === 0 ? 0.5 : 2,
    });
  });

  // 2. Timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef6.value,
      start: 'top top',
      end: '+=500%',
      scrub: 1,
      pin: true,
      // markers: true, // Bật lên nếu muốn debug
    },
  });

  // 3. Animate tuần tự
  tl.to(bgRef6.value, { y: 0, duration: 1 });

  tl.to(titleRef6.value, { opacity: 1, x: 0, duration: 10 });
  tl.to(titleRef6.value, { duration: 10 });

  tl.to(titleRef6.value, { opacity: 0, y: -50, duration: 10 });

  images.forEach((img, i) => {
    tl.to(img, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 10,
      ease: 'power2.out',
    });
    tl.to(img, {
      duration: 15,
    });

    if (i < images.length - 1) {
      tl.to(img, {
        opacity: 1,
        y: 100,
        scale: 0.8,
        duration: 10,
        ease: 'power2.inOut',
      });
    }

  });
});
</script>


<style scoped>
.section {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.background {
  position: absolute;
  inset: 0;
  z-index: 0;
}
</style>
