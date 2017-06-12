function MVVM(options) {
    //保存options配置对象
    this.$options = options || {};
    // 保存配置对象中的data数据对象
    var data = this._data = this.$options.data;
    //保存vm对象
    var me = this;

    // 数据代理
    // 实现 vm.xxx -> vm._data.xxx


    //遍历data中的所有属性
    Object.keys(data).forEach(function(key) { //key属性名
        //实现key的属性操作
        me._proxyData(key);
    });

    this._initComputed();

    observe(data, this);
    //创建用于编译模板的compile对象,这里的this指的是vm.
    //options.el || document.body:判断在MVVM对象中有没有定义el,如果存在那么使用定义的那个;否则定义为body.
//编译模板中的表达式和指令
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    _proxyData: function(key, setter, getter) {
        //这里的this是vm，保存vm对象[关键在于me是vm]
        var me = this;
        //给vm定义指定属性名的属性描述符
        setter = setter || 
        Object.defineProperty(me, key, {
            configurable: false, //不能通过defineProperty进行修改
            enumerable: true,  //可以枚举
            //通过读取data中对应的属性值返回当前属性值
            get: function proxyGetter() {  
                return me._data[key];
            },
            //当vm中此属性值发生变化时，就去修改data中对应的属性值。即当该属性值发生变化的时候，
            //那么就会保存到me中的_data中。
            set: function proxySetter(newVal) {  
                me._data[key] = newVal;
            }
        });
    },

    _initComputed: function() {
        var me = this;
        var computed = this.$options.computed;
        if (typeof computed === 'object') {
            Object.keys(computed).forEach(function(key) {
                Object.defineProperty(me, key, {
                    get: typeof computed[key] === 'function' 
                            ? computed[key] 
                            : computed[key].get,
                    set: function() {}
                });
            });
        }
    }
};