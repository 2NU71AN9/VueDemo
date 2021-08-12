<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Add @addTodo="addTodo" />
        <List :dataArray="dataArray" />
        <All :dataArray="dataArray" @checkAll="checkAll" @clearAll="clearAll" />
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import Add from "./components/to_do_list/Add";
import All from "./components/to_do_list/All";
import List from "./components/to_do_list/List";

export default {
  name: "App",
  components: {
    Add,
    List,
    All,
  },
  data() {
    return {
      dataArray: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addTodo(obj) {
      this.dataArray.unshift(obj);
    },
    checkTodo(id) {
      this.dataArray.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    deleteTodo(_, id) {
      this.dataArray = this.dataArray.filter((todo) => todo.id !== id);
    },
    checkAll(check) {
      this.dataArray.forEach((todo) => (todo.done = check));
    },
    clearAll() {
      this.dataArray = this.dataArray.filter((todo) => !todo.done);
    },
    updateTodo(id, title) {
      this.dataArray.forEach((todo) => {
        if (todo.id === id) todo.title = title;
      });
    },
  },
  watch: {
    dataArray: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    // 使用全局事件总线
    this.$bus.$on("checkTodo", this.checkTodo);
    this.$bus.$on("updateTodo", this.updateTodo);
    // this.$bus.$on("deleteTodo", this.deleteTodo);
    // 使用消息发布与订阅
    this.pubId = pubsub.subscribe("deleteTodo", this.deleteTodo);
  },
  beforeDestroy() {
    this.$bus.$off(["checkTodo", "updateTodo"]);
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: #49c4da;
  border: 1px solid #08c3e4;
  margin-right: 5px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
