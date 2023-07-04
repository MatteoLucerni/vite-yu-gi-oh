import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
library.add(faBolt);
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
