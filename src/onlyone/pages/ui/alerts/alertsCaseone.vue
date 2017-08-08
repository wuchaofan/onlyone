<template>
    <div>
      <h5>v-alert</h5>
      <v-alert success value="true">
        This is a success alert.
      </v-alert>

      <v-alert info value="true">
        This is a info alert.
      </v-alert>

      <v-alert warning value="true">
        This is a warning alert.
      </v-alert>

      <v-alert error value="true">
        This is a error alert.
      </v-alert>
      <v-alert info dismissible v-model="alert">
          This is a success alert that is closable.
      </v-alert>

      <div class="text-xs-center">
          <v-btn primary dark v-if="!alert" @click.native="alert = true">Reset</v-btn>
      </div>
    </div>
</template>

<script>
export default {
  name: 'alertsCaseone',
  data () {
    return {
      alert: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
