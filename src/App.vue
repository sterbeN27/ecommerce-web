<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    </v-navigation-drawer>

    <v-app-bar app color="green">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Gun Shop</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: false
  }),
};
</script>

