<template>
    <div>
        <v-alert success icon="new_releases" v-bind:value="true">
            This is a success alert with a custom icon.
        </v-alert>

        <v-alert error hide-icon v-bind:value="true">
        This is an error alert with no icon.
        </v-alert>

        <div class="text-xs-center">
            <v-btn primary @click.native="alert = !alert">Toggle</v-btn>
        </div>
        <v-alert
            success
            :value="alert"
            transition="scale-transition"
        >
            This is a success alert.
        </v-alert>
    </div>
</template>

<script>
export default {
  name: 'alertsCasetwo',
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
