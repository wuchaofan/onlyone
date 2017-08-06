<template>
  <div class="barchart">
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'

export default {
  name: 'onlychart',
  data () {
    return {
    }
  },
  computed: {
    chart () {
      return echarts.init(this.$el)
    },
    leftsideMini () {
      return this.$store.state.leftsideMini
    }
  },
  watch: {
    leftsideMini (val) {
      setTimeout(() => {
        this.chart.resize()
      }, 305)
    }
  },
  props: ['optionData'],
  methods: {
    handleResize () {
      this.chart.resize()
    }
  },
  mounted () {
    if (this.optionData) {
      if (typeof this.optionData === 'object') {
        this.chart.setOption(this.optionData)
      } else if (typeof this.optionData === 'function') {
        this.optionData().then((res) => {
          this.chart.setOption(res)
        })
      }
    }
  },
  created: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.barchart{
  height: 340px;
}
</style>
