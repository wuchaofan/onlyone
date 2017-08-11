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
    <pre-loading></pre-loading>
  </v-app>
</template>
<script>
  import PreLoading from '@/onlyone/components/preLoading'
  let LeftsideCaseone = () => import('@/onlyone/components/leftsideCaseone')
  let ToolbarCaseone = () => import('@/onlyone/components/toolbarCaseone')

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
            {title: 'Timelines', href: {name: 'Timelines'}},
            {title: 'Loadings', href: {name: 'Loadings'}},
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
            { title: 'Colors', href: {name: 'Colors'} },
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
      ToolbarCaseone,
      PreLoading
    },
    methods: {
      changeTheme (color) {
        this.$store.commit('changeThemebgcolor', {bgcolor: color})
      }
    },
    mounted () {
      console.log('page loaded')
    },
    created () {
    }
  }
</script>
<style>
html{
  margin: 0;
  overflow: hidden; 
}
body{
  overflow: auto;
}
#onlyone-app{
  position: relative;
}
#onlyone-app .navigation-drawer:not(.navigation-drawer--mini-variant) ~ main{
  padding-left: 220px;
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
::-webkit-scrollbar {
    width: 8px;
}
 
::-webkit-scrollbar-track {
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
     background-color: rgba(255,255,255,0.3);
}
body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(0,0,0,0.25);
}
</style>