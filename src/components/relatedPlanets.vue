<template>
    <div class="box">
        <p class="is-size-5 is-bold">Related planets</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in planetes" :key="i">
                <div class="carta">
                    <div >
                        <figure class="image">
                                        <img :src="require(`@/assets/planets/${item.url.split(/\D/g).join('')}.jpg`)" alt="image film">
                                    </figure>
                        <a class="nav-link" @click="setInfo(item)">
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
    name: 'relatedPlanets',
    props: ['infoFilm'],
    data() {
        return {
            planetes: []
        }
    },
    mounted() {
        this.getPlanetes()
    },

    methods: {
        setInfo(item) {
            this.$router.push('/infoPlanets')
            this.$store.dispatch('GET_INFOPLANET', item)
            console.log(item)
        },
        async getPlanetes() {
            for (let i = 0; i < this.infoFilm.properties.planets.length; i++) {
                const response = fetch(this.infoFilm.properties.planets[i])
                const infoPlanetes = await (await response).json();
                this.planetes.push(infoPlanetes.result.properties)
            }
        }
    }
}

</script>
<style>
.carta {
    padding: 0px;
    width: 15vh;
    height: 28vh;
    margin: 5px;
    border-radius: 5%;

}

p {
    margin-bottom: 20px;
}
</style>