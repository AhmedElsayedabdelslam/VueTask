<template>
  <section class="ideas-section" :class="{ 'dark-mode': isDarkMode }">
    <div class="container">
      <div class="section-header">
        <h2 class="main-heading">Turn your ideas into reality in</h2>
        <h2 class="main-heading">
          <strong>seconds</strong>
        </h2>
        <p class="section-subtitle">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat<br />
          nulla pariatur excepteur sint occaecat cupidatat.
        </p>
      </div>

      <div class="content-grid">
        <aside class="sidebar-menu">
          <ul>
            <li
              v-for="(section, index) in sections"
              :key="index"
              :class="{ active: activeSection === index }"
              @click="activeSection = index"
            >
              <span class="icon">{{ section.icon }}</span> {{ section.name }}
            </li>
          </ul>
        </aside>

        <div class="cards-grid">
          <div v-for="(card, idx) in filteredCards" :key="idx" class="card">
            <img :src="card.img" :alt="card.title" />
            <div class="card-info">
              <p class="card-title">{{ card.title }}</p>
              <span class="duration">{{ card.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useThemeStore } from "../../store/themeStore";
const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.theme === "dark");

const sections = ref([
  { name: "Getting Started", icon: "✓" },
  { name: "Collection List", icon: "≡" },
  { name: "Element Hierarchy", icon: "≡" },
  { name: "Styling Basics", icon: "🖌" },
  { name: "Image Field", icon: "🖼" },
]);

const activeSection = ref(0);

const allCards = ref([
  [
    {
      title: "Using index pages",
      img: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=600&fit=crop",
      duration: "2 Min",
    },
    {
      title: "Working with content",
      img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&h=600&fit=crop",
      duration: "4 Min",
    },
    {
      title: "Using cover pages",
      img: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=400&fit=crop",
      duration: "7 Min",
    },
  ],
  [
    {
      title: "Collection overview",
      img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&h=600&fit=crop",
      duration: "3 Min",
    },
    {
      title: "Adding items",
      img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=400&h=400&fit=crop",
      duration: "5 Min",
    },
  ],
  [
    {
      title: "Hierarchy setup",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
      duration: "6 Min",
    },
    {
      title: "Nesting elements",
      img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&h=600&fit=crop",
      duration: "4 Min",
    },
  ],
  [
    {
      title: "Basic styling",
      img: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=400&fit=crop",
      duration: "2 Min",
    },
    {
      title: "Color schemes",
      img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&h=600&fit=crop",
      duration: "3 Min",
    },
  ],
  [
    {
      title: "Image field setup",
      img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&h=600&fit=crop",
      duration: "5 Min",
    },
    {
      title: "Optimizing images",
      img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=400&h=400&fit=crop",
      duration: "4 Min",
    },
  ],
]);

const filteredCards = computed(() => allCards.value[activeSection.value]);
</script>

<style scoped>
.ideas-section {
  padding: 100px 20px;
  background: #fff;
  color: #111;
  transition: 0.3s;
}

.dark-mode {
  background: #111;
  color: #fff;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}
.main-heading {
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
}
.section-subtitle {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  max-width: 720px;
  margin: 16px auto 0 auto;
}

.dark-mode .section-subtitle {
  color: #ccc;
}

.content-grid {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 40px;
}
.sidebar-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar-menu li {
  padding: 12px 16px;
  font-size: 0.95rem;
  color: #444;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
}
.sidebar-menu li.active {
  font-weight: 600;
  color: #00d4aa;
}
.dark-mode .sidebar-menu li {
  color: #ccc;
}
.dark-mode .sidebar-menu li.active {
  color: #00d4aa;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 400px);
  justify-content: center;
  gap: 20px;
}

.card {
  background: #f1f1f1;
  width: 400px;
  height: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.dark-mode .card {
  background: #222;
  color: #fff;
}

.card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}
.card-info {
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
}

.card-title {
  font-weight: 600;
  margin: 0;
}
.duration {
  background: rgba(0, 0, 0, 0.1);
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.85rem;
}

.dark-mode .duration {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  .sidebar-menu {
    order: 2;
  }
  .cards-grid {
    order: 1;
    grid-template-columns: 1fr;
    justify-items: center;
  }
}
@media (max-width: 768px) {
  .main-heading {
    font-size: 2.2rem;
  }
}
@media (max-width: 480px) {
  .ideas-section {
    padding: 60px 16px;
  }
}
</style>
