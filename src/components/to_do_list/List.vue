<template>
  <ul class="todo-main">
    <transition-group
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceInRight"
      leave-active-class="animate__bounceOutRight"
      appear
    >
      <Item v-for="val in dataArray" :key="val.id" :model="val" />
    </transition-group>
  </ul>
</template>

<script>
import "animate.css";
import Item from "./Item.vue";
export default {
  name: "List",
  components: { Item },
  props: ["dataArray"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>