<template>
  <div class="chongz">
    <ul class="header">
        <li>
          <img src="./../assets/img/route/向右@2x.png" alt="">
        </li>
        <li><slot name='text'></slot></li>
    </ul>
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
  background: #FFE009;
  display: flex;
  overflow: hidden;
  li{
    text-align: center;
    font-size: .36rem;
    padding: .35rem 2.34rem .28rem .35rem;
    img{
      float: left;
      width: .2rem;
      height: .34rem;
    }
  }
}

</style>
