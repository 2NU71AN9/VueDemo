<template>
  <ul>
    <li>消息id: {{ $route.query.id }}</li>
    <li>消息标题: {{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
};
</script>