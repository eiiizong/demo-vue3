<!--
 * @Author: zengxm
 * @Date: 2021-11-23 17:23:30
 * @LastEditors: zengxm
 * @LastEditTime: 2021-11-23 17:23:39
 * @Description: change
 * @FilePath: /demo-vue3/src/views/Test.vue
-->
<template>
  <div class="test-container page-container">
    <div class="page-title">Unit Test Page</div>
    <p>count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Vuex',
  setup() {
    const count = ref<number>(0)
    const increment = () => {
      count.value += 1
    }
    return { count, increment }
  }
})
</script>
