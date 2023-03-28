<template>

    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="column is-half mt-3">
                    <img :src="(`https://starwars-visualguide.com/assets/img/species/${getInfoSpecies.url.split(/\D/g).join('')}.jpg`)"
                        alt="image film">
                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <p><strong>Name: </strong> {{ getInfoSpecies.name }}</p>
                        <p><strong>Classification: </strong> {{ getInfoSpecies.classification }}</p>
                        <p><strong>Designation: </strong> {{ getInfoSpecies.designation }}</p>
                        <p><strong>Averge height: </strong> {{ getInfoSpecies.average_height }} cm.
                        </p>
                        <p><strong>Average lifespan: </strong> {{ getInfoSpecies.average_lifespan }}
                        </p>
                        <p><strong>Hair color: </strong> {{ getInfoSpecies.hair_colors }}</p>
                        <p><strong>Skin color: </strong> {{ getInfoSpecies.skin_colors }}</p>
                        <p><strong>Eye color: </strong> {{ getInfoSpecies.eye_colors }}</p>
                        <p><strong>Languaje: </strong> {{ getInfoSpecies.language }}</p>
                    </div>
                    <button @click="retroceder" class="button is-dark">Go back</button>
                   
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
    mounted() {
        document.getElementById("op4").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op4").style.borderBottom = 'none';
    },
    methods: {
        retroceder() {
            window.history.back();
        }
    }
}
</script>
<style>
.caixa{
    background-color: black;
}
strong {
    color: rgb(174, 171, 171);
}

p {
    color: rgb(133, 131, 131);
}
</style>