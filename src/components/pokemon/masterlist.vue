<template>
    <div class="container">
        <div>
            <b-table striped hover :items="paginatedList" :fields="fields" id="pokemonlist" :per-page="perPage">
                <template #cell(button)="button">
                    <b-button v-if="! addedAsFavorite(button.item)" @click="addPokemonToFavorite(button.item)" variant="primary">Add as a favorite pokemon</b-button>
                </template>
            </b-table>
            <b-pagination
            v-model="currentPage"
            :total-rows="pokemons.length"
            :per-page="perPage"
            aria-controls="pokemonlist"
            ></b-pagination>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default{
        name: 'MasterList',
        data() {
            return {
                perPage: 10,
                currentPage: 1,
                searchPokemon: '',
                fields: [
                    {
                        key: 'name',
                        label: 'Name'
                    },
                    {
                        key: 'button',
                        label: 'Action'
                    }
                ],
            }
        },

        created() {
            this.fetchPokemons()
        },

        computed: {
            ...mapGetters({
                pokemons: 'getPokemons',
                favorites: 'getFavoritePokemons'
            }),
            paginatedList() {
                const startIndex = (this.currentPage - 1) * this.perPage;
                const endIndex = startIndex + this.perPage;
                return this.pokemons.slice(startIndex, endIndex);
            },
        },
        
        methods: {
            ...mapActions({
                fetchPokemons: 'getAllPokemons',
            }),

            addPokemonToFavorite(pokemon) {
                this.favorites.push({
                    name: pokemon.name
                })
            },
            
            addedAsFavorite(pokemon) {
                const isAlreadyAdded = this.favorites.some(favorite => favorite.name === pokemon.name)
                return isAlreadyAdded
            }
        }
    }
</script>