<template>
  <section ref="sectionRef7" class="bg-[#011A1A] section">
    <div ref="bgRef7" class="bg-[#011A1A] background"></div>

    <div ref="contentRef7" class="h-screen content">
      <div class="flex items-center py-12 container">
        <div class="hidden md:block flex-1"></div>
        <!-- TEXT + IMAGES -->
        <div class="flex flex-col flex-[7] justify-start gap-8 px-6 md:px-12 md:py-12">
          <h3 ref="titleRef7" class="font-semibold text-white text-5xl text-center md:text-end leading-tight">
            <span class="text-[#C6A456]">ĐƠN VỊ PHÁT TRIỂN</span> DỰ ÁN
          </h3>

          <div class="flex md:flex-row flex-col justify-center md:justify-start items-center image-register-1">
            <img class="md:mr-12 px-3 w-[200px] object-contain" src="https://themarc88.com.vn/images/haison.png"
              alt="Hải Sơn" />
            <div class="flex flex-col md:pl-12">
              <div class="pb-4 font-semibold text-[#C6A456] text-lg text-center md:text-start uppercase">
                CHỦ ĐẦU TƯ - CÔNG TY TNHH DV TH HẢI SƠN
              </div>
              <div class="text-md text-white text-center md:text-start leading-6 content1">
                Sở hữu đội ngũ chuyên gia, nền tảng vững vàng cùng tầm nhìn mới mẻ, Công ty TNHH DV TH Hải Sơn xây dựng
                tầm nhìn trở thành nhà cung cấp dịch vụ bất động sản đáng tin cậy trên thị trường.
              </div>
            </div>
          </div>

          <div class="flex md:flex-row flex-col justify-center md:justify-start items-center image-register-2">
            <img class="md:mr-12 px-3 w-[200px] object-contain" src="https://themarc88.com.vn/images/aedas.png"
              alt="Aedas" />
            <div class="flex flex-col md:pl-12">
              <div class="pb-4 font-semibold text-[#C6A456] text-lg text-center md:text-start uppercase">
                ĐƠN VỊ THIẾT KẾ Ý TƯỞNG - CÔNG TY TNHH AEDAS VIỆT NAM
              </div>
              <div class="text-md text-white text-center md:text-start leading-6 content2">
                Aedas là công ty thiết kế kiến trúc nhiều năm liền nằm trong Top 10 hãng tư vấn thiết kế lớn nhất thế
                giới.
              </div>
            </div>
          </div>

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

const sectionRef7 = ref();
const bgRef7 = ref();
const contentRef7 = ref();
const titleRef7 = ref();

onMounted(() => {
  const text1 = contentRef7.value.querySelector('.content1');
  const text2 = contentRef7.value.querySelector('.content2');
  const image1 = contentRef7.value.querySelector('.image-register-1');
  const image2 = contentRef7.value.querySelector('.image-register-2');

  // Set trạng thái ban đầu
  gsap.set(bgRef7.value, { y: '100%' });
  gsap.set(titleRef7.value, { opacity: 0, x: 300 });
  gsap.set([image1, text1], { opacity: 0, y: 100 });
  gsap.set([image2, text2], { opacity: 0, y: 100 });

  // Timeline scroll
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef7.value,
      start: 'top top',
      end: '+=400%',
      scrub: 1,
      pin: true,
    }
  });

  tl.to(bgRef7.value, { y: 0, duration: 1, ease: 'power2.out' })
    .to(titleRef7.value, { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, '+=0.5')
    .to([image1, text1], { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' }, '+=0.5')
    .to([image2, text2], { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' }, '+=0.5')
    .to(contentRef7.value, { opacity: 1, duration: 1 }, '+=0.5');
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
