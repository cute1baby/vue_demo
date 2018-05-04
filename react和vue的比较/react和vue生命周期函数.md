# react生命周期函数：
> * Mounting：已插入真实 DOM
> * Updating：正在被重新渲染
> * Unmounting：已移出真实 DOM[]

```
**componentWillMount**:在渲染前调用,在客户端也在服务端。[在render之前]
**componentDidMount**: 在第一次渲染后调用。组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。

**componentWillReceiveProps**: 在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。一般在发送ajax请求或者信息订阅的时候使用该函数。

**componentWillUpdate**:在组件接收到新的props或者state但还没有render时被调用。[重点是强调在有初始值的基础上修改了原始值]在初始化时不会被调用。
**componentDidUpdate**:在组件完成更新后立即调用。在初始化时不会被调用。

**componentWillUnmount**:在组件从 DOM 中移除的时候立刻被调用。
```


# vue生命周期函数：
```
vue2.0              描述
beforeCreate    组件实例刚被创建,组件属性计算之前, 如data属性等 。如何使用呢？无法在审查元素中打印出来【举个例子，可以在这里加上一个loading事件。】

// 个人见解：就是在created周期函数执行的时候，此时已经能够拿到data中的值了。而向后台发送请求的过程其实也就是请求数据的过程，此时不涉及dom节点的渲染，所以个人认为向后台发送请求数据这一步完全可以在created函数中实现。
created        组件实例创建完成,data里面的数据可以拿到,但DOM节点还没有完成。【在这结束loading，还做一些初始化，实现函数自执行 】

beforeMount      模版编译/挂载之前
mounted        模版编译/挂载之后，DOM和属性都渲染完成(不保证组件已在document中)【在这发起后端请求，拿回数据，配合路由钩子做一些事情 。对应react的componentWillReceiveProps函数】

beforeUpdate     组件更新之前
updated     	组件更新之后

actived          keep-alive,组件被激活时调用
deactivated      keep-alive,组件被移除时调用

beforeDestory     组件销毁前调用【你确认删除XX吗？一般在使用中很少销毁组件节点的吧】
destoryed         组件销毁后调用【当前组件已被删除，清空相关内容 】
```
