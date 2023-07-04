<script>
import AppCard from './components/AppCard.vue'
import AppLoader from './components/AppLoader.vue'
import AppSelect from './components/AppSelect.vue'
import AppPageChanger from './components/AppPageChanger.vue'
import axios from 'axios';
import { store } from './data/store'

export default {
    components: {
        AppCard,
        AppLoader,
        AppSelect,
        AppPageChanger,
    },
    data() {
        return {
            pokemons: store.pokemons,
            pokemonTypes: store.pokemonTypes,
            isLoaded: false,
            endpoint: 'sort[number]=desc',
            hasPrev: false,
            hasNext: false
        }
    },
    methods: {
        fetchPokemons(value) {
            // reset
            this.isLoaded = false
            this.pokemons = [];

            //tipi di endpoints
            const filteredEndpoint = `eq[type1]=${value}&sort[number]=desc`

            const currentEndpoint = value === '--' ? this.endpoint : filteredEndpoint

            // chiamata
            axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?${currentEndpoint}`).then(
                res => {
                    console.log(res.data)
                    store.pages.prev = res.data.prevPage
                    store.pages.next = res.data.nextPage

                    this.hasNext = res.data.hasNextPage ? true : false
                    this.hasPrev = res.data.hasPrevPage ? true : false

                    res.data.docs.forEach(doc => {

                        // estrazione solo valori necessari
                        this.pokemons.push(
                            {
                                number: doc.number,
                                name: doc.name,
                                type1: doc.type1,
                                imageUrl: doc.imageUrl
                            }
                        )
                    });
                    // rimozione loader
                    if (this.pokemons.length >= 10) this.isLoaded = true;
                }
            )

        },
        fetchType() {
            axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1').then(
                res => {
                    res.data.forEach(type => {
                        this.pokemonTypes.push(type)
                    })
                }
            )
        },
        fetchNextPage() {
            this.endpoint = `sort[number]=desc&page=${store.pages.next}`
            this.fetchPokemons(store.selectedType)
        },
        fetchPrevPage() {
            this.endpoint = `sort[number]=desc&page=${store.pages.prev}`
            this.fetchPokemons(store.selectedType)
        }
    },
    created() {
        this.fetchPokemons(store.selectedType)
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
            <AppSelect :pokemonTypes="pokemonTypes" @changedFilter="fetchPokemons" />
            <AppPageChanger @changedPageNext="fetchNextPage" @changedPagePrev="fetchPrevPage" :hasNext="hasNext"
                :hasPrev="hasPrev" />
        </main>
    </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
