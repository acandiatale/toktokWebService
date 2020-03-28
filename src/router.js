import Vue from 'vue'
import VueRouter from 'vue-router'
import introduction from './components/introduction/Introduction'
import care from './components/care/Care'
import chuna from './components/chuna/Chuna'
import jaw from './components/jaw/Jaw'
import story from './components/story/Story'
import center from './components/center/Center'
import main from './components/Main'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/main', component: main},
        // introduction components
        {path: '/introduction', component: introduction},
        // care components
        {path: '/care', component: care},
        // chuna components
        {path: '/chuna', component: chuna},
        // jaw components
        {path: '/jaw', component: jaw},
        // story components
        {path: '/story', component: story},
        // center components
        {path: '/center', component: center}
    ]
});

export default router