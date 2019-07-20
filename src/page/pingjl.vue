<template>
  <div>
    <ul class="header">
      <li>
       <router-link to="./mend"><img src="./../assets/img/route/向右@2x.png" alt=""></router-link> 
      </li>
      <li>评价列表</li>
      <li class="di"></li>
    </ul>
    <div class="box">
      <div class="neirong" >
        <p><img src="./../assets/img/pingjl/img-07@2x.png" alt="" class="touxiang"></p>
        <p>
          <span class="a">华华</span>
          <img src="./../assets/img/pingjl/icon-02@2x.png" alt="" class="ka">
          <span>07-06 10:20</span>
        </p>
        <br>
        <p class="car">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
        </p>
        <p class="pingj">已经是第N次租车了，依然让人很舒心，好评。</p>
      </div>
       <div class="neirong">
        <p><img src="./../assets/img/pingjl/img-02@2x(1).png" alt="" class="touxiang"></p>
        <p>
          <span class="a">岩岩</span>
          <img src="./../assets/img/pingjl/icon-02@2x.png" alt="" class="ka">
          <span>07-06 10:30</span>
        </p>
        <br>
        <p class="car">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
        </p>
        <p class="pingj">该条为自动评价。</p>
      </div>
       <div class="neirong">
        <p><img src="./../assets/img/pingjl/img-02@2x.png" alt="" class="touxiang"></p>
        <p>
          <span class="a">多多</span>
          <img src="./../assets/img/pingjl/icon-02@2x.png" alt="" class="ka">
          <span>07-06 10:40</span>
        </p>
        <br>
        <p class="car">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
        </p>
        <p class="pingj">第一次租车，价格便宜，配置好。</p>
      </div>
       <div class="neirong">
        <p><img src="./../assets/img/pingjl/img-03@2x.png" alt="" class="touxiang"></p>
        <p>
          <span class="a">点点</span>
          <img src="./../assets/img/pingjl/icon-02@2x.png" alt="" class="ka">
          <span>07-05 10:59</span>
        </p>
        <br>
        <p class="car">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
        </p>
        <p class="pingj">赞赞赞。</p>
      </div>
       <div class="neirong">
        <p><img src="./../assets/img/pingjl/img-04@2x.png" alt="" class="touxiang"></p>
        <p>
          <span class="a">琴琴</span>
          <img src="./../assets/img/pingjl/icon-02@2x.png" alt="" class="ka">
          <span>07-06 10:20</span>
        </p>
        <br>
        <p class="car">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
        </p>
        <p class="pingj">车型多，服务态度好。</p>
      </div>
    </div>  
 </div>


</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
     
    }
  },
  methods: {

  },
  components: {

  },
}
</script>

<style scoped lang="less">
.header{
  background: #FFE009;
  display: flex;
  overflow: hidden;
  li{
    text-align: center;
    flex: 1;
    font-size: .36rem;
    padding: .35rem .34rem .28rem .35rem;
    img{
      float: left;
      width: .2rem;
      height: .34rem;
    }
  }
}
.box{
  background: #FAFAFA;
  padding: .25rem .32rem .24rem .32rem;
  .neirong{
    overflow: hidden;
    font-size: .34rem;
    width: 6.86rem;
    height: 1.88rem;
    background: #ffffff;
    border-radius:20px;
    margin-top: .32rem;
    padding: .29rem 0rem .24rem 0rem;
    position: relative;
    .a{
      font-weight: 600;
      font-size: .28rem;
      color: black;
    }
    .car{
      img{
        width: .48rem;
        height: .48rem;
      }
    }
    .pingj{
      font-size: .24rem;
      color: #333333;
      height: .1rem;
      position: absolute;
      bottom: .9rem;
    }
    p{
      float: left;
      margin-left: .32rem;
      .ka{
        width: .8rem;
        height: .24rem;
      }
      span{
        font-size:.24rem;
        color: #999999;
      }
    }
    .touxiang{
      width: .9rem;
      height: .9rem;
    }

  }
}
</style>
