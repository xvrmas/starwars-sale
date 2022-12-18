<template>

    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="column is-half mt-3">
                    <img :src="(`https://starwars-visualguide.com/assets/img/species/${getInfoSpecies.result.uid}.jpg`)"
                        alt="image film">
                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <p><strong>Name: </strong> {{ getInfoSpecies.result.properties.name }}</p>
                        <p><strong>Classification: </strong> {{ getInfoSpecies.result.properties.classification }}</p>
                        <p><strong>Designation: </strong> {{ getInfoSpecies.result.properties.designation }}</p>
                        <p><strong>Averge height: </strong> {{ getInfoSpecies.result.properties.average_height }} cm.
                        </p>
                        <p><strong>Average lifespan: </strong> {{ getInfoSpecies.result.properties.average_lifespan }}
                        </p>
                        <p><strong>Hair color: </strong> {{ getInfoSpecies.result.properties.hair_colors }}</p>
                        <p><strong>Skin color: </strong> {{ getInfoSpecies.result.properties.skin_colors }}</p>
                        <p><strong>Eye color: </strong> {{ getInfoSpecies.result.properties.eye_colors }}</p>
                        <p><strong>Languaje: </strong> {{ getInfoSpecies.result.properties.language }}</p>




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
    name: 'infoSpecies',
    computed: {
        ...mapGetters(['getInfoSpecies'])
    },
    data() {
        return {
            uid: '0'
        }
    }
}
</script>