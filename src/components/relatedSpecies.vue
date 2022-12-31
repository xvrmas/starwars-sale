<template>
    <div class="box">
        <p class="titol is-size-5 is-bold">Related species</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in species" :key="i">
                <div class="carta">
                    <div>
                        <figure class="image">
                            <img
                                :src="(`https://starwars-visualguide.com/assets/img/species/${item.url.split(/\D/g).join('')}.jpg`)">
                        </figure>
                        <a class="nav-link" @click="setInfoSpecies(item)">
                            <p style="color:gray" class="title is-size-6"> {{ item.name }}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'relatedSpecies',
    props: ['infoFilm'],
    data() {
        return {
            species: []
        }
    },
    mounted() {
        this.getSpecies()
    },
    methods: {
        setInfoSpecies(item) {
            this.$router.push('/infoSpecies')
            this.$store.dispatch('GET_INFOSPECIES', item)
        },
        async getSpecies() {
            for (let i = 0; i < this.infoFilm.species.length; i++) {
                const response = fetch(this.infoFilm.species[i])
                const infoSpecies = await (await response).json();
                this.species.push(infoSpecies)
            }
        }
    }
}
</script>
<style scoped>
.carta {
    padding: 0px;
    width: 15vh;
    height: 27vh;
    margin: 5px;
    border-radius: 5%;

}

.titol {
    margin-bottom: 20px;
}
</style>