<template>
  <div class="user-card">
    <div class="user-card__image-wrapper">
      <img
        :src="user.profile_pic"
        class="user-card__image"
        alt="profile picture"
      >
    </div>
    <div class="user-card__username">{{ user.username }}</div>
  </div>
</template>

<script>
  export default {
    name: "UserCard",
    props: {
      user: {
        type: Object,
        default: () => ({}),
      }
    },
    data: () => ({
    }),
  }
</script>

<style lang="scss" scoped>
  .user-card {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
    &__image-wrapper {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      border-radius: 50%;
      overflow: hidden;
    }
    &__image {
      display: block;
      max-width: 50px;
      max-height: 50px;
    }
    &__username {
      font-size: 14px;
    }
  }
</style>