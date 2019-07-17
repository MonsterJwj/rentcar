<template>
  <div class="box">
      <!-- 头 -->
      <ul class="uls">
        <li></li>
        <li>
            <img src="../assets/img/route/向右@2x.png">
            <span>订单信息</span>
            <img src="../assets/img/dingdan/icon-01.png">
        </li>
      </ul>

      <!-- 大图 -->
      <div class="box2"></div>
      <!-- 车名 -->
      <div class="box3">
        <ul>
          <li>
            <img src="../assets/img/dingdan/85.png">
            雷克萨斯-ES<span>￥500/日均</span></li>
          <li><span>中型轿车</span><span>2.7L自动</span><span>乘坐5人</span></li>
        </ul>
      </div>
      <!-- 选择城市 -->
      <div class="box4">
        <ul>
          <li>取还车城市</li>
          <li>取还点</li>
        </ul>
        <ul>
          <li>
            <router-link to="/xuanz">郑州</router-link>
          <img src="../assets/img/dingdan/icon-03@2x.png"></li>
          <li>盛润国际广自助点</li>
        </ul>
        <ul>
          <li>
            <router-link to="/xuanz">郑州</router-link>
            <img src="../assets/img/dingdan/icon-03@2x.png"></li>
          <li>盛润国际广自助点</li>
        </ul>
        <ul>
          <li>
            <p>07月10日</p>
            <p>
              <span>周三</span>
              <span>10:00</span>
            </p>
          </li>
          <li>3天</li>
          <li>
            <p>07月13日</p>
            <p>
              <span>周六</span>
              <span>10:00</span>
            </p>
          </li>
        </ul>
      </div>
      <!-- 支付方式 -->
      <div class="box5">
        <ul>
          <li>定金:￥500</li>
          <li>支付方式</li>
        </ul>
        <div>
          <img src="../assets/img/dingdan/icon-04.png">
          <img src="../assets/img/dingdan/icon-05.png">
          <img src="../assets/img/dingdan/icon-06.png">
          <img src="../assets/img/dingdan/icon-07.png">
          <img src="../assets/img/dingdan/icon-08.png">
        </div>
        <p><img src="../assets/img/dingdan/icon-09.png">       
          <span>同意评价分时租车租凭协议</span>
          </p>
      </div>
      <!-- 提交 -->
      <div class="box6">提交订单</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.box{
    background-color: #fafafa;
    overflow: auto;
    width:100%;
    height:100%;
    .uls{
      width:100%;
      height:1.28rem;
      background:rgba(255,224,9,1);
      li:nth-child(1){
        height:.34rem;
        // border: 1px solid #000;
      }
      li:nth-child(2){
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        height:.92rem;
        img:nth-child(1){
          width:.2rem;
          height:.34rem;
          position:relative;
          left:-2.52rem;
        }
        img:nth-child(3){
          width:.48rem;
          height:.48rem;
          // position: absolute;
          // right:29px;
          position:relative;
          right:-2.26rem;
        }
        span{
          font-size:.36rem;
        }
      }
    }
    .box2{
      width:rem;
      height:2.34rem;
      background:url(../assets/img/dingdan/21331.png)no-repeat center center;
      background-size:7.5rem 2.34rem;
    }
    .box3{
      width:6.86rem;
      height:1.28rem;
      background:rgba(255,255,255,1);
      border-radius:.2rem;
      margin:0 .32rem;
      position: relative;
      top:-.6rem;
      ul{
        font-size:.32rem;
        padding:.23rem .38rem .24rem .19rem;
        li:nth-child(1){
          background-size:.48rem;
          display: flex;
          img{
            width:.48rem;
            height:.48rem;
          }
          span{
            position: relative;
            left:2.25rem;
          }
        }
        li:nth-child(2){
          font-size:.28rem;
          color:#999999;
          text-indent:.1rem;
          span{
            margin:0 .1rem;
          }
        }
      }
    }
    .box4{
      width:6.86rem;
      height:3.76rem;
      background:rgba(255,255,255,1);
      border-radius:.2rem;
      margin:-.26rem .33rem .31rem .31rem;
      ul:nth-child(1){
        display: flex;
        padding:.23rem 0rem 0rem .33rem;
        li{
          width:50%;
          font-size:.28rem;
          color:#999999;
        }
      }
      ul:nth-child(2){
        display:flex;
        margin:.47rem .58rem 0rem .32rem;
        li{
          width:50%;
          font-size:.32rem;
          color:#333333;
          img{
            width:.30rem;
            height:.25rem;
          }
        }
      }
      ul:nth-child(3){
        display: flex;
        margin:.35rem .59rem 0 .32rem;
        li{
          width:50%;
          font-size:.32rem;
          color:#333333;
          img{
            width:.30rem;
            height:.25rem;
          }
        }
      }
      ul:nth-child(4){
        display: flex;
        margin:.45rem .31rem .30rem .33rem;
        li:nth-child(1){
          font-size:.32rem;
          flex:1;
          span{
            font-size:.24rem;
            color:rgba(153,153,153,1);
          }
        }
        li:nth-child(2){
          flex:2;
          font-size:.36rem;
          width:.9rem;
          height:.9rem;
          text-align: center;
          background:url(../assets/img/dingdan/8596.png)no-repeat center center;
          background-size:.9rem;
          line-height:.9rem;
          font-family:PingFang-SC-Medium;
          font-weight:500;
        }
      }
      li:nth-child(3){
        flex:1;
        font-size:.32rem;
        span{
          font-size:.24rem;
          color:rgba(153,153,153,1);
        }
      }
    }
    .box5{
      width:6.86rem;
      height:2.92rem;
      background:rgba(255,255,255,1);
      border-radius:.2rem;
      margin:0 .32rem 0 .3rem;
      ul{
        list-style: none;
        font-size:.32rem;
        font-weight: 500;
        color:rgba(51,51,51,1);
        padding:.24rem .31rem 0 .31rem;
        li:nth-child(2){
          margin-top:.15rem;
        }
      }
      div{
        display: flex;
        margin:.4rem .31rem 0 .28rem;
        justify-content: space-between;
        img{
          width:.48rem;
          height:.48rem;
        }
      }
      p{
        display: flex;
        font-size:.24rem;
        color:#999999;
        line-height:.5rem;
        margin:.2rem .32rem .15rem .22rem;
        img{
          width:.48rem;
          height:.48rem;
        }
      }
    }
    .box6{
        width:6.86rem;
        height:.88rem;
        font-size:.36rem;
        color:#333333;
        background:linear-gradient(90deg,rgba(251,236,129,1) 0%,rgba(255,224,9,1) 100%);
        border-radius:.41rem;
        text-align: center;
        line-height:.88rem;
        margin:.72rem .33rem 0 .31rem;
      }
}
</style>
