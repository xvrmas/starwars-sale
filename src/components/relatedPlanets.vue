<template>
    <div class="box">
        <p class="titol is-size-4 is-bold">Related planets</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in planetes" :key="i">
                <div class="carta">
                    <div>
                        <figure class="image ">
                            <img :src="require(`@/assets/planets/${item.url.split(/\D/g).join('')}.jpg`)"
                                alt="image film">
                        </figure>
                        <a class="nav-link" @click="setInfo(item)">
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
    name: 'relatedPlanets',
    computed: {
        ...mapGetters(['getInfoFilms'])
    },
    data() {
        return {
            planetes: []
        }
    },
    created() {
        this.getPlanetes()
    },

    methods: {
        setInfo(item) {

            this.$router.push('/infoPlanets')
            this.$store.dispatch('GET_INFOPLANET', item)
        },
        async getPlanetes() {
            for (let i = 0; i < this.getInfoFilms.planets.length; i++) {
                const response = fetch(this.getInfoFilms.planets[i])
                const infoPlanetes = await (await response).json();
                this.planetes.push(infoPlanetes)
            }
        }
    }
}

</script>
<style scoped>
img {
    border: solid rgb(53, 53, 53);
    height: 15vh;
    width: auto;
}

.carta {
    height: 22vh;
}
</style>
