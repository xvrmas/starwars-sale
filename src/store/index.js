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
    species: [],
    vehicles: [],
    infoFilm: [],
    infoCharacters: [],
    infoPlanets: [],
    infoSpecies: [],
    infoVehicles: [],
    page: 1,
    condition: false,
    numImg: 1,
    imageShips: '',
    imageFilm: ''
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
    },
    getSpecies(state) {
      return state.species
    },
    getVehicles(state) {
      return state.vehicles
    },
    getInfoFilms(state) {
      return state.infoFilm
    },
    getImageFilm(state) {
      return state.imageFilm
    },
    getInfoCharacters(state) {
      return state.infoCharacters
    },
    getInfoPlanets(state) {
      return state.infoPlanets
    },
    getInfoSpecies(state) {
      return state.infoSpecies
    },
    getInfoVehicles(state) {
      return state.infoVehicles
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
    },
    setSpecies(state, setSpeciesAction) {
      state.species = setSpeciesAction
    },
    setVehicles(state, setVehiclesAction) {
      state.vehicles = setVehiclesAction
    },
    setInfoFilms(state, setInfoFilmsAction) {
      state.infoFilm = setInfoFilmsAction
    },
    setImageFilm(state, setimageFilmAction) {
      state.imageFilm = setimageFilmAction
    },
    setInfoCharacters(state, setInfoCharactersAction) {
      state.infoCharacters = setInfoCharactersAction
    },
    setInfoPlanets(state, setInfoPlanetsAction) {
      state.infoPlanets = setInfoPlanetsAction
    },
    setInfoSpecies(state, setInfoSpeciesAction) {
      state.infoSpecies = setInfoSpeciesAction
    },
    setInfoVehicles(state, setInfoVehiclesAction) {
      state.infoVehicles = setInfoVehiclesAction
    }

  },
  actions: {
    async GET_STARSHIPS({ commit }) {
      const response = await fetch(`https://swapi.tech/api/starships/?page=1&limit=36`);
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
      const response = await fetch(`https://swapi.dev/api/films/`);
      const films = await response.json();
      commit('setFilms', films)
    },

    async GET_PEOPLE({ commit }) {
      const response = await fetch(`https://swapi.tech/api/people?page=1&limit=82`);
      const people = await response.json();
      commit('setPeople', people)
    },

    async GET_PLANETS({ commit }) {
      const response = await fetch(`https://www.swapi.tech/api/planets?page=1&limit=60`);
      const planets = await response.json();
      commit('setPlanets', planets)
    },
    async GET_SPECIES({ commit }) {
      const response = await fetch(`https://www.swapi.tech/api/species?page=1&limit=37`);
      const species = await response.json();
      commit('setSpecies', species)
    },

    async GET_VEHICLES({ commit }) {
      const response = await fetch(`https://www.swapi.tech/api/vehicles?page=1&limit=39`);
      const vehicles = await response.json();
      commit('setVehicles', vehicles)
    },

    async GET_INFOFILMS({ commit }, item) {
      const response = await fetch(item);
      const infoFilm = await response.json();
      commit('setInfoFilms', infoFilm)
    },
    async GET_IMAGEFILM({ commit }) {
      try {
        const response = await fetch(`https://starwars-visualguide.com/assets/img/films/${this.state.numImg}.jpg`);
        const imageFilm = response.url;
        if (response.status == 404) {
          this.state.imageFilm = 'https://www.cityofkingman.gov/Home/ShowPublishedImage/2744/636934515291700000'
        } else {
          commit('setImageFilm', imageFilm)
        }
      } catch (error) {
        console.log('error url imatge')
      }
    },

    async GET_INFOCHARACTERS({ commit }, item) {
      const response = fetch(item)
      const infoCharaters = await (await response).json();
      commit('setInfoCharacters', infoCharaters)

    },
    async GET_INFOPLANET({ commit }, item) {
      const response = fetch(item)
      const infoPlanets = await (await response).json();
      commit('setInfoPlanets', infoPlanets)
    },
    async GET_INFOSPECIES({ commit }, item) {
      const response = fetch(item)
      const infoSpecies = await (await response).json();
      commit('setInfoSpecies', infoSpecies)

    },
    async GET_INFOVEHICLES({ commit }, item) {
      const response = fetch(item)
      const infoVehicles = await (await response).json();
      commit('setInfoVehicles', infoVehicles)
    }
  },
  modules: {
  }
})
