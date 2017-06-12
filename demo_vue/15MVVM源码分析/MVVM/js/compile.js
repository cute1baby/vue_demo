function Compile(el, vm) {
    //保存vm
    this.$vm = vm;
    //this是Compile的实例对象
    //$el必须是元素节点
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);
//只有元素存在才需要去做编译工作
    if (this.$el) {
        //得到一个包含了除了el之外的所有子节点为fragment对象
        this.$fragment = this.node2Fragment(this.$el);
        //初始化：对所有的fragment中的所有节点进行编译处理。
        this.init();
        //将fragment添加到el中
        this.$el.appendChild(this.$fragment);
    }
}

Compile.prototype = {
    node2Fragment: function(el) {
        //创建一个空的fragment对象
        var fragment = document.createDocumentFragment(),
            child;

        // 取出el中所有的子节点添加到fragment中
        while (child = el.firstChild) {
            fragment.appendChild(child);
        }

        return fragment;
    },

    init: function() {
        //对fragment中所有的子节点进行编译处理
        this.compileElement(this.$fragment);
    },

    compileElement: function(el) {
        //得到元素中的所有子节点(文本节点（换行/表达式）和元素节点)
        var childNodes = el.childNodes,
        //保存Compile的实例对象
            me = this;
//遍历所有子节点
        [].slice.call(childNodes).forEach(function(node) {
            //node代表某一个子节点
            //得到文本内容
            var text = node.textContent;
            //创建正则对象：匹配表达式
            var reg = /\{\{(.*)\}\}/;
            //如果是元素节点，调用compile()去编译此节点
            if (me.isElementNode(node)) {
                me.compile(node);
                //如果是表达式文本节点，调用compileText()进行编译处理
            } else if (me.isTextNode(node) && reg.test(text)) {
                me.compileText(node, RegExp.$1);
            }
            //如果还有下一级子节点[node.childNodes.length >0那么能够进入里面]
            if (node.childNodes && node.childNodes.length) {
                //去编译node的多有子节点：递归调用
                me.compileElement(node); //自己调用自己
            }
        });
    },
    /*编译当前元素节点上的指令*/
    compile: function(node) {
        var nodeAttrs = node.attributes,
            me = this;

        [].slice.call(nodeAttrs).forEach(function(attr) {
            var attrName = attr.name;
            if (me.isDirective(attrName)) {
                var exp = attr.value;
                var dir = attrName.substring(2);
                // 事件指令
                if (me.isEventDirective(dir)) {
                    compileUtil.eventHandler(node, me.$vm, exp, dir);
                    // 普通指令
                } else {
                    compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
                }

                node.removeAttribute(attrName);
            }
        });
    },

    compileText: function(node, exp) {
        compileUtil.text(node, this.$vm, exp);
    },

    isDirective: function(attr) {
        return attr.indexOf('v-') == 0;
    },

    isEventDirective: function(dir) {
        return dir.indexOf('on') === 0;
    },

    isElementNode: function(node) {
        return node.nodeType == 1;
    },

    isTextNode: function(node) {
        return node.nodeType == 3;
    }
};

// 指令处理集合
var compileUtil = {
    text: function(node, vm, exp) {
        this.bind(node, vm, exp, 'text');
    },

    html: function(node, vm, exp) {
        this.bind(node, vm, exp, 'html');
    },

    model: function(node, vm, exp) {
        this.bind(node, vm, exp, 'model');

        var me = this,
            val = this._getVMVal(vm, exp);
        node.addEventListener('input', function(e) {
            var newValue = e.target.value;
            if (val === newValue) {
                return;
            }

            me._setVMVal(vm, exp, newValue);
            val = newValue;
        });
    },

    class: function(node, vm, exp) {
        this.bind(node, vm, exp, 'class');
    },

    bind: function(node, vm, exp, dir) {
        var updaterFn = updater[dir + 'Updater'];

        updaterFn && updaterFn(node, this._getVMVal(vm, exp));

        new Watcher(vm, exp, function(value, oldValue) {
            updaterFn && updaterFn(node, value, oldValue);
        });
    },

    // 事件处理
    eventHandler: function(node, vm, exp, dir) {
        var eventType = dir.split(':')[1],
            fn = vm.$options.methods && vm.$options.methods[exp];

        if (eventType && fn) {
            node.addEventListener(eventType, fn.bind(vm), false);
        }
    },

    _getVMVal: function(vm, exp) {
        var val = vm;
        exp = exp.split('.');
        exp.forEach(function(k) {
            val = val[k];
        });
        return val;
    },

    _setVMVal: function(vm, exp, value) {
        var val = vm;
        exp = exp.split('.');
        exp.forEach(function(k, i) {
            // 非最后一个key，更新val的值
            if (i < exp.length - 1) {
                val = val[k];
            } else {
                val[k] = value;
            }
        });
    }
};


var updater = {
    textUpdater: function(node, value) {
        node.textContent = typeof value == 'undefined' ? '' : value;
    },

    htmlUpdater: function(node, value) {
        node.innerHTML = typeof value == 'undefined' ? '' : value;
    },

    classUpdater: function(node, value, oldValue) {
        var className = node.className;
        className = className.replace(oldValue, '').replace(/\s$/, '');

        var space = className && String(value) ? ' ' : '';

        node.className = className + space + value;
    },

    modelUpdater: function(node, value, oldValue) {
        node.value = typeof value == 'undefined' ? '' : value;
    }
};