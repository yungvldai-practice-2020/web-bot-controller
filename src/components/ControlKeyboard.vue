<template>
  <div class="control-keyboard">
    <span class="legend">Use arrow keys to control a robot</span>
    <keys-figure 
      :color-key="nowKey" 
      @push="key => keyDownHandler({ key })" 
      @pull="key => keyUpHandler({ key })"
    />
  </div>
</template>

<script>
import keyCalls from '@/helpers/keyCalls.js';
import KeysFigure from './KeysFigure.vue';

export default {
  data: () => ({
    nowKey: ''
  }),
  components: {
    KeysFigure
  },
  mounted() {
    this.registerListeners();
  },
  destroyed() {
    this.unRegisterListeners();
  },
  methods: {
    registerListeners() {
      document.addEventListener('keydown', this.keyDownHandler);
      document.addEventListener('keyup', this.keyUpHandler);
    },
    unRegisterListeners() {
      document.removeEventListener('keydown', this.keyDownHandler);
      document.addEventListener('keyup', this.keyUpHandler);
    },
    keyUpHandler({ key }) {
      if (this.nowKey) {
        let found = keyCalls.find(x => x.key === key);
        found.onPull && found.onPull();
        this.nowKey = null;
      }      
    },
    keyDownHandler({ key }) {
      let found = keyCalls.find(x => x.key === key);
      if (!found || this.nowKey === found.id) return;
      found.onPush && found.onPush();
      this.nowKey = found.id;
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
    .legend {
      margin: 10px;
    }
  }
</style>