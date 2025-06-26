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
          class="top-1/2 left-1/2 z-[11] absolute w-[100vw] md:w-[60vw] md:h-screen object-cover image-location"
          :class="`image-location${index + 1}`" :src="img" alt="image" />
      </div>
    </div>

  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image3 from '@/assets/V3.jpg';
import image4 from '@/assets/V4.jpg';
import image5 from '@/assets/V5.jpg';
import image6 from '@/assets/V6.jpg';
gsap.registerPlugin(ScrollTrigger);

const arrImg = [
  image5, 
  image3,
  image4,
  image6,
];
const sectionRef3 = ref();
const bgRef3 = ref();
const contentRef3 = ref();

onMounted(() => {
  const isLargeScreen = window.innerWidth >= 768;
  const text = contentRef3.value.querySelector('.content-text-3');
  const images = contentRef3.value.querySelectorAll('.image-location');

  // 1. Set trạng thái ban đầu
  gsap.set(bgRef3.value, { y: '100%' });
  gsap.set(text, { opacity: 0, y: 50 });

  images.forEach((img, i) => {
    gsap.set(img, {
      opacity: 0,
      x: "-50%",
      y: "100%",
      scale: i === 0 ? 0.5 : 2,
    });
  });

  // 2. Timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef3.value,
      start: 'top top',
      end: '+=600%',
      scrub: 2,
      pin: true,
      // markers: true, // Bật lên nếu muốn debug
    },
  });

  // 3. Animate tuần tự
  tl.to(bgRef3.value, { y: 0, duration: 1 });

  tl.to(text, { opacity: 1, y: 0, duration: 50 });
  tl.to(text, { duration: 100 });
  tl.to(text, { opacity: 0, y: -50, duration: 10 });

  images.forEach((img, i) => {
    // Ảnh xuất hiện mượt
    tl.to(img, {
      opacity: 1,
      y: "-50%",
      scale: 1,
      duration: 100,
      ease: 'power2.out',
    },'<0.2');

    // Ảnh giữ nguyên khoảng thời gian lâu (2 lướt chuột tương đối)
    tl.to(img, {
      duration: 100, // Tăng duration rỗng, bạn chỉnh lớn nhỏ theo cảm giác scroll của mình
    },'<0.2');

    // Ảnh mờ đi và thu nhỏ trước khi chuyển sang ảnh tiếp
    if (i < images.length - 1 && isLargeScreen) {
      tl.to(img, {
        opacity: 0.5,
        y: "98%",
        scale: 0.8,
        duration: 100,
        ease: 'power2.out',
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
