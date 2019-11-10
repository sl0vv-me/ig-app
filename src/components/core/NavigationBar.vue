<template>
  <ul class="navigation">
    <li>
      <router-link
        to="/"
        class="navigation__link"
        exact-active-class="navigation__link_active"
      >Home</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "NavigationBar"
  }
</script>

<style lang="scss" scoped>
  .navigation {
    list-style: none;

    display: flex;
    margin: 0;
    padding: 0;

    font-size: 14px;

    &__link {
      display: block;
      padding: 10px 10px;

      background-color: #d90429;
      color: #edf2f4;

      text-decoration: none;

      &:hover, &:focus, &_active {
        background-color: scale-color(#d90429, $lightness: -20%);
      }
    }
  }
</style>