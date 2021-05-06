<template>
  <v-container
    class="l-landing"
  >
    <v-row>
      <v-col
        v-if="isLoading && entries.length === 0"
        cols="12"
      >
        Loading...
      </v-col>

      <template
        v-if="!isLoading"
      >
        <v-col
          v-if="entries.length === 0"
          cols="12"
        >
          No data found
        </v-col>

        <v-col
          v-if="entries.length > 0"
          cols="12"
        >
          <masonry
            :cols="6"
            :gutter="10"
          >
            <div
              v-for="(item, index) in entries"
              :key="index"
              class="landing__masonry-item"
            >
              <img :src="item.src" width="100%" />
            </div>
          </masonry>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'

import * as GALLERYTYPES from '~/store-namespace/gallery/types'
import * as ROOTTYPES from '~/store-namespace/root/types'
import VuexModule from '~/utils/vuex'

const galleryModule = VuexModule(GALLERYTYPES.MODULE_NAME)

export default {
  data () {
    return {
      //
    }
  },

  computed: {
    ...mapState({
      isLoading: state => state.isLoading.list
    }),

    ...galleryModule.mapState({
      rawEntries: state => state.entries
    }),

    ...galleryModule.mapGetters({
      entries: GALLERYTYPES.GET_ENTRIES
    })
  },

  mounted () {
    this.init()
  },

  methods: {
    ...mapMutations({
      setRootState: ROOTTYPES.SET_STATE
    }),

    ...galleryModule.mapActions({
      fetchGallery: GALLERYTYPES.FETCH_GALLERY
    }),

    init () {
      this.fetchGallery()
    }
  }
}
</script>
