<script>
export default {
    props: {
        hasNext: Boolean,
        hasPrev: Boolean
    },
    emits: ['changed-page']
}

</script>

<template>
    <div class="mb-4 mt-3 text-center">
        <button v-if="hasPrev" class="btn" @click="$emit('changed-page', 'prev')">Precedente</button>
        <button v-if="hasNext" class="btn" @click="$emit('changed-page', 'next')">Successiva</button>
    </div>
</template>

<style lang="scss" scoped>
button.btn {
    background-color: #fff;
    margin: 0 5px;

    &:hover {
        background-color: lightgray;
    }
}
</style>