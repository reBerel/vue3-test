<template>
  <nav>
    <navigation-bar/>    
  </nav>
  <router-view/>
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

</style>
