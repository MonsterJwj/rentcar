<template>
  <div class="chong_first">
    <Chongz>
      <p slot='text'>平驾租车</p>
    </Chongz>
         <div class='conent'>
          <p>我的平驾币</p> 
          <h1>2030<span>枚</span></h1>
            <ul>
              <li>说明：</li>
              <li>1 、1平驾币=1元</li>
              <li>2、平驾币可用于冲抵租车消费</li>
              <li>3、平驾币不可取现</li>
            </ul>
          </div>
           <div class='conent'>
          <p>我的积分</p> 
          <h1>1000<span>积分</span></h1>
            <ul>
              <li>说明：</li>
              <li>1 、1积分=1元</li>
              <li>2、每单最高可使用积分冲抵40%的租车费用</li>
            </ul>
          </div>
                <router-link to="chong_second"><button>充值</button></router-link>
  </div>
</template>

<script>
import Chongz from './../components/chongz'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
   Chongz
  }
}
</script>

<style scoped lang='less'>
.chong_first{
     height: 100%;
     background: #fafafa;
     .conent{
       padding:.28rem 0rem .15rem .29rem; 
       margin: .32rem auto;
       background: #ffffff;
       width: 6.77rem;
       height: 3.05rem;
       border-radius:20px; 
       p{
         font-size: .26rem;
       }
       h1{
        font-size: .45rem;
        text-align: center;
        span{
           font-size: .23rem;
        }
       }
       ul{
             margin-top:.9rem;
          li{
            font-size: .24rem;
          }
       }
  }
   button{
     width: 6.84rem;
     height:.88rem;
     border-radius:28px;
     border: none;
      outline: none;
     margin-left: .32rem;
     text-align: center;
     background:linear-gradient(90deg,rgba(251,236,129,1),rgba(255,224,9,1));
   }
}
</style>
