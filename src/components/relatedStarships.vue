<template>
    <div class="box">
        <p class="titol is-size-4 is-bold">Related starships</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in starships" :key="i">
                <div class="carta">
                    <div>
                        <figure class="image">
                            <img class="imatge"
                                :src="`https://starwars-visualguide.com/assets/img/starships/${item.url.split(/\D/g).join('')}.jpg`"
                                alt="image film">
                        </figure>

                    </div>
                    <a class="nav-link" @click="setInfoStarships(item), showImageShip(item)">
                        <p class="title has-text-grey is-size-6"> {{ item.name }}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'relatedStarships',
    computed: {
        ...mapGetters(['getInfoFilms'])
    },
    data() {
        return {
            starships: []
        }
    },
    mounted() {
        this.getStarships()
    },
    methods: {
        setInfoStarships(item) {
            this.$router.push('/infoStarShip')
            this.$store.dispatch('GET_INFOSTARSHIPS', item)
        },
        showImageShip(item) {
            this.$store.state.numImg = item.split(/\D/g).join('')
            return this.$store.dispatch("GET_IMAGESHIPS", item)
        },
        async getStarships() {
            if (this.getInfoFilms.starships.length >= 1) {
                for (let i = 0; i < this.getInfoFilms.starships.length; i++) {
                    const response = fetch(this.getInfoFilms.starships[i])
                    const infoStarShip = await (await response).json();
                    this.starships.push(infoStarShip)
                }
            }
        },
        showImageShip: function (item) {
            this.$store.state.numImg = item.url.split(/\D/g).join('')
            return this.$store.dispatch("GET_IMAGESHIPS", item)
        },
    }
}
</script>
<style scoped>
.carta {
    padding: 0;
    width: 20vh;
    height: auto;
    margin: 8px;
    border-radius: 5%;

}
</style>