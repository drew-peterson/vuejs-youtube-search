<template id="">
  <div class="container">
    <SearchBar @termChange="onTermchange" />
    <div class="row">
      <VideoDetail :video="selectedVideo" />
      <VideoList :videos="videos" @videoSelect="onVideoSelect" />
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import axios from "axios";
const API_KEY = "AIzaSyBqb-JMXzNl68qPAfnTvZRQsRTnItwNbRI";
export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data: () => ({
    selectedVideo: null,
    videos: []
  }),
  methods: {
    onVideoSelect(video) {
      return (this.selectedVideo = video);
    },
    onTermchange(searchTerm) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm
          }
        })
        .then(({ data: { items } }) => {
          this.videos = items;
        });
    }
  }
};
</script>
