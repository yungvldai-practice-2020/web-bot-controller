<template>
  <div class="btns">
    <img 
      src="up.png" 
      :class="`btn up ${colorKey === 'up' ? 'active' : ''}`"
      @mousedown="push('ArrowUp')"
      @mouseup="pull('ArrowUp')"
    >
    <img 
      src="left.png" 
      :class="`btn left ${colorKey === 'left' ? 'active' : ''}`"
      @mousedown="push('ArrowLeft')"
      @mouseup="pull('ArrowLeft')"
    >
    <img 
      src="down.png" 
      :class="`btn down ${colorKey === 'down' ? 'active' : ''}`"
      @mousedown="push('ArrowDown')"
      @mouseup="pull('ArrowDown')"
    >
    <img 
      src="right.png" 
      :class="`btn right ${colorKey === 'right' ? 'active' : ''}`"
      @mousedown="push('ArrowRight')"
      @mouseup="pull('ArrowRight')"
    >
  </div>
</template>

<script>
export default {
  props: ['colorKey'],
  methods: {
    push(key) {
      this.$emit('push', key);
    },
    pull(key) {
      this.$emit('pull', key);
    }
  }
}
</script>

<style scoped lang="scss">
  .btns {
    position: relative;
    width: 100px;
    height: 66px;
    margin: 10px;
    .btn { width: 32px; position: absolute; cursor: pointer; }
    .up { top: 0px; left: 34px; }
    .left { top: 34px; left: 0px; }
    .down { top: 34px; left: 34px; }
    .right { top: 34px; left: 68px; }
    .active { background-color: pink; }
  }
</style>