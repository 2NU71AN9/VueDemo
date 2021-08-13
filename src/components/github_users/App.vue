<template>
  <div class="container">
    <GHSearch />
    <GHUserList />
  </div>
</template>

<script>
import GHSearch from "./GHSearch.vue";
import GHUserList from "./GHUserList.vue";
export default {
  components: { GHSearch, GHUserList },
};
</script>