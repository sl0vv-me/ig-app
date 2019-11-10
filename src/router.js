import VueRouter from "vue-router"

import MainPage from "./pages/MainPage"
import UserPage from "./pages/UserPage"

const routes = [
  {
    name: "home",
    path: "/",
    component: MainPage
  }, {
    name: "search",
    path: "/user/:username",
    component: UserPage
  }
]
const router = new VueRouter({routes})
export default router
