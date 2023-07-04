
<script>
import { store } from '../data/store'
export default {
    data() {
        return {
            userFilter: store.userFilter
        }
    }
}
</script>

<template >
    <div class="d-flex flex-column align-items-center text-center">
        <label class="text-white fs-3 fw-bold" for="search">
            Filtra per nome:
        </label>
        <input @keyup="$emit('modifiedFilter', this.userFilter)" v-model.trim="userFilter" id="search" class="form-control"
            type="text" placeholder="Cerca...">
    </div>
</template>

<style scoped>
input {
    width: 50%;
}
</style>