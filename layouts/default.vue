<template>
  <v-app
    dark
    class="l-default"
  >
    <v-app-bar
      app
      color="white"
      elevation="3"
      class="default__header"
    >
      <v-container class="header__desktop py-0 fill-height">
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
            :value="galleryFilters.keyword"
            @input="setEntryGallery('filters.keyword', $event)"
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

      <v-container class="header__mobile py-0 fill-height">
        <v-row>
          <v-col
            :cols="isSearchActive ? 12 : 4"
          >
            <v-btn
              v-if="!isSearchActive"
              icon
              class="mr-2"
              @click="() => isSearchActive = true"
            >
              <v-icon>
                mdi-magnify
              </v-icon>
            </v-btn>

            <v-row
              v-if="isSearchActive"
            >
              <v-col
                cols="10"
                class="pt-4 pb-0"
              >
                <v-text-field
                  dense
                  flat
                  hide-details
                  rounded
                  solo-inverted
                  prepend-inner-icon="mdi-magnify"
                  :value="galleryFilters.keyword"
                  @input="setEntryGallery('filters.keyword', $event)"
                ></v-text-field>
              </v-col>

              <v-col
                cols="2"
              >
                <v-btn
                  icon
                  @click="() => isSearchActive = false"
                >
                  <v-icon>
                    mdi-close
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>

          <v-col
            v-if="!isSearchActive"
            cols="8"
            class="text-right"
          >
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
          </v-col>
        </v-row>
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
import * as GALLERYTYPES from '~/store-namespace/gallery/types'
import VuexModule from '~/utils/vuex'

const galleryModule = VuexModule(GALLERYTYPES.MODULE_NAME)

export default {
  data () {
    return {
      isSearchActive: false,
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },

  computed: {
    ...galleryModule.mapState({
      galleryFilters: state => state.filters
    })
  },

  methods: {
    ...galleryModule.mapMutations({
      setGalleryState: GALLERYTYPES.SET_STATE
    }),

    setEntryGallery (accessor, value) {
      this.setGalleryState({
        accessor,
        value
      })
    }
  }
}
</script>
