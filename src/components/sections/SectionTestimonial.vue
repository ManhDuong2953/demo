<template>
  <section ref="sectionRef" class="section z-50">
    <div ref="bgRef" class="background bg-gradient-to-br from-pink-700 to-rose-400"></div>
    <div ref="contentRef" class="content">
      <h2 class="content-item text-5xl font-semibold">Khách hàng nói gì?</h2>
      <blockquote class="content-item text-base mt-3 italic max-w-2xl">“Dự án Aurora đã vượt qua mong đợi của tôi về chất lượng sống và dịch vụ.”</blockquote>
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
  gsap.set(contentItems, { opacity: 0, x: 60 })

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

  tl.to(bgRef.value, { y: '0%', duration: 1, ease: 'power2.out' }, 0)
  tl.to(contentItems, {
    opacity: 1,
    x: 0,
    stagger: 0.3,
    duration: 1,
    ease: 'power3.out'
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
