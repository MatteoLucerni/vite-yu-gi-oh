<script>
import AppCards from './components/AppCards.vue'

export default {
    components: {
        AppCards
    }
}

</script>

<template>
    <div class="container">
        <main class="border border-info p-5">
            <div class="d-flex justify-content-center flex-wrap">
                <AppCards />
            </div>
        </main>
    </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
