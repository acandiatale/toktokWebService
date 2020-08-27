import introduction from './components/introduction/Introduction'
import introduction02 from './components/introduction/introduction02'
import introduction03 from './components/introduction/introduction03'
import introduction04 from './components/introduction/introduction04'
import introduction05 from './components/introduction/introduction05'
import care from './components/care/Care'
import care1 from './components/care/Care1'
import care2 from './components/care/Care2'
import care3 from './components/care/Care3'
import care4 from './components/care/Care4'
import chuna from './components/chuna/Chuna'
import chuna1 from './components/chuna/Chuna1'
import chuna2 from './components/chuna/Chuna2'
import chuna3 from './components/chuna/Chuna3'
import chuna4 from './components/chuna/Chuna4'
import chuna5 from './components/chuna/Chuna5'
import jaw from './components/jaw/Jaw'
import jaw1 from './components/jaw/Jaw1'
import jaw2 from './components/jaw/Jaw2'
import jaw3 from './components/jaw/Jaw3'
import jaw4 from './components/jaw/Jaw4'
import story from './components/story/Story'
import center from './components/center/Center'
import main from './components/Main'

let routes = [
    {path: '/', component: main},
    // introduction components
    {path: '/introduction', component: introduction},
    {path: '/introduction02', component: introduction02},
    {path: '/introduction03', component: introduction03},
    {path: '/introduction04', component: introduction04},
    {path: '/introduction05', component: introduction05},
    // care components
    {path: '/care', component: care},
    {path: '/care1', component: care1},
    {path: '/care2', component: care2},
    {path: '/care3', component: care3},
    {path: '/care4', component: care4},
    // chuna components
    {path: '/chuna', component: chuna},
    {path: '/chuna1', component: chuna1},
    {path: '/chuna2', component: chuna2},
    {path: '/chuna3', component: chuna3},
    {path: '/chuna4', component: chuna4},
    {path: '/chuna5', component: chuna5},
    // jaw components
    {path: '/jaw', component: jaw},
    {path: '/jaw1', component: jaw1},
    {path: '/jaw2', component: jaw2},
    {path: '/jaw3', component: jaw3},
    {path: '/jaw4', component: jaw4},
    // story components
    {path: '/story', component: story},
    // center components
    {path: '/center', component: center}
]
export default routes;