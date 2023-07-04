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
            isLoaded: false
        }
    },
    methods: {
        getPokemons() {
            axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?eq[type1]=Electric&sort[number]=desc').then(
                (res) => {
                    res.data.docs.forEach(doc => {
                        this.pokemons.push(doc)
                    });
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
    <h1 class="text-center text-white pt-4">POKEDEX</h1>
    <div class="main-container d-flex justify-content-center">
        <main>
            <div class="cards-container d-flex justify-content-center flex-wrap">
                <AppLoader :isLoaded="isLoaded" />
                <div v-for="pokemon in pokemons" :key="pokemon.number" class="card">
                    <AppCard :number="pokemon.number" :imageUrl="pokemon.imageUrl" :name="pokemon.name"
                        :type="pokemon.type1" />
                </div>
            </div>
            <img class="poke-image" src="./assets/img/background-pokedex.jpg" alt="">
        </main>
    </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
