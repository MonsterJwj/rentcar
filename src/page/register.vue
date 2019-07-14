<template>
  <div class="register">
    <img src="./../assets/img/register/矢量智能对象@2x.png" alt="" class="ico_arrows">
    <div class="imgbox">
     <img src="./../assets/img/register/矢量智能对象@2x(1).png" alt="">
    </div>
    <div class="user">
    <router-link to='/login'><span>登录</span></router-link>
    <router-link to='/register'><span>注册</span></router-link>
    </div>
      <div class="input">
       <p><input type="text" placeholder="请输入用户名"></p>
       <p><input type="text" placeholder="请输入验证码"><span>获取验证码</span></p>
       <p><input type="text" placeholder="密码为6-18位数字英文或组合"><span></span></p>
      </div>
       <div class="third">
          <img src="./../assets/img/register/组 1@2x.png" alt="">
        </div>
        <p> 　<input type="checkbox" /> 我已阅读并接受<span>《平驾分时租车会员注册协议》</span></p>
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

<style scoped lang='less'>
  .register{
   padding: .5rem 0rem 0rem .28rem;
   font-size: 0;
    .ico_arrows{
      width: .2rem;
      height: .34rem;
    }
    .imgbox{
      width:2.68rem; 
       margin:.74rem auto ;
      img{
        width: 2.68rem;
        height: 1.55rem;
       }
    }
    .user{
        width: 4rem;
        display: flex;
        margin: 0 auto;
       a{
         flex:1;
         text-decoration: none;
         text-align: center;
         font-size: .36rem;
         color: #666666;
       }
    }
    .input{
      margin: .86rem .31rem 0 .03rem;
       p{
          border-bottom: 1px solid #cccccc;
          margin-top:.9rem;
       input{
         border: none;
         width: 7rem;
         outline: none;
       }
       }
         p:nth-child(2){
            overflow: hidden;
            input{
              width: 5rem;
              float: left;
            }
        span{
           font-size: .25rem;
           float: right;
           color: #f8df2f;
           width: 1.71rem;
           height: .36rem;
           text-align: center;
           margin-bottom:.12rem; 
           border: 1px solid #f8df2f;
           border-radius:.06rem;
        }
       }
         p:nth-child(3){
            overflow: hidden;
            input{
              width: 6rem;
              float: left;
            }
        span{
          float:right;
          width: .43rem;
          height: .26rem;
           background: url('./../assets/img/register/矢量智能对象@2x(2).png')no-repeat center center;
           background-size: cover;
        }
       }
    }
    .third{
        display: flex;
       img{
         width: 1.38rem;
         height: 1.38rem;
         margin: .7rem auto 1.79rem;
       } 
    }
    p{
      font-size: .19rem;
      text-align: center;
      span{
        color: #f8df2f;
      
      }
    }
  }
</style>
