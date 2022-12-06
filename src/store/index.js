import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    starShips: [],
    infoTechShip: [],
    films: [],
    people: [],
    planets: [],
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
    },
    getFilms(state) {
      return state.films
    },
    getPeople(state) {
      return state.people
    },
    getPlanets(state) {
      return state.planets
    }
  },
  mutations: {
    setShips(state, setShipsAction) {
      state.starShips = setShipsAction
    },
    setImageShips(state, setImageShipsAction) {
      state.imageShips = setImageShipsAction
    },
    setInfoShips(state, setInfoShipsAction) {
      state.infoTechShip = setInfoShipsAction
    },
    setFilms(state, setFilmsAction) {
      state.films = setFilmsAction
    },
    setPeople(state, setPeopleAction) {
      state.people = setPeopleAction
    },
    setPlanets(state, setPlanetsAction) {
      state.planets = setPlanetsAction
    }
  },
  actions: {
    async GET_STARSHIPS({ commit }) {
      const response = await fetch(`https://swapi.tech/api/starships/?page=${this.state.page}&limit=10`);
      const ships = await response.json();
      commit('setShips', ships)
    },
    async GET_IMAGESHIPS({ commit }) {
      try {
        const response = await fetch(`https://starwars-visualguide.com/assets/img/starships/${this.state.numImg}.jpg`);
        const imageShips = response.url;
        if (response.status == 404) {
          this.state.imageShips = 'https://www.cityofkingman.gov/Home/ShowPublishedImage/2744/636934515291700000'
        } else {
          commit('setImageShips', imageShips)
        }
      } catch (error) {
        console.log('error url imatge')
      }
    },
    async GET_INFOSTARSHIPS({ commit }, item) {
      const response = await fetch(item);
      const infoShips = await response.json();
      commit('setInfoShips', infoShips)
    },
    async GET_FILMS({ commit }) {
      const response = await fetch(`https://swapi.tech/api/films/`);
      const films = await response.json();
      commit('setFilms', films)
    },

    async GET_PEOPLE({ commit }) {
      const response = await fetch(`http://swapi.tech/api/people?page=${this.state.page}&limit=82`);
      const people = await response.json();
      commit('setPeople', people)
    },

    async GET_PLANETS ({commit}){
      const response = await fetch(`https://www.swapi.tech/api/planets?page=${this.state.page}&limit=60`);
      const planets = await response.json();
      console.log(planets)
      commit('setPlanets', planets)
    }
  },
  modules: {
  }
})
