<script>
import AppCards from './components/AppCards.vue'

export default {
    components: {
        AppCards
    }
}

</script>

<template>
    <h1 class="text-center text-white pt-4">POKEDEX</h1>
    <div class="main-container d-flex justify-content-center">
        <main>
            <div class="cards-container d-flex justify-content-center flex-wrap">
                <AppCards />
            </div>
            <img class="poke-image" src="./assets/img/background-pokedex.jpg" alt="">
        </main>
    </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
