<template>
  <div>
       <ul class="header">
        <li>
          <span class="fanhui"></span>
        </li>
        <li>评价</li>
        <li>
        </li>
      </ul>

      <div class="box">
        <div class="neirong">
          <ul>
            <li>取车门店 郑州金水路店</li>
            <li>
              手续办理
              <span class="yellow" v-for="(item,index) in show" :key='index' @click="fn(index)" :class="{yellow1:item.boolen,yellow:!item.boolen}"></span>
            </li>
            <li>
              车辆情况
              <span v-for="(item,index) in 5" :key='index'></span>
            </li>
            <li>
              服务态度
              <span v-for="(item,index) in 5" :key='index'></span>
            </li>
          </ul>

          <div contentEditable="true" class="text"></div>
          <ul>
            <li>换车门店 郑州郑汴路店</li>
            <li>
              手续办理
              <span class="yellow" v-for="(item,index) in 5" :key='index'></span>
            </li>
            <li>
              服务态度
              <span v-for="(item,index) in 5" :key='index'></span>
            </li>
          </ul>

          <div contentEditable="true" class="text"></div>

          <p>感谢你对评价的支持，来说说你的平架之旅吧</p>


        </div>
        <p class="btn"> <router-link to="/pingjl">提交</router-link> </p>
      </div>      
  </div>
</template>

<script>
export default {
  data() {
    return {
        value: 3,
        show:[
          {boolen:false},
          {boolen:false},
          {boolen:false},
          {boolen:false},
          {boolen:false}
        ]
    }
  },
  methods: {
    fn(a){
      for(let i=0;i<this.show.length;i++){
        this.show[i].boolen=true
      }
      for(let i=0;i<=a;i++){
        this.show[i].boolen=false
      }
    }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
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
.box{
  background: #fafafa;
  padding: .32rem 0rem 0rem 0rem;
  .btn{
    width: 6.86rem;
    height: .88rem;
    font-size: .36rem;
    text-align: center;
    line-height: .88rem;
    border-radius:44px;
    margin: 1rem auto;
    color: #333333FF;
    background:linear-gradient(90deg,rgba(251,236,129,1),rgba(255,224,9,1));
  }
  .neirong{
    background: #ffffff;
    width: 6.86rem;
    height: 9.56rem;
    border-radius:20px;
    margin: 0 auto;
    padding: .23rem 0rem .55rem .32rem;
    ul{
      font-size:.28rem;
      margin-top: .32rem;
      li{
        line-height: .38rem;
        span{
          width: .48rem;
          height: .48rem;
          display: inline-block;
          background: url('./../assets/img/pingj/icon-2-png@2x.png')no-repeat center .11rem;
          background-size: cover;
        }
        .yellow{
          width: .48rem;
          height: .48rem;
          display: inline-block;
          background: url('./../assets/img/pingj/icon-1-png@2x.png')no-repeat center .11rem;
          background-size: cover;
        }
        .yellow1{
          width: .48rem;
          height: .48rem;
          display: inline-block;
          background: url('./../assets/img/pingj/icon-2-png@2x.png')no-repeat center .11rem;
          background-size: cover;
        }
      }
    }
    .text{
      width: 6.22rem;
      height: 1.89rem;
      border:1px solid rgba(255,224,9,1);
      border-radius:20px;
      font-size: .28rem;
      outline: none;
      text-indent: .1rem;
      overflow: hidden;
      margin-top: .32rem;
    }
    p{
      font-size: .24rem;
      color: #999999FF;
      text-indent: .75rem;
      margin-top: .32rem;
    }
  }
  a{
      color: #333333FF;
  }
}
</style>
