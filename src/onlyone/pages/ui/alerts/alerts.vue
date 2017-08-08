<template>
  <v-layout row wrap>
    <v-flex xs6>
      <show-code active="showcase">
          <alerts-caseone slot="showcase"></alerts-caseone>
          <view-sourcecode slot="onlycode" 
            :html-template="caseone.html"
            :js-sourcecode="caseone.js">
          </view-sourcecode>
          <view-api slot="onlyapi" :headers="caseone.headers"
            :items="caseone.items" :is-slot="false"></view-api>
          <view-api slot="onlyslots" :headers="caseone.slots.headers"
            :items="caseone.slots.items"
            :is-slot="true"></view-api>
      </show-code>
    </v-flex>
    <v-flex xs6>
      <show-code active="onlyapi">
        <alerts-casetwo slot="showcase"></alerts-casetwo>
        <view-sourcecode slot="onlycode" 
          :html-template="casetwo.html"
          :js-sourcecode="casetwo.js">
        </view-sourcecode>
        <view-api slot="onlyapi" :headers="casetwo.headers"
          :items="casetwo.items" :is-slot="false"></view-api>
        <view-api slot="onlyslots" :headers="casetwo.slots.headers"
          :items="casetwo.slots.items"
          :is-slot="true"></view-api>  
      </show-code> 
    </v-flex>

  </v-layout>
</template>

<script>
import ShowCode from '@/onlyone/components/showcode'
import AlertsCaseone from '@/onlyone/pages/ui/alerts/alertsCaseone'
import AlertsCasetwo from '@/onlyone/pages/ui/alerts/alertsCasetwo'
import ViewSourcecode from '@/onlyone/components/viewSourcecode'
import ViewApi from '@/onlyone/components/viewApi'
import caseone from '@/mock/ui/alertcaseone.js'
import casetwo from '@/mock/ui/alertcasetwo.js'

export default {
  name: 'alerts',
  data () {
    return {
      caseone,
      casetwo
    }
  },
  methods: {
    next () {
    }
  },
  components: {
    ShowCode,
    AlertsCaseone,
    ViewSourcecode,
    ViewApi,
    AlertsCasetwo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alerts{
}
</style>
