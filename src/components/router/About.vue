<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",

  // 通过路由规则, 进入该组件前
  beforeRouteEnter(to, from, next) {
    next();
  },
  // 通过路由规则, 离开该组件前
  beforeRouteLeave(to, from, next) {
    next();
  },
};
</script>

<style>
</style>