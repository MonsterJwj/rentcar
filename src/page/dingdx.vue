<template>
  <div class="box">
      <!-- 头 -->
      <ul>
        <li></li>
        <li>
            <img src="../assets/img/route/向右@2x.png">
            <span>订单信息</span>
        </li>
      </ul>

      <!-- <br><br><br><br><br><br><br><br><br> -->



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
.box{
    background-color: #fafafa;
    overflow: auto;
    width:100%;
    height:100%;
    ul{
      width:100%;
      height:1.28rem;
      background:rgba(255,224,9,1);
      li:nth-child(1){
        height:.34rem;
        // border: 1px solid #000;
      }
      li:nth-child(2){
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        height:.92rem;
        img{
          width:.2rem;
          height:.34rem;
          position: absolute;
          left:33px;
        }
        span{
          font-size:.36rem;
        }
      }
    }   
}
</style>
