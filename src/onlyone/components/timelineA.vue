<template>
<section id="timeline">
  <v-layout row :class="{'timeline-left': (index + 1) % 2 != 0,
    'timeline-right': (index + 1) % 2 == 0}" 
    v-for="(item, index) in timelines" :key="item.exid">
    <v-flex md6 lg6 class="pa-0" :class="{'offset-lg6 offset-md6': (index + 1) % 2 == 0}">
    <div class="demo-card-wrapper">
        <div class="demo-card demo-card--step" :class="item.css">
        <div class="head">
            <div class="number-box">
                <span>{{item.id}}</span>
            </div>
            <h4>{{item.title}}</h4>
        </div>
        <div class="body">
            <v-layout row>
            <v-flex lg4 class="text-lg-left">
                <span>状态：</span>
            </v-flex>
            <v-flex lg8>
                <span>{{item.status}}</span>
            </v-flex>             
            </v-layout>
            <v-layout row>
            <v-flex lg4 class="text-lg-left">
                <span>执行ID：</span>
            </v-flex>
            <v-flex lg8>
                <span>{{item.exid}}</span>
            </v-flex>             
            </v-layout>
            <v-layout row>
            <v-flex lg4 class="text-lg-left">
                <span>开始时间：</span>
            </v-flex>
            <v-flex lg8>
                <span>{{item.starttime}}</span>
            </v-flex>             
            </v-layout>
            <v-layout row>
                <v-flex lg4 class="text-lg-left">
                    <span>结束时间：</span>
                </v-flex>
                <v-flex lg8>
                    <span>{{item.endtime}}</span>
                </v-flex>             
            </v-layout>
            <v-layout row v-if="item.status === 'failed'">
                <v-flex lg12>
                     <v-btn dark error>重新执行</v-btn>
                     <v-btn dark primary>确认</v-btn>
                </v-flex>             
            </v-layout>

        </div>
        </div>
    </div>
    </v-flex>
  </v-layout>
</section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  props: ['timelines']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#timeline {
 display: flex;
 flex-direction: column;
}
.body .layout.row{
  padding: 4px;
}
.timeline-left .demo-card-wrapper{
  display: flex;
  justify-content: flex-end;
  border-right: 1px solid #AAAAAA;
  padding: 10px 20px;
}
.timeline-right .demo-card-wrapper{
  display: flex;
  justify-content: flex-start;
  border-left: 1px solid #AAAAAA;
  margin-left: -1px;
  padding: 10px 20px;
}
.demo-card{
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 1 1 50%;
  max-width: 400px;
  background-color: #46b8e9;
  box-shadow: 0px 1px 22px 4px rgba(0, 0, 0, 0.07);
  
}
.demo-card .head{
  display: flex;
  align-items: center;
  padding: 6px 6px;
  color: white;
}
.timeline-left .demo-card .head::after{
  content: '';
  border-right: 12px solid transparent;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 12px solid #46b8e9;
  position: absolute;
  z-index: 1;
  right: -24px;
}
.timeline-left .demo-card.light-green .head::after{
  border-left: 12px solid #8bc34a;
}
.timeline-left .demo-card.red .head::after{
  border-left: 12px solid #f44336;
}
.timeline-right .demo-card .head::after{
  content: '';
  border-right: 12px solid #46b8e9;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 12px solid transparent;
  position: absolute;
  z-index: 1;
  left: -24px;
}
.timeline-right .demo-card.light-green .head::after{
  border-right: 12px solid #8bc34a;
}
.timeline-right .demo-card.red .head::after{
  border-right: 12px solid #f44336;
}

.timeline-left .demo-card .head::before{
  content: '';
  position: absolute;
  right: -27px;
  width: 14px;
  height: 14px;
  background-color: #AAAAAA;
  border: 2px solid white;
  border-radius: 7px;
}
.timeline-right .demo-card .head::before{
  content: '';
  position: absolute;
  left: -28px;
  width: 14px;
  height: 14px;
  background-color: #AAAAAA;
  border: 2px solid white;
  border-radius: 7px;
}

.demo-card .head h4{
  margin-bottom: 0;
  font-size: 19px;
  color: white;
}
.number-box{
  font-size: 26px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0 6px;
  text-align: center;
  margin-right: 6px;
}

.demo-card .body{
  background-color: white;
  padding: 4px 6px;
  overflow-x: hidden;
}
.body span{
  max-width: 100px;
}
</style>
