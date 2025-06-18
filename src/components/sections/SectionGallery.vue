<template>
  <section ref="sectionRef" class="section z-60">
    <div ref="bgRef" class="background bg-gradient-to-br from-slate-800 to-zinc-500"></div>
    <div ref="contentRef" class="content">
      <h2 class="content-item text-5xl font-semibold">Thư viện hình ảnh</h2>
      <div class="content-item grid grid-cols-3 gap-4 mt-4">
        <div class="w-32 h-20 bg-white/30 rounded-lg"></div>
        <div class="w-32 h-20 bg-white/30 rounded-lg"></div>
        <div class="w-32 h-20 bg-white/30 rounded-lg"></div>
      </div>
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
  gsap.set(contentItems, { opacity: 0, scale: 0.9 })

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
    scale: 1,
    stagger: 0.2,
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
</style>