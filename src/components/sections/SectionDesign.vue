<template>
  <section id="overview" ref="sectionRef2" class="bg-[#D9D9D9] section">
    <div ref="bgRef2" class="bg-[#D9D9D9] background"></div>
    <div ref="contentRef2" class="md:h-screen min-h-screen content">
      <div class="flex md:flex-row flex-col py-12 container">
        <!-- TEXT -->
        <div class="flex flex-col flex-1 justify-start gap-8 px-6 md:px-12 md:py-12">
          <h3 class="font-semibold text-[#C6A456] text-4xl text-start content-text-2 leading-tight">
            BIỂU TƯỢNG THỜI ĐẠI PHÍA TÂY THỦ ĐÔ
          </h3>
          <div class="font-semibold text-black text-start content-text-2">
            Hình tượng truyền thống "cây tre" được cách điệu bằng những nét kiến trúc lam nhôm tinh tế và sang trọng
            chạy dọc tòa nhà, thổi hồn vào một diện mạo hiện đại mới lạ. Điểm xuyết cho mặt ngoài tòa nhà với lớp kính
            bao quanh là các tầng không gian vườn trời. Góc nhìn từ xa mang lại cảm giác như những cây tre đang vươn
            lên, khẳng định tầm nhìn phồn thịnh cùng đất nước của dự án.
          </div>
          <div class="flex justify-center md:justify-start space-x-1 content-text-2">
            <img alt="bamboo" width="156" height="50"
              src="@/assets/bamboo.4f48509f.svg" />
            <img alt="bamboo" width="156" height="50"
              src="@/assets/bamboo.4f48509f.svg" />
          </div>
        </div>

        <!-- IMAGES -->
        <div class="flex md:flex-row flex-col flex-1 justify-between items-center">
          <img class="my-3 px-3 h-[65vw] md:h-[70vh] object-contain image-design-1"
            src="@/assets/building.png" alt="image1" />
          <img class="my-3 px-3 h-[65vw] md:h-[70vh] object-contain image-design-2"
            src="@/assets/bamboo-leaf.png" alt="image2" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionRef2 = ref();
const bgRef2 = ref();
const contentRef2 = ref();

onMounted(() => {
  const textEls = contentRef2.value.querySelectorAll('.content-text-2');
  const image1 = contentRef2.value.querySelector('.image-design-1');
  const image2 = contentRef2.value.querySelector('.image-design-2');

  gsap.set(bgRef2.value, { y: '100%' });
  gsap.set(textEls, { opacity: 0, x: -300 });
  gsap.set(image1, { opacity: 0, y: 300 });
  gsap.set(image2, { opacity: 0, x: 300 });

  // Gộp lại thành 1 timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef2.value,
      start: 'top top',
      end: '+=200%',
      scrub: 1,
      pin: true,
    }
  });

  tl.to(bgRef2.value, { y: 0, duration: 1, ease: 'power2.out' })
    .to(textEls, {
      opacity: 1,
      x: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out'
    }, '+=0.3')
    .to(image1, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.8')
    .to(image2, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.9')
    .to(bgRef2.value, { duration: 1, ease: 'power2.out' }, '+=0.5');
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

.content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
