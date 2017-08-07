<template>
  <v-tabs dark v-model="mactive">
    <v-tabs-bar slot="activators" class="cyan">
        <v-tabs-item
        href="#showcase"
        ripple>
        Show
        </v-tabs-item>
        <v-tabs-item
        href="#onlycode"
        ripple>
        Code
        </v-tabs-item>
        <v-tabs-item
        href="#onlyapi"
        ripple>
        Props
        </v-tabs-item>
         <v-tabs-item
        href="#onlyslots"
        ripple>
        Slots
        </v-tabs-item>
        <v-tabs-slider :class="$store.state.themeBackgroundColor" ></v-tabs-slider>
    </v-tabs-bar>
    <v-tabs-content
        id="showcase">
        <v-card flat>
        <v-card-text>
            <slot name="showcase"></slot>
        </v-card-text>
        </v-card>
    </v-tabs-content>
    <v-tabs-content
        id="onlycode">
        <v-card flat>
        <v-card-text>
            <slot name="onlycode"></slot>
        </v-card-text>
        </v-card>
    </v-tabs-content>
    <v-tabs-content
        id="onlyapi">
        <v-card flat>
            <v-card-text>
                <slot name="onlyapi"></slot>
            </v-card-text>
        </v-card>
    </v-tabs-content>
    <v-tabs-content
        id="onlyslots">
        <v-card flat>
            <v-card-text>
                <slot name="onlyslots"></slot>
            </v-card-text>
        </v-card>
    </v-tabs-content>
  </v-tabs>
</template>

<script>
export default {
  name: 'tabs',
  data () {
    return {
      mactive: this.active
    }
  },
  props: ['active']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
