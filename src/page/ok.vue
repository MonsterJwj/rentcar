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
      <div class="box2">
          <img src="../assets/img/ok/订单成功插画45u.png">
          <p>支付成功</p>
          <ul>
              <li>
                  <span>交易金额</span>
                  <span>3156元</span>
              </li>
              <li>
                  <span>支付方式</span>
                  <span>支付宝</span>
              </li>
              <li>
                  <span>商品说明</span>
                  <span>用车费用</span>
              </li>
              <li>
                  <span>创建时间</span>
                  <span>2019-5-13</span>
              </li>
              <li>
                  <span>创建时间</span>
                  <span>2019-5-13</span>
              </li>
          </ul>
        <!-- 评价 -->
      <div class="box3">立即评价</div>
    </div>



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
    .box2{
        width:6.88rem;
        background-color: #fff;
        border-radius:.2rem;
        margin:.32rem .31rem 0 .31rem;
        padding-bottom:.44rem;
        img{
            width:3.48rem;
            height:2.44rem;
            margin-left:50%;
            transform: translateX(-1.74rem);
            margin-top:.34rem;
        }
        p{
            font-size:.36rem;
            color:#333333;
            text-align: center;
        }
        ul{
            list-style: none;
            font-size:.32rem;
            color:#666666;
            li{
                border-bottom:0.01px solid #ccc;
                margin:.15rem;
                text-indent:.33rem;
                margin-right:.31rem;
                display: flex;
                justify-content: space-between;
            }
        }
    }
    .box3{
        font-size:.32rem;
        color:#666666;
        width:3.93rem;
        height:.66rem;
        background-color: #ffff03;
        text-align: center;
        border-radius:.33rem;
        line-height: .66rem;
        margin-left:50%;
        transform: translateX(-1.965rem);
        margin-top: .58rem;
    }















}
</style>
