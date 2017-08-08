<template>
  <v-layout row wrap>
    <v-flex xs6>
      <show-code active="showcase">
          <btn-caseone  slot="showcase"></btn-caseone>
           <view-sourcecode slot="onlycode" 
            :html-template="caseone.html"
            :js-sourcecode="caseone.js">
          </view-sourcecode>
          <!-- <view-api slot="onlyapi" :headers="caseone.headers"
            :items="caseone.items" :is-slot="false"></view-api>
          <view-api slot="onlyslots" :headers="caseone.slots.headers"
            :items="caseone.slots.items"
            :is-slot="true"></view-api>  -->
      </show-code>
    </v-flex>
    <v-flex xs6>
      <show-code active="showcase">
        <btn-casetwo  slot="showcase"></btn-casetwo>
        <!-- <view-sourcecode slot="onlycode" 
          :html-template="casetwo.html"
          :js-sourcecode="casetwo.js">
        </view-sourcecode>
        <view-api slot="onlyapi" :headers="casetwo.headers"
          :items="casetwo.items" :is-slot="false"></view-api>
        <view-api slot="onlyslots" :headers="casetwo.slots.headers"
          :items="casetwo.slots.items"
          :is-slot="true"></view-api>   -->
      </show-code> 
    </v-flex>
    <v-flex xs6 class="mt-2">
      <show-code active="showcase">
        <btn-case3  slot="showcase"></btn-case3>
      </show-code> 
    </v-flex>
    <v-flex xs6 class="mt-2">
      <show-code active="showcase">
        <btn-case4  slot="showcase"></btn-case4>
      </show-code> 
    </v-flex>
    <v-flex xs6 class="mt-2">
      <show-code active="showcase">
        <btn-case5  slot="showcase"></btn-case5>
      </show-code> 
    </v-flex>
  </v-layout>
</template>

<script>
import BtnCaseone from '@/onlyone/pages/ui/buttons/btnCaseone'
import ShowCode from '@/onlyone/components/showcode'
import caseone from '@/mock/ui/btncaseone.js'
import ViewSourcecode from '@/onlyone/components/viewSourcecode'
import BtnCasetwo from '@/onlyone/pages/ui/buttons/btnCasetwo'
import BtnCase3 from '@/onlyone/pages/ui/buttons/btnCase3'
import BtnCase4 from '@/onlyone/pages/ui/buttons/btnCase4'
import BtnCase5 from '@/onlyone/pages/ui/buttons/btnCase5'

export default {
  name: 'buttons',
  data () {
    return {
      caseone
    }
  },
  components: {
    BtnCaseone,
    ShowCode,
    ViewSourcecode,
    BtnCasetwo,
    BtnCase3,
    BtnCase4,
    BtnCase5
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
