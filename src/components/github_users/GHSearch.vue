<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;
      <button @click="searchAction">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchAction() {
      this.$bus.$emit("refreshData", [], true);
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        (response) => {
          console.log("请求成功");
          this.$bus.$emit("refreshData", response.data.items, false);
        },
        (error) => {
          console.log("请求失败", error.message);
          this.$bus.$emit("refreshData", [], false, error.message);
        }
      );
    },
  },
};
</script>