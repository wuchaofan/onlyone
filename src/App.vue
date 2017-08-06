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
    },
    mounted () {
      console.log('page loaded')
    },
    created () {
      window.addEventListener('load', function load (event) {
        window.removeEventListener('load', load, false)
        console.log('loading ...')
        document.getElementById('loader-wrapper').style.display = 'none'
      }, false)
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

#loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
}
#only-loader {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #3498db;

    -webkit-animation: spin 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
    animation: spin 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */
    z-index: 1001;
}

    #only-loader:before {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #e74c3c;

        -webkit-animation: spin 3s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
        animation: spin 3s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */
    }

    #only-loader:after {
        content: "";
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #f9c922;

        -webkit-animation: spin 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
          animation: spin 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */
    }

    @-webkit-keyframes spin {
        0%   { 
            -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: rotate(0deg);  /* IE 9 */
            transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */
        }
        100% {
            -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: rotate(360deg);  /* IE 9 */
            transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */
        }
    }
    @keyframes spin {
        0%   { 
            -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: rotate(0deg);  /* IE 9 */
            transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */
        }
        100% {
            -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: rotate(360deg);  /* IE 9 */
            transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */
        }
    }

    #loader-wrapper .loader-section {
        position: fixed;
        top: 0;
        width: 51%;
        height: 100%;
        background: #222;
        z-index: 1000;
    }

    #loader-wrapper .loader-section.section-left {
        left: 0;
    }
    #loader-wrapper .loader-section.section-right {
        right: 0;
    }

    /* Loaded styles */
    .loaded #loader-wrapper .loader-section.section-left {
        -webkit-transform: translateX(-100%);  /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: translateX(-100%);  /* IE 9 */
                transform: translateX(-100%);  /* Firefox 16+, IE 10+, Opera */

        -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);  /* Android 2.1+, Chrome 1-25, iOS 3.2-6.1, Safari 3.2-6  */
                transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);  /* Chrome 26, Firefox 16+, iOS 7+, IE 10+, Opera, Safari 6.1+  */
    }
    .loaded #loader-wrapper .loader-section.section-right {
        -webkit-transform: translateX(100%);  /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: translateX(100%);  /* IE 9 */
                transform: translateX(100%);  /* Firefox 16+, IE 10+, Opera */

        -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);  /* Android 2.1+, Chrome 1-25, iOS 3.2-6.1, Safari 3.2-6  */
                transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);  /* Chrome 26, Firefox 16+, iOS 7+, IE 10+, Opera, Safari 6.1+  */
    }
    .loaded #loader {
        opacity: 0;

        -webkit-transition: all 0.3s ease-out;  /* Android 2.1+, Chrome 1-25, iOS 3.2-6.1, Safari 3.2-6  */
                transition: all 0.3s ease-out;  /* Chrome 26, Firefox 16+, iOS 7+, IE 10+, Opera, Safari 6.1+  */

    }
    .loaded #loader-wrapper {
        visibility: hidden;

        -webkit-transform: translateY(-100%);  /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: translateY(-100%);  /* IE 9 */
                transform: translateY(-100%);  /* Firefox 16+, IE 10+, Opera */
    
        -webkit-transition: all 0.3s 1s ease-out;  /* Android 2.1+, Chrome 1-25, iOS 3.2-6.1, Safari 3.2-6  */
                transition: all 0.3s 1s ease-out;  /* Chrome 26, Firefox 16+, iOS 7+, IE 10+, Opera, Safari 6.1+  */
    }

</style>