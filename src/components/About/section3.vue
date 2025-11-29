<template>
  <section class="image-gallery-section" :class="{ 'dark-mode': isDarkMode }">
    <div class="container">
      <h2 class="section-title">Our Gallery</h2>
      <div class="image-grid">
        <div 
          v-for="(image, index) in images" 
          :key="index" 
          class="grid-item"
          :style="{ gridColumn: image.cols }"
          data-aos="fade-right"
          :data-aos-delay="index * 150"
          data-aos-duration="1000"
        >
          <img :src="image.url" :alt="image.alt" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useThemeStore } from "../../store/themeStore";

const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.theme === "dark");

const images = ref([
  { url: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=700&q=80', alt: 'Team working', cols: 'span 2' },
  { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80', alt: 'Cat in a jacket', cols: 'span 1' },
  { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=650&q=80', alt: 'Outdoor meeting', cols: 'span 1' },
  
  { url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80', alt: 'Punch today quote', cols: 'span 1' },
//   { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=750&q=80', alt: 'Typewriter', cols: 'span 2' },
  { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80', alt: 'Office team', cols: 'span 1' }
]);

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true
  });
});
</script>

<style scoped>
.image-gallery-section {
  padding: 80px 20px;
  background-color: #f9f9f9;
  transition: background 0.3s, color 0.3s;
}

.dark-mode {
  background-color: #111;
  color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 50px;
  color: inherit;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-auto-rows: 200px; 
  grid-auto-flow: dense;
  gap: 20px;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  display: block;
}

@media (max-width: 1024px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: 1fr;
  }
}
</style>
