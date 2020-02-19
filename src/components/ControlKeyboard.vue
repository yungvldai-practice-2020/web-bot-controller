<template>
  <div class="control-keyboard">
    <span>Use arrow keys to control a robot</span>
    <img src="/arrowkeys.jpg" class="arrowkeys" />
  </div>
</template>

<script>
import keyCalls from '@/helpers/keyCalls.js';

export default {
  mounted() {
    this.registerListeners();
  },
  destroyed() {
    this.unRegisterListeners();
  },
  methods: {
    registerListeners() {
      document.addEventListener('keydown', this.keyDownHandler);
    },
    unRegisterListeners() {
      document.removeEventListener('keydown', this.keyDownHandler);
    },
    keyDownHandler({ key }) {
      let found = keyCalls.find(x => x.key === key);
      (found && found.action) && found.action();
    }
  }
}
</script>

<style scoped lang="scss">
  .control-keyboard {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .arrowkeys {
      margin: 20px;
      width: 100px;
    }
  }
</style>