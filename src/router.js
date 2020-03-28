import Vue from 'vue'
import VueRouter from 'vue-router'
import routeritem from './routeritem'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routeritem,
});

export default router