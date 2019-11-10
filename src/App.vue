<template>
  <main class="app">
    <div class="app__frame">
      <div class="navigation-bar navigation-bar_theme_gray">
        <div class="grid">
          <navigation-bar></navigation-bar>
        </div>
      </div>
      <div class="content">
        <div class="content__сanvas">
          <div class="grid">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import NavigationBar from "./components/core/NavigationBar"

  export default {
    name: "app",
    components: {
      NavigationBar
    }
  }
</script>

<style lang="scss" scoped>
  .app {
    background-color: #edf2f4;
    color: #2b2d42;

    font-family: Arial, sans-serif;

    &__frame {
      display: grid;
      grid-template-rows: max-content 1fr;

      height: 100vh;
    }
  }

  .navigation-bar {
    position: relative;
    z-index: 1;
    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.1);

    &_theme_gray {
      background-color: #8d99ae;
    }
  }

  .content {
    height: 100%;

    overflow-y: auto;

    &__сanvas {
      display: grid;

      min-height: calc(100% - 20px);
      margin: 10px 0;
    }
  }
</style>
