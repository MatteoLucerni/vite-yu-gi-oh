import { reactive } from 'vue';

export const store = reactive({
  pokemons: [],
  pokemonTypes: [],
  pages: {
    prev: null,
    next: 2,
  },
  selectedType: '--',
});
