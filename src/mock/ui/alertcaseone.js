/* eslint-disable */
export default  {
        html: `<template>
    <div>
      <h4>v-alert</h4>
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
  </template>`,
        js: `export default {
    name: 'alertsCaseone',
    data () {
      return {
        alert: true
      }
    }
  }`,
        headers: [
          {
            text: '属性',
            align: 'left',
            value: 'name'
          },
          { text: '类型', align: 'left', value: 'type', sortable: false },
          { text: '默认值', align: 'left', value: 'default', sortable: false },
          { text: '描述', align: 'left', value: 'desc', sortable: false }
        ],
        items: [
          {
            value: false,
            name: 'dismissible',
            type: 'Boolean',
            default: false,
            desc: 'Specifies that the Alert can be closed'
          },
          {
            value: false,
            name: 'icon',
            type: 'String',
            default: '-',
            desc: 'Designates a specific icon'
          },
          {
            value: false,
            name: 'hide-icon',
            type: 'Boolean',
            default: false,
            desc: 'Hides the alert icon'
          },
          {
            value: false,
            name: 'primary',
            type: 'Boolean',
            default: false,
            desc: 'Applies the primary contextual color'
          },
          {
            value: false,
            name: 'secondary',
            type: 'Boolean',
            default: false,
            desc: 'Applies the secondary contextual color'
          },
          {
            value: false,
            name: 'success',
            type: 'Boolean',
            default: false,
            desc: 'Applies the success contextual color'
          },
          {
            value: false,
            name: 'info',
            type: 'Boolean',
            default: false,
            desc: 'Applies the info contextual color'
          },
          {
            value: false,
            name: 'warning',
            type: 'Boolean',
            default: false,
            desc: 'Applies the warning contextual color'
          },
          {
            value: false,
            name: 'error',
            type: 'Boolean',
            default: false,
            desc: 'Applies the error contextual color'
          },
          {
            value: false,
            name: 'mode',
            type: 'String',
            default: '-',
            desc: 'Sets the transition mode (does not apply to transition-group)'
          },
          {
            value: false,
            name: 'origin',
            type: 'String',
            default: '-',
            desc: 'Sets the transition origin'
          },
          {
            value: false,
            name: 'transition',
            type: 'String',
            default: '-',
            desc: 'Sets the component transition. Can be one of the built in transitions or your own.'
          },
          {
            value: false,
            name: 'v-model',
            type: '*',
            default: '-',
            desc: 'Controls visibility'
          }
        ],
        slots: {
          headers: [
            {
              text: '名称',
              align: 'left',
              value: 'name'
            },
            { text: '描述', align: 'left', value: 'type', sortable: false }
          ],
          items: [{
            name: 'default',
            desc: 'Default Vue slot'
          }]
        }
      }
