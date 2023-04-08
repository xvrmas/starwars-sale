<template>
    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="column is-half mt-3">
                    <img :src="getImageFilm">
                    <div class="mt-3">
                    </div>

                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <p><strong>Title: </strong> {{ infoFilm.title }}</p>
                        <p><strong>Director: </strong> {{ infoFilm.director }}</p>
                        <p><strong>Producer(s): </strong>{{ infoFilm.producer }}</p>
                        <p><strong>Release date: </strong>{{ orderDate }}</p>
                        <p><strong>Synopsis: </strong>{{ infoFilm.opening_crawl }}</p>
                    </div>
                    <div class="column">
                        <relatedSpecies></relatedSpecies>
                        <relatedPlanets></relatedPlanets>
                        <relatedCharacters></relatedCharacters>
                    </div>
                    <div class="column">
                        <relatedStarships></relatedStarships>
                        <relatedvehicles></relatedvehicles>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import relatedCharacters from '@/components/relatedCharacters.vue';
import relatedPlanets from '@/components/relatedPlanets.vue';
import relatedSpecies from '@/components/relatedSpecies.vue';
import relatedStarships from '@/components/relatedStarships.vue';
import relatedvehicles from '@/components/relatedVehicles.vue'
export default {
    name: 'infoFilms',
    components: { relatedCharacters, relatedPlanets, relatedSpecies, relatedStarships, relatedvehicles },
    computed: {
        ...mapState(['infoFilm']),
        ...mapGetters(['getImageFilm']),
        orderDate(){
           let order =  this.infoFilm.release_date.split('-').reverse().join('-')
           return order;
        }
    },
    mounted() {
        document.getElementById("op1").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op1").style.borderBottom = 'none';
    },
}
</script>
<style scoped>
p {
    color: rgb(133, 131, 131);
}

strong {
    color: rgb(174, 171, 171);
}

.caixa {
    background-color: black;
}

</style>