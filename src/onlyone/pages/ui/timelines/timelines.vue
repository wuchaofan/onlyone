<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 md12 lg12 class="only-center">
      <v-tabs dark v-model="active">
      <v-tabs-bar slot="activators" class="cyan">
        <v-tabs-item
          href="#timelinea"
          ripple>
          timeline 1
        </v-tabs-item>
        <v-tabs-item
          href="#timelineb"
          ripple>
          timeline 2
        </v-tabs-item>

        <v-tabs-slider class="yellow"></v-tabs-slider>
      </v-tabs-bar>
      <v-tabs-content
        id="timelinea">
        <v-card flat>
          <v-card-text> 
            <section>
            <h4 class="text-lg-center">A Flexbox Timeline</h4>
            <timeline-a :timelines="timelines"></timeline-a>
                   
            </section>
          </v-card-text>
        </v-card>
      </v-tabs-content>

      <v-tabs-content
        id="timelineb">
        <v-card flat style="background-color: #EEEEEE;">
          <v-card-text> 
            <v-layout row wrap>
                <v-flex xs12 sm12 md12 offset-lg3 lg6 class="only-center">
                  <timeline-b :timelines="timelines"></timeline-b>
                </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-tabs-content>

    </v-tabs>

       
    </v-flex>
  </v-layout>
</template>

<script>
import TimelineA from '@/onlyone/components/timelineA'
import TimelineB from '@/onlyone/components/timelineB'

export default {
  name: 'hello',
  data () {
    return {
      active: 'timelinea',
      timelines: [
        {
          id: '01',
          title: '启动审批',
          status: 'successed',
          starttime: '2017-08-08 12:41:15',
          endtime: '2017-08-08 12:41:17',
          exid: '598940eb570e013194c8a6e0',
          css: 'light-green'
        },
        {
          id: '02',
          title: '等待执行结果',
          status: 'successed',
          starttime: '2017-08-08 12:41:15',
          endtime: '2017-08-08 12:41:17',
          exid: '598940ed570e013194c8a6e2',
          css: 'light-green'
        },
        {
          id: '03',
          title: '人工操作',
          status: 'successed',
          starttime: '2017-08-08 12:41:15',
          endtime: '2017-08-08 12:41:17',
          exid: '59894121570e013194c8a6e4',
          css: 'light-green'
        },
        {
          id: '04',
          title: '等待执行结果',
          status: 'failed',
          starttime: '2017-08-08 12:42:11',
          endtime: '2017-08-08 12:44:13',
          exid: '59894123570e013194c8a6e7',
          css: 'red'
        }
      ]
    }
  },
  computed: {
  },
  components: {
    TimelineA,
    TimelineB
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.only-center{
}

</style>
