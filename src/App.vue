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
                    this.pokemons.push(res.data.docs)
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
        <main>
            <div class="row">
                <div class="col-2">
                    <h1>
                        CIAOOOOO
                    </h1>
                </div>
                <div class="col-2">
                    <h1>
                        CIAOOOOO
                    </h1>
                </div>
                <div class="col-2">
                    <h1>
                        CIAOOOOO
                    </h1>
                </div>
                <div class="col-2">
                    <h1>
                        CIAOOOOO
                    </h1>
                </div>
                <div class="col-2">
                    <h1>
                        CIAOOOOO
                    </h1>
                </div>
                <div class="col-2">
                    <h1>
                        CIAOOOOO
                    </h1>
                </div>
                <div class="col-2">
                    <h1>
                        CIAOOOOO
                    </h1>
                </div>
                <div class="col-2">
                    <h1>
                        CIAOOOOO
                    </h1>
                </div>
                <div class="col-2">
                    <h1>
                        CIAOOOOO
                    </h1>
                </div>
                <div class="col-2">
                    <h1>
                        CIAOOOOO
                    </h1>
                </div>
                <div class="col-2">
                    <h1>
                        CIAOOOOO
                    </h1>
                </div>
            </div>
        </main>
    </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>
