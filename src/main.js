import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import Button from "primevue/button"; // component
import InputText from "primevue/inputtext"; // component
import Toast from "primevue/toast"; // component
import ToastService from "primevue/toastservice"; // component

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);

// eslint-disable-next-line vue/multi-word-component-names
app.component("Button", Button);
app.component("InputText", InputText);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Toast", Toast);

app.mount("#app");
// createApp(App).mount("#app");
