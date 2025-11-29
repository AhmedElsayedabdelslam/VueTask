<template>
  <footer class="footer" :class="{ 'dark-mode': isDarkMode }">
    <div class="container">
      <div class="footer-main">
        <div class="footer-logo-section">
          <div class="footer-logo">
            <svg viewBox="0 0 44 44" class="logo-svg">
              <defs>
                <linearGradient
                  id="logoGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
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
        </div>

        <div class="footer-content">
          <div class="footer-section">
            <h3 class="section-title">PRODUCTS</h3>
            <ul class="footer-links">
              <li><a href="#">Drag And Drop</a></li>
              <li><a href="#">Visual Studio X</a></li>
              <li><a href="#">Easy Content</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="section-title">RESOURCES</h3>
            <ul class="footer-links">
              <li><a href="#">Industries and tools</a></li>
              <li><a href="#">Use cases</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Online events</a></li>
              <li><a href="#">Nostrud exercitation</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="section-title">COMPANY</h3>
            <ul class="footer-links">
              <li><a href="#">Diversity & Inclusion</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Customer stories</a></li>
              <li><a href="#">Online communities</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="section-title">SUPPORT</h3>
            <ul class="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Tutorials & guides</a></li>
              <li><a href="#">Webinars</a></li>
              <li><a href="#">Open-source</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <!-- <div class="footer-bottom">
        <div class="copyright">
          © Cruip.com. All rights reserved.
        </div>
        <div class="footer-bottom-links">
          <a href="#">Terms</a>
          <span class="separator">-</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div> -->
      <div class="footer-bottom">
        <div class="copyright">© Ahmed Elsayed. All rights reserved.</div>

        <div class="footer-bottom-links">
          <a href="#">Terms</a>
          <span class="separator">-</span>
          <a href="#">Privacy Policy</a>
        </div>

        <div class="footer-socials">
          <v-btn icon color="cyan" class="white-icon mx-2">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon color="cyan" class="white-icon mx-2">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon color="cyan" class=" white-icon mx-2">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon color="cyan" class=" white-icon mx-2">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn icon color="cyan" class="white-icon mx-2">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { useThemeStore } from "../store/themeStore.js";
const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.theme === "dark");
</script>

<style scoped>
.footer {
  background-color: #ffffff;
  color: #000000;
  padding: 4rem 0 2rem;
  border-top: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.footer.dark-mode {
  background-color: #000000 !important;
  color: #ffffff !important;
  border-top-color: #374151 !important;
}

.footer.dark-mode :deep(.section-title) {
  color: #ffffff !important;
}

.footer.dark-mode :deep(.footer-links li a) {
  color: #d1d5db !important;
}

.footer.dark-mode :deep(.footer-links li a:hover) {
  color: #ffffff !important;
}

.footer.dark-mode :deep(.footer-bottom) {
  border-top-color: #374151 !important;
}

.footer.dark-mode :deep(.copyright) {
  color: #9ca3af !important;
}

.footer.dark-mode :deep(.footer-bottom-links a) {
  color: #d1d5db !important;
}

.footer.dark-mode :deep(.footer-bottom-links a:hover) {
  color: #ffffff !important;
}

.footer.dark-mode :deep(.separator) {
  color: #9ca3af !important;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-main {
  display: flex;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-logo-section {
  flex-shrink: 0;
}

.footer-logo {
  width: 44px;
  height: 44px;
}

.logo-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  flex: 1;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  color: inherit;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links li a {
  color: #6b7280;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.footer-links li a:hover {
  color: #000000;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}
.footer-socials {
  display: flex;
  gap: 10px;
  margin-left: 20px;
}

.social-icon {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-decoration: none;
  transition: transform 0.3s, background-color 0.3s;
}

.social-icon:hover {
  transform: scale(1.1);
  background-color: #10b098;
}

.social-icon i {
  font-size: 16px;
}

.copyright {
  font-size: 0.875rem;
  color: #6b7280;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-bottom-links a {
  color: #6b7280;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.footer-bottom-links a:hover {
  color: #000000;
}

.separator {
  color: #6b7280;
  font-size: 0.875rem;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .footer-main {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .footer-main {
    flex-direction: column;
    gap: 2rem;
  }
  .footer-logo {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 640px) {
  .footer {
    padding: 3rem 0 1.5rem;
  }
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 2rem 0 1rem;
  }
  .footer-content {
    gap: 1.5rem;
  }
  .section-title {
    margin-bottom: 1rem;
  }
  .footer-links {
    gap: 0.5rem;
  }
  .footer-logo {
    width: 36px;
    height: 36px;
  }
}
:deep(.white-icon .v-icon) {
  color: #ffffff !important;
}

</style>
