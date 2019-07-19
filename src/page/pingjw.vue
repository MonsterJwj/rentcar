<template>
  <div class="pingjw">
    <ul class="header">
        <li>
          <span class="fanhui" @click="fa"></span>
        </li>
        <li>评价完成</li>
        <li>
        </li>
    </ul>

    <div class="imgbox">
        <img src="./../assets/img/pingjw/icon-05@2x.png" alt="">
    </div>

    <div class="text">
        <p>
            评价已完成
            <br>
            <span>感谢您的反馈，我们会继续努力给您提供更好的服务</span>
        </p>
    </div>
    <div class="box">
        <div class="neirong">
            <p>我的评价</p>
            <p class="pin">
                <img src="./../assets/img/pingjw/icon-02@2x.png" alt="">
                <img src="./../assets/img/pingjw/icon-02@2x.png" alt="">
                <img src="./../assets/img/pingjw/icon-02@2x.png" alt="">
                <img src="./../assets/img/pingjw/icon-02@2x.png" alt="">
                <img src="./../assets/img/pingjw/icon-02@2x.png" alt="">
            </p>
            <ul class="fen">
                <li>
                    <img src="./../assets/img/pingjw/icon-03@2x.png" alt="">
                    <span>朋友圈</span>
                </li>
                <li>
                    <img src="./../assets/img/pingjw/icon-04@2x.png" alt="">
                    <span>微信好友</span>
                </li>
            </ul>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
       name:[
            "./../assets/img/pingjw/icon-02@2x.png",
             "./../assets/img/pingjw/icon-02@2x.png",
             "./../assets/img/pingjw/icon-02@2x.png",
              "./../assets/img/pingjw/icon-02@2x.png",
              "./../assets/img/pingjw/icon-02@2x.png"
           ] 
    }
  },
  methods: {
         fa(){
         this.$router.push("/changz")
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.pingjw{
    background: #fafafa;
    min-height: 100%;
}
.header{
    display: flex;
    font-size: .4rem;
    color: #333333;
    background: #FFE009;
    li{
      flex: 1;
      text-align: center;
      overflow: hidden;
      padding: .65rem .35rem .29rem .32rem;
      .fanhui{
        display: block;
        width: .2rem;
        height: .34rem;
        background: url('./../assets/img/route/向右@2x.png')no-repeat center center;
        background-size: cover;
      }
      .fanhui1{
        float: right;
        display: block;
        width: .4rem;
        height: .68rem;
        background: url('./../assets/mend_img/icon-02@2x.png')no-repeat center center;
        background-size: cover;
      }
    }
}
.imgbox{
    width: 1.48rem;
    height: 1.48rem;
    margin: 0 auto;
    margin-top: .32rem;
    img{
        width: 100%;
    }
}
.text{
    text-align: center;
    margin-top: .23rem;
    p{
        font-size: .32rem;
        color: #333333FF;
    }
    span{
        font-size: .24rem;
        color: #999999FF;
        margin-top: .22rem;
    }
}
.box{
    margin-top: .55rem;
    .neirong{
        padding: .24rem 0rem 0rem 0rem;
        background: #fff;
        width: 6.86rem;
        height: 2.68rem;
        border-radius:20px;
        margin: 0 auto;
        p{
            font-size: .32rem;
            color: #333333FF;
            text-align: center;
        }
        .pin{
            margin-top: .33rem;
            img{
                width: .4rem;
                height: .29rem;
                padding: 0rem .12rem 0rem .12rem;                
            }
        }
        .fen{
              display: flex;
              margin: .3rem auto;
            li{
                  display: flex;
                  flex: 1;
                   flex-direction: row;
                   justify-content: center;
                   align-items: center;
                img{
                   width: .42rem;
                   height: .42rem;
                }
                span{
                    margin-left:.23rem; 
                    display: block;
                   font-size: .32rem;
               
                }
            }
        }
    }
}

</style>
