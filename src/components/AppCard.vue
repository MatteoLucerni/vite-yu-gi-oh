<script>
export default {
    props: {
        name: String,
        number: String,
        type: String,
        imageUrl: String
    }
}
</script>

<template>
    <div class="d-flex align-items-center flex-grow-1">
        <img :src="imageUrl" :alt="name">
    </div>

    <div class="text-center">
        <div>
            {{ number }}
        </div>
        <h4>{{ name }}</h4>
        <h6>
            {{ type }}
        </h6>
    </div>
</template>

<style scoped>
h1 {
    font-size: 80px;
}
</style>