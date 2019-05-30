<template lang="html">
  <div class="main text-center">
    <el-menu mode="horizontal" :router="true" :default-active="activeIndex" class="el-menu-demo" @select="handleSelect">
      <el-menu-item index="1" :route="{path: '/'}">首页</el-menu-item>
      <el-menu-item index="2" :route="{name: 'coffeeMaker'}">咖啡机</el-menu-item>
      <el-menu-item index="3" :route="{name: 'flight'}">航线(悉尼-旧金山)</el-menu-item>
      <el-menu-item index="4" :route="{name: 'crocodile'}">鳄鱼</el-menu-item>
      <el-menu-item index="5" :route="{name: 'ARB'}">动画单选按钮</el-menu-item>
      <el-menu-item index="6" :route="{name: 'bubbleMap'}">气泡地图</el-menu-item>
    </el-menu>
    <router-view>
    </router-view>
  </div>

</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from '../js/routes.js';

import {Menu, MenuItem} from 'element-ui';
Vue.use(Menu);
Vue.use(MenuItem);

import _ from 'lodash';

const router = new VueRouter({
  mode: 'hash',
  routes
});

export default {
  router,
  components: {
  },
  data(){
    return {
      activeIndex: "1"
    }
  },
  mounted(){
  },
  methods: {
    handleSelect(key, keyPath){
      this.activeIndex = key;
    }
  }
}
</script>

<style lang="css">
.main > *{
  margin: 10px auto;
}
</style>
