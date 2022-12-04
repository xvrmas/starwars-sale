import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    starShips: [],
    infoTechShip: [],
    page: 1,
    condition: false,
    numImg: 1,
    imageShips: ''
  },
  getters: {
    getStarShips(state) {
      return state.starShips
    },
    getInfoShips(state) {
      return state.infoTechShip

    },
    getPage(state) {
      return state.page
    },
    getCondition(state) {
      return state.condition
    },
    getNumImg(state) {
      return state.numImg
    },
    getImageShips(state) {
      return state.imageShips
    }
  },
  mutations: {
    setShips(state, setShipsAction) {
      state.starShips = setShipsAction
    },
    setImageShips(state, setImageShipsAction) {
      state.imageShips = setImageShipsAction
    },
    setInfoShips(state,setInfoShipsAction){
      state.infoTechShip = setInfoShipsAction
      console.log('setter->',state.infoTechShip)
    }
  },
  actions: {
    async GET_STARSHIPS({ commit }) {
      const response = await fetch(`https://swapi.tech/api/starships/?page=${this.state.page}`);
      const ships = await response.json();
      commit('setShips', ships)
    },
    async GET_IMAGESHIPS({ commit }) {
      try {
        const response = await fetch(`https://starwars-visualguide.com/assets/img/starships/${this.state.numImg}.jpg`);
        const imageShips = response.url;
        if (response.status == 404) {
          this.state.imageShips ='https://www.cityofkingman.gov/Home/ShowPublishedImage/2744/636934515291700000'
        } else {
          commit('setImageShips', imageShips)
        }
      } catch (error) {
        console.log('error url imatge')
      }
    },
    async GET_INFOSTARSHIPS({ commit },item) {
      const response = await fetch(item);
      const infoShips = await response.json();
      console.log('fetch->',infoShips)
      commit('setInfoShips', infoShips)
    },
  },
  modules: {
  }
})
