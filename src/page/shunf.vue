<template>
  <div class="changz">
      <Pjsf></Pjsf>
      <div class="all">
        <div class="list">
          <div class="fromto" v-for="(a,b) in slist" :key="b">
            <div class="from">
              <p class="city">{{a.from}}</p>
              <p class="tian">{{a.fromtime}}</p>
              <p class="chezi"><img :src="a.carimg" alt=""></p>
            </div>
            <div class="time"><span>{{a.day}}</span>天</div>
            <div class="to">
              <p class="city">{{a.to}}</p>
              <p class="tian">{{a.totime}}</p>
              <p class="chezi">{{a.cartype}}</p>
            </div>
          </div>
        </div>
        <div class="btn" @click="ran">换一批</div>
      </div>
  </div>
</template>

<script>
import Pjsf from "../components/pjsf"
export default {
  data() {
    return {
      list:[
        {from:'郑州',fromtime:'07年10日 周一',carimg:require("../assets/img/shunfeng/dazo.png"),day:"30",to:"广州",totime:"08年10日 周三",cartype:"大众朗逸"},
        {from:'郑州',fromtime:'07年11日 周二',carimg:require("../assets/img/shunfeng/leike.png"),day:"30",to:"广州",totime:"08年10日 周三",cartype:"雷克萨斯-ES"},
        {from:'郑州',fromtime:'07年10日 周一',carimg:require("../assets/img/shunfeng/dazo.png"),day:"30",to:"广州",totime:"08年10日 周三",cartype:"大众朗逸"},
        {from:'郑州',fromtime:'07年10日 周一',carimg:require("../assets/img/shunfeng/leike.png"),day:"30",to:"广州",totime:"08年10日 周三",cartype:"雷克萨斯-ES"},
        {from:'郑州',fromtime:'07年10日 周一',carimg:require("../assets/img/shunfeng/dazo.png"),day:"30",to:"广州",totime:"08年10日 周三",cartype:"大众朗逸"},
        {from:'郑州',fromtime:'07年10日 周一',carimg:require("../assets/img/shunfeng/leike.png"),day:"30",to:"广州",totime:"08年10日 周三",cartype:"雷克萨斯-ES"}
      ],
      slist:[]
    }
  },
  methods: {
    ran(){
      // console.log(1);
      let l=this.list.length;
      let ran=[];
      for(let i=0;i<6;i++){
        let x=Math.floor(Math.random()*l);
        let a=0;
        for(let i=0;i<ran.length;i++){
          if(ran[i]==x){a+=1}
        }
        if(a==0){ran.push(x)}else{i--}
      }
      this.slist=[];
      for(let i=0;i<ran.length;i++){
        this.slist.push(this.list[ran[i]])
      }
      document.documentElement.scrollTop=0;
      // console.log(ran)
    }
  },
  mounted () {
    this.$axios.get('http://qaq12123.in.8866.org:30102/account/findOrderList').then(
      (a)=>{
        // console.log(a)
        this.list=[];
        a.data.forEach((b)=>{
          let img;
          switch (b.brand) {
            case '别克':
              img=require('../assets/img/shunfeng/bieke.jpg')
            break;
            case '雪佛兰':
              img=require('../assets/img/shunfeng/xuef.jpg')
            break;
            case '保时捷':
              img=require('../assets/img/shunfeng/luh.jpg')
            break;
            case '别克GL8':
              img=require('../assets/img/shunfeng/luhu.jpg')
            break;
            case '比亚迪':
              img=require('../assets/img/shunfeng/kaidi.jpg')
            break;
            case '奥迪A4':
              img=require('../assets/img/shunfeng/aodi.jpg')
            break;
            case '一汽大众':
              img=require('../assets/img/shunfeng/dazo.png')
            break;
            case '雪弗兰科麦罗':
              img=require('../assets/img/shunfeng/xuef.jpg')
            break;
            case '福特':
              img=require('../assets/img/shunfeng/fengt.jpg')
            break;
            case '欧拓':
              img=require('../assets/img/shunfeng/kaidi.jpg')
            break;
            case '奔驰':
              img=require('../assets/img/shunfeng/benc.jpg')
            break;
            default:
              img=require('../assets/img/shunfeng/luhu.jpg')
              break;
          }
          this.list.push({from:b.collectionCity,fromtime:b.startday,carimg:img,day:b.rentTime,to:b.returnCity,totime:b.endday,cartype:b.brand})
          // console.log(img)
        })
          let l=this.list.length;
          let ran=[];
          for(let i=0;i<6;i++){
            let x=Math.floor(Math.random()*l);
            let a=0;
            for(let i=0;i<ran.length;i++){
              if(ran[i]==x){a+=1}
            }
            if(a==0){ran.push(x)}else{i--}
          }
          for(let i=0;i<ran.length;i++){
            this.slist.push(this.list[ran[i]])
          }
          // console.log(this.slist)
          // console.log(this.list);
        },
      (a)=>{
        console.log(a)
        this.slist=this.list;
        })
      .catch(
        (err)=>{
          this.slist=this.list;
          console.log(err)
        })
  },
  components: {
    Pjsf,
    Map
  }
}
</script>

<style scoped lang="less">
  .changz{
    display: flex;
    flex-direction: column;
    height: 100%;
    .all{
      flex: 1;
      background: rgb(250,250,250);
      margin-top: 2.18rem;
      .list{
        width: 100%;
        padding-bottom: 1.1rem;
        .fromto{
          padding: .23rem .32rem;
          box-sizing: border-box;
          height: 3rem;
          width: 100%;
          background: white;
          font-size: .28rem;
          display: flex;
          justify-content: space-between;
          margin-top: .3rem;
          .from,.to{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            height: 100%;
            width: 2.6rem;
            .city{
              font-size: .3rem;
            }
            .tian{
              font-size: .22rem;
              color: rgb(153,153,153);
            }
            .chezi{
              line-height: 1.32rem;
              height: 1.32rem;
              img{
                width: 2.6rem;
                transform: translateX(-.2rem);
              }
            }
          }
          .to{
            text-align: right;
          }
          .time{
            margin-top: .2rem;
            width: 1.2rem;
            height: 1.2rem;
            background:linear-gradient(left,rgb(251,236,128),rgb(255,225,10));
            border-radius: .59rem;
            text-align: center;
            line-height: 1.18rem;
            font-size: .2rem;
            color: black;
            span{
              font-size: .5rem;
            }
          }
        }
      }
    }
    .btn{
      width: 6.86rem;
      height: .98rem;
      font-size: .32rem;
      position: fixed;
      bottom: .06rem;
      left:.32rem;
      text-align: center;
      line-height: .98rem;
      border-radius: .49rem;
      background: linear-gradient(left,rgb(251,236,128),rgb(255,224,10));
    }
  }

</style>
