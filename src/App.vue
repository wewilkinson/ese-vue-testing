<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" :to="item.path">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="new-tool" app :clipped-left="clipped">
      <v-toolbar-side-icon class="menu-icon" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="menu-icon" href="/">
        <v-icon>home</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: true,
        drawer: true,
        fixed: false,
        items: [
          {
            icon: 'home',
            title: 'Home',
            path: '/'
          },
          {
            icon: 'donut_small',
            title: 'Hello',
            path: '/hello'
          },
          {
            icon: 'done_all',
            title: 'New Data',
            path: '/newData'
          },
          {
            icon: 'adb',
            title: 'API Testing',
            path: '/apiTest'
          },
          {
            icon: 'search',
            title: 'Film Search',
            path: '/filmSearch'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'ESE Vue Testing'
      }
    },
    name: 'App'
  }
</script>

<style scoped>
  .new-tool {
    background-color: #285797;
    color: #ffffff
  }

  .menu-icon {
    color: #ffffff
  }
</style>
