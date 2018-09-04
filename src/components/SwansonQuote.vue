<template>
  <v-flex v-if="info">
    <v-card>
      <v-flex xs12 align-end flexbox>
        <span class="headline">Swanson Says:</span>
      </v-flex>
      <p class="quote-data">{{ info }}</p>
      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  const axios = require('axios')

  export default {
    data: function () {
      return {
        count: 0,
        info: null
      }
    },
    mounted () {
      axios
        .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(response => (this.info = response.data[0]))
    }
  }
</script>

<style scoped>
  .quote-data {
    word-wrap: break-word;
    padding: 10px;
  }
</style>