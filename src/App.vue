 <script >
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import DashBoard from './views/DashBoard.vue';
import LoadingScreen from './views/LoadingScreen.vue';
import { ref } from 'vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    DashBoard
  }
}
</script>

<template>
  <AppHeader />
  
  <LoadingScreen />

  <router-view  />
  
  <AppFooter />
</template>

<script setup>
const showLoading = ref(true)
</script>










