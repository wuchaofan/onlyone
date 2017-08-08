<template>
  <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" scope="props">
      <td>{{ props.item.name }}</td>
      <td v-if="!isSlot">{{ props.item.type }}</td>
      <td v-if="!isSlot">{{ props.item.default }}</td>
      <td>{{ props.item.desc }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'viewapi',
  data () {
    return {
    }
  },
  props: ['headers', 'items', 'isSlot']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
