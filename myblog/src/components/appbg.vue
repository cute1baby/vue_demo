<template>
    <div id="bg" ref="bglog">
      <div id="covers"></div>
      <p>
        什么叫实践派？<br><i>什么都没正经学过，概念都没搞懂</i><br>却偏偏能弄出点动静来
      </p>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  #bg {
    position: relative;
    background-image: url(../assets/bg30.gif);
    background-repeat:no-repeat;
    background-size: cover;
  }
  #bg:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    z-index: 1;
  }
  #bg p {
    position: relative;
    padding: 95px 0 70px;
    color: hsla(0,0%,100%,.9);
    text-align: center;
    font-size: 14px;
    line-height: 2;
    z-index: 2;
    letter-spacing: 2.5px;
    text-shadow: 0 3px 25px rgba(0,0,0,0.3);
    cursor: progress;
  }
  @media only screen and (min-width: 768px) {
    #bg p {
      padding: 210px 0;
    }
  }
  @media only screen and (min-width: 640px) {
    #bg p {
      font-size: 26px;
    }
  }
  #bg p i {
    text-decoration: line-through;
    font-size: 12px;
    color: hsla(0,0%,100%,.8);
    text-shadow: 0 0 0 transparent;
  }
  @media only screen and (min-width: 640px) {
    #bg p i {
      font-size: 22px;
    }
  }
</style>
