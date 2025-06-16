<template>
  <section class="section">
    <div class="background" :style="backgroundStyle"></div>
    <div class="content">
      <h1 class="content-item">{{ title }}</h1>
      <p class="content-item">{{ description }}</p>
      <button class="content-item cta-button">Xem chi tiết</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ScrollSection',
  props: {
    title: String,
    description: String,
    backgroundImage: String, // Giờ sẽ nhận màu sắc trực tiếp (ví dụ: "blue", "#FF5733")
  },
  computed: {
    backgroundStyle() {
      // Chỉ dùng backgroundColor vì bạn muốn hiệu ứng màu nền
      return {
        backgroundColor: this.backgroundImage
      };
    }
  }
};
</script>

<style scoped>
.section {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden; /* Quan trọng để ẩn phần background bị trượt ra ngoài */
  display: flex;
  align-items: center;
  justify-content: center;
}

.background {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 1; /* Background dưới nội dung */
  will-change: transform; /* Tối ưu hiệu suất cho thuộc tính transform */
  /* Không đặt y hay opacity ở đây, sẽ do GSAP quản lý hoàn toàn */
}

.content {
  position: relative;
  z-index: 2; /* Nội dung trên background */
  color: white;
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  max-width: 80%;
}

.content-item {
  opacity: 0; /* Ban đầu ẩn */
  transform: translateY(50px); /* Ban đầu trượt xuống */
  will-change: opacity, transform;
  margin-bottom: 1rem;
}

.content-item:last-child {
    margin-bottom: 0;
}

h1.content-item {
    font-size: 3em;
    margin-top: 0;
}

p.content-item {
    font-size: 1.2em;
    line-height: 1.5;
}

.cta-button {
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.cta-button:hover {
  background-color: #2980b9;
  transform: translateY(-3px);
}
</style>