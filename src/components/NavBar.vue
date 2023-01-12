<template>
    <div class="contenidor">
        <div class="caixa ">
            <div>
                <img src="@/assets/star-wars-4.svg" style="width:250px;margin:20px" alt="">
            </div>
        </div>
        <div class="botons">
            <a @click="showFilms" class="boto_nav">Home</a>
            <a @click="showPeople" class="boto_nav">Characters</a>
            <a @click="showPlanets" class="boto_nav">Planets</a>
            <a @click="showSpecies" class="boto_nav">Species</a>
            <a @click="starships" class="boto_nav">Starships</a>
            <a @click="showVehicles" class="boto_nav">Vehicles</a>
        </div>
        <div class="linea"></div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',

    data() {
        return {
            boton: document.getElementsByClassName("boto")
        }
    },

    methods: {
        home() {
            this.$router.push('/showFilms')
        },
        starships() {
            this.$store.dispatch("GET_STARSHIPS")
            this.$router.push('/')
        },
        showImageShip() {
            this.$store.state.numImg = item.url.split(/\D/g).join('')
            return this.$store.dispatch("GET_IMAGESHIPS", item)
        },
        showFilms() {
            this.$router.push('/showFilms')
            this.$store.dispatch("GET_FILMS")

        },
        showPeople() {
            this.$router.push('/showPeople')
            this.$store.dispatch('GET_PEOPLE')
        },
        showPlanets() {
            this.$router.push('showPlanets')
            this.$store.dispatch('GET_PLANETS')
        },
        showSpecies() {
            this.$store.dispatch('GET_SPECIES')
            this.$router.push('showSpecies')
        },
        showVehicles() {
            this.$router.push('showVehicles')
            this.$store.dispatch('GET_VEHICLES')
        }

    }
}
</script>
<style scoped>
.contenidor {
    background-color: black;
}

.botons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.boto_nav {
    color: gray;
    margin: 20px;
    font-size: x-large;
    border-bottom:solid gb(191, 147, 0) 2px;

}

a {
    text-decoration: none;
}

a:hover {
    border-bottom: solid rgb(191, 147, 0) 2px;

}

a:focus {
    color: rgb(191, 147, 0);
    border-bottom: solid rgb(191, 147, 0) 2px;
}

.caixa {
    background-color: black;
}

</style>