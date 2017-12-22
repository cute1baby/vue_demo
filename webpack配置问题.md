#需要在vue中加入一些icon小图标，那么可以在Webpack.dev.conf.js文件里plugins里面加入这段代码：
```
new HtmlWebpackPlugin({
   filename: 'index.html',
   template: 'index.html',
   inject: true,
   favicon: './favicon.ico'
})
```

#loader的使用：
**Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。**
```
如果我们需要在应用中添加 css 文件，就需要使用到 css-loader 和 style-loader，他们做两件不同的事情，css-loader 会遍历 CSS 文件，然后找到 url() 表达式然后处理他们，style-loader 会把原来的 CSS 代码插入页面中的一个 style 标签中。

接下来我们使用以下命令来安装 css-loader 和 style-loader(全局安装需要参数 -g)。
cnpm install css-loader style-loader


> * 如何配置文件的问题：
app/webpack.config.js文件的配置
module.exports = {
    entry: "./runoob1.js",      //入口
    output: {               //输出
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [      //配置css-loader
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};

> * 插件在webpack 的配置信息 plugins 选项中指定，用于完成一些 loader 不能完成的工作
使用内置插件需要通过以下命令来安装：(打包编译依赖插件)
cnpm install webpack --save-dev

var webpack=require('webpack');
module.exports = {
    entry: "./runoob1.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins:[
      new webpack.BannerPlugin('菜鸟教程 webpack 实例')
    ]
};
那么可以看到文件头部出现我们制定的注释信息

> * 开发环境：
(1)当项目逐渐变大，webpack 的编译时间会变长，可以通过参数让编译的输出内容带有进度和颜色。
webpack --progress --colors
(2)如果不想每次修改模块后都重新编译，那么可以启动监听模式。开启监听模式后，没有变化的模块会在编译后缓存到内存中，而不会每次都被重新编译，所以监听模式的整体速度是很快的。
webpack --progress --colors --watch

```
## 貌似后面的这些没有任何作用。
