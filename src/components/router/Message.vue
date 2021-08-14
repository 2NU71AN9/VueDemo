<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{
          m.title
        }}</router-link
        >&nbsp;&nbsp; -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: m,
          }"
        >
          {{ m.title }} </router-link
        >&nbsp;&nbsp;
        <button @click="push(m)">push</button>
        <button @click="replace(m)">replace</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    push(m) {
      this.$router.push({ path: "/home/message/detail", query: m });
    },
    replace(m) {
      this.$router.replace({ path: "/home/message/detail", query: m });
    },
  },
};
</script>