<template>
  <div class="control-keyboard">
    <div class="keyboard-on-connected" v-if="socket && socket.connected">
      <span class="legend">Use arrow keys to control a robot</span>
      <keys-figure 
        :color-key="nowKey" 
        @push="key => keyDownHandler({ key })" 
        @pull="key => keyUpHandler({ key })"
      />
    </div>
    <div v-else>
      <span class="error">Cannot connect to mech control. Sorry!</span>
    </div>
  </div>
</template>

<script>
import keyCalls from '@/helpers/keyCalls';
import KeysFigure from './KeysFigure.vue';
import { socketConnect } from '@/services/socket';

export default {
  data: () => ({
    nowKey: '',
    socket: null
  }),
  components: {
    KeysFigure
  },
  mounted() {
    this.registerListeners();
    this.socket = socketConnect();
  },
  destroyed() {
    this.unRegisterListeners();
    this.socket.close();
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
        found.onPull && found.onPull(this.socket);
        this.nowKey = null;
      }      
    },
    keyDownHandler({ key }) {
      let found = keyCalls.find(x => x.key === key);
      if (!found || this.nowKey === found.id) return;
      found.onPush && found.onPush(this.socket);
      this.nowKey = found.id;
    }
  }
}
</script>

<style scoped lang="scss">
  .control-keyboard {
    position: relative;
    margin: 10px;
    .keyboard-on-connected {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
</style>