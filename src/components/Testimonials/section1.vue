<template>
  <section class="hero-section" :class="{ 'dark-mode': isDarkMode }">
    <div class="hero-background">
      <img 
        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
        alt="Team Collaboration" 
        class="background-image"
      >
      <div class="blur-overlay"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        
        <div class="text-content">
          <h1 class="hero-title">
            <span class="title-line line-1">Smart teams trust Appy</span>
            <span class="title-line line-2">to build killer websites</span>
          </h1>
          <p class="hero-subtitle">
            Our customers are building some of the world's most original, useful and loved products.
          </p>
          <button class="request-code-btn">
            Request Booking
          </button>
        </div>

        <div class="partners-section">
          <p class="partners-label">Our trusted partners</p>
          <div class="partners-grid">
            <div class="partner-logo" v-for="(partner, index) in partners" :key="partner.name" :data-aos="getPartnerAnimation(index)">
              <img :src="partner.logo" :alt="partner.name">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const partners = ref([
  { name: 'Facebook', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/facebook.svg' },
  { name: 'Tinder', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/tinder.svg' },
  { name: 'Airbnb', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/airbnb.svg' },
  { name: 'HubSpot', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/hubspot.svg' },
  { name: 'Google', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/google.svg' },
  { name: 'Microsoft', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/hubspot.svg' },
  { name: 'Amazon', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/amazon.svg' },
  { name: 'Instagram', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/instagram.svg' }
])
import { useThemeStore } from '../../store/themeStore'

const themeStore = useThemeStore()
const isDarkMode = computed(() => themeStore.theme === 'dark')
const getPartnerAnimation = (index) => {
  const animations = ['fade-right', 'fade-up-right', 'fade-down-right', 'zoom-in-right', 'flip-right', 'slide-right']
  return animations[index % animations.length]
}

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out-cubic',
    once: true,
    offset: 100
  })
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0 80px;
  transition: all 0.3s ease;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.hero-section:not(.dark-mode) .background-image {
  filter: brightness(1);
}

.hero-section:not(.dark-mode) .blur-overlay {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(25px);
}

.hero-section:not(.dark-mode) .hero-title {
  color: #000000;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.hero-section:not(.dark-mode) .hero-subtitle {
  color: #333333;
}

.hero-section:not(.dark-mode) .partners-label {
  color: #666666;
}
.hero-section:not(.dark-mode) .partner-logo {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.hero-section:not(.dark-mode) .partner-logo img {
  filter: brightness(0);
  opacity: 0.8;
}

.hero-section:not(.dark-mode) .partner-logo:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.hero-section:not(.dark-mode) .partner-logo:hover img {
  opacity: 1;
}

.hero-section.dark-mode .background-image {
  filter: brightness(0.6);
}

.hero-section.dark-mode .blur-overlay {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(30px);
}

.hero-section.dark-mode .hero-title {
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero-section.dark-mode .hero-subtitle {
  color: #e0e0e0;
}

.hero-section.dark-mode .partners-label {
  color: #b0b0b0;
}

.hero-section.dark-mode .partner-logo {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(15px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.hero-section.dark-mode .partner-logo img {
  filter: brightness(0) invert(1);
  opacity: 0.9;
}

.hero-section.dark-mode .partner-logo:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.hero-section.dark-mode .partner-logo:hover img {
  opacity: 1;
}

.blur-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 80px;
}

.text-content {
  max-width: 800px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.title-line {
  display: block;
  opacity: 0;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.line-1 {
  animation-name: slideDown;
  animation-delay: 0.5s;
}

.line-2 {
  animation-name: slideDown;
  animation-delay: 1.2s;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  opacity: 0;
  animation: fadeInUp 1s ease 1.8s forwards;
  transition: all 0.3s ease;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
  from {
    opacity: 0;
    transform: translateY(20px);
  }
}

.request-code-btn {
  background: linear-gradient(135deg, #06b6d4, #14b8a6);
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
  opacity: 0;
  animation: fadeInUp 1s ease 2.2s forwards;
}

.request-code-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);
}

.partners-section {
  width: 100%;
  max-width: 900px;
  opacity: 0;
  animation: fadeInUp 1s ease 2.5s forwards;
}

.partners-label {
  font-size: 1rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  align-items: center;
}

.partner-logo {
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid;
}

.partner-logo img {
  width: 40px;
  height: 40px;
  transition: opacity 0.3s ease;
}

[data-aos="fade-right"] {
  transform: translateX(100px);
  opacity: 0;
  transition: all 0.8s ease;
}

[data-aos="fade-right"].aos-animate {
  transform: translateX(0);
  opacity: 1;
}

[data-aos="fade-up-right"] {
  transform: translate(100px, 100px);
  opacity: 0;
  transition: all 0.8s ease;
}

[data-aos="fade-up-right"].aos-animate {
  transform: translate(0, 0);
  opacity: 1;
}

[data-aos="fade-down-right"] {
  transform: translate(100px, -100px);
  opacity: 0;
  transition: all 0.8s ease;
}

[data-aos="fade-down-right"].aos-animate {
  transform: translate(0, 0);
  opacity: 1;
}

[data-aos="zoom-in-right"] {
  transform: translateX(100px) scale(0.5);
  opacity: 0;
  transition: all 0.8s ease;
}

[data-aos="zoom-in-right"].aos-animate {
  transform: translateX(0) scale(1);
  opacity: 1;
}

[data-aos="flip-right"] {
  transform: translateX(100px) rotateY(90deg);
  opacity: 0;
  transition: all 0.8s ease;
}

[data-aos="flip-right"].aos-animate {
  transform: translateX(0) rotateY(0);
  opacity: 1;
}

[data-aos="slide-right"] {
  transform: translateX(200px);
  opacity: 0;
  transition: all 0.8s ease;
}

[data-aos="slide-right"].aos-animate {
  transform: translateX(0);
  opacity: 1;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 100px 0 60px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .partner-logo {
    padding: 15px;
  }

  .partner-logo img {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .request-code-btn {
    padding: 12px 30px;
    font-size: 1rem;
  }

  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}
</style>