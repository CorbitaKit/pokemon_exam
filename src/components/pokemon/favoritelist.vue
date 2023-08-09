<template>
    <div class="container">
        <div>
            <b-table striped hover :items="paginatedList" :fields="fields" id="favoritePokemon" :per-page="perPage">
                <template #cell(button)="button">
                    <b-button @click="getPokemon(button.item)" variant="primary">View Details</b-button>
                </template>
            </b-table>
            <b-pagination
            v-model="currentPage"
            :total-rows="favorites.length"
            :per-page="perPage"
            aria-controls="favoritePokemon"
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
                perPage: 5,
                currentPage: 1,
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
        computed: {
            ...mapGetters({
                favorites: 'getFavoritePokemons'
            }),
            paginatedList() {
                const startIndex = (this.currentPage - 1) * this.perPage;
                const endIndex = startIndex + this.perPage;
                return this.favorites.slice(startIndex, endIndex);
            },
        },
        
        methods: {
            ...mapActions({
                getPokemonDetails: 'getPokemonDetails',
            }),
            getPokemon(pokemon) {
                this.getPokemonDetails(pokemon.name)
            }
        }
    }
</script>