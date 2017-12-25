<template>
    <div>
      <p><span>{{item.name}}</span>说:我的年龄是:{{item.age}} <button @click="handleAge">修改年龄</button></p>
    </div>
</template>


<script>
    export default {
      name: "son",
      props:['item','statu'],
      mounted(){
        //debugger;
        console.log(this.item);
      },
      methods:{
        handleAge(){
          if(this.item.age===30){
            alert('年龄已经修改过了，不能重复修改');
            return;
          }
          this.item.age = 30;
          this.statu = true;
        }
      }

    }
</script>

<style scoped>

</style>
