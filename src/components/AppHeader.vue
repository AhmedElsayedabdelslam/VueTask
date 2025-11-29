<template>
  <header :class="{ 'dark-mode': themeStore.theme === 'dark' }">
    <div class="container">
      <div class="left">
        <div class="logo" style="cursor: pointer" @click="goHome">
          <svg viewBox="0 0 44 44" class="logo-svg">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#67e8f9" />
                <stop offset="100%" stop-color="#22d3ee" />
              </linearGradient>
            </defs>
            <path
              d="M22 6 A16 16 0 1 1 22 38 A16 16 0 1 1 22 6 M22 12 A10 10 0 1 0 22 32 A10 10 0 1 0 22 12"
              fill="none"
              stroke="url(#logoGrad)"
              stroke-width="4.5"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <nav :class="{ open: menuOpen }">
          <a href="/about">About</a>
          <a href="#blog">Blog</a>
          <a href="/Testimonials">Testimonials</a>

          <div class="resources">
            <button @click="resourcesOpen = !resourcesOpen">
              Resources
              <svg
                class="arrow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <ul v-show="resourcesOpen" class="resources-list">
              <li><a href="#guide">User Guide</a></li>
              <li><a href="#tutorials">Tutorials</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <a href="#get-start" class="mobile-get-start">Get Start</a>
        </nav>
      </div>

      <div class="right">
        <div class="form-switch">
          <input
            type="checkbox"
            id="light-switch-desktop"
            class="light-switch"
            v-model="themeStore.theme"
            :true-value="'light'"
            :false-value="'dark'"
          />
          <label class="switch-label" for="light-switch-desktop">
            <span class="switch-track"></span>
            <div class="switch-icons-container">
              <svg
                class="switch-icon sun-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <svg
                class="switch-icon moon-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <span class="switch-handle"></span>
            </div>
            <span class="sr-only">Switch to light / dark version</span>
          </label>
        </div>
        <button style="width: 160px; border-radius: 10px" class="request-code">
          Get Start
        </button>

        <button class="mobile-menu-btn" @click="menuOpen = !menuOpen">
          <span v-if="!menuOpen">&#9776;</span>
          <span v-else>&#10005;</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useThemeStore } from "../store/themeStore.js";
const menuOpen = ref(false);
const resourcesOpen = ref(false);
const isDarkMode = ref(false);
const themeStore = useThemeStore();
function goHome() {
  window.location.href = "/";
}

// onMounted(() => {
//   const savedTheme = localStorage.getItem('theme')
//   if (savedTheme) {
//     isDarkMode.value = savedTheme === 'dark'
//   }
// })

// function toggleTheme() {
//   localStorage.setItem('theme', isDarkMode.value ? 'light' : 'dark')
// }
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.logo {
  width: 44px;
  height: 44px;
}

.logo-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

nav {
  display: flex;
  gap: 2.25rem;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  color: black;
  transition: all 0.3s ease;
}

nav a,
nav button {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
  color: black;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
}

.resources {
  position: relative;
}

.resources-list {
  position: absolute;
  top: 120%;
  left: 0;
  background: white;
  list-style: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 150px;
  z-index: 100;
}

.resources-list li a {
  color: black;
  text-decoration: none;
  font-size: 14px;
  white-space: nowrap;
}

.arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.resources button:focus .arrow {
  transform: rotate(180deg);
}

.right {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.form-switch {
  position: relative;
}

.light-switch {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.switch-label {
  display: block;
  width: 60px;
  height: 32px;
  cursor: pointer;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}

.switch-track {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, #06b6d4, #14b8a6);
  border-radius: 16px;
  transition: all 0.4s ease;
  border: 2px solid transparent;
}

.switch-icons-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  z-index: 2;
}

.switch-icon {
  width: 16px;
  height: 16px;
  transition: all 0.4s ease;
  color: white;
}

.sun-icon {
  opacity: 1;
  transform: scale(1);
}

.moon-icon {
  opacity: 0.7;
  transform: scale(0.8);
}

.switch-handle {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  z-index: 3;
}

.light-switch:checked + .switch-label .switch-handle {
  transform: translateX(28px);
  background: #f7fafc;
}

.light-switch:checked + .switch-label .sun-icon {
  opacity: 0.7;
  transform: scale(0.8);
}

.light-switch:checked + .switch-label .moon-icon {
  opacity: 1;
  transform: scale(1);
}

.switch-label:hover .switch-track {
  border-color: rgba(255, 255, 255, 0.5);
}

.switch-label:hover .switch-handle {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.request-code {
  padding: 0.625rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background: linear-gradient(to right, #06b6d4, #14b8a6);
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.request-code:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(6, 182, 212, 0.3);
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-get-start {
  display: none;
}

@media (max-width: 900px) {
  .left {
    gap: 1.5rem;
  }

  nav {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem 1.25rem;
  }

  .left {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    padding: 0 1.5rem;
    transition: all 0.3s ease;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  nav.open {
    max-height: 400px;
    padding: 1.5rem;
  }

  .mobile-menu-btn {
    display: block;
  }

  .request-code {
    display: none;
  }

  .mobile-get-start {
    display: block;
    padding: 0.625rem 1.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
    background: linear-gradient(to right, #06b6d4, #14b8a6);
    border-radius: 9999px;
    text-align: center;
    width: 100%;
    margin-top: 0.5rem;
    text-decoration: none;
  }

  .resources-list {
    position: static;
    box-shadow: none;
    background: none;
    padding: 0.5rem 0 0 1rem;
  }
}

@media (max-width: 400px) {
  .container {
    padding: 0.75rem 1rem;
  }

  .left {
    gap: 1rem;
  }

  .logo {
    width: 36px;
    height: 36px;
  }

  .right {
    gap: 0.75rem;
  }

  .switch-label {
    width: 52px;
    height: 28px;
  }

  .switch-handle {
    width: 20px;
    height: 20px;
    top: 4px;
    left: 4px;
  }

  .light-switch:checked + .switch-label .switch-handle {
    transform: translateX(24px);
  }

  .switch-icons-container {
    padding: 0 4px;
  }

  .switch-icon {
    width: 14px;
    height: 14px;
  }

  .mobile-menu-btn {
    font-size: 1.25rem;
    padding: 0.375rem;
  }
}
header.dark-mode {
  background: rgba(0, 0, 0, 0.35);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

header.dark-mode nav a,
header.dark-mode nav button {
  color: #e5e7eb !important; /* رمادي فاتح */
}

header.dark-mode nav a:hover {
  color: #ffffff !important;
}

header.dark-mode .resources-list {
  background: #1f2937;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
}

header.dark-mode .resources-list li a {
  color: #e5e7eb;
}

header.dark-mode .resources-list li a:hover {
  color: #fff;
}

header.dark-mode .request-code {
  background: linear-gradient(to right, #0891b2, #0d9488);
}

header.dark-mode .mobile-menu-btn {
  color: white;
}
</style>
