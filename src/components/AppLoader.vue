<script>
export default {
    props: {
        isLoaded: Boolean,
    }
}
</script>

<template>
    <h1 v-if="isLoaded === false" class="text-white">
        <font-awesome-icon icon="fa-solid fa-bolt" />Carico...
    </h1>
</template>