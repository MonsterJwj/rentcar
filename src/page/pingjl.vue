<template>
  <div>
    <ul class="header">
      <li>
        <img src="./../assets/img/route/向右@2x.png" alt="" @click="fan">
      </li>
      <li>评价列表</li>
      <li class="di"></li>
    </ul>

    <div class="box">
      <div class="neirong" v-for="(item,index) in text" :key="index">
        <p><img src="./../assets/img/pingjl/img-02@2x.png" alt="" class="touxiang"></p>
        <p>
          <!-- {{ item.result[index].name }} -->
          {{ item }}
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
    </div>
    
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      text:[]
    }
  },
  methods: {
       fan(){
      this.$router.go(-1)
    }
  },
  components: {

  },
  mounted:function(){
    axios({
      //请求接口地址
      url:'https://api.apiopen.top/getJoke?page=1&count=2&type=video',
      method:"get",
      responseType: 'json'
    }).then((obj)=>{
      console.log(obj.data);
      this.text = obj.data;
    })
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
