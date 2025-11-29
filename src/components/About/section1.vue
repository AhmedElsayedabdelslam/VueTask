<template>
  <section class="hero-section" :class="{ 'dark-mode': isDarkMode }">
    <div
      class="background-image"
      :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }"
    >
      <div class="overlay"></div>
    </div>
    <div class="content">
      <div
        class="inner-image-wrapper"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <img :src="innerImageUrl" alt="Inner" class="inner-image" />
        <div class="white-overlay"></div>
        <div
          class="inner-text"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <h1 class="headline">
            Make your own <span class="highlight">way</span>
          </h1>
          <p class="subtext">Turn your ideas into reality quickly and easily.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { useThemeStore } from "../../store/themeStore";

const themeStore = useThemeStore();
const isDarkMode = ref(themeStore.theme === "dark");

const backgroundUrl = ref(
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
);
const innerImageUrl = ref(
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80"
);

onMounted(() => {
  AOS.init({
    once: true,
    easing: "ease-out-cubic",
    offset: 100,
  });
});
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.4);
}

.dark-mode .overlay {
  background-color: rgba(0, 0, 0, 0.5);
}

.content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inner-image-wrapper {
  width: 700px;
  height: 500px;
  position: relative;
  margin-bottom: 20px;
}

.inner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
  z-index: 1;
}

.white-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(255,255,255,0.4);
  border-radius: 16px;
  z-index: 2;
}

.dark-mode .white-overlay {
  background-color: rgba(0,0,0,0.5);
}

.inner-text {
  color: #333;
  text-align: center;
  padding: 20px;
  position: absolute;
  z-index: 100;
  top: 30%;
  left: 14%;
}

.dark-mode .inner-text {
  color: #fff;
}

.headline {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
}

.highlight {
  color: #00d4aa;
}

.subtext {
  font-size: 1.2rem;
  margin-top: 12px;
  color: inherit;
}

@media (max-width: 1024px) {
  .inner-image-wrapper {
    width: 500px;
    height: 400px;
  }
  .headline {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .inner-image-wrapper {
    width: 400px;
    height: 300px;
  }
  .headline {
    font-size: 2rem;
  }
  .subtext {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .inner-image-wrapper {
    width: 300px;
    height: 200px;
  }
  .headline {
    font-size: 1.6rem;
  }
  .subtext {
    font-size: 0.9rem;
  }
}
</style>