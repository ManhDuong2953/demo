<template>
  <section ref="sectionRef" class="section">
    <div class="background" ref="bgRef">
      <slot name="background" />
    </div>
    <div class="content">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const bgRef = ref(null)

onMounted(() => {
  const contentItems = sectionRef.value.querySelectorAll('.content-item')

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top top',
      end: '+=200%',
      scrub: 1,
      pin: true,
      pinSpacing: true,
      markers: false
    }
  })

  gsap.set(bgRef.value, { y: '100%' })
  gsap.set(contentItems, { opacity: 0, y: 50 })

  tl.to(bgRef.value, { y: '0%', ease: 'power2.out', duration: 1 }, 0)
  tl.to(contentItems, {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    ease: 'power2.out',
    duration: 0.8
  }, '>0.3')

  tl.to(contentItems, {
    opacity: 0,
    y: -50,
    stagger: 0.1,
    ease: 'power1.in',
    duration: 0.5
  }, '>1')

  tl.to(bgRef.value, {
    opacity: 0,
    y: '-50%',
    ease: 'power1.in',
    duration: 0.7
  }, '<0.2')
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  /* Đảm bảo background luôn hiển thị phía dưới */
  opacity: 1;
  transition: background-color 0.3s;
}
.content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
  color: white;
  text-align: center;
}
</style>
