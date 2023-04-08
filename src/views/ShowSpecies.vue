<template>
    <div class="border p-5">
        <div>
            <div class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getSpecies.results" :key="i">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img :src="(`https://starwars-visualguide.com/assets/img/species/${item.url.split(/\D/g).join('')}.jpg`)"
                                    alt="image film">
                            </figure>
                            <a class="nav-link" @click="setInfoSpecies(item)">
                                <p style="color:gray" class="title is-size-5">{{
                                    item.name
                                }}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="columns is-centered is-mobile is-multiline">
            <button @click="decreasePage()" class="button is-dark active m-3">-</button>
            <h1 class="m-3 has-text-gray">Page: {{ this.$store.state.pageSpecies }} of 4</h1>
            <button @click="increasePage()" class="button is-dark m-3">+</button>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ShowSpecies',
    computed: {
        ...mapGetters(['getSpecies'])
    },
    mounted() {
        document.getElementById("op4").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op4").style.borderBottom = 'none';
    },

    methods: {
        setInfoSpecies(item) {
            this.$store.state.infoSpecies = item
            this.$router.push('/infoSpecies')
        },
        setInfoFilms(item) {
            this.$store.state.infoCharacters = item
            this.$router.push('/infoCharacters')
        },
        increasePage() {
            this.$store.state.pageSpecies++;
            if (this.$store.state.pageSpecies > 4) {
                this.$store.state.pageSpecies = 4
            }
            this.$store.dispatch("GET_SPECIES")
        },
        decreasePage() {
            this.$store.state.pageSpecies--;
            if (this.$store.state.pageSpecies < 1) {
                this.$store.state.pageSpecies = 1
            }
            this.$store.dispatch("GET_SPECIES")
        },
    }
}

</script>
<style scoped>
.card {
    width: 25vh;
    height: 48vh;
    background-color: rgb(30, 30, 30);
    margin: 20px;
}

.title {
    margin-top: 20px;
}

img {
    border-bottom: solid rgb(191, 147, 0) 3px;

}
</style>