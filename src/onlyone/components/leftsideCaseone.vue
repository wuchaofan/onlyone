<template>
  <v-navigation-drawer :class="$store.state.themeBackgroundColor" 
      permanent clipped dark :mini-variant="innterMini"
      @mouseover="mouseOverMenu()"
      @mouseout="mouseOutMenu()">
      <v-list>
          <v-list-group v-for="item in menuList" 
            :value="item.active" v-bind:key="item.title">
            <v-list-tile slot="item" 
              v-if="item.items">
              <v-list-tile-action>
                <v-icon dark>{{ item.action }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title >{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon dark>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile slot="item" 
              v-else
              :to="item.href">
              <v-list-tile-action>
                <v-icon dark>{{ item.action }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title >{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile v-for="subItem in item.items" 
              v-bind:key="subItem.title"
              :to="subItem.href">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            
          </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
  export default {
    data: () => ({
      innterMini: false,
      footer: {
        fixed: true
      }
    }),
    props: ['menuList', 'changeMini'],
    methods: {
      mouseOverMenu () {
        // this.currentLeftMin = this.changeMini
        this.innterMini = false
      },
      mouseOutMenu () {
        this.innterMini = this.changeMini
      }
    },
    watch: {
      changeMini () {
        // console.log(this)
        this.innterMini = this.changeMini
      }
    }
  }
</script>
<style scoped>
.navigation-drawer{
     width: 220px;  
   box-shadow: 1px 0 6px 2px #AAAAAA;
}

.navigation-drawer.theme--dark .icon,
.navigation-drawer.theme--dark .list__tile__title{
  color: white !important;
}
.navigation-drawer.navigation-drawer--mini-variant{
    width: 80px;  
}

.only-mini-menu{
  position: absolute;
  /* background-color: rebeccapurple; */
  color: black;
  left: 90px; 
  z-index: 100;
  transform: translateZ(0);
  display: none;
}

</style>

