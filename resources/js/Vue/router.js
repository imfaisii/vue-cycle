import { createRouter,createWebHistory } from "vue-router";

import  cycleComponent from  "./Components/cycle.vue"  ;
import methodVsFunction from  "./Components/method-vs-function.vue";
import testComputed from "./Components/testing-computed.vue";
const routes=[
    {
        path:'/vue-cycle',
        name:'cycle.index',
        component:cycleComponent,
    },
    {
        path:'/method-vs-function',
        name:'mehtod_vs_function.index',
        component:methodVsFunction,
    },
    {
        path:'/test-computed',
        name:'test_computed.index',
        component:testComputed,
    }
];
export default createRouter({
history:createWebHistory(),
routes:routes,
});
