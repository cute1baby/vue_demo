import loadingComponent from './loading.vue';
var Loading = {
    install:function(vue){   //记住是conponent
        vue.component('Loading',loadingComponent);
    }
}
export default Loading;  //这种方式是方便Loading能够作为组件来使用，不需要在需要使用的组件中每次都import就可以使用。
