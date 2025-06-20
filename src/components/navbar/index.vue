<template>
  <!-- Navbar -->
  <nav
    class="top-0 left-0 z-50 fixed flex justify-between items-center bg-transparent backdrop-blur-md px-6 pt-4 w-full h-[100px] text-white transition-transform duration-300"
    :class="{ '-translate-y-[200%]': isHidden }">
    <div class="container">
      <div class="flex items-end h-[100px]">
        <!-- Toggle Menu icon -->
        <button @click="toggleMenu"
          class="flex-1 justify-self-start pt-6 pr-6 pb-4 border-white border-b font-bold text-3xl text-start boder-solid">
          <span v-if="!menuOpen">☰</span>
          <span v-else>✕</span>
        </button>
        <!-- Logo -->
        <img :src="logo" alt="Vue Logo" class="w-fit h-full" />

        <div class="flex flex-1 justify-end items-center pt-6 pb-4 pl-6 border-white border-b boder-solid">
          <!-- Language Switcher -->
          <div class="ml-4 text-sm md:text-base">
            <span class="font-bold hover:text-green-200 cursor-pointer">VN</span> / <span class="font-bold hover:text-green-200 cursor-pointer">EN</span>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Fullscreen Drawer Menu -->
  <transition name="fade">
    <div v-if="menuOpen"
      class="z-40 fixed inset-0 flex flex-col justify-center items-center space-y-6 bg-[#011a1acc] font-semibold text-[#D3A84A] text-2xl"
      :class="{ 'opacity-1': menuOpen }"
      @mouseenter="lockScroll" @mouseleave="unlockScroll">

      <!-- Menu Items -->
      <ul
        class="flex flex-col gap-10 mx-auto px-4 pt-[5vh] w-full max-w-[1200px] font-medium text-primary text-3xl text-center">
        <li><a class="hover:text-white" href="#home" @click="closeMenu">TRANG CHỦ</a></li>
        <li><a class="hover:text-white" href="#overview" @click="closeMenu">TỔNG QUAN</a></li>
        <li><a class="hover:text-white" href="#location" @click="closeMenu">VỊ TRÍ</a></li>
        <li><a class="hover:text-white" href="#features" @click="closeMenu">ĐẶC ĐIỂM</a></li>
        <li><a class="hover:text-white" href="#leasing" @click="closeMenu">CHO THUÊ</a></li>
        <li><a class="hover:text-white" href="#gallery" @click="closeMenu">ẢNH</a></li>
        <li><a class="hover:text-white" href="#news" @click="closeMenu">TIN TỨC</a></li>
      </ul>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

// Dùng Vue logo tạm từ CDN
const logo = 'https://admin.themarc88.com.vn/assets/1fb457f8-7ed7-41ce-8684-e8683bd856a9';

const isHidden = ref(false);
const lastScroll = ref(0);
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
const lockScroll = () => {
  document.body.classList.add('overflow-hidden');
};
const unlockScroll = () => {
  document.body.classList.remove('overflow-hidden');
};

const handleScroll = () => {
  const current = window.scrollY;  
  isHidden.value = current > lastScroll.value && current > 30;
  lastScroll.value = current;
};

watch(menuOpen, (isOpen) => {
  document.body.classList.toggle('overflow-hidden', isOpen)
})


onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
