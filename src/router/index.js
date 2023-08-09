import Vue from 'vue'
import VueRouter from 'vue-router'
import MasterList from '../components/pokemon/masterlist.vue'
import FavoritePokemon from '../components/pokemon/favoritelist.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'MasterList',
      component: MasterList
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritePokemon
    }
  ]
})

export default router
