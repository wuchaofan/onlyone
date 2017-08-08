/* eslint-disable */
export default  {
        html: `<template>
  <v-container fluid class="text-xs-center">
    <v-layout row wrap>
      <v-flex xs12 sm6><span>Light Theme</span>
        <v-card height="185px" class="elevation-0 white">
          <v-card-text>
            <div>
              <v-btn flat>Normal</v-btn>
            </div>
            <div>
              <v-btn flat primary>Primary</v-btn>
            </div>
            <div>
              <v-btn flat disabled>Disabled</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6><span>Dark Theme</span>
        <v-card height="185px" class="secondary elevation-0">
          <v-card-text>
            <div>
              <v-btn flat dark>Normal</v-btn>
            </div>
            <div>
              <v-btn flat dark primary>Primary</v-btn>
            </div>
            <div>
              <v-btn flat dark disabled>Disabled</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>`,
        js: `export default {
    name: 'btnCaseone',
    data () {
      return {
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
