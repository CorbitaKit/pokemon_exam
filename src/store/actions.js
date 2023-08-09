import axios from 'axios'
import url from './setters'

export default{
    getAllPokemon : ({commit}, payload) => {
        axios.get(url.all_pokemon)
        .then(response=>{
            commit('setPokemons', response.data)
        })
    }
}