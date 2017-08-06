<template>
    <div class="only-search-bar" :class="{'only-search-bar-input': inputshow}">
        <input type="text" v-show="inputshow" v-model="search" placeholder="输入">
        <v-btn :dark="!inputshow" icon @click="inputshow=!inputshow">
            <v-icon>search</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
  name: 'searchbar',
  data () {
    return {
      inputshow: false,
      search: ''
    }
  },
  watch: {
    inputshow () {
      console.log(this.inputshow)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.only-search-bar{
    display: flex;
    height: 34px;
    justify-content: center;
    border-radius: 20px;
    overflow: hidden; 
}
.only-search-bar-input{
  background-color: white;
}
.only-search-bar input{
    outline: none;
    margin-left: 16px;
}
.only-search-bar button{
    margin: 0;
    color: black;
}

</style>
