<template>
  <section class="hero-section" :class="{ 'dark-mode': isDarkMode }" data-aos="fade-down">
    <div class="video-wrapper">
      <video loop muted playsinline class="video" controls>
        <source src="https://res.cloudinary.com/dese7wdok/video/upload/v1764417179/videoo_rqrfje.mp4" type="video/mp4">
      </video>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useThemeStore } from '../../store/themeStore'
import AOS from 'aos'
import 'aos/dist/aos.css'

const themeStore = useThemeStore()
const isDarkMode = computed(() => themeStore.theme === 'dark')

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  })
})
</script>

<style scoped>
.hero-section {
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  transition: background-color 0.3s ease;
  overflow: hidden;
}

.hero-section.dark-mode {
  background-color: #000000;
}

.video-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video {
  width: 60%;
  height: 100%;
  object-fit: cover;
  border: none;
  box-shadow: none;
}
</style>
