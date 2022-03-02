/** @format */

import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import MegaMenu from 'primevue/megamenu';
import InputText from 'primevue/inputtext';
import router from './router';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App);
app.use(router);
app.use(PrimeVue, { ripple: true });

app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('MegaMenu', MegaMenu);

app.mount('#app');
