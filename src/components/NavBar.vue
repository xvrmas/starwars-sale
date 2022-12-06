<template>
    <div class="contenidor">
        <div class="caixa ">
            <a @click="home">
                <img src="@/assets/star-wars-4.svg" style="width:250px;margin:20px" alt="">
            </a>
        </div>
        <div class="botons">
            <b-button @click="showFilms" type="is-dark m-3">Films</b-button>
            <b-button @click="showPeople" type="is-dark m-3">People</b-button>
            <b-button @click="showPlanets" type="is-dark m-3">Planets</b-button>
            <b-button @click="showSpecies" type="is-dark m-3">Species</b-button>
            <b-button @click="starships" type="is-dark m-3">Starships</b-button>
            <b-button @click="showVehicles" type="is-dark m-3">Vehicles</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',

    methods: {
        home() {
            this.$router.push('/showFilms')
        },
        starships() {
            this.$store.dispatch("GET_STARSHIPS")
            this.$router.push('/')
        },
        showFilms() {
            this.$store.dispatch("GET_FILMS")
            this.$router.push('/showFilms')

        },
        showPeople() {
            this.$store.dispatch('GET_PEOPLE')
            this.$router.push('/showPeople')
        },
        showPlanets() {
            this.$store.dispatch('GET_PLANETS')
            this.$router.push('showPlanets')
        },
        showSpecies (){
            this.$store.dispatch('GET_SPECIES')
            this.$router.push('showSpecies')
        },
        showVehicles (){
            this.$store.dispatch('GET_VEHICLES')
            this.$router.push('showVehicles')
        }
    }
}
</script>
<style scoped>
.contenidor {
    background-color: black;
}

.caixa {
    background-color: black;
}



</style>