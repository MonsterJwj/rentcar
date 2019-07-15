<template>
  <div>
    <ul class="header">
      <li>
        <img src="./../assets/img/route/向右@2x.png" alt="">
      </li>
      <li>评价列表</li>
      <li class="di"></li>
    </ul>

    <div class="box">
      <div class="neirong">
        <p><img src="./../assets/img/pingjl/img-07@2x.png" alt="" class="touxiang"></p>
        <p>
          华华
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

        <p class="pingj">已经是第n次租车了，依然让人很舒心，好评。</p>

      </div>
      <div class="neirong">
        <p><img src="./../assets/img/pingjl/img-02@2x.png" alt="" class="touxiang"></p>
        <p>
          岩岩
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

        <p class="pingj">该条为自动评价。</p>

      </div>
      <div class="neirong">
        <p><img src="./../assets/img/pingjl/img-02@2x(1).png" alt="" class="touxiang"></p>
        <p>
          青青
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

        <p class="pingj">该条为自动评价。</p>

      </div>
      <div class="neirong">
        <p><img src="./../assets/img/pingjl/img-03@2x.png" alt="" class="touxiang"></p>
        <p>
          多多
          <img src="./../assets/img/pingjl/icon-02@2x.png" alt="" class="ka">
          <span>07-04 10:30</span>
        </p>
        <br>
        <p class="car">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
          <img src="./../assets/img/pingjl/icon-03@2x.png" alt="">
        </p>

        <p class="pingj">越来越便利，车况非常好，手续简单，组还免费。</p>

      </div>
      <div class="neirong">
        <p><img src="./../assets/img/pingjl/img-04@2x.png" alt="" class="touxiang"></p>
        <p>
          点点
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

        <p class="pingj">第一次租车，价格便宜，配置很好，门店人员服务态度很好。</p>

      </div>
      <div class="neirong">
        <p><img src="./../assets/img/pingjl/img-03@2x.png" alt="" class="touxiang"></p>
        <p>
          多多
          <img src="./../assets/img/pingjl/icon-02@2x.png" alt="" class="ka">
          <span>07-04 10:30</span>
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
