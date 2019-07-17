<template>
  <div class="chong_second">
    <Chongz>
      <p slot="text">充值</p>
    </Chongz>
    <div class="conent">
      <img src="./../assets/img/recharge/img-1-png@2x.png" alt />
      <div class="my">
        <p>我的余额 <span>5500</span></p>
        <p>充值金额:<input type="text" v-model="a"> <router-link to="chong_fourthly"><button>充值</button></router-link></p> 
      </div>
      <ul>
        <li @click='btn'>
          <p><span>{{b}}</span>元</p>
          <p>送<span>{{c}}</span>积分</p>
        </li>
        <li @click='btn2'>
          <p><span>{{d}}</span>元</p>
          <p>送<span>{{e}}</span>积分</p>
        </li>
        <li @click='btn3'>
          <p><span>{{f}}</span>元</p>
          <p>送<span>{{g}}</span>积分</p>
        </li>
      </ul>
      <p class="explain">1积分=1元，每单最高可使用积分冲抵40%的租车费用</p>
    </div>
  </div>
</template>

<script>
import Chongz from "./../components/chongz";
export default {
  data() {
    return {
      a:'',
      b:1000,
      c:100,
      d:2000,
      e:300,
      f:5000,
      g:1000,
    };
  },
  methods: {
    btn(){
      this.a=this.b+this.c; 
    },
     btn2(){
       this.a=this.d+this.e;
    },
      btn3(){
      this.a=this.f+this.g;
      },
  },
  components: {
    Chongz
  }
};
</script>
<style scoped lang='less'>
.chong_second{
    height: 100%;
     background: #fafafa;
    .conent{
          margin: .32rem auto;
          width:6.86rem; 
          padding-bottom: .5rem;
          border-radius: 20px;
          background: #ffffff;
         img{
             width: 2.76rem;
             height: 2.92rem;
            border-radius: 20px;
            margin:.3rem 2rem .67rem 2rem;
         }
       .my{
         padding-left: .32rem;
           overflow: hidden;
           p{
               margin-top:.4rem;
               font-size: .28rem;
               span{
                   font-size: .48rem;
               }
               input{
                  border: none;
                  outline: none;
                  border-bottom: 1px solid #cccccc;
               }
           }
         button{
             float: right;
              outline: none;
             width: 1.54rem;
             height: .5rem;
              border: none;
              margin-right: .33rem;
             background:linear-gradient(90deg,rgba(251,236,129,1),rgba(255,224,9,1));
             border-radius: 25px;
         }
       }
      ul{
        margin:.32rem 0rem .32rem 0;
         display: flex;
        li{
            width: 1.91rem;
            height: 1.81rem;
            margin-left: .24rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid #ffe009;
            border-radius: 20px;
          p{
            line-height: .42rem;
            font-size: .3rem
          }
          p:nth-child(2){
            font-size: .23rem;
          }
        }
      }
      .explain{
        padding-left: .32rem;
         font-size: .26rem;
         color: #999999;
      }
    }
}
</style>
