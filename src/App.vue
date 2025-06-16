<template>
  <div>
    <ScrollSection
      title="The Marc 88: Mở Cửa Tương Lai"
      description="Khám phá không gian sống hiện đại, đẳng cấp ngay trung tâm thành phố."
      backgroundImage="#3498db" />
    <ScrollSection
      title="Vị Trí Vàng, Kết Nối Đa Chiều"
      description="Dễ dàng tiếp cận mọi tiện ích và trung tâm giải trí hàng đầu."
      backgroundImage="#2ecc71" />
    <ScrollSection
      title="Tiện Nghi Hoàn Hảo"
      description="Hồ bơi vô cực, phòng gym, và vườn treo độc đáo dành riêng cho cư dân."
      backgroundImage="#e74c3c" />
    <ScrollSection
      title="Thiết Kế Tinh Hoa"
      description="Mỗi căn hộ là một kiệt tác kiến trúc, tối ưu hóa không gian và ánh sáng."
      backgroundImage="#f39c12" />
  </div>
</template>

<script>
import { onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSection from './components/ScrollSection.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  components: { ScrollSection },
  setup() {
    onMounted(async () => {
      await nextTick();

      const sections = document.querySelectorAll('.section');

      sections.forEach((section, i) => {
        const bg = section.querySelector('.background');
        const contentItems = section.querySelectorAll('.content-item');

        // Tạo timeline cho mỗi section
        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top', // Khi section chạm đỉnh viewport
            // end: 'bottom top' (mặc định cho pin nếu không có end cụ thể)
            end: '+=100%', // Kéo dài thời gian ghim bằng 100% chiều cao của section
                           // Đảm bảo đủ thời gian cho các animation trong timeline
            scrub: 1,      // Đồng bộ animation với cuộn chuột
            pin: true,     // Ghim section hiện tại
            pinSpacing: false, // Rất quan trọng: cho phép section tiếp theo đè lên
            // markers: true, // Bật để debug (hãy tắt khi hoàn thành)
          },
        });

        // ==========================================================
        // KHỞI TẠO TRẠNG THÁI BAN ĐẦU (SET): Đặt background ở dưới cùng, nội dung ẩn
        gsap.set(bg, { y: '100%' }); // Background bắt đầu từ dưới cùng của section
        gsap.set(contentItems, { opacity: 0, y: 50 }); // Nội dung ẩn và trượt xuống

        // ==========================================================
        // PHA 1: BACKGROUND HIỆN RA (TRƯỢT TỪ DƯỚI LÊN)
        mainTl.to(bg, {
          y: '0%', // Trượt lên đầy đủ để lấp đầy viewport
          ease: 'power2.out',
          duration: 1 // Thời gian animation của background
        }, 0); // Bắt đầu ngay từ đầu timeline

        // ==========================================================
        // PHA 2: ITEM CON HIỆN DẦN (SAU KHI BACKGROUND ĐÃ HIỆN XONG HOẶC GẦN XONG)
        mainTl.to(contentItems, {
          opacity: 1,
          y: 0,
          stagger: 0.15, // Hiển thị từng item một cách tuần tự
          ease: 'power2.out',
          duration: 0.8
        }, ">0.3"); // Bắt đầu 0.3 giây sau khi animation của background kết thúc

        // ==========================================================
        // PHA 3: KHI KẾT THÚC SECTION HIỆN TẠI VÀ CHUYỂN SANG SECTION TIẾP THEO
        // (Không cần animation biến mất rõ ràng cho section hiện tại nếu dùng pinSpacing: false)
        // Vì pinSpacing: false, section tiếp theo sẽ tự động đẩy section này lên.
        // Bạn có thể thêm animation biến mất nếu muốn hiệu ứng phức tạp hơn.
        // Ví dụ: làm mờ nội dung đi khi cuộn gần hết section
        mainTl.to(contentItems, {
          opacity: 0,
          y: -50, // Trượt nhẹ lên trên khi mờ đi
          stagger: 0.1,
          ease: 'power1.in',
          duration: 0.5
        }, ">1"); // Bắt đầu 1 giây sau khi contentItems đã hiện xong

        // Background cũng có thể mờ đi hoặc trượt lên/xuống khi nó bị đẩy ra
        mainTl.to(bg, {
            opacity: 0,
            y: '-50%', // Trượt lên một chút khi mờ đi
            ease: 'power1.in',
            duration: 0.7
        }, "<0.2"); // Bắt đầu hơi sớm hơn contentItems một chút
      });
    });
  },
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
  background-color: #f0f2f5;
}
</style>