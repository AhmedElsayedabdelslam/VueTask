<template>
  <section class="features-wrapper" :class="{ 'dark-mode': isDarkMode }">
    <div class="container">
      <div class="content">
        <h1 class="title">Your website,<br /> reimagined</h1>

        <p class="subtitle">
          Our landing page template works on all devices, so you only have to set it up once,
          and get beautiful results forever.
        </p>

        <div class="cta-row">
          <input type="text" placeholder="Phone number" class="phone-input" />
          <button class="request-btn">Request</button>
        </div>

        <ul class="feature-list">
          <li class="feature-item" style="animation-delay: 0s;">
            <span class="check">✔</span>
            Lorem ipsum is placeholder text commonly.
          </li>

          <li class="feature-item" style="animation-delay: 0.2s;">
            <span class="check">✔</span>
            Excepteur sint occaecat cupidatat.
          </li>

          <li class="feature-item" style="animation-delay: 0.4s;">
            <span class="check">✔</span>
            Lorem ipsum is placeholder text commonly.
          </li>
        </ul>
      </div>

      <div class="image-box">
        <img style="height: 500px;" src="/image/image1.jpg" alt="Preview" />
      </div>

    </div>
  </section>

  <section class="stats-wrapper" :class="{ 'dark-mode': isDarkMode }">
    <div class="stats-container" data-aos="fade-right" data-aos-duration="800">
      <div class="stat-box">
        <h2>2.4M</h2>
        <p>Days turn around</p>
      </div>
      <div class="stat-box">
        <h2>7M</h2>
        <p>Days turn around</p>
      </div>
      <div class="stat-box">
        <h2>7.4%</h2>
        <p>Days turn around</p>
      </div>
      <div class="stat-box">
        <h2>49K</h2>
        <p>Days turn around</p>
      </div>
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
  AOS.init()
})
</script>

<style scoped>
.features-wrapper {
  padding: 120px 20px;
  font-family: Inter, sans-serif;
  transition: background 0.3s, color 0.3s;
  background: #f8f8f8;
  color: #111;
}

.features-wrapper.dark-mode {
  background: #111;
  color: #fff;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  gap: 60px;
}

.content {
  flex: 1;
  transform: translateX(-20px);
  opacity: 1;
}

.title {
  font-size: 64px;
  font-weight: 800;
  line-height: 1.1;
  color: inherit;
}

.subtitle {
  font-size: 18px;
  margin-top: 14px;
  max-width: 420px;
  color: inherit;
}

.cta-row {
  display: flex;
  gap: 10px;
  margin-top: 30px;
}

.phone-input {
  padding: 14px 18px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  flex: 1;
  background: inherit;
  color: inherit;
  transition: border 0.3s;
}

.phone-input::placeholder {
  color: #888;
}

.features-wrapper.dark-mode .phone-input::placeholder {
  color: #bbb;
}

.request-btn {
  background: #18bfa6;
  border: none;
  color: white;
  font-size: 16px;
  padding: 14px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
}

.request-btn:hover {
  opacity: 0.85;
}

.feature-list {
  margin-top: 40px;
  list-style: none;
  padding: 0;
}

.feature-item {
  display: flex;
  align-items: center;
  font-size: 17px;
  margin-bottom: 16px;
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeInDown 0.6s forwards;
  color: inherit;
}

.check {
  color: #18bfa6;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
}

.image-box {
  flex: 1;
  display: flex;
  justify-content: center;
  height: 400px;
}

.image-box img {
  width: 100%;
  max-width: 600px;
  border-radius: 20px;
  object-fit: cover;
}

@keyframes fadeInDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.stats-wrapper {
  padding: 40px 10px;
  background: #f8f8f8;
  transition: background 0.3s, color 0.3s;
}

.stats-wrapper.dark-mode {
  background: #111;
  color: #fff;
}

.stats-container {
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: auto;
  gap: 20px;
  flex-wrap: wrap;
}

.stat-box {
  background: #fff;
  color: #111;
  padding: 40px 20px;
  text-align: center;
  border-radius: 12px;
  flex: 1 1 200px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: background 0.3s, color 0.3s;
}

.stats-wrapper.dark-mode .stat-box {
  background: #222;
  color: #fff;
}

.stat-box h2 {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 10px;
}

.stat-box p {
  font-size: 16px;
  margin: 0;
  color: inherit;
}
</style>
