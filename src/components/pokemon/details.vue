<template>
    <div class="container">
        <b-row>
            <div class="mt-4">
                <h4>{{  pokemon.name }}</h4>
                <b-card >
                    <b-card-text>
                        <p>Weight: {{  pokemon.weight  }}</p>
                        <p>
                            Abilities:
                            <b-list-group>
                                <b-list-group-item v-for="(ability, i) in pokemon.abilities">{{ ability.ability.name }}</b-list-group-item>
                            </b-list-group>
                        </p>
                    </b-card-text>
                    <b-card-body>
                        <b-row>
                            <b-col v-for="(image, i) in pokemon.sprites">
                                <b-img v-if="image" thumbnail fluid :src="image"></b-img>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
                
            </div>
        </b-row>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default{
        computed: {
            ...mapGetters({
                pokemon : 'getPokemon'
            })
        }
    }
</script>