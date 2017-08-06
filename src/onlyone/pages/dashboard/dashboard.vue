<template>
  <div class="bashboard">
    <v-layout row wrap>
      <v-flex xs6>
        <v-card >
          <v-card-text>
            <only-chart :option-data="barchart"></only-chart>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <v-card-text>
            <only-chart :option-data="barnegative"></only-chart>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 class="top">
        <v-card>
          <v-card-text>
            <only-chart :option-data="leida"></only-chart>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 class="top">
        <v-card>
          <v-card-text>
            <only-chart :option-data="caseone"></only-chart>
          </v-card-text>
        </v-card>
      </v-flex>
       <v-flex xs6 class="top">
        <v-card>
          <v-card-text>
            <only-chart :option-data="case3" style="height: 460px;"></only-chart>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 class="top">
        <v-card>
          <v-card-text>
             <only-chart :option-data="case4" 
              style="height: 460px;"
              ></only-chart> 
          </v-card-text>
        </v-card>
      </v-flex>
        <v-flex xs12 class="top">
        <v-card>
          <v-card-text>
            <only-chart :option-data="case2"></only-chart>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
    
  </div>
</template>

<script>
import OnlyChart from '@/onlyone/components/onlyChart'
import chartData from '@/mock/chartoption.js'
import CanvasChart from '@/onlyone/components/canvasChart'

export default {
  name: 'bashboard',
  data () {
    return {
      barchart: chartData.barchart,
      barnegative: chartData.barnegative,
      leida: chartData.leida,
      caseone: chartData.caseone,
      case2: chartData.case2,
      case3: chartData.case3,
      case4: chartData.case4
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
  },
  components: {
    OnlyChart,
    CanvasChart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  margin-top: 10px;
}
.bashboard .netMap{
  height: 450px;
}
</style>
