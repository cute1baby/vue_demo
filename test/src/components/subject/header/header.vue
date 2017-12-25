<template>
    <div>
      <header>
        <div id="logo">
          <h4>IM&nbsp;审计分析系统</h4>
        </div>
        <div id="selectCondition">
          <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target="#example-navbar-collapse">
                  <span class="sr-only">切换导航</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="collapse navbar-collapse" id="example-navbar-collapse">
                <ul class="nav navbar-nav" id="tabNav">
                  <li class="tabClick dropdown active">
                    <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" datanum="wx" @click="changeStatus(0)">
                      微信审计
                      <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                      <li :class="{active:perGroup==0}"><a href="javascript:;"  datanum="0" @click="perG(0)">个人</a></li>
                      <li :class="{active:perGroup==1}"><a href="javascript:;" datanum="1"  @click="perG(1)">群组</a></li>
                    </ul>
                  </li>
                  <li class="tabClick dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" datanum="qq" @click="changeStatus(1)">QQ审计
                      <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                      <li :class="{active:perGroup==0}"><a href="javascript:;" datanum="0" @click="perG(0)">个人</a></li>
                      <li :class="{active:perGroup==1}"><a href="javascript:;" datanum="1" @click="perG(1)">群组</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div id="logout">
          <button type="button" class="el-button el-button--primary logoutButton" @click="loginOut">
            <span>退出</span>
          </button>
        </div>
      </header>
    </div>
</template>

<script>
    export default {
      name: "header",
      props:['perGroup'],
      methods:{
        perG(num){
          this.$emit('handleper-group',num);
        },
        changeStatus(index){
          this.$emit('changewxqq',index);
        },
        loginOut(){
          this.$router.push({path:'/'})
        }
      }
    }
</script>

<style scoped>

</style>
