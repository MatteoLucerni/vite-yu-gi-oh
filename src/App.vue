<script>
import axios from 'axios';
import { store } from './data/store'
export default {
    data() {
        return {
            pokemons: store.pokemons
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
    <div class="container">
        <main class="border border-info">
            <div class="row justify-content-center">
                <div v-for="pokemon in pokemons" class="col-1">
                    <div class="card">
                        <div>
                            {{ pokemon.code }}
                        </div>
                        <h4>{{ pokemon.name }}</h4>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss';

.card {
    width: 100px;
}
</style>
