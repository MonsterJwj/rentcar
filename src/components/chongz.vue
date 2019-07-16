<template>
  <div class="chongz">
    <div class="header">
        <img src="./../assets/img/register/矢量智能对象@2x.png" alt="">
       <slot name="text"></slot>
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

<style scoped lang='less'>
 .header{
   overflow: hidden;
  background: #FFE009;
  padding: .28rem 0rem .3rem .32rem;
  img{
    float: left;
    width: .20rem;
    height: .34rem;
  }
  p{
   
    font-size: .34rem;
     text-align: center;
  }
}

</style>
