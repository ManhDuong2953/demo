<template>
  <section id="news" ref="sectionRef8" class="bg-[#011A1A] text-white section">
    <!-- BG chuyển động -->
    <div ref="bgRef8" class="bg-[#011A1A] background"></div>

    <div class="overdflow-hidden top-0 z-10 relative mx-auto text-center container">
      <!-- Tiêu đề -->
      <h3 ref="textRef8" class="opacity-0 mb-10 font-semibold text-[#C6A456] text-3xl sm:text-4xl">
        CẬP NHẬT TIN TỨC <span class="text-white">MỚI NHẤT</span>
      </h3>

      <!-- Slider -->
      <div class="w-full news-slider" ref="sliderRef8">
        <div v-for="(item, index) in slideItems" :key="index" class="relative px-2">
          <div class="relative min-h-[400px]">
            <img :src="item?.image" alt="image" />
            <div class="flex flex-col justify-between bg-[#C2B59B] px-6 py-4 text-white text-start">
              <div>
                <div class="bg-[#D9D9D9] my-2 px-4 py-2 rounded-[68px] w-fit text-black text-sm">{{ item.label
                }}</div>
                <div class="mt-4 mb-8 text-white text-lg text-start">{{ item.description }}</div>
              </div>
              <a href="#" class="mt-1 text-black text-md text-start hover:underline uppercase">Xem thêm</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Refs
const sectionRef8 = ref(null);
const bgRef8 = ref(null);
const textRef8 = ref(null);
const sliderRef8 = ref(null);

// Slider items
const slideItems = [
  {
    label: 'Hot',
    image: 'https://admin.themarc88.com.vn/assets/f258e3d3-a0be-4d8a-8648-bd27737a3923',
    description: 'Hình ảnh dự án thi công tháng 03/2025',
  },
  {
    label: 'Latest',
    image: 'https://admin.themarc88.com.vn/assets/f258e3d3-a0be-4d8a-8648-bd27737a3923',
    description: 'Tiến độ xây dựng tháng 04/2025',
  },
  {
    label: 'New',
    image: 'https://admin.themarc88.com.vn/assets/f258e3d3-a0be-4d8a-8648-bd27737a3923',
    description: 'Thông báo mới từ chủ đầu tư',
  },
  {
    label: 'Hot',
    image: 'https://admin.themarc88.com.vn/assets/f258e3d3-a0be-4d8a-8648-bd27737a3923',
    description: 'Hình ảnh dự án thi công tháng 03/2025',
  },
  {
    label: 'Latest',
    image: 'https://admin.themarc88.com.vn/assets/f258e3d3-a0be-4d8a-8648-bd27737a3923',
    description: 'Tiến độ xây dựng tháng 04/2025',
  },
  {
    label: 'New',
    image: 'https://admin.themarc88.com.vn/assets/f258e3d3-a0be-4d8a-8648-bd27737a3923',
    description: 'Thông báo mới từ chủ đầu tư',
  }
];

onMounted(() => {
  // Init slick slider
  $('.news-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  });

  // GSAP setup
  gsap.set(bgRef8.value, { y: '100%' });
  gsap.set(textRef8.value, { autoAlpha: 0, x: -300 });
  gsap.set(sliderRef8.value, { autoAlpha: 0, y: 50 });

  // ScrollTrigger timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef8.value,
      start: 'top top',
      end: '+=200%',
      pin: true,
      scrub: 1,
    }
  });

  tl.to(bgRef8.value, { y: 0, duration: 1 });
  tl.to(textRef8.value, { autoAlpha: 1, x: 0, duration: 1 }, '<0.2');
  tl.to(sliderRef8.value, { autoAlpha: 1, y: 0, duration: 1 }, '<0.2');
});
</script>

<style scoped>
.news-slider {
  display: flex;
}

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
