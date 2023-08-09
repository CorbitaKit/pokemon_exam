<template>
    <div class="container">
        <div>
            <b-form-input v-model="searchPokemon" placeholder="Enter pokemon name"></b-form-input>
            <b-table striped hover :items="pokemons" :fields="fields" id="pokemonlist" :per-page="perPage">
                <template #cell(button)="button">
                    <b-button @click="handleButtonClick(row.item)" variant="primary">Add as a favorite pokemon</b-button>
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
                pokemons: 'getPokemons'
            })
        },
        
        methods: {
            ...mapActions({
                fetchPokemons: 'getAllPokemons',
            })
        }
    }
</script>