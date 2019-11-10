<template>
  <div class="page">
    <h2 class="page__page-title">@{{ $route.params.username }} stats</h2>
    <div class="stats-grid">
      <div class="stats-grid__card stats-grid__card_type_info">
        <h3 class="stats-grid__title">Info</h3>
        <div v-if="userData">
          <div>Full name: {{ userData.full_name }}</div>
          <div>Bio: {{ userData.biography }}</div>
          <div>Followers: {{ userData.follower_count }}</div>
          <div>Following: {{ userData.following_count }}</div>
        </div>
      </div>
      <div class="stats-grid__card stats-grid__card_type_followers">
        <h3 class="stats-grid__title">Followers</h3>
        <div class="followers-list">
          <user-card-list :users="followers"></user-card-list>
        </div>
      </div>
      <div class="stats-grid__card stats-grid__card_type_followers-change">
        <h3 class="stats-grid__title">Followers change</h3>
        <div v-if="followersChangeData">
          <div>New followers: {{ followersChangeData.new_followers.length }}</div>
          <div>Left followers: {{ followersChangeData.left_followers.length }}</div>
        </div>
      </div>
<!--      <div class="stats-grid__card stats-grid__card_type_media">-->
<!--        <h3 class="stats-grid__title">Media</h3>-->

<!--      </div>-->
    </div>
  </div>
</template>

<script>
  import {Request} from "../request"
  import UserCardList from "../components/users/UserCardList"

  export default {
    name: "UserPage",
    components: {
      UserCardList,
    },
    data: () => ({
      userData: null,
      followersChangeData: null,
      followers: [],
    }),
    async beforeRouteEnter(to, from, next) {
      const username = to.params.username;
      const response = await Request.getUser(username);
      next((vm) => vm.userData = response.data);
    },
    async beforeRouteUpdate(to, from, next) {
      const username = to.params.username;
      const response = await Request.getUser(username);
      this.userData = response.data;
      next();
      this.loadUserFollowers(username);
      this.loadUserFollowersChangeData(username);
    },
    methods: {
      async loadUserFollowers(username) {
        const response = await Request.getUserFollowers(username);
        this.followers = response.data.followers;
      },
      async loadUserFollowersChangeData(username) {
        const response = await Request.getUserFollowersChange(username);
        const { new_followers, left_followers } = response.data;
        this.followersChangeData = { new_followers, left_followers };
      }
    },
    created() {
      const username = this.$router.currentRoute.params.username;
      this.loadUserFollowers(username);
      this.loadUserFollowersChangeData(username);
    },
    // updated() {
    //   const username = this.$router.currentRoute.params.username;
    //   this.loadUserFollowers(username);
    // }
  }
</script>

















<style lang="scss" scoped>
  .stats-grid {
    display: grid;
    grid-gap: 10px;
    grid-template-areas:
            "info info"
            "followers followers-change"
            "media media"
    ;
    grid-template-columns: 1fr 1fr;

    &__card {
      padding: 10px;
      border-radius: 2px;

      background-color: #ffffff;
      box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.05);

      &_type_info {
        grid-area: info;
      }
      &_type_followers {
        grid-area: followers;
      }
      &_type_followers-change {
        grid-area: followers-change;
      }
      &_type_media {
        grid-area: media;
      }
    }

    &__title {
      margin-bottom: 15px;
      font-size: 16px;
    }


  }
  .followers-list {
    position: relative;

    height: 245px;
    margin-right: -10px;
    padding-right: 10px;

    overflow-y: auto;
  }
</style>
