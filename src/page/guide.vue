<template>
<<<<<<< HEAD
  <div>
      引导页
=======
  <div class="box">
    <!-- 引导页swiper -->
    <swiper :options="swiperOption" ref="mySwiper" class="box2">
    <!-- slides -->
    <swiper-slide class="por1"></swiper-slide>
    <swiper-slide class="por2"></swiper-slide>
    <swiper-slide class="por3"><p>立即进入</p></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>


>>>>>>> upstream/master
  </div>
</template>

<script>
export default {
  data() {
    return {
<<<<<<< HEAD

=======
 swiperOption: {
   pagination: {
     el: '.swiper-pagination'
        }
     }
>>>>>>> upstream/master
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<<<<<<< HEAD
<style scoped>

=======
<style scoped lang="less">
  .box{
    width:100%;
    height:100%;
    overflow:hidden;
    .box2{
      width:100%;
      height:100%;
      .por1{
        background:url(../assets/img/guide/引导页1.png) no-repeat center center;
        background-size:cover;
      }
      .por2{
        background:url(../assets/img/guide/引导页2.png) no-repeat center center;
        background-size:cover;
      }
      .por3{
        background:url(../assets/img/guide/引导页3.png) no-repeat center center;
        background-size:cover;
        p{
          width:4.25rem;
          height:.67rem;
          font-size:.33rem;
          text-align:center;
          line-height:.67rem;
          background-color: #f8b827;
          color:#fff;
          border-radius:.4rem;
          opacity:.58;
          margin-left:50%;
          transform: translateX(-2.125rem);
          position: absolute;
          bottom:98PX;
        }
      }
    }
  }
>>>>>>> upstream/master
</style>
