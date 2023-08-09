<template>
    <div class="container">
        <div>
            <b-table striped hover :items="items" :fields="fields">
                <template #cell(image)="row">
                    <img :src="row.item.image" alt="Product Image" class="img-thumbnail">
                </template>

                <template #cell(button)="row">
                    <b-button @click="handleButtonClick(row.item)" variant="primary">Click Me</b-button>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'MasterList',
        data() {
            return {
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