<template lang="html">
  <li class="list-group-item media" @click="onVideoSelect">
    <img class="mr-3" :src="thumbnailUrl" />
    <div class="media-body">
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: {
    video: Object
  },
  methods: {
    onVideoSelect() {
      this.$emit("videoSelect", this.video);
    }
  },
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    }
  }
};
</script>

<style scoped lang="scss">
li {
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
}
</style>
