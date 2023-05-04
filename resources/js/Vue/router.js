import { createRouter,createWebHistory } from "vue-router";

import  cycleComponent from  "./Components/cycle.vue"  ;
const routes=[
    {
        path:'/vue-cycle',
        name:'cycle.index',
        component:cycleComponent,
    },
];

export default createRouter({
history:createWebHistory(),
routes:routes,
});
