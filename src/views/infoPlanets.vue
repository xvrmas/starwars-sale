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
                    <div class="box">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem architecto,
                            aspernatur
                            accusamus esse eligendi qui id asperiores voluptates consectetur eum veritatis quasi, enim
                            natus
                            alias deserunt magni et sint molestiae.</p>
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
    data() {
        return {
            uid: '0'
        }
    }
}
</script>
<style>
.caixa {
    background-color: black;
}
</style>