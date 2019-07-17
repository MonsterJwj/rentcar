<template>
  <div class="chongz">
    <div class="header">
        <img src="./../assets/img/register/矢量智能对象@2x.png" alt="" @click="tt">
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
      tt(){
        this.$router.go(-1)
      }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
 .header{
   overflow: hidden;
  background: #FFE009;
  height: 1.28rem;
  padding: .4rem .32rem 0 .32rem;
  box-sizing: border-box;
  img{
    float: left;
    margin-top: .25rem;
    width: .20rem;
    height: .34rem;
  }
  p{
    font-size: .34rem;
    line-height: .88rem;
     text-align: center;
  }
}

</style>
