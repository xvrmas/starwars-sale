<template>
    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="column is-half mt-3">
                    <img :src="getImageFilm">
                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <p><strong>Title: </strong> {{ infoFilm.title }}</p>
                        <p><strong>Director: </strong> {{ infoFilm.director }}</p>
                        <p><strong>Producer(s): </strong>{{ infoFilm.producer }}</p>
                        <p><strong>Release date: </strong>{{ infoFilm.release_date }}</p>
                        <p><strong>Synopsis: </strong>{{ infoFilm.opening_crawl }}</p>
                    </div>
                    <relatedCharacters ></relatedCharacters>
                    <relatedSpecies ></relatedSpecies>
                    <relatedPlanets></relatedPlanets>
                    <relatedStarships ></relatedStarships>
                    <relatedvehicles></relatedvehicles>
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
        ...mapGetters(['getImageFilm'])
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