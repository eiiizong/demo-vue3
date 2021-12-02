<template>home</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../../utils/axios'

export default defineComponent({
  name: 'yHome',
  setup() {
    axios
      .get('/users/XPoet')
      .then((res) => {
        console.warn('res: ', res)
      })
      .catch((err) => {
        console.error('err: ', err)
      })
  }
})
</script>

<style>
#app {
  width: 100%;
}
</style>
