import axios from 'axios'
import url from './setters'

export default{
    getAllPokemons : ({commit}) => {
        axios.get(url.all_pokemon)
        .then(response=>{
            commit('setPokemons', response.data)
        })
    },

    getPokemonDetails : ({commit}, payload) => {
        axios.get(url.pokemon+payload)
        .then(response=>{
            commit('setPokemon', response.data)
        })
    }
}