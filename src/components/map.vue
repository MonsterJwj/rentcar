<template>
  <div class="mapbox"> 
    <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:100%" @click="getClickInfo">    
      <!-- <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation> -->
      <!-- <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"> </bm-map-type>    -->
      <!-- <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true">    </bm-geolocation> -->
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
    </baidu-map>
  </div>
</template>
<script>
export default {
  name:'mapbox',
  data () {
    return {center: {lng:0, lat:0},zoom:15
  }},
  mounted:function () {
    // this.enableScrollWheelZoom(true); 
  },  
  methods: {handler ({BMap, map}) {
    //坐标 113.730723,34.776484
    console.log(BMap, map);
    this.center.lng =113.730723 ;
    this.center.lat =34.776484  ;
    this.zoom =this.zoom    
  }, 
  getClickInfo (e) {
    console.log(e.point.lng);
    console.log(e.point.lat);
    this.center.lng = e.point.lng;
    this.center.lat = e.point.lat;
  }}}

</script>

<style scoped lang="less">
  .mapbox {
    width:100%;
    height:100%;
  }
</style>
