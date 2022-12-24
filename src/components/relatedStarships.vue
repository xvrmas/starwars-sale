<template>
    <div class="box">
        <p class="is-size-5 is-bold">Related starships</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in starships" :key="i">
                <div class="carta">
                    <div>
                        <figure class="image">
                            <img :src="`https://starwars-visualguide.com/assets/img/starships/${item.url.split(/\D/g).join('')}.jpg`"
                                alt="image film">
                        </figure>

                    </div>
                    <a class="nav-link" @click="setInfoStarships(item), showImageShip(item)">
                        <p style="color:gray" class="title is-size-6"> {{ item.name }}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'relatedStarships',
    props: ['infoFilm'],
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
            for (let i = 0; i < this.infoFilm.properties.starships.length; i++) {
                const response = fetch(this.infoFilm.properties.starships[i])
                const infoStarShip = await (await response).json();
                this.starships.push(infoStarShip.result.properties)
            }
        },
        showImageShip: function (item) {
            this.$store.state.numImg = item.url.split(/\D/g).join('')
            return this.$store.dispatch("GET_IMAGESHIPS", item)
        },
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