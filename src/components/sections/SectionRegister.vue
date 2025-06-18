<template>
  <section ref="sectionRef" class="section z-70">
    <div ref="bgRef" class="background bg-gradient-to-br from-teal-700 to-cyan-400"></div>
    <div ref="contentRef" class="content">
      <h2 class="content-item text-5xl font-semibold">Đăng ký nhận thông tin</h2>
      <form class="content-item mt-4 space-y-3">
        <input type="text" placeholder="Họ tên" class="w-64 px-4 py-2 rounded" />
        <input type="email" placeholder="Email" class="w-64 px-4 py-2 rounded" />
        <button class="bg-white text-black px-6 py-2 rounded font-semibold">Gửi</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref()
const bgRef = ref()
const contentRef = ref()

onMounted(() => {
  const contentItems = contentRef.value.querySelectorAll('.content-item')
  gsap.set(bgRef.value, { y: '100%' })
  gsap.set(contentItems, { opacity: 0, y: 60 })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top top',
      end: '+=100%',
      scrub: 1,
      pin: true,
      pinSpacing: false
    }
  })

  tl.to(bgRef.value, { y: '0%', duration: 1 }, 0)
  tl.to(contentItems, {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    duration: 1,
    ease: 'power2.out'
  }, '>-0.3')
})
</script>

<style scoped>
.section {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.background {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2rem;
  text-align: center;
}
input {
  background: white;
  color: black;
}
</style>

