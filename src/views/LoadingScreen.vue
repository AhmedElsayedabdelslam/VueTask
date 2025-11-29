<template>
  <div v-if="showLoading" class="loading-screen">
    <div class="loading-container">
      <div class="loader">
        <div class="loader-circle"></div>
        <div class="loader-circle"></div>
        <div class="loader-circle"></div>
      </div>

      <h1 class="loading-title">{{ currentMessage }}</h1>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const messages = [
  "Welcome to Our Website",
  "Building Amazing Products",
  "Loading Your Dashboard...",
];

const currentMessage = ref(messages[0]);
const showLoading = ref(false);
const progress = ref(0);

const hasSeenLoading = sessionStorage.getItem("hasSeenIntroLoading");

onMounted(() => {
  if (!hasSeenLoading) {
    showLoading.value = true;

    let index = 0;
    const totalTime = messages.length * 2000;

    const progressInterval = setInterval(() => {
      progress.value += 100 / (totalTime / 50);
      if (progress.value >= 100) clearInterval(progressInterval);
    }, 50);

    const messageInterval = setInterval(() => {
      index++;
      if (index < messages.length) {
        currentMessage.value = messages[index];
      } else {
        clearInterval(messageInterval);
        setTimeout(() => {
          showLoading.value = false;
          sessionStorage.setItem("hasSeenIntroLoading", "true");
          router.push({ name: "dashboard" });
        }, 600);
      }
    }, 2000);
  }
});
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 9999;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 500px;
  padding: 0 2rem;
}

.loader {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.loader-circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #06b6d4, #14b8a6);
  animation: bounce 1.4s infinite ease-in-out;
}

.loader-circle:nth-child(1) {
  animation-delay: -0.32s;
}
.loader-circle:nth-child(2) {
  animation-delay: -0.16s;
}
.loader-circle:nth-child(3) {
  animation-delay: 0s;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1.2);
    opacity: 1;
  }
}

.loading-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a202c;
  text-align: center;
  animation: fadeIn 0.8s ease-in-out;
  line-height: 1.3;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* شريط التقدم */
.progress-bar {
  width: 300px;
  height: 6px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #06b6d4, #14b8a6);
  border-radius: 10px;
  transition: width 0.3s ease;
  position: relative;
  overflow: hidden;
}

.progress-fill::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.loading-screen::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 20% 80%,
      rgba(6, 182, 212, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(20, 184, 166, 0.05) 0%,
      transparent 50%
    );
  pointer-events: none;
}

@media (max-width: 768px) {
  .loading-container {
    gap: 1.5rem;
    padding: 0 1rem;
  }
  .loading-title {
    font-size: 1.8rem;
  }
  .progress-bar {
    width: 250px;
  }
  .loader-circle {
    width: 10px;
    height: 10px;
  }
}

@media (max-width: 480px) {
  .loading-title {
    font-size: 1.5rem;
  }
  .progress-bar {
    width: 200px;
  }
  .loader {
    gap: 0.4rem;
  }
  .loader-circle {
    width: 8px;
    height: 8px;
  }
}
</style>
