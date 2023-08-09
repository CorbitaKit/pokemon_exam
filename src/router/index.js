import Vue from 'vue'
import VueRouter from 'vue-router'
import MasterList from '../components/pokemon/masterlist.vue'
import FavoritePokemon from '../components/pokemon/favoritelist.vue'
import PokemonDetails from '../components/pokemon/details.vue'
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
    },
    {
      path: '/details',
      name: 'details',
      component: PokemonDetails
    }
  ]
})

export default router
