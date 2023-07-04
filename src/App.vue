<script>
import AppCard from './components/AppCard.vue'
import AppLoader from './components/AppLoader.vue'
import axios from 'axios';
import { store } from './data/store'

export default {
    components: {
        AppCard,
        AppLoader,
    },
    data() {
        return {
            pokemons: store.pokemons,
            pokemonTypes: store.pokemonTypes,
            isLoaded: false
        }
    },
    methods: {
        fetchPokemons() {
            axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?eq[type1]=Electric&sort[number]=desc').then(
                res => {
                    res.data.docs.forEach(doc => {
                        this.pokemons.push(
                            {
                                number: doc.number,
                                name: doc.name,
                                type1: doc.type1,
                                imageUrl: doc.imageUrl
                            }
                        )
                    });
                    if (this.pokemons.length >= 10) this.isLoaded = true;
                }
            )

        },
        fetchType() {
            axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1').then(
                res => {
                    console.log(res.data)
                    this.pokemonTypes.forEach(type => {
                        this.pokemonTypes.push(type)
                    })
                }
            )
        }
    },
    created() {
        this.fetchPokemons()
        this.fetchType()
    }
}

</script>

<template>
    <h1 class="text-center text-white pt-4">POKEDEX</h1>
    <div class="main-container d-flex justify-content-center">
        <main>
            <img class="poke-image" src="./assets/img/background-pokedex.jpg" alt="">
            <div class="cards-container d-flex justify-content-center flex-wrap">
                <AppLoader :isLoaded="isLoaded" />
                <div v-for="pokemon in pokemons" :key="pokemon.number" class="card">
                    <AppCard :number="pokemon.number" :imageUrl="pokemon.imageUrl" :name="pokemon.name"
                        :type="pokemon.type1" />
                </div>
            </div>
            <h3 class="text-white mt-3">Filtra per tipo:</h3>
            <select class="form-select">
                <option selected value="1">Tutti i tipi</option>
                <option value="1">ciao</option>
                <option value="1">ciao</option>
                <option value="1">ciao</option>
                <option value="1">ciao</option>
                <option value="1">ciao</option>
                <option value="1">ciao</option>
                <option value="1">ciao</option>

            </select>
        </main>
    </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
