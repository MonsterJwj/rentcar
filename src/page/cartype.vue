<template>
  <div class="cartype">
    <div class="top">
      <router-link to='/cartype/car'>按价格</router-link>
      <router-link to='/cartype/type'>按车型</router-link>
      <img src="../assets/img/route/向右@2x.png" alt="" @click="back">
    </div>
    <div class="lei">
      <router-view></router-view>
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
    back(){
      this.$router.go(-1);
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.cartype{
  background: rgb(250,250,250);
  width: 100%;
  height: 100%;
  position: relative;
  .top{
    position: relative;
    img{
      position: absolute;
      width: .2rem;
      top: .7rem;
      left: .32rem;
    }
    padding-top: .4rem;
    height: 1.28rem;
    box-sizing: border-box;
    width: 100%;
    font-size: .34rem;
    background:rgb(255,224,9);
    display: flex;
    justify-content: space-around;
    line-height: .88rem;
    position: fixed;
    top: 0;
    z-index: 999;
    a{
      position: relative;
    }
    .router-link-active{
      font-weight: 600;
    }
    .router-link-active:after{
      content: '';
      width: 1.2rem;
      height: .06rem;
      background: black;
      position: absolute;
      border-radius: .03rem;
      bottom: .09rem;
      right: -.1rem;
    }
  }
  .lei{
    width: 100%;
    margin-top:1.28rem; 
  }
}
</style>
