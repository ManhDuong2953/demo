<template>
  <section ref="sectionRef3" class="bg-black text-white section">
    <div ref="bgRef3" class="bg-black background"></div>

    <div ref="contentRef3"
      class="relative flex flex-col justify-center items-center w-screen h-screen overflow-hidden text-center">
      <!-- TEXT -->
      <h3 class="z-10 absolute mb-10 font-bold text-[#C6A456] text-4xl content-text-3">
        NGHỆ THUẬT KIẾN TRÚC ĐỘC BẢN
      </h3>

      <!-- IMAGE-location STACK -->
      <div class="z-10 w-full h-full">
        <img v-for="(img, index) in arrImg" :key="index"
          style="translate: none;rotate: none;scale: none;transform: translate(-50%, 0px);opacity: 1;"
          class="left-1/2 z-[11] absolute w-[50vw] h-screen object-cover -translate-x-1/2 image-location"
          :class="`image-location${index + 1}`" :src="img" alt="image" />
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
  'https://admin.themarc88.com.vn/assets/a98bc324-ef77-4581-8590-935cd5bce805',
  'https://admin.themarc88.com.vn/assets/0ab3922b-06a5-4f5c-85c3-c4759369ddbf',
  'https://admin.themarc88.com.vn/assets/95e964a0-7ea8-45c3-b35f-a8f6c4276410',
  'https://admin.themarc88.com.vn/assets/03139784-6c13-4fcd-8a4c-81354cb4f760',
];
const sectionRef3 = ref();
const bgRef3 = ref();
const contentRef3 = ref();

onMounted(() => {
  const text = contentRef3.value.querySelector('.content-text-3');
  const images = contentRef3.value.querySelectorAll('.image-location');

  // 1. Set trạng thái ban đầu
  gsap.set(bgRef3.value, { y: '100%' });
  gsap.set(text, { opacity: 0, y: 50 });

  images.forEach((img, i) => {
    gsap.set(img, {
      opacity: 0,
      x: -0.5,
      y: 1000,
      scale: i === 0 ? 0.5 : 2,
    });
  });

  // 2. Timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef3.value,
      start: 'top top',
      end: '+=4000',
      scrub: 2,
      pin: true,
      // markers: true, // Bật lên nếu muốn debug
    },
  });

  // 3. Animate tuần tự
  tl.to(bgRef3.value, { y: 0, duration: 1 });

  tl.to(text, { opacity: 1, y: 0, duration: 10 });
  tl.to(text, { duration: 10 });

  tl.to(text, { opacity: 0, y: -50, duration: 10 });

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
