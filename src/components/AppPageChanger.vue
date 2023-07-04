<script>
export default {
    props: {
        hasNext: Boolean,
        hasPrev: Boolean
    }
}

</script>

<template>
    <div class="mb-5 mt-3 text-center">
        <button v-if="hasPrev" class="btn" @click="$emit('changedPagePrev')">Precedente</button>
        <button v-if="hasNext" class="btn" @click="$emit('changedPageNext')">Successiva</button>
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