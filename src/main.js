import Vue from "vue";
import App from "./App";

new Vue({
  // render: function(createElement) {
  //   return createElement(App);
  // },
  render: h => h(App)
}).$mount("#app");

//.$mount is the same as el: '#App'
