const INCREMENT = 'INCREMENT';
//在使用vuex的过程中，对于同步执行的写在mutations中的函数，
// 我们应该是可以直接在组件中使用this.$store.commit("###").
// 而Actions存在的作用只是为了处理Mutations中存在异步的事务，
// 换句话说如果我的项目中没有涉及到异步的处理逻辑，Actions这一块可以不进行定义.
export default{
    [INCREMENT](state,obj){
    state.exampleNum += obj.age;
  }
}








