<template>
  <div class="row">
    <div
      class="card"
      v-show="users.length"
      v-for="user in users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <h1 v-show="isFirst">欢迎!</h1>
    <h1 v-show="isLoading">Loading.....</h1>
    <h1 v-show="errMsg">{{ errMsg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFirst: true,
      isLoading: false,
      errMsg: "",
      users: [],
    };
  },
  methods: {
    refreshData(users, isLoading, errMsg) {
      this.isFirst = false;
      this.isLoading = isLoading;
      this.errMsg = errMsg;
      this.users = users;
    },
  },
  mounted() {
    this.$bus.$on("refreshData", this.refreshData);
  },
  beforeDestroy() {
    this.$bus.off("refreshData");
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>