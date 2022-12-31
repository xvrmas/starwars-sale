<template>
    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="column is-half mt-3">
                    <img :src="require(`@/assets/planets/${getInfoPlanets.result.uid}.jpg`)" alt="image film">
                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <p><strong>Name: </strong> {{ getInfoPlanets.result.properties.name }}</p>
                        <p><strong>Diameter: </strong> {{ getInfoPlanets.result.properties.diameter }}</p>
                        <p><strong>Rotation period: </strong> {{ getInfoPlanets.result.properties.rotation_period }}</p>
                        <p><strong>Orbital period: </strong> {{ getInfoPlanets.result.properties.orbital_period }}</p>
                        <p><strong>Gravity: </strong> {{ getInfoPlanets.result.properties.gravity }}</p>
                        <p><strong>Population: </strong> {{ getInfoPlanets.result.properties.population }}</p>
                        <p><strong>Climate: </strong> {{ getInfoPlanets.result.properties.climate }}</p>
                        <p><strong>Terrain: </strong> {{ getInfoPlanets.result.properties.terrain }}</p>
                        <p><strong>Surface water: </strong> {{ getInfoPlanets.result.properties.surface_water }}</p>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'infoPlanets',
    computed: {
        ...mapGetters(['getInfoPlanets'])
    },
    
}
</script>
<style>
.caixa {
    background-color: black;
}
</style>