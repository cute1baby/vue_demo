<template>
  <div>
    <input type="text" placeholder="enter the name you search" v-model="searchName" @keyup.enter="searchList"/>
    <button @click="searchList">Search</button>
  </div>
</template>
<script>
    export default{
      props:{
        setSearchName:Function
      },
      data (){
        return {
          searchName:''
        }
      },
      methods:{
        searchList() {
          var searchName=this.searchName&&this.searchName.trim();
          if(!searchName){
            this.searchName='';
            return ;
          }
          this.setSearchName(searchName);
          this.searchName='';
        }
      }

    }
</script>
<style>

</style>
