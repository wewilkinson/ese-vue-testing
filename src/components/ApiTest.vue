<template>
  <div class="cart-table" v-if="info">
    <h1>{{ info.quote.companyName }}</h1>
    <h3 class="comp-info">{{ info.quote.symbol }} - {{ info.quote.primaryExchange }}</h3>
    <v-data-table :headers="headers" :items="info.chart" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.date }}</td>
        <td>{{ props.item.open }}</td>
        <td>{{ props.item.close }}</td>
        <td>{{ props.item.change }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  const axios = require('axios')

  const stockTransform = (stockData) => {
    return stockData
  }

  export default {
    data () {
      return {
        headers: [
          {
            text: 'Date',
            value: 'date'
          },
          {
            text: 'Open',
            value: 'open'
          },
          {
            text: 'Close',
            value: 'close'
          },
          {
            text: 'Change',
            value: 'change'
          }
        ],
        info: null
      }
    },
    mounted () {
      axios
        .get('https://api.iextrading.com/1.0/stock/amzn/batch?types=quote,news,chart&range=1m&last=1')
        .then(response => (this.info = stockTransform(response.data)))
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cart-table {
    padding: 10px;
  }
  .comp-info {
    padding-bottom: 15px;
  }
</style>
