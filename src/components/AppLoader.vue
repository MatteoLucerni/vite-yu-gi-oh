<script>
export default {
    props: {
        isLoaded: Boolean,
    },
    data() {
        return {
            isEmpty: false
        }
    }
}
</script>

<template>
    <h1 v-if="isLoaded === false && isEmpty === false" class="text-white">
        <font-awesome-icon icon="fa-solid fa-bolt" />Carico...
    </h1>
</template>