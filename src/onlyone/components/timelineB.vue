<template>
  <section class="timeline-container">
    <div class="timeline-block" v-for="(item, index) in timelines" :key="item.exid">
        <div class="timeline-icon" :class="getcolor(item.status)">
            <v-icon dark v-if="item.status === 'successed'">done</v-icon>
            <v-icon dark v-if="item.status === 'failed'">clear</v-icon>
        </div>
        <div class="timeline-content">
            <p>{{item.title}}</p>
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

  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  props: ['timelines'],
  methods: {
    getcolor (status) {
      switch (status) {
        case 'successed':
          return 'light-green'
        case 'failed':
          return 'red'
        default:
          return 'grey lighten-1'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeline-container{
    width: 60%;
    margin: 0 auto;
    min-height: 200px;
    /* margin-bottom: 20px; */
}
.timeline-container::before{
    position: absolute;
    content: '';
    width: 4px;
    background-color: #AAAAAA;
    min-height: 100px;
    height: 100%;
    left: 50%;
    margin-left: -2px;
}
.timeline-block{
    position: relative;
    padding-top: 10px;
    margin-bottom: 20px;
}
.timeline-block:nth-child(even) .timeline-content {
    float: right;
}

.timeline-block::after{
    clear: both;
    content: '';
    display: table;
}
.timeline-icon{
    position: absolute;
    left: 50%;
    font-size: 30px;
    margin-left: -25px;
    background-color: #e91e63;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 25px;
    box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}
.timeline-content{
    background-color: white;
    width: 45%;
    box-shadow: 0 3px 0 #d7e4ed;
    border-radius: 4px;
    position: relative;
    padding: 6px;
}
.timeline-content::before{
    content: '';
    position: absolute;
    top: 16px;
    left: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-left-color: #ffffff;
}
.timeline-block:nth-child(even) .timeline-content::before{
    border: 7px solid transparent;;
    border-right-color: #ffffff;
    left: -14px;
    right: 100%;
}
.timeline-content::after{
    clear: both;
    content: '';
     display: table; 
}
.timeline-content p{
    margin-bottom: 2px;
    padding: 2px 10px 0 10px;
    font-size: 18px;
}
.body{
    background-color: #F6F6F6;
    padding: 0 3px;
}
.body .layout.row{
  padding: 4px;
}
</style>
