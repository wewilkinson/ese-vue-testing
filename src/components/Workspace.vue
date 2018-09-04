<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex v-for="card in cards" v-bind="{ [`xs${card.flex}`]: true }" :key="card.title">
        <v-card>
          <v-flex xs12 align-end flexbox>
            <span class="headline" v-text="card.title"></span>
          </v-flex>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="info" icon :to="card.link">
              <v-icon>forward</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <swanson-quote></swanson-quote>
    </v-layout>
  </v-container>
</template>

<script>
  import SwansonQuote from './SwansonQuote.vue'

  export default {
    data () {
      return {
        cards: [
          {
            title: 'API Testing',
            link: '/apiTest',
            flex: 3
          },
          {
            title: 'Hello',
            link: '/hello',
            flex: 3
          },
          {
            title: 'New Data',
            link: '/newData',
            flex: 3
          }
        ]
      }
    },
    methods: {},
    components: {
      'swanson-quote': SwansonQuote
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
