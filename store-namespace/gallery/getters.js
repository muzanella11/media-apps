import * as TYPES from './types'

export default {
  [TYPES.GET_ENTRIES] (state) {
    let resultData = JSON.parse(JSON.stringify(state.entries))

    const { filters } = state
    const { keyword } = filters

    if (keyword) {
      resultData = resultData.filter(item => {
        return item.name === keyword
      })
    }

    // Sort alphabetically
    resultData = resultData.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })

    return resultData
  },

  [TYPES.GET_FILTERS] (state) {
    return state.filters
  }
}
