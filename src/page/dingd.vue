<template>
  <div class="box">
      <!-- 头 -->
      <ul class="uls">
        <li></li>
        <li>
            <img src="../assets/img/route/向右@2x.png">
            <span>订单信息</span>
        </li>
      </ul>
      <!-- 内容 -->
      <div class="box2_big">
        <ul class="uls2">
        <li>订单号:2808676128</li>
        <li>下单时间:{{this.nowTime}}</li>
      </ul>
      <!-- 车辆信息 -->
      <div class="box3">
        <img src="../assets/img/dingdan/img-1-png.png">
        <ul>
          <li>丰田汉兰达</li>
          <li>SUV/2.7自动/可乘坐5人</li>
        </ul>
      </div>
      <!-- 时间-->
      <div class="box4">
        <ul>
          <li>取车时间</li>
          <li>7月8日</li>
          <li>今天00:00</li>
        </ul>
        <p>3天</p>
        <ul>
          <li>还车时间</li>
          <li>7月10日</li>
          <li>周三12:00</li>
        </ul>
      </div>

      <!-- 信息 -->
      <div class="box5">
        <ul>
          <li>
            <span>取车城市</span>
            <span>郑州</span>
          </li>
          <li>
            <span>取车门店</span>
            <span>金水路店</span>
          </li>
          <li>
            <span>还车城市</span>
            <span>洛阳</span>
          </li>
          <li>
            <span>还车门店</span>
            <span>皇城公园店</span>
          </li>
        </ul>
      </div>
      <!-- 费用明细 -->
      <ul class="uls3">
        <li>费用明细</li>
        <img src="../assets/img/dingdan/icon-03@2x.png" @click="q1()" class="por1">
        <img src="../assets/img/dingdan/up.png" hidden class="por2" @click="q2()">
      </ul>
      <!-- 下拉菜单 -->
      <ul class="uls4">
        <li>
          <span>定金:</span>
          <span>￥1500</span>
        </li>
        <li>
          <span>预授权金额:</span>
          <span>￥1500</span>
        </li>
        <li>
          <span>补给免赔服务费</span>
          <span>￥150</span>
        </li>
        <li class="lis">
          <span>使用费</span>
          <span>480*2</span>
          <span>￥960</span>
        </li>
        <li class="lis">
          <span>GPS服务费:</span>
          <span>40*2</span>
          <span>￥80</span>
        </li>
        <li class="lis">
          <span>基本保险:</span>
          <span>40*2</span>
          <span>￥80</span>
        </li>
        <li>
          <span>异地换车服务:</span>
          <span>￥150</span>
        </li>
        <li>
          <span>违章预授权金额:</span>
          <span>￥300</span>
        </li>
        <li>
          <span>违章预授权金额:</span>
          <span>￥300</span>
        </li>
        <li>
          <span>车辆损失费:</span>
          <span>￥150</span>
        </li>
        <li>
          <span>儿童座椅服务费:</span>
          <span>￥150</span>
        </li>
        <li>
          <span>手续费:</span>
          <span>￥150</span>
        </li>
        <li>
          <span>油费:</span>
          <span>￥150</span>
        </li>
        <li>
          <span>加油服务费:</span>
          <span>￥300</span>
        </li>

      </ul>
     
      </div>
 <!-- 按钮 -->
      <ul class="uls5">
        <li>￥3156</li>
        <li>支付</li>
      </ul>
      
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods: {
    q1(){
      $('.uls4').slideUp();
      $('.por1').hide();
      $('.por2').show();

    },
    q2(){
      $('.uls4').slideDown();
       $('.por1').show();
       $('.por2').hide();
    },
    getTime(){
        this.nowTime = new Date().toLocaleString();
        this.nowTime=this.nowTime.slice(0,9);
		},
  },
  created(){
			this.getTime();
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
      position: fixed;
      z-index: 99999;
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
        img{
          width:.2rem;
          height:.34rem;
          position: relative;;
          left:-2.57rem;
        }
        span{
          font-size:.36rem;
        }
      }
    }
  .box2_big{
    width:6.88rem;
    background-color: #fff;
    margin:.32rem .31rem 0 .31rem;
    padding-bottom:.98rem;
    // margin-top:1.28rem;
    // transform: translateY(1.28rem);
    position: relative;
    top:1.28rem;
    z-index:1;
      .uls2{
        display: flex;
        margin:.3rem .35rem .2rem .34rem;
      li{
        width:50%;
        color:rgba(51,51,51,1);
        font-weight:400;
        font-size:.24rem;
        margin-top:.2rem;
      }
    } 
    .box3{
      display: flex;
      img{
        width:2.04rem;
        height:1.45rem;
        margin:.2rem .12rem 0 .34rem;
      }
      ul{
        margin:.15rem;
        li{
          color:#333333;
          font-size:.32rem;
          margin:.15rem;
        }
      }
    }
  
  }
  .box4{
    display: flex;
    margin:.26rem .59rem 0 .62rem;
    p{
      background: url(../assets/img/dingdan/8596.png)no-repeat center center;
      background-size:1.18rem;
      font-size:.36rem;
      width:1.18rem;
      height:1.18rem;
      text-align: center;
      line-height: 1.18rem;
      flex: 1;
      margin-top:.2rem;
    }
    ul{
      list-style: none;
      font-size:.24rem;
      color:#999999;
      li{
        line-height:.5rem;
      }
      li:nth-child(2){
        font-size:.32rem;
        color:#333333;
      }
    }
  }
  .box5{
    margin:.25rem .38rem 0 .31rem;
    ul{
      list-style: none;
      li{
        display: flex;
        font-size:.28rem;
        color:#333333;
        justify-content: space-between;
        line-height:.5rem;
      }
    }
  }
  .uls3{
    display:flex;
    justify-content: space-between;
    border-top:1px solid #ccc;
    margin:.29rem .37rem 0 .33rem;
    padding-top:.29rem;
    li{
      font-size:.28rem;
      color:#333333;
    }
    img{
      width:.35rem;
      height:.3rem;
    }
  }
  .uls4{
    list-style: none;
    padding-bottom:.7rem;
    margin:.2rem .37rem 0 .33rem;
    li{
      display: flex;
      justify-content: space-between;
      line-height:.5rem;
      span{
        font-size:.28rem;
        color:#333333;
      }
    }
    .lis{
      display:flex;
      justify-content: space-between;
      span{
        width:33.333%;
        }
        span:nth-child(2){
          text-align: center;
      }
       span:nth-child(3){
          text-align: right;
      }
    }
  }
  .uls5{
    list-style: none;
    display: flex;
    width:100%;
    height:.98rem;
    position:absolute;
    bottom:0px;
    z-index: 9999;
    li{
      width:50%;
      font-size:.36rem;
      text-align: center;
      line-height:.98rem;
    }
      li:nth-child(1){
        background: #000;
        color:#FFFFFF;
      }
      li:nth-child(2){
        background: #FFE009;
        color:#333333;
      }
  }


}
</style>
