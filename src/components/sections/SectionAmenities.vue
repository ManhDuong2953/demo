<template>
  <section ref="sectionRef4" class="bg-black text-white section">
    <!-- Background nếu muốn hiệu ứng nền -->
    <div ref="bgRef4" class="bg-black background"></div>

    <div
      ref="contentRef4"
      class="relative flex justify-center items-center w-screen h-screen overflow-hidden text-center content-wrapper"
    >
      <!-- Ảnh chính -->
      <div class="flex-[2] relative overflow-hidden">
        <img
          src="https://themarc88.com.vn/images/map-m88.png"
          alt="img"
          class="w-full h-full object-cover image-main-amenities"
        />
      </div>

      <!-- Text + buttons -->
      <div class="flex-1 py-12 pl-14 pr-12 h-full flex flex-col justify-between">
        <h3 class="text-white mb-10 font-bold text-4xl pt-12 text-end content-text-4">
          TÂM ĐIỂM TRUNG TÂM KINH TẾ NĂNG ĐỘNG PHÍA TÂY
          <span class="text-[#C6A456]">THỦ ĐÔ</span>
        </h3>
        <div class="flex flex-col items-stretch">
          <button
            class="cursor-pointer hover:bg-[#C2B59B] text-white text-md uppercase bg-[#C6A456] rounded-[100px] px-8 py-4 w-full h-[60px] my-3 border-none outline-none"
          >
            Kết Nối GIAO THÔNG
          </button>
          <button
            class="cursor-pointer hover:bg-[#C2B59B] text-white text-md uppercase bg-[#C6A456] rounded-[100px] px-8 py-4 w-full h-[60px] my-3 border-none outline-none"
          >
            TIỆN ÍCH
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef4 = ref()
const bgRef4 = ref()
const contentRef4 = ref()

onMounted(() => {
  // Đặt trạng thái ban đầu: phóng to x4 và trượt phải
  gsap.set(contentRef4.value, {
    scale: 7,
    x: 300,
    opacity: 0,
    transformOrigin: 'center center',
  })

  // Nếu muốn background trượt từ dưới lên
  gsap.set(bgRef4.value, { y: '100%' })

  // Timeline scroll
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef4.value,
      start: 'top top',
      end: '+=500',
      scrub: 1,
      pin: true,
    },
  })

  // Background từ dưới lên (tuỳ chọn)
  tl.to(bgRef4.value, { y: 0, duration: 1 })

  // Khối contentRef4 thu nhỏ lại và về đúng vị trí
  tl.to(contentRef4.value, {
    scale: 1,
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'power2.out',
  })
})
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

.image-main-amenities {
  transition: transform 0.3s ease;
}

.content-wrapper {
  will-change: transform;
}
</style>
