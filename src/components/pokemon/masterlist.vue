<template>
    <div class="container">
        <div>
            <b-form-input v-model="searchPokemon" placeholder="Enter pokemon name"></b-form-input>
            <b-table striped hover :items="items" :fields="fields" id="pokemonlist" :perpage="perPage">
                <template #cell(image)="row">
                    <img :src="row.item.image" alt="Product Image" class="img-thumbnail">
                </template>

                <template #cell(button)="row">
                    <b-button @click="handleButtonClick(row.item)" variant="primary">Add as a favorite pokemon</b-button>
                </template>
            </b-table>
            <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="pokemonlist"
            ></b-pagination>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'MasterList',
        data() {
            return {
                perPage: 20,
                currentPage: 1,
                searchPokemon: '',
                fields: [
                    {
                        key: 'image',
                        label: 'Image'
                    },
                    {
                        key: 'name',
                        label: 'Name'
                    },
                    {
                        key: 'button',
                        label: 'Action'
                    }
                   
                ],
                items: [
                    { image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png', name: 'Pikachu' },
                ]
            }
        }
    }
</script>