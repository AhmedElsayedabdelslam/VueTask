<template>
  <section class="team-section" :class="{ 'dark-mode': isDarkMode }">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ title }}</h2>
        <p class="section-subtitle">{{ subtitle }}</p>
      </div>
      <div class="team-center">
        <div
          v-for="(member, index) in teamMembers"
          :key="member.id"
          class="team-member"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <img :src="member.avatar" :alt="member.name" class="member-avatar" />
          <div class="member-info">
            <h3 class="member-name">{{ member.name }}</h3>
            <div class="member-socials">
              <a :href="member.twitter" target="_blank" rel="noopener">
                <v-icon>mdi-twitter</v-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { useThemeStore } from "../../store/themeStore";

const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.theme === "dark");

const title = ref("Your Future Teammates");
const subtitle = ref(
  "Meet the amazing people behind our team."
);
const teamMembers = ref([
  { id: 1, name: "Sergey Filkov", avatar: "https://randomuser.me/api/portraits/men/1.jpg", twitter: "#" },
  { id: 2, name: "Mary Champ", avatar: "https://randomuser.me/api/portraits/women/2.jpg", twitter: "#" },
  { id: 3, name: "Mark Varsano", avatar: "https://randomuser.me/api/portraits/men/3.jpg", twitter: "#" },
  { id: 4, name: "George Hurley", avatar: "https://randomuser.me/api/portraits/men/4.jpg", twitter: "#" },
  { id: 5, name: "Ellie Lepisov", avatar: "https://randomuser.me/api/portraits/women/5.jpg", twitter: "#" },
  { id: 6, name: "Connor Bal", avatar: "https://randomuser.me/api/portraits/men/6.jpg", twitter: "#" },
  { id: 7, name: "Marko Sharma", avatar: "https://randomuser.me/api/portraits/men/7.jpg", twitter: "#" },
  { id: 8, name: "Mick Esposito", avatar: "https://randomuser.me/api/portraits/men/8.jpg", twitter: "#" },
]);

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>

<style scoped>
.team-section {
  padding: 80px 20px;
  background: #fff;
  color: #111;
  transition: background 0.3s, color 0.3s;
}

.dark-mode {
  background: #111;
  color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: inherit;
  max-width: 600px;
  margin: 0 auto;
}

.team-center {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  width: 80%;
  margin: 0 auto;
}

.team-member {
  text-align: center;
  flex: 0 1 150px; 
}

.member-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto 10px;
  border: none;
  box-shadow: none;
}

.member-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.member-name {
  font-size: 1.2rem;
  font-weight: 600;
}

.member-socials a {
  color: #1da1f2; 
  font-size: 1.2rem;
  transition: transform 0.2s ease;
}

.member-socials a:hover {
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .team-center {
    width: 100%;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .team-member {
    flex: 0 1 120px;
  }
}
</style>
