<template>
    <div>
      <div id="loginCenter">
        <h3>IM审计分析系统</h3>
        <div id="border"></div>
        <form id="loginForm">
          <div class="setMargin" id="userNameDiv">
            <el-input v-model="userName" placeholder="请您输入用户名" id="userName"></el-input>
            <span class="remindInfo" style="display:none;">请输入用户名</span>
          </div>
          <div  id="passwordDiv">
            <el-input v-model="password" type="password" placeholder="请您输入密码" id="password"></el-input>
            <span class="remindInfo" style="display:none;">请输入密码</span>
          </div>
        </form>
        <el-button type="primary" id="loginSystem" @click="loginSystem">登录</el-button>
        <el-button type="danger" id="loginSystem" @click="watchCase">查看案例</el-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data () {
          return {
            userName: '',
            password:''
          }
        },
        methods:{
          loginSystem(){
            const userName = this.userName.trim(),
              password = this.password.trim();
            if(!userName || !password){
                alert('请先完善登录信息');
                return;
            }
            if(this.userName==='admin' && this.password==='111111'){
              this.$router.push({path:'/subject'});
            }
          },
          watchCase(){
            this.$router.push({path:'/subinfo'});
          }
        }
    }
</script>

<style scoped>
  #loginCenter{
    position: absolute;
    width:260px;
    height:300px;
    left:50%;
    top:50%;
    margin:-150px 0 0 -130px;
    text-align:center;
  }
  #loginCenter h3{
    font-size:32px;
    font-weight:800;
    color:#3588DE;
    line-height:54px;
    border-bottom:2px solid #3588DE;
  }

  #loginForm{
    margin:30px 10px 20px;
  }
  #loginForm .setMargin{
    margin-bottom:15px;
  }

  .remindInfo{
    color:#fa5555;
    font-size:12px;
    text-align: left;
    line-height: 22px;
  }

</style>
