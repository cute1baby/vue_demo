tansition1.0的使用使用方法：
.fade-transtion{}  //运动的时间和最后的现象
.fade-enter,fade-leave{}   //进入之间和出去之后的状态，即最后的状态

html部分：
<div transition="fade">

</div>



tansition2.0的使用使用方法：
.fade-enter-active{}  //进入之后的状态
.fade-leave-active{}  //出去之后的状态

.fade-enter{}  //进入的初始状态
.fade-leave{}  //离开后的状态[一般不写,因为.fade-enter一般是一样的]

html部分：
<transition name="fade">
	<p>这里是显示的内容</p>
</transition>


同时2.0版本配合animate.css使用的时候,我们一般这样来做：
<transition  enter-active-class="bounceInLeft" leave-active-class="bounceOutLeft">
	<p class="animated">这里是显示的内容</p>
</transition>
把对应的name="fade"给去掉，换成对应的enter-active-class=""和leave-active-class="",并且在p里面添加一个类名是class="animated".并且把对应的这些动画给删除掉,留下p标签对应的央视就可以。

注意：
transition组件只能让里面的第一层元素进行运动。
