export default{
    setPokemons : (state, payload) => {
        for (let i = 0; i < payload.results.length; i ++) {
            state.pokemons.push(
                {
                    name: payload.results[i].name
                }
            )
        }
    }
}