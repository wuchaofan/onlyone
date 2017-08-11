<template>
  <v-layout row wrap>
      <v-flex xs4 lg3 v-for="color in colorlist" :key="color" class="mt-1 mb-2" style="font-size: 16px;">
        <v-card >
          <v-card-text class="pa-0">
              <h4 :class="color" class="white--text pa-2 ma-0">{{color}}</h4>
          </v-card-text>
          <v-card-text class="pa-0">
              <p :class="color" class="lighten-4 black--text pa-2 ma-0">{{color}} lighten-4</p>
          </v-card-text>
          <v-card-text class="pa-0">
              <p :class="color" class=" lighten-3 black--text pa-2 ma-0">{{color}} lighten-3</p>
          </v-card-text>
          <v-card-text class="pa-0">
              <p :class="color" class=" lighten-2 black--text pa-2 ma-0">{{color}} lighten-2</p>
          </v-card-text>
          <v-card-text class="pa-0">
              <p :class="color" class=" lighten-1 black--text pa-2 ma-0">{{color}} lighten-1</p>
          </v-card-text>

          <v-card-text class="pa-0">
              <p :class="color" class=" darken-1 white--text pa-2 ma-0">{{color}} darken-1</p>
          </v-card-text>
          <v-card-text class="pa-0">
              <p :class="color" class=" darken-2 white--text pa-2 ma-0">{{color}} darken-2</p>
          </v-card-text>
          <v-card-text class="pa-0">
              <p :class="color" class=" darken-3 white--text pa-2 ma-0">{{color}} darken-3</p>
          </v-card-text>
          <v-card-text class="pa-0">
              <p :class="color" class=" darken-4 white--text pa-2 ma-0">{{color}} darken-4</p>
          </v-card-text>

          <v-card-text class="pa-0">
              <p :class="color" class=" accent-1 black--text pa-2 ma-0">{{color}} accent-1</p>
          </v-card-text>
          <v-card-text class="pa-0">
              <p :class="color" class=" accent-2 black--text pa-2 ma-0">{{color}} accent-2</p>
          </v-card-text>
          <v-card-text class="pa-0">
              <p :class="color" class=" accent-3 black--text pa-2 ma-0">{{color}} accent-3</p>
          </v-card-text>
          <v-card-text class="pa-0">
              <p :class="color" class="accent-4 black--text pa-2 ma-0">{{color}} accent-4</p>
          </v-card-text>
        </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'colors',
  data () {
    return {
      colorlist: ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
