<template>
    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="column is-half mt-3">
                    <img :src="require(`@/assets/characters/${getInfoCharacters.url.split(/\D/g).join('')}.jpg`)"
                        alt="image film">
                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <p><strong>Name: </strong> {{ getInfoCharacters.name }}</p>
                        <p><strong>Gender: </strong>{{ getInfoCharacters.gender }}</p>
                        <p><strong>Birthday: </strong> {{
                            getInfoCharacters.birth_year
                        }}</p>
                        <p><strong>Eye color: </strong>{{
                            getInfoCharacters.eye_color
                        }}</p>
                        <p><strong>Skin color: </strong>{{
                            getInfoCharacters.skin_color
                        }}</p>
                        <p><strong>Hair color: </strong>{{
                            getInfoCharacters.hair_color
                        }}</p>
                        <p><strong>Height: </strong>{{
                            getInfoCharacters.height
                        }} cm.</p>
                        <p><strong>Mass: </strong>{{
                            getInfoCharacters.mass
                        }} Kgr.</p>

                    </div>
                    <relatedFilms :arrayRelatedFilms="arrayRelatedFilms"></relatedFilms>
                    <!-- <relatedSpecies :infoFilm="infoFilm"></relatedSpecies>
                    <relatedPlanets :infoFilm="infoFilm"></relatedPlanets>-->
                    <relatedStarships :arrayRelatedSpaceships="arrayRelatedSpaceships"></relatedStarships>
                    <relatedvehicles :arrayRelatedVehicles="arrayRelatedVehicles"></relatedvehicles>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import relatedFilms from '@/components/relatedFilms.vue'
import relatedPlanets from '@/components/relatedPlanets.vue';
import relatedSpecies from '@/components/relatedSpecies.vue';
import relatedStarships from '@/components/relatedStarships.vue';
import relatedvehicles from '@/components/relatedVehicles.vue';
export default {
    name: 'infoCharacters',
    components: { relatedPlanets, relatedSpecies, relatedStarships, relatedvehicles, relatedFilms },
    props: ['infoFilm'],
    computed: {
        ...mapGetters(['getInfoCharacters']),
        ...mapState(['infoFilm', 'arrayRelatedFilms', 'arrayRelatedSpaceships',  'arrayRelatedVehicles'])

    },
}
</script>

<style>
.caixa {
    background-color: black;
}

strong {
    color: rgb(174, 171, 171);
}

p {
    color: rgb(133, 131, 131);
}
</style>