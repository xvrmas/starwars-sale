<template>
    <div class="box">
        <p class="titol is-size-4 is-bold">Related species</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in species" :key="i">
                <div class="carta">
                    <div>
                        <figure class="image">
                            <img class="imatge"
                                :src="(`https://starwars-visualguide.com/assets/img/species/${item.url.split(/\D/g).join('')}.jpg`)">
                        </figure>
                        <a class="nav-link" @click="setInfoSpecies(item)">
                            <p class="title has-text-grey is-size-6"> {{ item.name }}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'relatedSpecies',
  
    data() {
        return {
            species: []
        }
    },
    computed:{
        ...mapGetters(['getInfoFilms'])
    },
    created() {
        this.getSpecies()
    },
    methods: {
        setInfoSpecies(item) {
            this.$router.push('/infoSpecies')
            this.$store.dispatch('GET_INFOSPECIES', item)
        },
        async getSpecies() {
            for (let i = 0; i < this.getInfoFilms.species.length; i++) {
                const response = fetch(this.getInfoFilms.species[i])
                const infoSpecies = await (await response).json();
                this.species.push(infoSpecies)
            }
        }
    }
}
</script>
