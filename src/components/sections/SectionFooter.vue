<template>
  <footer ref="footerRef" class="bg-[#011A1A] px-4 py-10 border-[white] border-t border-solid text-[white]">
    <div class="flex md:flex-row flex-col items-center gap-8 mx-auto container">
      <!-- Logo -->
      <div class="mb-4 p-5 w-[300px]">
        <img src="@/assets/logo.svg" alt="">
      </div>
      <div class="flex flex-col flex-1 w-full">
        <div class="flex md:flex-row flex-col pt-4">
          <!-- Địa chỉ -->
          <div class="flex flex-col flex-1 text-left">
            <h3 class="mb-2 mb-3 font-semibold text-[white] text-lg">Địa chỉ:</h3>
            <div class="flex items-start mt-2">
              <div class="mr-4 w-5">
                <svg width="25" height="23" viewBox="0 0 14 19" fill="none" class="block"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.8125 7C9.8125 8.58203 8.54688 9.8125 7 9.8125C5.41797 9.8125 4.1875 8.58203 4.1875 7C4.1875 5.45312 5.41797 4.1875 7 4.1875C8.54688 4.1875 9.8125 5.45312 9.8125 7ZM7 8.6875C7.91406 8.6875 8.6875 7.94922 8.6875 7C8.6875 6.08594 7.91406 5.3125 7 5.3125C6.05078 5.3125 5.3125 6.08594 5.3125 7C5.3125 7.94922 6.05078 8.6875 7 8.6875ZM13.75 7C13.75 10.0938 9.63672 15.543 7.80859 17.8281C7.38672 18.3555 6.57812 18.3555 6.15625 17.8281C4.32812 15.543 0.25 10.0938 0.25 7C0.25 3.27344 3.23828 0.25 7 0.25C10.7266 0.25 13.75 3.27344 13.75 7ZM7 1.375C3.87109 1.375 1.375 3.90625 1.375 7C1.375 7.5625 1.55078 8.30078 1.9375 9.25C2.32422 10.1641 2.85156 11.1484 3.48438 12.1328C4.67969 14.0664 6.08594 15.9297 7 17.0547C7.87891 15.9297 9.28516 14.0664 10.4805 12.1328C11.1133 11.1484 11.6406 10.1641 12.0273 9.25C12.4141 8.30078 12.625 7.5625 12.625 7C12.625 3.90625 10.0938 1.375 7 1.375Z"
                    fill="#C6A456"></path>
                </svg>
              </div>
              <div class="flex flex-col text-left">
                <p class="mb-1">Số 88, đường Trần Thái</p>
                <p class="mb-1">Tầng, Phường Dịch Vọng Hậu</p>
                <p class="mb-1">Quận Cầu Giấy, Hà Nội</p>
              </div>
            </div>
            <div class="flex items-start mt-4">
              <div class="mt-1 mr-4 w-5"><svg width="25" height="15" viewBox="0 0 18 14" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 2.75C0 1.51953 0.984375 0.5 2.25 0.5H15.75C16.9805 0.5 18 1.51953 18 2.75V11.75C18 13.0156 16.9805 14 15.75 14H2.25C0.984375 14 0 13.0156 0 11.75V2.75ZM1.125 2.75V4.15625L7.98047 9.21875C8.57812 9.64062 9.38672 9.64062 9.98438 9.21875L16.875 4.15625V2.75C16.875 2.15234 16.3477 1.625 15.75 1.625H2.21484C1.61719 1.625 1.08984 2.15234 1.08984 2.75H1.125ZM1.125 5.5625V11.75C1.125 12.3828 1.61719 12.875 2.25 12.875H15.75C16.3477 12.875 16.875 12.3828 16.875 11.75V5.5625L10.6523 10.1328C9.66797 10.8359 8.29688 10.8359 7.3125 10.1328L1.125 5.5625Z"
                    fill="#C6A456"></path>
                </svg></div>
              <p class="mb-1"><a href="mailto:themarc88hanoi@gmail.com"
                  class="hover:text-white underline">themarc88hanoi@gmail.com</a></p>
            </div>
          </div>
          <div class="flex flex-[2] my-10 md:my-0">
            <!-- Đơn vị chủ đầu & Hotline -->
            <div class="flex-1 text-left">
              <h3 class="mb-2 mb-3 font-semibold text-[white] text-lg">Đơn vị cho thuê:</h3>
              <img src="@/assets/savills.svg" alt="Savills Logo" class="mr-2 w-[80px]" />
              <h3 class="mt-3 mb-2 font-semibold text-[white] text-lg">Hotline:</h3>
              <div class="text-white"><a href="tel:0948 000 468"
                  class="flex items-center gap-4 text-white hover:text-secondary transition"><svg width="25" height="20"
                    viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 7.6875C11.5469 7.6875 12.8125 8.95312 12.8125 10.5C12.8125 12.082 11.5469 13.3125 10 13.3125C8.41797 13.3125 7.1875 12.082 7.1875 10.5C7.1875 8.95312 8.41797 7.6875 10 7.6875ZM10 12.1875C10.9141 12.1875 11.6875 11.4492 11.6875 10.5C11.6875 9.58594 10.9141 8.8125 10 8.8125C9.05078 8.8125 8.3125 9.58594 8.3125 10.5C8.3125 11.4492 9.05078 12.1875 10 12.1875ZM18.5781 3.43359C18.8242 3.64453 19 3.96094 18.9648 4.3125V6.5625C18.9648 6.87891 18.6836 7.125 18.4023 7.125H16.1875C15.8711 7.125 15.625 6.87891 15.625 6.5625C15.625 6.28125 15.8711 6 16.1875 6H17.8398V4.3125C15.625 2.51953 12.8477 1.53516 10 1.5C7.11719 1.53516 4.33984 2.51953 2.08984 4.3125L2.125 6H3.8125C4.09375 6 4.375 6.28125 4.375 6.5625C4.375 6.87891 4.09375 7.125 3.8125 7.125H1.5625C1.24609 7.125 1 6.87891 1 6.5625V4.3125C0.964844 3.96094 1.14062 3.64453 1.38672 3.43359C3.8125 1.5 6.87109 0.375 10 0.375C13.0938 0.375 16.1523 1.5 18.5781 3.43359ZM14.0078 6.03516L17.5234 12.2578C17.7344 12.5742 17.8398 12.9609 17.8398 13.3828V13.875C17.8398 15.1406 16.8203 16.125 15.5898 16.125H4.33984C3.10938 16.125 2.08984 15.1406 2.08984 13.875V13.3828C2.08984 12.9609 2.19531 12.6094 2.40625 12.2578L5.95703 6.03516C6.34375 5.36719 7.01172 4.98047 7.75 4.91016C7.75 4.91016 7.75 4.91016 7.75 4.875V3.75C7.75 3.46875 7.99609 3.1875 8.3125 3.1875C8.59375 3.1875 8.875 3.46875 8.875 3.75V4.875H11.125V3.75C11.125 3.46875 11.3711 3.1875 11.6875 3.1875C11.9688 3.1875 12.25 3.46875 12.25 3.75V4.875C12.25 4.91016 12.2148 4.91016 12.2148 4.91016C12.9531 4.98047 13.6211 5.36719 14.0078 6.03516ZM16.7148 13.875H16.75V13.3477C16.75 13.1719 16.6797 12.9609 16.5742 12.8203L13.0234 6.59766C12.8125 6.24609 12.4609 6 12.0391 6H7.92578C7.50391 6 7.15234 6.24609 6.94141 6.63281L3.39062 12.8203C3.28516 12.9609 3.25 13.1719 3.25 13.3477V13.875C3.25 14.5078 3.74219 15 4.375 15H15.5898C16.1875 15 16.7148 14.5078 16.7148 13.875Z"
                      fill="#C6A456"></path>
                  </svg><span>0948 000 468</span></a></div>
            </div>

            <!-- Trang chủ -->
            <div class="flex flex-col flex-1 pl-12 md:pl-0 text-left">
              <a href="" class="hover:opacity-80 mb-1">Trang chủ</a>
              <a href="" class="hover:opacity-80 mb-1">Tổng quan</a>
              <a href="" class="hover:opacity-80 mb-1">Vị trí</a>
              <a href="" class="hover:opacity-80 mb-1">Dự án</a>
              <a href="" class="hover:opacity-80 mb-1">Chủ đầu tư</a>
              <a href="" class="hover:opacity-80 mb-1">Ảnh</a>
              <a href="" class="hover:opacity-80 mb-1">Tin tức</a>
              <a href="" class="hover:opacity-80 mb-1">Tải brochure</a>
              <a href="" class="hover:opacity-80 mb-1">Tải tờ rơi</a>
            </div>
          </div>

        </div>
        <div class="mt-2 mb-6">
          <button
            class="hover:bg-[#a68f44] px-6 py-2 border border-[#c6a456] border-solid rounded rounded-[68px] w-fit text-white text-xl uppercase transition duration-300 cursor-pointer btn-contact">Liên
            hệ tư vấn cho thuê
          </button>
        </div>
        <div class="flex md:flex-row flex-col-reverse justify-between pb-4 border-t">
          <div class="mt-6 text-[#6B7280] text-sm text-center">Copyright ©2023 TheMarc88. All rights reserved.
          </div>
          <!-- Social Icons -->
          <div class="flex justify-center md:justify-start items-center gap-4 mt-6">
            <a href="#" class="hover:opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50">
                <path fill="#C2B59B" stroke="#C2B59B"
                  d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z">
                </path>
              </svg>
            </a>
            <a href="#" class="hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                viewBox="0 0 48 48">
                <path fill="#C2B59B"
                  d="M8.421,14h0.052l0,0C11.263,14,13,12,13,9.5C12.948,6.945,11.263,5,8.526,5S4,6.945,4,9.5 C4,12,5.736,14,8.421,14z M4,17h9v26H4V17z M44,26.5c0-5.247-4.253-9.5-9.5-9.5c-3.053,0-5.762,1.446-7.5,3.684V17h-9v26h9V28l0,0 c0-2.209,1.791-4,4-4s4,1.791,4,4v15h9C44,43,44,27.955,44,26.5z">
                </path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const footerRef = ref(null);

onMounted(() => {
  // Animation cho toàn bộ footer
  gsap.from(footerRef.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: footerRef.value,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animation cho các cột
  const columns = footerRef.value.querySelectorAll('.text-left');
  gsap.from(columns, {
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: footerRef.value,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animation cho nút liên hệ
  const button = footerRef.value.querySelector('.btn-contact');
  gsap.from(button, {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: footerRef.value,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animation cho social icons
  const socialIcons = footerRef.value.querySelectorAll('.flex a');
  gsap.from(socialIcons, {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: footerRef.value,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none reverse'
    }
  });
});
</script>

<style scoped>
/* Thêm style bổ sung nếu cần, Tailwind đã đủ cho phần lớn */
</style>