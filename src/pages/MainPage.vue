<template>
  <div class="page search-page">
    <div>
      <div class="search-page__headline">
        <h1>Find out stats about any Instagram account</h1>
        <h2>Just enter account name</h2>
      </div>
      <form
        @submit.prevent="submitSearch"
        novalidate="true"
        class="search-page__form"
      >
        <input
          v-model="username"
          type="text"
          class="search-page__input"
        >
        <button>Search</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainPage",
    data: () => ({
      username: ""
    }),
    methods: {
      submitSearch() {
        const location = {
          name: "search",
          params: {
            username: this.username
          }
        }
        this.$router.push(location);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-page {
    display: grid;
    height: 100%;
    align-items: center;

    text-align: center;

    &__headline {
      margin-bottom: 20px;
    }

    &__form {
      display: flex;
      max-width: 500px;
      margin: 0 auto;
    }

    &__input {
      margin-right: 10px;
    }
  }
</style>