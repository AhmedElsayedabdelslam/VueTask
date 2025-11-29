<template>
  <div class="hero-section" :class="{ 'dark-mode': isDarkMode }">
    <div class="container">
      <h1 class="main-title">
        We help teams by delivering<br />
        <span>the perfect tools</span>
      </h1>

      <p class="subtitle">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt<br />
        mollit anim id est.
      </p>

      <div class="stats-grid">
        <div v-for="(stat, index) in stats" :key="index" class="stat-item">
          <div class="icon-circle" :class="stat.color">
            <svg viewBox="0 0 24 24" class="icon">
              <path v-for="(p, idx) in stat.paths" :key="idx" :d="p" />
            </svg>
          </div>
          <p class="stat-text">{{ stat.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useThemeStore } from "../../store/themeStore";

const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.theme === "dark");

const stats = ref([
  {
    color: "teal",
    paths: [
      "M12 14l9-5-9-5-9 5 9 5z",
      "M12 14l6.16-3.422A12.083 12.083 0 0112 21.5c-2.21 0-4.24-.76-5.84-2.022L12 14z"
    ],
    text: "Founded in 2017"
  },
  {
    color: "purple",
    paths: [
      "M12 14l9-5-9-5-9 5 9 5z",
      "M12 14l6.16-3.422a12.083 12.083 0 011.785 5.978c0 2.21-.76 4.24-2.022 5.84L12 14z"
    ],
    text: "$20M+ Achieved"
  },
  {
    color: "blue",
    paths: [
      "M17.657 6.343L12 12l-5.657-5.657-1.414 1.414L12 14.828l7.071-7.071-1.414-1.414z"
    ],
    text: "10,000+ Websites"
  },
  {
    color: "pink",
    paths: [
      "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.91 4.5 3 1.09-2.09 2.76-3 4.5-3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    ],
    text: "1M+ Customers"
  }
]);
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  transition: background 0.3s, color 0.3s;
}

.hero-section.dark-mode {
  background: #000000;
}

.container {
  max-width: 1200px;
  width: 100%;
  text-align: center;
}

.main-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  color: #1a1a1a;
  margin-bottom: 32px;
}

.hero-section.dark-mode .main-title {
  color: #ffffff;
}

.main-title span {
  font-weight: 800;
}

.subtitle {
  font-size: 20px;
  color: #666666;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 80px auto;
}

.hero-section.dark-mode .subtitle {
  color: #ffffff;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px 40px;
  max-width: 1000px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .main-title {
    font-size: 72px;
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: transform 0.3s ease;
}

.icon-circle:hover {
  transform: translateY(-8px);
}

.icon-circle.teal {
  background: #e6f7f7;
}
.icon-circle.purple {
  background: #f3e8ff;
}
.icon-circle.blue {
  background: #e0f2fe;
}
.icon-circle.pink {
  background: #fce7f3;
}

.hero-section.dark-mode .icon-circle.teal,
.hero-section.dark-mode .icon-circle.purple,
.hero-section.dark-mode .icon-circle.blue,
.hero-section.dark-mode .icon-circle.pink {
  background: #222222;
}

.icon {
  width: 48px;
  height: 48px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.icon-circle.teal .icon {
  color: #0d9488;
}
.icon-circle.purple .icon {
  color: #9333ea;
}
.icon-circle.blue .icon {
  color: #0ea5e9;
}
.icon-circle.pink .icon {
  color: #ec4899;
}

.hero-section.dark-mode .icon {
  color: #ffffff;
}

.stat-text {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.hero-section.dark-mode .stat-text {
  color: #ffffff;
}
</style>
