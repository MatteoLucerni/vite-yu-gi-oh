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
}
</script>

<template>
    <select class="form-select" v-model="selectedType" @change="$emit('changedFilter', this.selectedType)">
        <option v-for="pokemonType in pokemonTypes">{{ pokemonType }}
        </option>
    </select>
</template>