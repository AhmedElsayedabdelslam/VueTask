<template>
  <section class="achievements-section" :class="{ 'dark-mode': isDarkMode }">
    <div class="container">
      <h2 class="section-title">What we've achieved</h2>
      <p class="section-subtitle">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt<br />
        mollit anim id est.
      </p>

      <div class="content-wrapper">
        <div class="timeline">
          <div
            v-for="year in years"
            :key="year.id"
            class="timeline-item"
            :class="{ active: activeYear === year.id }"
            @click="setActiveYear(year.id)"
          >
            <div class="timeline-dot"></div>
            <span class="timeline-year">{{ year.year }}</span>
          </div>
        </div>

        <div class="cards-wrapper">
          <transition name="fade" mode="out-in">
            <div :key="activeData.title" class="achievement-cards">
              <div class="card main-card">
                <h3>{{ activeData.title }}</h3>
                <p>{{ activeData.description }}</p>
                <a href="#" class="learn-more">Learn more →</a>
              </div>

              <div class="card secondary-card">
                <h3>{{ activeData.secondaryTitle }}</h3>
                <p>{{ activeData.secondaryDescription }}</p>
                <a href="#" class="learn-more">Learn more →</a>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, reactive,computed } from 'vue'
import { useThemeStore } from "../../store/themeStore";

const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.theme === "dark");

const years = [
  { id: 1, year: '2016' },
  { id: 2, year: '2017' },
  { id: 3, year: '2018' },
  { id: 4, year: '2019' },
  { id: 5, year: '2020' },
]

const data = {
  1: {
    title: 'Company founded',
    description: 'We started with a small team and big dreams.',
    secondaryTitle: 'First office opened',
    secondaryDescription: 'Our journey began in a small garage in Cairo.',
  },
  2: {
    title: '100K Customers',
    description: 'Reached our first major milestone in just one year.',
    secondaryTitle: 'Seed funding round',
    secondaryDescription: 'Raised $2M to expand the team and product.',
  },
  3: {
    title: '500K Customers',
    description: 'Growth accelerated faster than we imagined.',
    secondaryTitle: 'Product of the Year',
    secondaryDescription: 'Awarded by Tech Awards Egypt 2018.',
  },
  4: {
    title: '1M Customers',
    description: 'Sed do eiusmod tempor incididunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    secondaryTitle: 'Mobile builder enabled',
    secondaryDescription: 'Sed do eiusmod tempor incididunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  5: {
    title: '3M Customers',
    description: 'Today we serve millions across the region.',
    secondaryTitle: 'Global expansion',
    secondaryDescription: 'Opened offices in Dubai, Riyadh, and Amman.',
  },
  6: {
    title: '500K Customers',
    description: 'Growth accelerated faster than we imagined.',
    secondaryTitle: 'Product of the Year',
    secondaryDescription: 'Awarded by Tech Awards Egypt 2018.',
  },
}

const activeYear = ref(4) 
const activeData = reactive(data[activeYear.value])

const setActiveYear = (id: number) => {
  activeYear.value = id
  Object.assign(activeData, data[id])
}
</script>

<style scoped>
.achievements-section {
  padding: 120px 20px;
  background: #fff;
  color: #111;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: background 0.3s, color 0.3s;
}

.dark-mode {
  background: #111;
  color: #fff;
}

.section-title {
  font-size: 56px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 24px;
  color: inherit;
}

.section-subtitle {
  text-align: center;
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 80px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: inherit;
}

.content-wrapper {
  display: flex;
  gap: 80px;
  align-items: flex-start;
}

.timeline {
  flex-shrink: 0;
  position: relative;
  padding-top: 10px;
  margin-left: 200px; 
}

.timeline::before {
  content: '';
  position: absolute;
  left: 8px; 
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e0e0e0;
  border-radius: 1px;
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.timeline-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #e0e0e0;
  transition: all 0.4s ease;
  z-index: 2;
}

.timeline-year {
  margin-left: 16px;
  font-size: 16px;
  color: #999;
  font-weight: 500;
  transition: all 0.3s ease;
}

.timeline-item.active .timeline-dot {
  background: #35eeff;
  border-color: #35eeff;
  transform: scale(1.3);
  animation: pulse 2s infinite;
}

.timeline-item.active .timeline-year {
  color: inherit;
  font-weight: 700;
  font-size: 18px;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(53, 238, 255, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(53, 238, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(53, 238, 255, 0); }
}

.cards-wrapper {
  flex: 1;
  min-height: 300px;
}

.achievement-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px; 
}

.card {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.04);
  transition: all 0.4s ease;
  color: #111;
}

.dark-mode .card {
  background: #1a1a1a;
  color: #fff;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.card h3 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
}

.card p {
  line-height: 1.7;
  margin-bottom: 24px;
  font-size: 17px;
}

.learn-more {
  color: #3b82f6;
  font-weight: 600;
  text-decoration: none;
  font-size: 17px;
}

.dark-mode .learn-more {
  color: #0ea5e9;
}

.learn-more:hover {
  text-decoration: underline;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 992px) {
  .content-wrapper {
    flex-direction: column;
    gap: 60px;
  }
  
  .timeline {
    display: flex;
    overflow-x: auto;
    padding-bottom: 20px;
    margin-left: 0;
  }
  
  .timeline::before {
    display: none;
  }
  
  .timeline-item {
    flex-direction: column;
    text-align: center;
    min-width: 100px;
    margin-bottom: 0;
    margin-right: 40px;
  }
  
  .timeline-year {
    margin-left: 0;
    margin-top: 12px;
  }
  
  .achievement-cards {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 44px;
  }
}
</style>

