<template>
  <section class="hero-section" :class="{ 'dark-mode': isDarkMode }">
    <div class="container">
      <div class="header-section">
        <h1 class="main-title">From rough design files, to</h1>
        <h1 style="margin-top: -30px" class="main-title">powerful products</h1>
        <p class="subtitle">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
        </p>
      </div>
      <div class="carousel-wrapper">
        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${currentIndex * 33.333}%)` }"
          @mouseenter="stopAutoPlay"
          @mouseleave="startAutoPlay"
        >
          <div
            v-for="(slide, index) in extendedSlides"
            :key="index"
            class="carousel-item"
            :class="{
              active: index === currentIndex + 1,
              prev: index === currentIndex,
              next: index === currentIndex + 2,
            }"
          >
            <div class="image-wrapper">
              <img :src="slide.img" :alt="slide.alt" class="slide-image" />
              <div v-if="index === currentIndex + 1" class="slide-overlay">
                <h3 class="slide-title">{{ slide.title }}</h3>
                <p class="slide-desc">{{ slide.desc }}</p>
                <a href="#0" class="learn-more-btn">Learn more</a>
                <div class="category-badge">
                  <a href="#0">Creative Services</a>
                </div>
              </div>
              <div v-else class="inactive-overlay"></div>
            </div>
          </div>
        </div>
        <button class="nav-arrow prev" @click="prevSlide">
          <svg viewBox="0 0 16 16">
            <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
          </svg>
        </button>
        <button class="nav-arrow next" @click="nextSlide">
          <svg viewBox="0 0 16 16">
            <path
              d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z"
            />
          </svg>
        </button>

        <div class="carousel-dots">
          <span
            v-for="(slide, index) in baseSlides"
            :key="index"
            :class="{ active: currentIndex === index }"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

import { useThemeStore } from "../../store/themeStore";
const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.theme === "dark");
const baseSlides = ref([
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop",
    alt: "Lora Smith",
    title: "It's Lora Smith",
    desc: "",
  },
  {
    img: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=600&fit=crop",
    alt: "Mark Miller",
    title: "Mark Miller",
    desc: "New York-based digital artist.",
  },
  {
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
    alt: "Acme Studio",
    title: "Acme-Studio.",
    desc: "",
  },
  {
    img: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=600&fit=crop",
    alt: "Creative tools",
    title: "Creative Tools",
    desc: "",
  },
  {
    img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&h=600&fit=crop",
    alt: "Project showcase",
    title: "Project Showcase",
    desc: "",
  },
]);

const extendedSlides = computed(() => [
  baseSlides.value[baseSlides.value.length - 1],
  ...baseSlides.value,
  baseSlides.value[0],
]);

const currentIndex = ref(0);
let autoPlayInterval = null;
const totalSlides = baseSlides.value.length;

const nextSlide = () => {
  currentIndex.value++;
  if (currentIndex.value >= totalSlides) currentIndex.value = 0;
};

const prevSlide = () => {
  currentIndex.value--;
  if (currentIndex.value < 0) currentIndex.value = totalSlides - 1;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const startAutoPlay = () => {
  stopAutoPlay();
  autoPlayInterval = setInterval(nextSlide, 5000);
};
const stopAutoPlay = () => {
  if (autoPlayInterval) clearInterval(autoPlayInterval);
};

onMounted(() => startAutoPlay());
onUnmounted(() => stopAutoPlay());
</script>

<style scoped>
.hero-section {
  padding: 100px 20px;
  background: #fff;
  color: #000;
  transition: 0.3s;
}
.hero-section.dark-mode {
  background: #111;
  color: #fff;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.header-section {
  text-align: center;
  margin-bottom: 60px;
}
.main-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
.subtitle {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

.hero-section.dark-mode .subtitle {
  color: #ccc;
}

/* Carousel */
.carousel-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s ease;
  width: 100%;
}
.carousel-item {
  min-width: 33.333%;
  padding: 0 15px;
  transition: all 0.6s ease;
  transform: scale(0.8);
  opacity: 0.6;
  filter: grayscale(70%);
}
.carousel-item.active {
  transform: scale(1);
  opacity: 1;
  filter: grayscale(0%);
  z-index: 10;
}

.image-wrapper {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 520px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 40%, rgba(0, 0, 0, 0.8));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
  color: white;
}
.hero-section.dark-mode .slide-overlay {
  background: linear-gradient(transparent 40%, rgba(0, 0, 0, 0.9));
}

.slide-title {
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 12px;
  font-family: "Playfair Display", serif;
  letter-spacing: -1px;
}
.slide-desc {
  font-size: 1.1rem;
  margin-bottom: 20px;
  opacity: 0.9;
}

.learn-more-btn {
  display: inline-block;
  background: #00d4aa;
  color: white;
  padding: 12px 28px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  align-self: flex-start;
  transition: 0.3s;
}
.learn-more-btn:hover {
  background: #00b894;
  transform: translateY(-3px);
}

.category-badge a {
  color: #00d4aa;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
}

.inactive-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
}


.nav-arrow {
  position: absolute;
  top: 94%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  background: #00d4aa;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(0, 212, 170, 0.4);
  transition: 0.3s;
}
.nav-arrow:hover {
  background: #00b894;
  transform: translateY(-50%) scale(1.1);
}
.nav-arrow.prev {
  left: 30px;
}
.nav-arrow.next {
  right: 30px;
}
.nav-arrow svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 12px;
}
.carousel-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s;
}
.carousel-dots span.active {
  background: #00d4aa;
  transform: scale(1.3);
}
.hero-section.dark-mode .carousel-dots span {
  background: rgba(255, 255, 255, 0.3);
}
.hero-section.dark-mode .carousel-dots span.active {
  background: #00d4aa;
}

@media (max-width: 1024px) {
  .carousel-item {
    min-width: 50%;
  }
  .image-wrapper {
    height: 420px;
  }
  .slide-title {
    font-size: 2.2rem;
  }
}
@media (max-width: 768px) {
  .main-title {
    font-size: 2.5rem;
  }
  .carousel-item {
    min-width: 80%;
  }
  .image-wrapper {
    height: 380px;
  }
  .slide-title {
    font-size: 2rem;
  }
  .nav-arrow {
    width: 48px;
    height: 48px;
  }
  .nav-arrow.prev {
    left: 10px;
  }
  .nav-arrow.next {
    right: 10px;
  }
}
@media (max-width: 480px) {
  .carousel-item {
    min-width: 90%;
  }
  .slide-title {
    font-size: 1.8rem;
  }
  .slide-overlay {
    padding: 24px;
  }
}
</style>
