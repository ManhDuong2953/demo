<template>
  <section
    id="gallery"
    ref="sectionRef6"
    class="bg-[#d9d9d9] text-white section"
  >
    <div ref="bgRef6" class="bg-[#d9d9d9] background"></div>

    <div
      ref="contentRef6"
      class="relative flex flex-col justify-center items-center w-screen h-screen overflow-hidden text-center"
    >
      <!-- TEXT -->
      <h3
        ref="titleRef6"
        class="top-30 absolute mt-12 mb-10 w-full font-bold text-4xl text-center"
      >
        <span class="text-[#C6A456]">HƠN CẢ MỘT KHÔNG GIAN </span>LÀM VIỆC
      </h3>

      <!-- IMAGE-location STACK -->
      <div class="z-10 w-full h-full">
        <img
          v-for="(img, index) in arrImg"
          :key="index"
          class="top-1/2 left-1/2 z-[11] absolute w-[100vw] md:w-[60vw] md:h-screen object-cover image-gallery"
          :class="`image-gallery${index + 1}`"
          :src="img"
          alt="image"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import galarey1 from "@/assets/gallery-1.jpg";
import galarey2 from "@/assets/gallery-2.jpg";
import galarey3 from "@/assets/gallery-3.jpg";
import galarey4 from "@/assets/gallery-4.jpg";
gsap.registerPlugin(ScrollTrigger);

const arrImg = [galarey1, galarey2, galarey3, galarey4];
const sectionRef6 = ref();
const bgRef6 = ref();
const contentRef6 = ref();
const titleRef6 = ref();
onMounted(() => {
  const images = contentRef6.value.querySelectorAll(".image-gallery");
  const isLargeScreen = window.innerWidth >= 768;

  // 1. Set trạng thái ban đầu
  gsap.set(bgRef6.value, { y: "100%" });
  gsap.set(titleRef6.value, { opacity: 0, x: -300 });

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
      trigger: sectionRef6.value,
      start: "top top",
      end: "+=500%",
      scrub: 2,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      fastScrollEnd: true,pin: true,            pinSpacing: true,markers: false,
      // markers: true, // Bật lên nếu muốn debug
    },
  });

  // 3. Animate tuần tự
  tl.to(bgRef6.value, { y: 0, duration: 1 });

  tl.to(titleRef6.value, { opacity: 1, x: 0, duration: 100 });
  if (isLargeScreen) {
    tl.to(titleRef6.value, { duration: 100 });
    tl.to(titleRef6.value, { opacity: 0, x: 300, duration: 100 });
  }

  images.forEach((img, i) => {
    // Ảnh xuất hiện mượt
    tl.to(
      img,
      {
        opacity: 1,
        y: "-50%",
        scale: 1,
        duration: 100,
        ease: "power2.out",
      },
      "<1"
    );

    // Ảnh giữ nguyên khoảng thời gian lâu (2 lướt chuột tương đối)
    tl.to(
      img,
      {
        duration: 200, // Tăng duration rỗng, bạn chỉnh lớn nhỏ theo cảm giác scroll của mình
      },
      "<2"
    );

    // Ảnh mờ đi và thu nhỏ trước khi chuyển sang ảnh tiếp
    if (i < images.length - 1 && isLargeScreen) {
      tl.to(img, {
        opacity: 0.5,
        y: "98%",
        scale: 0.8,
        duration: 100,
        ease: "power2.in",
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
