#需要在vue中加入一些icon小图标，那么可以在Webpack.dev.conf.js文件里plugins里面加入这段代码：
```
new HtmlWebpackPlugin({
   filename: 'index.html',
   template: 'index.html',
   inject: true,
   favicon: './favicon.ico'
})
```

