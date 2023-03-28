<template>
    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="column is-half mt-3">
                    <img :src="require(`@/assets/planets/${getInfoPlanets.url.split(/\D/g).join('')}.jpg`)" alt="image film">
                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <p><strong>Name: </strong> {{ getInfoPlanets.name }}</p>
                        <p><strong>Diameter: </strong> {{ getInfoPlanets.diameter }}</p>
                        <p><strong>Rotation period: </strong> {{ getInfoPlanets.rotation_period }}</p>
                        <p><strong>Orbital period: </strong> {{ getInfoPlanets.orbital_period }}</p>
                        <p><strong>Gravity: </strong> {{ getInfoPlanets.gravity }}</p>
                        <p><strong>Population: </strong> {{ getInfoPlanets.population }}</p>
                        <p><strong>Climate: </strong> {{ getInfoPlanets.climate }}</p>
                        <p><strong>Terrain: </strong> {{ getInfoPlanets.terrain }}</p>
                        <p><strong>Surface water: </strong> {{ getInfoPlanets.surface_water }}</p>
                    </div>
                    <button @click="retroceder" class="button is-dark">Go back</button>
                             
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import relatedFilms from '@/components/relatedFilms.vue';
export default {
    name: 'infoPlanets',
    components:{relatedFilms},
    computed: {
        ...mapGetters(['getInfoPlanets']),

    },
    mounted() {
        document.getElementById("op3").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op3").style.borderBottom = 'none';
    },
    methods: {
        retroceder() {
            window.history.back();
        }
    }
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