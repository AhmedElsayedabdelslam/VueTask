<template>
  <section class="testimonial-section" :class="{ 'dark-mode': isDarkMode }">
    <div class="container">
      <div class="testimonial-card">
        <button class="nav left" @click="prev">←</button>

        <div class="tweet-icon" aria-hidden style="margin-top: 15px">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#1da1f2">
            <path
              d="M23 4.5c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.4 1.7-2.4-.8.5-1.8.8-2.8 1-1.4-1.5-3.8-1.5-5.3-.1-1.2 1.2-1.4 3-.5 4.4-3.2-.2-6-1.7-8-4.1-.9 1.6-.3 3.7 1.3 4.8-.6 0-1.1-.2-1.6-.4 0 1.9 1.3 3.6 3.1 4-.6.2-1.3.2-2 .1.6 1.9 2.4 3.3 4.5 3.3-2 .6-4 .7-6 .2 1.1 1.9 3.2 3.2 5.4 3.2 6.5 0 10-5.9 9.7-11.1.7-.5 1.3-1.1 1.8-1.8-.6.3-1.2.5-1.9.6z"
            />
          </svg>
        </div>

        <blockquote class="quote">
          “ {{ testimonials[index].quote }} ”
        </blockquote>

        <div class="attribution">
          {{ testimonials[index].author }} -
          <span class="role">{{ testimonials[index].role }}</span>
        </div>

        <button class="nav right" @click="next">→</button>
      </div>

      <div class="avatars-wrap">
        <div class="central-circle">
          <img
            class="avatar big center"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop"
          />
          <img
            class="avatar medium a1"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80&auto=format&fit=crop"
          />
          <img
            class="avatar medium a2"
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&q=80&auto=format&fit=crop"
          />
          <img
            class="avatar small a3"
            src="https://images.unsplash.com/photo-1531123414780-fc4ae7d4aef0?w=200&q=80&auto=format&fit=crop"
          />
        </div>

        <img
          class="avatar outer o1"
          src="https://images.unsplash.com/photo-1545996124-bb3a0bce3b30?w=200&q=80&auto=format&fit=crop"
        />
        <img
          class="avatar outer o2"
          src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&q=80&auto=format&fit=crop"
        />
        <img
          class="avatar outer o3"
          src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=200&q=80&auto=format&fit=crop"
        />
        <img
          class="avatar outer o4"
          src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=200&q=80&auto=format&fit=crop"
        />
        <img
          class="avatar outer o5"
          src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&q=80&auto=format&fit=crop"
        />
        <img
          class="avatar outer o6"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop"
        />
        <img
          class="avatar outer o7"
          src="https://images.unsplash.com/photo-1531123414780-fc4ae7d4aef0?w=200&q=80&auto=format&fit=crop"
        />
        <img
          class="avatar outer o8"
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&q=80&auto=format&fit=crop"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useThemeStore } from "../../store/themeStore";

const testimonials = [
  {
    quote:
      "Not only in my career but in education as well, I feel grateful that Simple pushed me to expand my horizons and strive to accomplish more.",
    author: "Greg Sebastian",
    role: "Head of Design at Shopify",
  },
  {
    quote:
      "Simple helped me stay focused and unlocked opportunities I never imagined.",
    author: "Lara M.",
    role: "Product Manager",
  },
  {
    quote: "Thanks to Simple, I achieved goals that felt impossible before.",
    author: "John K.",
    role: "UX Researcher",
  },
];

const index = ref(0);

const next = () => {
  index.value = (index.value + 1) % testimonials.length;
};

const prev = () => {
  index.value = (index.value - 1 + testimonials.length) % testimonials.length;
};

const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.theme === "dark");
</script>

<style scoped>
:root {
  --teal: #18bfa6;
}

.testimonial-section {
  padding: 60px 20px 120px;
  background: white;
  color: black;
}

.testimonial-section.dark-mode {
  background: #000;
  color: #fff;
}

.testimonial-section.dark-mode .testimonial-card {
  background: #111;
  border-color: #222;
}

.testimonial-section.dark-mode .quote {
  color: #fff;
}

.testimonial-section.dark-mode .attribution {
  color: #ccc;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.testimonial-card {
  position: relative;
  padding: 36px 120px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: #fff;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: #18bfa6;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000;
}

.nav.left {
  left: -50px;
}
.nav.right {
  right: -50px;
}

@media (max-width: 700px) {
  .nav.left {
    left: 10px;
  }
  .nav.right {
    right: 10px;
  }
  .testimonial-card {
    padding: 30px 40px;
  }
}

.quote {
  font-size: 26px;
  line-height: 1.35;
  font-weight: 500;
  color: #222;
  margin-bottom: 12px;
}

.attribution {
  color: #555;
}

.avatars-wrap {
  margin-top: 80px;
  height: 420px;
  position: relative;
}

.central-circle {
  width: 420px;
  height: 420px;
  border-radius: 50%;
  margin: auto;
  position: relative;
  background: radial-gradient(circle, rgba(24, 191, 166, 0.15), transparent);
}

.avatar {
  border-radius: 50%;
  position: absolute;
  border: 5px solid white;
}
.big {
  width: 110px;
  height: 110px;
  left: calc(50% - 55px);
  top: calc(50% - 55px);
}
.medium {
  width: 86px;
  height: 86px;
}
.small {
  width: 56px;
  height: 56px;
}

.a1 {
  left: 30%;
  top: 25%;
}
.a2 {
  left: 58%;
  top: 18%;
}
.a3 {
  left: 18%;
  top: 62%;
}

.outer {
  width: 64px;
  height: 64px;
}

.o1 {
  left: calc(50% - 320px);
  top: 60px;
}
.o2 {
  left: calc(50% - 240px);
  top: 20px;
}
.o3 {
  left: calc(50% + 180px);
  top: 40px;
}
.o4 {
  left: calc(50% + 300px);
  top: 120px;
}
.o5 {
  left: calc(50% + 320px);
  top: 250px;
}
.o6 {
  left: calc(50% + 160px);
  top: 300px;
}
.o7 {
  left: calc(50% - 140px);
  top: 320px;
}
.o8 {
  left: calc(50% - 260px);
  top: 260px;
}

.testimonial-section.dark-mode .central-circle {
  background: radial-gradient(
    circle at center,
    rgba(24, 191, 166, 0.2) 0%,
    rgba(24, 191, 166, 0.12) 25%,
    rgba(24, 191, 166, 0.08) 60%,
    rgba(24, 191, 166, 0.05) 100%
  );
  box-shadow: 0 0 0 12px rgba(255, 255, 255, 0.04) inset;
}
</style>
