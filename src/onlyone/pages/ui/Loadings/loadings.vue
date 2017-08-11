<template>
  <v-layout row wrap>
    <v-flex xs6 md3 lg2>
      <spinner-a></spinner-a>
    </v-flex>
    <v-flex xs6 md3 lg2 class="loading">
      <loading-a></loading-a>
    </v-flex>
    <v-flex xs6 md3 lg2>
      <loading-b></loading-b>
    </v-flex>
    <v-flex xs6 md3 lg2>
      <loading-c></loading-c>
    </v-flex>
    <v-flex xs6 md3 lg2>
      <loading-d></loading-d>
    </v-flex>
    <v-flex xs6 md3 lg2 class="loading">
      <loading-e></loading-e>
    </v-flex>
  </v-layout>
</template>

<script>
import SpinnerA from '@/onlyone/components/loadings/spinnerA'
import LoadingA from '@/onlyone/components/loadings/loadingA'
import LoadingB from '@/onlyone/components/loadings/loadingB'
import LoadingC from '@/onlyone/components/loadings/loadingC'
import LoadingD from '@/onlyone/components/loadings/loadingD'
import LoadingE from '@/onlyone/components/loadings/loadingE'

export default {
  name: 'loading',
  data () {
    return {
    }
  },
  components: {
    SpinnerA,
    LoadingA,
    LoadingB,
    LoadingC,
    LoadingD,
    LoadingE
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading{
  justify-content: center;
  display: flex;
}
</style>
