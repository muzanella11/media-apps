<template>
  <v-app dark>
    <v-app-bar
      app
      color="white"
      elevation="3"
    >
      <v-container class="py-0 fill-height">
        <v-spacer></v-spacer>

        <v-responsive max-width="200">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            prepend-inner-icon="mdi-magnify"
            class="mr-2"
          ></v-text-field>
        </v-responsive>

        <v-btn
          icon
          class="mr-2"
        >
          <v-icon>
            mdi-home
          </v-icon>
        </v-btn>

        <v-btn
          icon
          class="mr-2"
        >
          <v-icon>
            mdi-bell
          </v-icon>
        </v-btn>

        <v-avatar
          class="ml-2"
          color="grey darken-1"
          size="32"
        ></v-avatar>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
