<template>
  <div class="search-bar" v-if="info">
    <v-layout row pb-2>
      <v-flex xs8 offset-xs2>
        <h1>Film Search</h1>
        <v-text-field label="Search" v-model="searchTerm" single-line append-icon="search" @click:append="searchFilms"></v-text-field>
        <v-list three-line v-if="searchTerm && info.title">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Film Title</v-list-tile-title>
              <v-list-tile-sub-title>{{ info.title }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Release Date</v-list-tile-title>
              <v-list-tile-sub-title>{{ info.releaseDate }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Genre</v-list-tile-title>
              <v-list-tile-sub-title>{{ info.genre }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Director</v-list-tile-title>
              <v-list-tile-sub-title>{{ info.director }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Starring</v-list-tile-title>
              <v-list-tile-sub-title>{{ info.starring }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Plot</v-list-tile-title>
              <v-list-tile-sub-title>{{ info.plot }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-img :src="info.poster" height="500px" width="300px" contain v-if="info"></v-img>
        <v-spacer></v-spacer>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  const axios = require('axios')

  const filmTransform = (filmData) => {
    let filmInfo = {
      title: filmData.Title,
      releaseDate: filmData.Released,
      genre: filmData.Genre,
      director: filmData.Director,
      plot: filmData.Plot,
      poster: filmData.Poster,
      starring: filmData.Actors
    }

    return filmInfo
  }

  export default {
    data () {
      return {
        searchTerm: '',
        info: null
      }
    },
    mounted () {
      axios
        .get('http://www.omdbapi.com/?t=' + this.searchTerm + '&apikey=6c1ae555')
        .then(response => (this.info = filmTransform(response.data)))
    },
    methods: {
      searchFilms: function () {
        axios
          .get('http://www.omdbapi.com/?t=' + this.searchTerm + '&apikey=6c1ae555')
          .then(response => (this.info = filmTransform(response.data)))
      }
    }
  }
</script>

<style scoped>
  .search-bar {
    padding: 10px;
  }
</style>

