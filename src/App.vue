<template>
  <v-app id="onlyone-app" standalone light>
     <leftside-caseone :menu-list="items"
      :change-mini="$store.state.leftsideMini"></leftside-caseone>
    <toolbar-caseone></toolbar-caseone>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main> 
  </v-app>
</template>
<script>
  import LeftsideCaseone from '@/onlyone/components/leftsideCaseone'
  import ToolbarCaseone from '@/onlyone/components/toolbarCaseone'

  export default {
    data: () => ({
      dark: true,
      currentLeftMin: false,
      mindrawer: false,
      themeColors: ['pink', 'indigo', 'blue', 'deep-purple', 'deep-orange', 'purple'],
      items: [
        {
          action: 'dashboard',
          active: true,
          title: 'Dashboard',
          href: {name: 'Dashboard'}
        },
        {
          action: 'extension',
          title: '组件',
          items: [
            {
              title: 'Alerts',
              href: {name: 'Alerts'}
            },
            {title: 'Buttons', href: {name: 'Buttons'}},
            {title: 'Forms', href: {name: 'Forms'}},
            {title: 'Tabs', href: {name: 'Tabs'}},
            {title: 'Steppers', href: {name: 'Steppers'}}
          ]
        },
        {
          action: 'line_style',
          title: '布局',
          items: [
            { title: 'Grid' },
            { title: 'Spacing' },
            { title: 'Alignment' },
            { title: 'Elevation' }
          ]
        },
        {
          action: 'style',
          title: '样式',
          items: [
            { title: 'Colors' },
            { title: 'Typography' },
            { title: 'Content' }
          ]
        },
        {
          action: 'polymer',
          title: '指令',
          items: [
            { title: 'Badge' },
            { title: 'Ripples' },
            { title: 'Tooltip' }
          ]
        },
        {
          action: 'view_carousel',
          title: '更多模板',
          items: [
            { title: 'OnlyTwo' }
          ]
        },
        {
          action: 'local_offer',
          title: '关于'
        }
      ],
      right: null
    }),
    components: {
      LeftsideCaseone,
      ToolbarCaseone
    },
    methods: {
      changeTheme (color) {
        this.$store.commit('changeThemebgcolor', {bgcolor: color})
      }
    }
  }
</script>
<style>
html{
  margin: 0;
  /* overflow: hidden; */
}


#onlyone-app .navigation-drawer:not(.navigation-drawer--mini-variant) ~ main{
  padding-left: 260px;
}

#onlyone-app main .container.fluid{
  /* overflow-x: hidden;
  overflow-y: auto; 
  padding-bottom: 90px; */
  min-height: auto;

}
#nprogress .bar{
  height: 4px;
  background-color: #99CC66;
  z-index: 100000;
}
#nprogress .spinner-icon{
    border-top-color: #99CC66;
    border-left-color: #99CC66;
}
</style>