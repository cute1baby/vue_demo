#收集基本的报错问题：

(1)第一类问题：can not resolve 'babel' in ... it is no longer allowed to omit the '-loader' suffix when using loaders
这一类问题是之前的webpack写法的变动导致的，之前在写webpack.config.js中写的是css /style/file/babel  需要修改成
css-loader/style-loader/file-loader/babel-loader


(2)引入的tabbar需要依赖于tab-container的引入而成功的，并且要参照报错机制【一般都是准确的】。然后设置v-model="selected" ，这里的selected赋值为'1'(字符串的1)。而不是因为没有引入什么loader插件而引起的。


(3)定义一个自定义的组件tab.然后这个组件的结构是：

```
tab
	tab.vue
	index.js
该组件定义了功能之后，在indexjs上向外暴露=>
import tabs from './tab'
export default {
	install:function(Vue){
		Vue.component('tab',tabs);
	}
}
在manjs上面直接引用tab组件
	import tab from './components/tab'
	Vue.use(tab);
	<tab></tab>
```


