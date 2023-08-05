<template>
  <div class="mt-5">
    <div>
      <label class="title"> Text Input </label>
      <input type="text" v-model="textInputValue">
      <input type="text" :value="textInputValue" @input="handleTextInputChange">
    </div>
    <p>
      Text Input Output: <span> {{ textInputValue }} </span> 
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, Ref } from "vue"

export default defineComponent({
  setup () {
    const textInputValue: Ref<string> = ref("");
    const handleTextInputChange = (event: Event): void => {
      textInputValue.value = (event.target as HTMLInputElement).value;
    };
      return {textInputValue, handleTextInputChange}
      
      
    },
})

</script>

<style scoped>

</style>