<template>
  <div class="app">
    <video-stream />
    <control-keyboard />
    <copy-right />
  </div>
</template>

<script>
import ControlKeyboard from './components/ControlKeyboard.vue';
import VideoStream from './components/VideoStream.vue';
import CopyRight from './components/CopyRight.vue';

export default {
  components: {
    ControlKeyboard,
    VideoStream,
    CopyRight
  }
}
</script>

<style lang="scss" scoped>
  .app {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
