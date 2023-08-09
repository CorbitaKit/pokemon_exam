export default{
    setPokemons : (state, payload) => {
        state.previous = payload.previous
        state.next = payload.next
        for (let i = 0; i < payload.results.length; i ++) {
            state.pokemons.push(
                {
                    name: payload.results[i].name
                }
            )
        }
        console.log(state.pokemons)
    }
}