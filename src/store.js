import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [ 
      { text: 'Home', to: '/', icon:'home'},
      { text: 'About', to: '/about', icon: 'toc'},
      { text: 'Achievements', to: '/achievements', icon: 'toc'},
      { text: 'Events', to: '/events', icon: 'rounded_corner'},
      { text: 'Team', to: '/team', icon:'group'},
      { text: 'Contact', to: '/contact', icon:'person'}
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
