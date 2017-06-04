<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allSelected"/>
    </label>
    <span>
          <span>已完成{{completedSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" @click="removeAllCom" v-show="completedSize>0">清除已完成任务</button>
  </div>
</template>
<script>
    export default{
        props:{
            todos:Array,
            removeAllCom:Function,
            updateTodosState:Function
        },
        computed:{
            //用到计算属性
          completedSize(){
            return this.todos.reduce((preValue,todo) =>{
              return preValue +(todo.autoComplete ? 1:0);   //todo.autoComplete返回的是布尔值
            },0)
          },
          allSelected:{
              //分析：get用来决定本身的checkbox是否选中
            //set在改变checkbox状态的时候，上面的状态也要跟着改变。
            get() {
                //返回布尔值。满足的条件是选中的数量大于0并且选中数量正好等于数组的长度的时候。
                return this.completedSize>0 && this.completedSize===this.todos.length;
            },
            set(value) {
                //set方法是用来监视属性的变化
                //可以发现updateTodosState这个函数就是为全选设计的。
              this.updateTodosState(value);
            }
          }
        }
    }
</script>
<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
