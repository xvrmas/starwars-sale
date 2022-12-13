<template>
    <div class="contenidor">
        <div class="caixa ">
            <a @click="home">
                <img src="@/assets/star-wars-4.svg" style="width:250px;margin:20px" alt="">
            </a>
        </div>
        <div class="botons">
            <a href="#" @click="showFilms"  class="boto_nav">Films</a>
            <a href="#" @click="showPeople" class="boto_nav">Characters</a>
            <a href="#" @click="showPlanets" class="boto_nav">Planets</a>
            <a href="#" @click="showSpecies" class="boto_nav">Species</a>
            <a href="#" @click="starships" class="boto_nav">Starships</a>
            <a href="#" @click="showVehicles" class="boto_nav">Vehicles</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',

    data (){
        return{
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
.botons{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.boto_nav{
    color:gray;
    margin:20px;
    font-size: x-large;
}
a{
    text-decoration: none;
}
a:hover{
    border-bottom: solid rgb(191, 147, 0) 2px ;

}
a:focus{
    color:rgb(191, 147, 0);
    border-bottom: solid rgb(191, 147, 0) 2px ;
}
.caixa {
    background-color: black;
}



</style>