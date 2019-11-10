<template>
  <div>
    <user-card v-for="user in users" :user="user"></user-card>
  </div>
</template>

<script>
  import UserCard from "./UserCard"

  export default {
    name: "UserCardList",
    components: {
      UserCard,
    },
    props: {
      users: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<style scoped>

</style>