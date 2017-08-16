<template>
  <v-toolbar :class="$store.state.themeBackgroundColor" fixed>
      <v-toolbar-title style="color: white;">OnlyOne</v-toolbar-title>
      <v-toolbar-side-icon dark
        class="only-menu" :class="{'only-menu-mini': mindrawer}"
        @click.native.stop="changeLeftstate"></v-toolbar-side-icon>

      <v-spacer></v-spacer>

      <search-bar></search-bar>

      <v-menu bottom left :position-y="34" :offset-y="true">
        <v-btn icon slot="activator" dark>
          <v-icon>account_circle</v-icon>
        </v-btn>
        <v-list class="pb-0 pt-0">
          <v-list-tile>
            <v-list-tile-title> 注销 </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-menu bottom left :position-y="34" :offset-y="true">
        <v-btn slot="activator" dark flat>
          <v-icon>more_vert</v-icon>
          <span>主题色</span>
        </v-btn>
        <v-list class="pb-0 pt-0" dark>
          <v-list-tile :class="color" 
            v-for="color in themeColors" :key="color"
            @click.native="changeTheme(color)">
            <v-list-tile-title> {{color}} </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
</template>

<script>
import SearchBar from '@/onlyone/components/searchBar'

export default {
  name: 'hello',
  data () {
    return {
      mindrawer: false,
      themeColors: ['pink', 'indigo', 'blue', 'blue darken-2', 'theme-gradient',
        'deep-orange', 'purple', 'cyan',
        'cyan darken-2', 'green', 'green darken-2', 'orange darken-3', 'theme-image']
    }
  },
  methods: {
    changeTheme (color) {
      this.$store.commit('changeThemebgcolor', {bgcolor: color})
    },
    changeLeftstate () {
      this.mindrawer = !this.mindrawer
      this.$store.commit('chnageLeftside', {data: this.mindrawer})
    }
  },
  components: {
    SearchBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.only-menu{
  margin-left: 120px;
}
.only-menu-mini{
  margin-left: 10px;
}
</style>
