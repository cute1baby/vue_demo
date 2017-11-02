import loadingComponent from './loading.vue';
var Loading = {
    install:function(vue){   //记住是conponent
        vue.component('Loading',loadingComponent);
    }
}
export default Loading;