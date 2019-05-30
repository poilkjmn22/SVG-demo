import Vue from "vue";
import App from "./vue/App.vue";
import "babel-polyfill";
import './css/index.css';
new Vue({
  el: '#app',
  render: h=>h(App)
});
