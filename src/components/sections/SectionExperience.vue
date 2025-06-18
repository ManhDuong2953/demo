<template>
  <section ref="sectionRef5" class="bg-black text-white section">
    <!-- Background hiệu ứng -->
    <div ref="bgRef5" class="bg-black background"></div>

    <div
      ref="contentRef5"
      class="relative flex justify-center items-center w-screen h-screen overflow-hidden text-center content-wrapper"
    >
      <!-- Nội dung slide -->
      <div
        class="flex-1 py-12 pl-14 pr-12 h-full flex flex-col justify-between"
      >
        <h3
          ref="titleRef"
          class="text-white mb-10 font-bold text-4xl pt-12 text-start w-1/2 content-text-4"
        >
          ĐỊNH VỊ CHUẨN MỰC VĂN PHÒNG
          <span class="text-[#C6A456]">HẠNG SANG</span>
        </h3>

        <div
          class="flex flex-col items-stretch w-1/2 overflow-hidden relative h-[250px]"
        >
          <div
            v-for="(item, index) in texts"
            :key="index"
            class="absolute w-full top-0 left-0"
            :ref="(el) => (textRefs[index] = el)"
          >
            <h3 class="text-2xl uppercase font-semibold text-start">
              {{ item.title }}
            </h3>
            <p class="text-start text-lg mt-3">
              {{ item.text }}
            </p>
          </div>
        </div>

        <!-- Progress bar -->
        <div class="h-[7px] rounded-lg w-full bg-[#333] mt-8">
          <div
            ref="progressBar"
            class="h-full bg-[#C6A456] transition-all duration-500"
            style="width: 25%"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef5 = ref();
const bgRef5 = ref();
const contentRef5 = ref();
const titleRef = ref();
const progressBar = ref();

const textRefs = [];

const texts = [
  {
    title: "Kiến trúc xanh bền vững",
    text: "Phát triển tại khu vực trung tâm Công nghệ thủ đô, tòa nhà chủ trường hướng đến những tiêu chí của chứng chỉ xanh quốc tế LEED Silver tại quận Cầu Giấy. Thiết kế mạng lưới Module trên mặt đứng không chỉ tạo không gian mở cho kiến trúc bên trong mà còn giúp tiết kiệm năng lượng điện hao phí, hướng đến tầm nhìn tòa nhà bền vững.",
  },
  {
    title: "Hình mẫu tòa nhà thông minh",
    text: "Hệ thống quản lý tòa nhà BMS tích hợp và đồng bộ các tính năng quản lý mọi vấn đề kỹ thuật trong tòa nhà như hệ thống quản lý vào ra, hệ thống quản lý bãi đỗ xe, hệ thống camera quan sát giúp đảm bảo tính chính xác và kịp thời trong vận hành tòa nhà.",
  },
  {
    title: "Biểu tượng về ngôn ngữ thiết kế",
    text: "Kiến trúc đặc trưng với sự hòa quyện của các đường nét tinh tế dọc theo tòa nhà mang đến diện mạo cao cấp và hiện đại. Không gian đầy ánh sáng hòa quyện với cấu trúc hộp kính toát lên sự lộng lẫy hiếm có giữa lòng trung tâm Công nghệ thủ đô.",
  },
];

onMounted(() => {
  gsap.set(contentRef5.value, {
    scale: 7,
    x: 300,
    opacity: 0,
    transformOrigin: "center center",
  });
  gsap.set(bgRef5.value, { y: "100%" });

  texts.forEach((_, index) => {
    gsap.set(textRefs[index], {
      x: 300,
      opacity: 0,
    });
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef5.value,
      start: "top top",
      end: "+=2500",
      scrub: 1,
      pin: true,
    },
  });

  tl.to(bgRef5.value, { y: 0, duration: 1 });
  tl.to(contentRef5.value, {
    scale: 1,
    x: 0,
    opacity: 1,
    duration: 2,
    ease: "power2.out",
  });
  tl.to(titleRef.value, { x: 0, opacity: 1, duration: 1 });
  
  tl.to(textRefs[0], { x: 0, opacity: 1, duration: 1 }).to(progressBar.value, {
    width: "25%",
  });
  tl.to(progressBar.value, {});

  // Slide lần 1
  tl.to(textRefs[0], { x: -300, opacity: 0, duration: 1 });
  tl.to(textRefs[1], { x: 0, opacity: 1, duration: 1 }).to(progressBar.value, {
    width: "50%",
  });
  tl.to(progressBar.value, {});

  // Slide lần 2
  tl.to(textRefs[1], { x: -300, opacity: 0, duration: 1 });
  tl.to(textRefs[2], { x: 0, opacity: 1, duration: 1 }).to(progressBar.value, {
    width: "100%",
  });
  tl.to(progressBar.value, {});
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

.content-wrapper {
  will-change: transform;
}
</style>
