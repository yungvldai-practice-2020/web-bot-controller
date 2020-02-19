<template>
  <div class="video-stream">
    <img 
      v-if="!haveError"
      class="stream" src="http://localhost:5000/video_feed" 
      @error="haveError = true"
    />
    <span class="error" v-else>Cannot connect to stream. Sorry!</span>
  </div>
</template>

<script>
export default {
  data: () => ({
    haveError: false
  })
}
</script>

<style scoped lang="scss">
  .video-stream {
    margin: 10px;
  }
</style>