<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Rem from "./assets/rem.js"
export default {
  name: 'App',
  methods: {
    
  },
  mounted () {
    Rem.setRem();
    window.onresize=Rem.setRem;
  }
}
</script>

<style>
#app {
  
}
</style>
