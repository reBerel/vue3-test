<template>
  <div class="app-container">
    <navigation-bar/>    
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavigationBar from '@/navigation/NavigationBar.vue'

@Options({
  components: {
    NavigationBar
  }
})
export default class App extends Vue {}
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
  }
  .app-container {
    padding: 0;
    max-width: 1200px;
    width: 100%;
    margin: auto;
  }
</style>
