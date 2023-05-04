import "./bootstrap";

import { createApp } from "vue";
import cycleComponent from "./Vue/Components/cycle.vue";
import Router from "./Vue/router.js";
const app = Vue.createApp({
    components: {},
})
    .use(router)
    .mount("#app");
