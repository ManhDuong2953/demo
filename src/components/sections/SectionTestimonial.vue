<template>
  <section
    id="leasing"
    ref="sectionRef6"
    class="bg-[#D9D9D9] text-black section"
  >
    <div ref="bgRef6" class="bg-[#D9D9D9] background"></div>

    <div
      ref="contentRef6"
      class="relative flex justify-center items-center w-screen text-center content-wrapper"
    >
      <div class="flex flex-col justify-center items-center mx-auto container">
        <div class="flex justify-center items-center w-full md:h-[80vh]">
          <div class="flex md:flex-row flex-col justify-between w-full">
            <!-- Hình ảnh mặt cắt tòa nhà -->
            <div class="md:w-1/2 h-[50vh]" ref="imageMainTestimonialRef">
              <img
                src="@/assets/floor-plan-vi.png"
                alt="Building Floor Plan"
                class="m-auto h-full md:h-[80vh] md:max-h-[80vh] object-contain"
              />
            </div>
            <!-- Thông tin kỹ thuật -->
            <div
              class="flex flex-col justify-between px-6 md:px-0 py-6 md:py-12 md:w-1/2"
            >
              <h3
                ref="titleRef"
                class="hidden md:block mb-10 pt-12 w-full font-bold text-4xl text-end"
              >
                <span class="text-[#C6A456]">THÔNG SỐ KỸ THUẬT</span> NỔI BẬT
              </h3>
              <div class="w-full">
                <table class="text-left" ref="tableTestimonialRefs">
                  <thead>
                    <tr>
                      <th class="pr-4 text-lg">Tầng</th>
                      <th class="text-lg">Diện tích</th>
                      <th class="pl-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in texts"
                      :key="index"
                      class="cursor-pointer hover:bg-[#C2B59B]"
                      @click="openModal(item.image)"
                    >
                      <td class="pr-4 text-md">{{ item.floor }}</td>
                      <td class="text-md">{{ item.area }}</td>
                      <td class="pl-4">
                        <button class="hover:text-[#C6A456]">
                          <svg
                            class="w-6 h-6 text-[#C6A456]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            ></path>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!-- Nút tải -->
                <div
                  class="flex space-x-4 mt-8 w-full"
                  ref="buttonTestimonialRefs"
                >
                  <button
                    class="flex-1 bg-[#C6A456] px-6 py-2 rounded-full text-white"
                  >
                    TẢI BROCHURE
                  </button>
                  <button
                    class="flex-1 bg-[#C6A456] px-6 py-2 rounded-full text-white"
                  >
                    TẢI TỜ RƠI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      @click.stop="closeModal"
      class="z-[1000] fixed inset-0 flex justify-center items-center bg-[#0000007a]"
    >
      <div class="bg-white p-4 rounded-lg w-full max-w-3xl modal-content">
        <div class="flex justify-end">
          <button
            @click="closeModal"
            class="text-black hover:text-red-500 text-2xl cursor-pointer"
          >
            ×
          </button>
        </div>
        <img
          :src="modalImage"
          alt="Floor Plan"
          class="w-full h-auto max-h-[80vh] object-contain"
        />
        <p class="mt-2 italic">
          *Số liệu diện tích sàn gộp và sàn thuần là ước tính và có thể thay đổi
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import floorV1 from "@/assets/floorplan-f1-vi.png";
import floorV2 from "@/assets/floorplan-f2-vi.png";
import floorV3 from "@/assets/floorplan-f3-vi.png";
import floorV0615 from "@/assets/floorplan-f6-15-vi.png";
import floorV10 from "@/assets/floorplan-f10-vi.png";
import floorPlan from "@/assets/floor-plan-vi.png";
import floorPlan26 from "@/assets/floorplan-f26-vi.png";
import floorPlan27 from "@/assets/floorplan-f27-vi.png";

gsap.registerPlugin(ScrollTrigger);

const sectionRef6 = ref(null);
const bgRef6 = ref(null);
const contentRef6 = ref(null);
const imageMainTestimonialRef = ref(null);
const titleRef = ref(null);
const tableTestimonialRefs = ref(null);
const buttonTestimonialRefs = ref(null);
const showModal = ref(false);
const modalImage = ref("");

const texts = [
  { floor: "Tầng 1", area: "383m²", image: floorV1 },
  { floor: "Tầng 2", area: "368m²", image: floorV2 },
  { floor: "Tầng 3", area: "577m²", image: floorV3 },
  { floor: "Tầng 06 & 15", area: "532m²", image: floorV0615 },
  { floor: "Tầng 10", area: "532m²", image: floorV10 },
  { floor: "Tầng điển hình", area: "623m²", image: floorPlan },
  { floor: "Tầng 26", area: "532m²", image: floorPlan26 },
  { floor: "Tầng 27", area: "532m²", image: floorPlan27 },
];
const openModal = (image) => {
  modalImage.value = image;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  modalImage.value = "";
};

onMounted(() => {
  gsap.set(bgRef6.value, { y: "100%" });
  gsap.set(imageMainTestimonialRef.value, { y: 300, opacity: 0 });
  gsap.set(titleRef.value, { x: 300, opacity: 0 });
  gsap.set(buttonTestimonialRefs.value, { opacity: 0, x: 300 });
  gsap.set(tableTestimonialRefs.value, { x: 300, opacity: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef6.value,
      start: "top top",
      end: "+=3000",
      scrub: 1,
      pin: true,
    },
  });

  tl.to(bgRef6.value, { y: 0, duration: 1 });
  tl.to(imageMainTestimonialRef.value, {
    y: 0,
    opacity: 1,
    duration: 2,
    ease: "power2.out",
  });
  tl.to(titleRef.value, { x: 0, opacity: 1, duration: 1 });
  tl.to(tableTestimonialRefs.value, { x: 0, opacity: 1, duration: 0.5 })
    .to(buttonTestimonialRefs.value, { x: 0, opacity: 1, duration: 1 })
    .to(buttonTestimonialRefs.value, { duration: 2 });

  // Modal animation
  gsap.set(".modal-content", { scale: 0.8, opacity: 0 });
  watch(showModal, (newVal) => {
    if (newVal) {
      gsap.to(".modal-content", {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(".modal-content", {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  });
});
</script>

<style scoped>
.section {
  position: relative;
}

.background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.content-wrapper {
  will-change: transform;
}

table {
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  padding: 8px;
  border-bottom: 1px solid #c2b59b;
}

tbody tr:hover {
  background-color: #c2b59b;
}

th {
  color: #c6a456;
}
</style>
