import introduction from './components/introduction/Introduction'
import introduction02 from './components/introduction/introduction02'
import introduction03 from './components/introduction/introduction03'
import introduction04 from './components/introduction/introduction04'
import introduction05 from './components/introduction/introduction05'
import care from './components/care/Care'
import chuna from './components/chuna/Chuna'
import jaw from './components/jaw/Jaw'
import story from './components/story/Story'
import center from './components/center/Center'
import main from './components/Main'

let routes = [
    {path: '/main', component: main},
    // introduction components
    {path: '/introduction', component: introduction},
    {path: '/introduction02', component: introduction02},
    {path: '/introduction03', component: introduction03},
    {path: '/introduction04', component: introduction04},
    {path: '/introduction05', component: introduction05},
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
export default routes;