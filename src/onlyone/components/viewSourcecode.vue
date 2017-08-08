<template>
  <div class="sourcecode">
    <pre v-highlightjs="htmlTemplate" class="prestyle">
<code class="html">
</code>
    </pre>
    <pre v-highlightjs="jsSourcecode">
<code class="javascript js-code">
</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'viewsourcecode',
  data () {
    return {
    }
  },
  props: ['htmlTemplate', 'jsSourcecode'],
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
pre{
  height: auto;
}
pre code{
  width: 100%;
  
}

 .sourcecode >>> .hljs-string, 
 .sourcecode >>> .hljs-bullet, 
 .sourcecode >>> .hljs-subst, 
 .sourcecode >>> .hljs-title, 
 .sourcecode >>> .hljs-section, 
 .sourcecode >>> .hljs-emphasis, 
 .sourcecode >>> .hljs-type, 
 .sourcecode >>> .hljs-built_in,
 .sourcecode >>> .hljs-builtin-name, 
 .sourcecode >>> .hljs-selector-attr, 
 .sourcecode >>> .hljs-selector-pseudo, 
 .sourcecode >>> .hljs-addition, 
 .sourcecode >>> .hljs-variable, 
 .sourcecode >>> .hljs-template-tag, 
 .sourcecode >>> .hljs-template-variable {
    color: #a6e22e;
}
.sourcecode >>> .hljs-tag, 
.sourcecode >>> .hljs-keyword, 
.sourcecode >>> .hljs-selector-tag, 
.sourcecode >>> .hljs-literal, 
.sourcecode >>> .hljs-strong, 
.sourcecode >>> .hljs-name {
    color: #f92672;
}
.sourcecode >>> .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #272822;
    color: #ddd;
    font-size: 15px;
    font-family: 'Open Sans', sans-serif;
}
</style>
