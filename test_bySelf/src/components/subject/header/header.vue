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
                    <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" datanum="wx">
                      微信审计
                      <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="active"><a href="javascript:;"  datanum="0" @click="perG(0)">个人</a></li>
                      <li><a href="javascript:;" datanum="1"  @click="perG(1)">群组</a></li>
                    </ul>
                  </li>
                  <li class="tabClick dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" datanum="qq">QQ审计
                      <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a href="javascript:;" datanum="0" @click="perG(0)">个人</a></li>
                      <li><a href="javascript:;" datanum="1" @click="perG(1)">群组</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div id="logout">
          <button type="button" class="el-button el-button--primary logoutButton">
            <span>退出</span>
          </button>
        </div>
      </header>
      <div id="noticeRecord">
        <span class="wxQQSel" datanum="wx">微信审计</span>&nbsp;&gt;&nbsp;
        <span class="perGroupSel" datanum="0">个人</span>&nbsp;&gt;&nbsp;
        <span class="chatObjSel" datanum="dx">聊天对象</span>&nbsp;&gt;&nbsp;
        <span class="dateSel" style="display:none;" datanum="1">今天</span>
        <span id="dateUpdate">2017年11月16日</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "header",
      methods:{
        perG(num){
          this.$emit('handleper-group',num);
        }
      }
    }
</script>

<style scoped>

</style>
