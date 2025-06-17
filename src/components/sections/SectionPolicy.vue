<template>
  <BaseSection background="https://media.doanhnhantrevietnam.vn/files/content/2024/06/18/bds68-1253.jpg">
    <div ref="content" class="text">
      <h2 class="title">Chính Sách Ưu Đãi</h2>
      <p class="desc">Thanh toán linh hoạt, hỗ trợ vay vốn hấp dẫn</p>
    </div>
  </BaseSection>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import BaseSection from '../BaseSection.vue';

const content = ref(null);

onMounted(() => {
  gsap.from(content.value.children, {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: content.value,
      start: 'top 80%',
    },
  });
});
</script>

<style scoped>
.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.desc {
  font-size: 1.3rem;
}
</style>
