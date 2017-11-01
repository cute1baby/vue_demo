import Home from './component/home.vue';
import News from './component/news.vue';
export default{
    routes:[
        {path:'/home',component:Home},
        {path:'/news',component:News},
        {path:'*',redirect:'/home'}
    ]
}