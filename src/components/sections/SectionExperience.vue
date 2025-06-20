<template>
  <section ref="sectionRef5" class="bg-[#011A1A] text-white section">
    <!-- Background hiệu ứng -->
    <div ref="bgRef5" class="bg-[#011A1A] background"></div>

    <div ref="contentRef5"
      class="relative flex justify-center items-center w-screen h-screen overflow-hidden text-center content-wrapper">
      <!-- Nội dung slide -->
      <div class="flex flex-col justify-center items-center mx-auto container">
        <div class="flex justify-center items-center w-full h-[80vh]">
          <div class="flex flex-col flex-1 justify-between py-12 pr-12 pl-14 h-full">
            <h3 ref="titleRef" class="mb-10 pt-12 md:w-3/5 font-bold text-white text-5xl text-start content-text-4">
              ĐỊNH VỊ CHUẨN MỰC VĂN PHÒNG
              <span class="text-[#C6A456]">HẠNG SANG</span>
            </h3>
            <div class="w-full">
              <div class="relative flex flex-col items-stretch md:w-3/5 h-[150px] overflow-hidden">
                <div v-for="(item, index) in texts" :key="index" class="top-0 left-0 absolute w-full"
                  :ref="(el) => (textRefs[index] = el)">
                  <h3 class="font-semibold text-2xl text-start uppercase">
                    {{ item.title }}
                  </h3>
                  <p class="mt-3 text-lg text-start">
                    {{ item.text }}
                  </p>
                </div>
              </div>
              <!-- Progress bar -->
              <div class="bg-[#333] mt-8 rounded-lg w-3/5 md:w-1/2 h-[7px]">
                <div ref="progressBar" class="bg-[#C6A456] h-full transition-all duration-500" style="width: 25%"></div>
              </div>
            </div>
          </div>
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

  gsap.set(titleRef.value, {
    x: 300,
    opacity: 0,
  });
  gsap.set(progressBar.value, {
    width: "0%",
  });
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
      end: "+=500%",
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
  }).to(titleRef.value, {
    x: 0,
    opacity: 1,
    duration: 1,
  });
  tl.to(titleRef.value, { x: 0, opacity: 1, duration: 1 });

  tl.to(textRefs[0], { x: 0, opacity: 1, duration: 1 }).to(progressBar.value, {
    width: "25%",
  });
  tl.to(progressBar.value, { duration: 2 });

  // Slide lần 1
  tl.to(textRefs[0], { x: -300, opacity: 0, duration: 1 });
  tl.to(textRefs[1], { x: 0, opacity: 1, duration: 1 }).to(progressBar.value, {
    width: "50%",
  });
  tl.to(progressBar.value, { duration: 2 });

  // Slide lần 2
  tl.to(textRefs[1], { x: -300, opacity: 0, duration: 1 });
  tl.to(textRefs[2], { x: 0, opacity: 1, duration: 1 }).to(progressBar.value, {
    width: "100%",
  });
  tl.to({ duration: 5 });
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
