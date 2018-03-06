
#### 我的个人网站

 - 首先得说说创建个人网站的初衷。前些天和几个朋友闲聊到，顺便再知乎上逛了逛，发现现在的培训机构可了不得啦，这些培训生出来的个个都是龙腾虎跃的，还有老师帮忙做简历啊，做项目培训和模拟面试啊，甚至还有专门的指导来做个人网站。好家伙，这还怎么玩，连应届生都有个人网站了，咱们这些上了一些年纪的人还不要撑撑场面。行吧，那就整起来，思前想后，果断借鉴了二哲兄弟的个人博客作为参考，所以有了这个人网站。不得不说，二哲同学还是对设计和美学有一些研究的，这个网站我一眼看上去就能体现自己的个性，而且言简意赅，看文章写文章都很直白，用老牛的话说就是很赤裸裸。
 - 下面来看一下这个小网站的架构部分。很简单，一眼看过去就明白了这是依赖于vue脚手架的设计，有工具就好办了，那什么vue-router,axios全来吧（感觉说起来很牛逼，但是也没用到几个牛逼的东西）。页面部分呢，因为暂时只是以写文章为主，所以只有两个主要的页面（文章列表和详情），那接下来就看整体文件目录结构咯：
	```
	|- build
	|- config
	|- node_modules
	|- src
		|-assets
		|-components
			|-appbg.vue
			|-todo.vue
			|-todolist.vue
	|- routes
		|- index.js
	|- App.js
	|- main.js
	|- static
		|- articles
		|- config
		|- img
	...
	index.html

	```


- 大概是看了这个文件目录之后基本上都明白的差不多了呢？嗯，我这里再多余得八婆几句：我把我写的文章都是放在articles文件夹下面的，存放的格式是markdown文件，所以我这里就省去了存库的必要了。所以我要做的事情就是，在跳转详情页的时候ajax的方式把对应的文件请求过来，塞到页面上去。也没有多余的一些节点的操作和动画内容，我个人觉得这种简单粗暴的东西是最好的，同时这里有两点需要注意：
	 - （1）我在获取md文件的时候，需要把markdown标签转化为html标签，塞进去页面才能够读取。这里我要感谢牛逼的marked插件帮我完成了这件事。并且幸运的我也找到也对应的初始化markdown文本的css样式文件，这样就能跟样式重置一样看到这些内容了。
	 - （2）另外一个问题就是在主页上点击阅读全文的时候怎么样找到对应的那批那文章呢？我这里的做法是通过该文章对应list上的id寻址，找到对应的文件md文件。



- 总的来说这个项目(与其说是项目,不如说是一个小栗子)还是非常的简单，也应该是我把整体的功能做的太简单了。嗯，我觉得即使很简单，我也还是记录一下这一天，毕竟这会是一个很好的开始嘛！

最后我觉得下面几件事是这几天必须要做的，咱们就列出来，希望有志同道合的朋友一起进步，与大家共勉：

	- [X] 用一个星期的时间将<<刻意练习>>看完第一遍
	- [X] 在github上面找一些大牛的作品,完整的看一遍，理解他们的整体架构和逻辑，整理好了我会以博客的方式分享给大家。
	- [X] 周末与朋友谢相聚吹吹牛,晒晒太阳，增进感情。

	- 如此以往：我又能够搞出点动静来了！