<template>
  <div class="todo-footer" v-show="allNum">
    <label>
      <input type="checkbox" v-model="isAllDone" />
    </label>
    <span>
      <span>已完成{{ doneNum }}</span> / 全部{{ allNum }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "All",
  props: ["dataArray"],
  methods: {
    clearAll() {
      this.$emit("clearAll");
    },
  },
  computed: {
    doneNum() {
      return this.dataArray.reduce((i, v) => i + (v.done ? 1 : 0), 0);
    },
    allNum() {
      return this.dataArray.length;
    },
    isAllDone: {
      get() {
        return this.doneNum === this.allNum && this.allNum > 0;
      },
      set(value) {
        this.$emit("checkAll", value);
      },
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>