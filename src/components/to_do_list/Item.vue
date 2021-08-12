<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="model.done"
        @change="checkChanged(model.id)"
      />
      <span v-show="!model.isEdit">{{ model.title }}</span>
      <input
        type="text"
        v-show="model.isEdit"
        ref="inputTitle"
        :value="model.title"
        @keyup.enter="loseFocus(model, $event)"
        @blur="loseFocus(model, $event)"
      />
    </label>
    <button class="btn btn-danger" @click="deleteAction(model.id)">删除</button>
    <button
      class="btn btn-edit"
      v-show="!model.isEdit"
      @click="editAction(model)"
    >
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Item",
  props: ["model"],
  methods: {
    // 使用全局事件总线
    checkChanged(id) {
      this.$bus.$emit("checkTodo", id);
    },
    // 使用消息发布与订阅
    deleteAction(id) {
      if (confirm("确定删除吗?")) pubsub.publish("deleteTodo", id);
    },
    editAction(model) {
      if (model.hasOwnProperty("isEdit")) {
        model.isEdit = true;
      } else {
        this.$set(model, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    loseFocus(model, e) {
      model.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("updateTodo", model.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>