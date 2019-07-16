<template>
  <div class="login">
    <img src="./../assets/img/未标题-1.png" alt="" class="ico_arrows">
    <div class="imgbox">
     <img src="./../assets/img/register/矢量智能对象@2x(1).png" alt="">
    </div>
    <div class="user">
    <router-link to='/login'><span >登录</span></router-link>
    <router-link to='/register'><span>注册</span></router-link>
    </div>
      <div class="input">
       <span class="ico_1"></span>
       <p><input type="text"  placeholder="请输入用户名" id="str" @blur="checkname"></p>
       <span class="ico_2"></span>
       <p><input type="password" placeholder="请输入密码" id="pwd" @blur="checkpwd"></p>
      </div>
           <p class="password">忘记密码</p>
        <div class="third">
          <img src="./../assets/img/login/组 1@2x(1).png" alt=""  @click="tiaozhuan">
          <p>第三方登录</p><hr>
        </div>
        <ul>
            <li><img src="./../assets/img/login/组 1@2x.png" alt=""></li>
            <li><img src="./../assets/img/login/组 1@2x(2).png" alt=""></li>
            <li><img src="./../assets/img/login/组 1@2x(3).png" alt=""></li>
        </ul>
         <div id='warning' v-show="wt_show">
           <p id='wt_'>用户名</p><span @click="wt_show=false">x</span>
         </div>
  </div>
</template>

<script>
 
export default {
  data() {
    return {
   wt_show:false
    }
  },
  methods: {
    checkname(str){
        var str = document.getElementById('str').value;
        var warning=document.getElementById('wt_')
        var user =/[\u4e00-\u9fa5]/gm;
       
        if (user.test(str))
         {
           warning.innerHTML="";
            }
        else {
         
              warning.innerHTML="请输入正确的用户名";
            this.wt_show=true
        } 
    },
    checkpwd(){
       var pwd = document.getElementById('pwd').value
         var pwds =/^[a-z0-9]+$/i
        if(pwds.test(pwd)){
            
        }
       else{
       
       }
    },
    tiaozhuan(){
       alert("登录成功");
      //  router.push("/")
    }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
  .login{
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
      margin-top:.86rem;
      p{
         border-bottom: 1px solid #cccccc;
         margin-right: .32rem;
          margin-top:1rem;
      }
       input{
        border: none;
        width: 4rem;
        position: relative;
        left: .93rem;
        outline: none;
      }
       .ico_1{
      display:block;
      width: .36rem;
      height: .35rem;
      background: url('./../assets/img/login/矢量智能对象@2x(2).png')no-repeat center center;
      background-size:cover;
      position:absolute;
      top: 5.3rem;
    }
     .ico_2{
      display:block;
      width: .36rem;
      height: .42rem;
      background: url('./../assets/img/login/矢量智能对象@2x(1).png')no-repeat center center;
      background-size:cover;
      position:absolute;
      top: 6.6rem;
    }
    }
   .password{
    float:right;
    color: #c8c8c8;
    margin-top:.19rem;
    margin-right:.32rem;
    font-size: .23rem;
  }
  .third{
    position: relative;
    img{
      margin:.68rem 0rem .52rem 2.9rem;
      width: 1.38rem;
      height: 1.38rem;
    }
   p{
      width: 2.72rem;
      height: .25rem;
      background: #ffffff;
      text-align: center;
      font-size: .25rem;
      position: absolute;
      left: 2.2rem;
      top:2.36rem;
    }
  }
   ul{
     display: flex;
     margin-top:.72rem;
    li{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 1.01rem;
        height: 1rem;
      }
    }
  }
  .router-link-active{
    span{
color: #f8df2f;
    }
  }
  #warning{
    position: fixed;
    top:0;
    left:0;
   background: rgba(0, 0, 0, .3);
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
    span{
      position:absolute;
      top:40%;
      right:80%;
      font-size: .4rem;
    }
  }
  #wt_{
    height: 20%;
    width: 70%;
    font-size: .24rem;
     display: flex;
   justify-content: center;
   align-items: center;
    border-radius: 20px;
    background: #ffffff;
   
  }
  }
</style>
