<script>
import axios from 'axios';
import { store } from '../data/store'

export default {
    data() {
        return {
            pokemons: store.pokemons,
            isLoaded: false
        }
    },
    methods: {
        getPokemons() {
            axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?eq[type1]=Electric&sort[number]=desc').then(
                (res) => {
                    console.log(res.data)
                    res.data.docs.forEach(doc => {
                        this.pokemons.push(doc)
                    });
                    console.table(this.pokemons)
                    console.log(this.pokemons.length)
                    if (this.pokemons.length === 10) this.isLoaded = true;
                }
            )

        }
    },
    created() {
        this.getPokemons()
    }
}
</script>

<template>
    <h1 v-if="isLoaded === false" class="text-white">
        Loading...
    </h1>
    <div v-else v-for="pokemon in pokemons" class="card">
        <div class="d-flex align-items-center flex-grow-1">
            <img :src="pokemon.imageUrl" :alt="pokemon.name">
        </div>

        <div class="text-center">
            <div>
                {{ pokemon.number }}
            </div>
            <h4>{{ pokemon.name }}</h4>
            <h6>
                {{ pokemon.type1 }}
            </h6>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-size: 80px;
}
</style>