<template>
  <div class="container" :style="getBubbleStyle">
    <div class="container-box"></div>
    <canvas class="container-canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, onMounted } from 'vue'
const config = reactive({
  bubbleNum: 0.15,
  alpha: 0.7,
  alphaChangeSpeed: 0.0005,
  size: 0.5,
  sizeChangeSpeed: 0.002,
  riseSpeed: 0.9,
  color: '255,255,255',
  zIndex: 0,
  isCover: false,
  animateHeader: true
})
const getBubbleStyle = computed(() => `--bubble-z-index: ${config.zIndex};`)
onMounted(() => {
  import('../utils/bubble').then(module => module.bubble(config))
})
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--bubble-z-index, -1);
  .container-box,
  .container-canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
}
</style>
