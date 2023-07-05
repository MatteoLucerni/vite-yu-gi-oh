<script>
import { store } from '../data/store'
export default {
    props: {
        pokemonTypes: Array
    },
    data() {
        return {
            selectedType: store.selectedType
        }
    },
    emits: ['changed-filter']
}
</script>

<template>
    <select class="form-select" v-model="selectedType" @change="$emit('changed-filter', this.selectedType)">
        <option selected>--</option>
        <option v-for="pokemonType in pokemonTypes">{{ pokemonType }}
        </option>
    </select>
</template>