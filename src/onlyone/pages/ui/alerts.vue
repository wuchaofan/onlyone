<template>
  <v-layout row wrap>
    <v-flex xs6>
      <show-code>
          <div slot="showcase">
            <v-alert info dismissible v-model="alert">
              This is a success alert that is closable.
            </v-alert>

            <div class="text-xs-center">
              <v-btn primary dark v-if="!alert" @click.native="alert = true">Reset</v-btn>
            </div>
          </div>
          <div slot="onlycode">
          </div>
      </show-code>
    </v-flex>
    <v-flex xs6>
       <show-code></show-code> 
    </v-flex>

  </v-layout>
</template>

<script>
import ShowCode from '@/onlyone/components/showcode'

export default {
  name: 'alerts',
  data () {
    return {
      alert: true
    }
  },
  methods: {
    next () {
    }
  },
  components: {
    ShowCode
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alerts{
}
</style>
