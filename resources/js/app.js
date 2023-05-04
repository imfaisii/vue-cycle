import "./bootstrap";

import { createApp } from "vue/dist/vue.esm-bundler";
import cycleComponent from "./Vue/Components/cycle.vue";
import Router from "./Vue/router.js";
const app = createApp({
    components: {cycleComponent},
})
    .use(Router)
    .mount("#app");
