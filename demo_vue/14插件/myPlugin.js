(function(window){
	const myPlugin ={};
	myPlugin.install =function(Vue,options){
		//添加全局方法和属性
		Vue.MyGlobalTool =function(){
			console.log('添加全局方法和属性:MyGlobalTool');
		}
		//添加全局资源,自定义属性
		Vue.directive("my-directive",function(value){
			this.el.innerHTML =value.length;
		})
		//添加实例方法
		Vue.prototype.$myMethodself =function(){
			console.log('实例方法:$myMethodself ');
		}
}
window.myPlugin=myPlugin;   //暴露该定义的对象
})(window)