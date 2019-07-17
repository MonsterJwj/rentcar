<template>
  <div class="my">
    <div class="info">
      <div class="person">
        <div class="tou">
          <img src="../assets/img/longrent/img-01@2x.png" alt="">
        </div>
        <div class="name">
          <p>陈先生</p>
          <div class="gra">
            <span>等级</span>
            <div class="out">
              <div class="in"></div>
            </div>
            <span>34/90</span>
          </div>
        </div>
        <div class="right">
          <router-link to="/shiz"><img src="../assets/img/my/icon-9-png@2x.png" alt=""></router-link>
        </div>
      </div>
      <img src="../assets/img/my/bg.png" alt="">
    </div>
    <div class="power">
      <div class="kuai">
        <img src="../assets/img/my/icon-1-png@2x.png" alt="">
        <p>我的钱包</p>
      </div>
      <div class="kuai">
        <img src="../assets/img/my/icon-2-png@2x.png" alt="">
        <p>我的订单</p>
      </div>
      <div class="kuai">
        <img src="../assets/img/my/icon-3-png@2x.png" alt="">
        <p>用户反馈</p>
      </div>
      <div class="kuai">
        <img src="../assets/img/my/icon-4-png@2x.png" alt="">
        <p>帮助中心</p>
      </div>
      <div class="kuai">
        <img src="../assets/img/my/icon-5-png@2x.png" alt="">
        <p>设置</p>
      </div>
      <div class="kuai">
        <img src="../assets/img/my/icon-6-png@2x.png" alt="">
        <p>版本检测</p>
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
  .my{
    width: 100%;
    min-height:100%;
    a{
      display: block;
    }
    .info{
      height: 4.9rem;
      padding-top: .5rem;
      background: rgb(255,224,9);
      font-size: 0;
      img{
        width: 100%;
      }
      .person{
        padding: .5rem .3rem;
        display: flex;
        .tou{
          margin-right: .3rem;
          img{
            width: 1.24rem;
          }
        }
        .name{
          flex: 1;
          p{
            font-size: .3rem;
            margin-top: .1rem;
          }
          .gra{
            span{
              font-size: .22rem;
            }
            .out{
              margin: .3rem .25rem 0 .25rem;
              width: 1.64rem;
              height: .08rem;
              background:white;
              border-radius: .04rem;
              display: inline-block;
              transform: translateY(-.05rem);
              .in{
                border-radius: .04rem;
                width: .8rem;
                height: 100%;
                background: black;
              }
            }
          }
        }
        .right{
          img{
            margin-top: .3rem;
            width:.4rem;
          }
        }
      }
    }
    .power{
      width: 100%;
      padding: 0 .4rem;
      box-sizing: border-box;
      .kuai{
        height: 2rem;
        float: left;
        width:50%;
        text-align: center;
        margin-bottom: .5rem;
        img{
          width: 1rem;
          display: block;
          margin: 0 auto;
          margin-top: .9rem;
        }
        p{
          font-size: .26rem;
          margin-top: .3rem;
        }
      }
    }
  }
</style>
