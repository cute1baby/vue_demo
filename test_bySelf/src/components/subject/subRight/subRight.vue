<template>
    <div id="right">
      <div class="right_top">
        <div class="data_left">
          <span>审计周期:&nbsp;&nbsp;</span>
          <span class="dateNow">2017年11月16日</span>
        </div>
        <div class="switch_right">
          <span>快速切换:&nbsp;&nbsp;</span>
          <button type="button" class="btn btn-custom dateShow"  datanum="1" @click="handleTime(1)">今天</button>
          <button type="button" class="btn btn-custom" datanum="2" @click="handleTime(2)">最近7天</button>
          <button type="button" class="btn btn-custom" datanum="3" @click="handleTime(3)">当前月份</button>
          <button type="button" class="btn btn-custom" datanum="4" @click="handleTime(4)">近三个月</button>
        </div>
      </div>

        <ul class="contentTable" v-if="perGroup==0">
          <!-- (1)个人聊天对象 -->
          <li v-if="nowIndex==0">
            <div class="chatTable">
              <p class="title">接收&nbsp;&nbsp;TOP&nbsp;&nbsp;50</p>
              <div>
                <table class="table1">
                  <thead style="color:#388ADF;">
                  <tr>
                    <th>排名</th>
                    <th>姓名</th>
                    <th>频次</th>
                  </tr>
                  </thead>
                </table>
              </div>

              <div class="pageNacation chatSelect1">
                <table>
                  <tbody>
                  <tr colspan="3">
                    <td>无符合条件的记录</td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <div class="pageBranch">
                <span class="branchLeft" onclick="pageColums('prev',event)"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
                <span class="branchRight" onclick="pageColums('next',event)"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                <div class="pageNum">
                  <span class="pageNow">1</span>/
                  <span class="pageAll">1</span>
                </div>

              </div>
            </div>
            <div class="chatTable">
              <p class="title">发送&nbsp;&nbsp;TOP&nbsp;&nbsp;50</p>
              <div>
                <table class="table1">
                  <thead style="color:#388ADF;">
                  <tr>
                    <th>排名</th>
                    <th>姓名</th>
                    <th>频次</th>
                  </tr>
                  </thead>
                </table>
              </div>

              <div class="pageNacation chatSelect2">
                <table>
                  <tbody>
                  <tr colspan="3">
                    <td>无符合条件的记录</td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <div class="pageBranch">
                <span class="branchLeft" onclick="pageColums('prev',event)"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
                <span class="branchRight" onclick="pageColums('next',event)"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                <div class="pageNum">
                  <span class="pageNow">1</span>/
                  <span class="pageAll">1</span>
                </div>
              </div>
            </div>
          </li>
          <!-- (2)个人聊天内容-->
          <li v-if="nowIndex==1">
            <div class="chatTable2">
              <div>
                <table class="table1">
                  <thead style="color:#fff;background:#388ADF;">
                  <tr>
                    <th>内容类型</th>
                    <th>接收量（单位：次）</th>
                    <th>发送量（单位：次）</th>
                  </tr>
                  </thead>
                </table>
              </div>
              <div class="pageNacation chattedConPer">
                <table>
                  <tbody>
                  <tr colspan="3">
                    <td>无符合条件的记录</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </li>
          <!-- (3)个人敏感词 -->
          <li v-if="nowIndex==2">
            <div class="chatTable2">
              <p class="title">关键词&nbsp;&nbsp;TOP&nbsp;&nbsp;50</p>
              <div>
                <table class="table1">
                  <thead style="color:#388ADF;">
                  <tr>
                    <th>排名</th>
                    <th>敏感词</th>
                    <th>次数</th>
                  </tr>
                  </thead>
                </table>
              </div>
              <div class="pageNacation sensitiveTdiv">
                <table>
                  <tbody>
                  <tr colspan="3">
                    <td>无符合条件的记录</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="pageBranch">
                <span class="branchLeft" onclick="pageColums('prev',event)"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
                <span class="branchRight" onclick="pageColums('next',event)"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                <div class="pageNum">
                  <span class="pageNow">1</span>/
                  <span class="pageAll">1</span>
                </div>
              </div>
            </div>
          </li>
          <!-- (4)个人热词 -->
          <li v-if="nowIndex==3">
            <div class="chatTable2">
              <div>
                <table class="table1">
                  <thead style="color:#fff;background:#388ADF;">
                  <tr>
                    <th>排名</th>
                    <th>热词</th>
                    <th>次数</th>
                  </tr>
                  </thead>
                </table>
              </div>
              <div class="pageNacation rankPersonTerms">
                <table>
                  <tbody>
                  <tr colspan="3">
                    <td>无符合条件的记录</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="pageBranch">
                <span class="branchLeft" onclick="pageColums('prev',event)"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
                <span class="branchRight" onclick="pageColums('next',event)"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                <div class="pageNum">
                  <span class="pageNow">1</span>/
                  <span class="pageAll">1</span>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <ul class="contentTable" v-if="perGroup==1">
          <!-- (1)群组聊天内容 -->
          <li v-if="nowIndex==0">
            <div class="chatTable2">
              <p class="title">聊天对象&nbsp;&nbsp;TOP&nbsp;&nbsp;50</p>
              <div>
                <table class="table1">
                  <thead style="color:#388ADF;">
                  <tr>
                    <th>排名</th>
                    <th>群组名称</th>
                    <th>次数</th>
                  </tr>
                  </thead>
                </table>
              </div>
              <div class="pageNacation chatGroup1">
                <table>
                  <tbody>
                  <tr colspan="3">
                    <td>无符合条件的记录</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="pageBranch">
                <span class="branchLeft" onclick="pageColums('prev',event)"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
                <span class="branchRight" onclick="pageColums('next',event)"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                <div class="pageNum">
                  <span class="pageNow">1</span>/
                  <span class="pageAll">1</span>
                </div>
              </div>
            </div>
          </li>
          <!-- (2)群组聊天内容 -->
          <li v-if="nowIndex==1">
            <div class="chatSplit chatTable2">
              <p class="title">收发总量&nbsp;&nbsp;TOP&nbsp;&nbsp;50</p>
              <div>
                <table class="table1 chatConCursor">
                  <thead style="color:#388ADF;">
                  <tr>
                    <th style="cursor:pointer;">排名</th>
                    <th style="cursor:pointer;">群组名称</th>
                    <th style="cursor:pointer;">图片(0)</th>
                    <th style="cursor:pointer;">视频(0)</th>
                    <th style="cursor:pointer;">音频(0)</th>
                    <th style="cursor:pointer;">文字(0)</th>
                  </tr>
                  </thead>
                </table>
              </div>
              <div class="pageNacation">
                <table>
                  <tbody>
                  <tr colspan="3">
                    <td>无符合条件的记录</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="pageBranch">
                <span class="branchLeft" onclick="pageColums('prev',event)"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
                <span class="branchRight" onclick="pageColums('next',event)"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                <div class="pageNum">
                  <span class="pageNow">1</span>/
                  <span class="pageAll">1</span>
                </div>
              </div>
            </div>
          </li>
          <!-- (3)群组敏感词 -->
          <li v-if="nowIndex==2">
            <div class="chatTable2">
              <p class="title">关键词&nbsp;&nbsp;TOP&nbsp;&nbsp;50</p>
              <div>
                <table class="table1">
                  <thead style="color:#388ADF;">
                  <tr>
                    <th>排名</th>
                    <th>敏感词</th>
                    <th>次数</th>
                  </tr>
                  </thead>
                </table>
              </div>
              <div class="pageNacation sensitiveTdiv">
                <table>
                  <tbody>
                  <tr colspan="3">
                    <td>无符合条件的记录</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="pageBranch">
                <span class="branchLeft" onclick="pageColums('prev',event)"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
                <span class="branchRight" onclick="pageColums('next',event)"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                <div class="pageNum">
                  <span class="pageNow">1</span>/
                  <span class="pageAll">1</span>
                </div>
              </div>
            </div>
          </li>
          <!-- (4)群组热词 -->
          <li v-if="nowIndex==3">
            <div class="chatTable2">
              <div>
                <table class="table1">
                  <thead style="color:#fff;background:#388ADF;">
                  <tr>
                    <th>排名</th>
                    <th>热词</th>
                    <th>次数</th>
                  </tr>
                  </thead>
                </table>
              </div>
              <div class="pageNacation rankPersonTerms">
                <table>
                  <tbody>
                  <tr colspan="3">
                    <td>无符合条件的记录</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="pageBranch">
                <span class="branchLeft" onclick="pageColums('prev',event)"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
                <span class="branchRight" onclick="pageColums('next',event)"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                <div class="pageNum">
                  <span class="pageNow">1</span>/
                  <span class="pageAll">1</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
      name: "subRight",
      props:['nowIndex','perGroup'],
      methods:{
        handleTime(index){

        }
      }
    }
</script>

<style scoped>

</style>
