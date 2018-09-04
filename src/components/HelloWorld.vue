<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-toolbar color="pink" dark>
              <v-toolbar-side-icon></v-toolbar-side-icon>
              <v-toolbar-title>Inbox</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>search</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon @click="filterItems">check_circle</v-icon>
              </v-btn>
            </v-toolbar>
            <v-list two-line>
              <template v-for="(item, index) in items">
                <v-list-tile :key="index" avatar ripple>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                    <v-icon color="grey lighten-1">star_border</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
              </template>
            </v-list>
          </v-card>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex v-for="card in cards" v-bind="{ [`xs${card.flex}`]: true }" :key="card.title">
                <v-card>
                  <v-img :src="card.src" height="200px">
                    <v-container fill-height fluid pa-2>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline white--text" v-text="card.title"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>share</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container>
            <v-layout>
              <v-expansion-panel>
                <v-expansion-panel-content v-for="(items, i) in 1" :key="i">
                  <div slot="header">Items</div>
                  <v-expansion-panel>
                    <v-expansion-panel-content v-for="(item, i) in 5" :key="i">
                      <div slot="header">Item</div>
                      <v-card>
                        <v-card-text>
                          Test
                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
          { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: 'Do you have Paris recommendations? Have you ever been?' },
          { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: 'Have any ideas about what we should get Heidi for her birthday?' },
          { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.' }
        ],
        cards: [
          { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
          { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
          { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }
        ]
      }
    },
    methods: {
      filterItems: function () {
        this.items = this.items.filter(function (item) {
          return item.headline === 'Summer BBQ'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
