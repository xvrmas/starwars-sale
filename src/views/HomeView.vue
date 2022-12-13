<template>
    <div class="contenidor">
        <div class="border ">
            <div>
                <div class="columns is-multiline is-centered is-mobile">
                    <div v-for="(item, i) in getStarShips.results" :key="i">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image">
                                    <img :src="(`https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`)"
                                        alt="image film">
                                </figure>
                                <a class="nav-link" @click="setInfoShip(item), showImageShip(item)">
                                    <p style="color:gray" class="title is-size-5">{{ item.name }}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name: 'HomeView',


    methods: {
        setInfoShip(item) {
            this.$store.dispatch("GET_INFOSTARSHIPS", item.url)
            this.$router.push('infoStarShip')
        },
        increasePage() {
            this.$store.state.page++;
            if (this.$store.state.page > 4) {
                this.$store.state.page = 4
            }
            this.$store.dispatch("GET_STARSHIPS")
        },
        decreasePage() {
            this.$store.state.page--;
            if (this.$store.state.page < 1) {
                this.$store.state.page = 1
            }
            this.$store.dispatch("GET_STARSHIPS")
        },
        showImageShip: function (item) {
            this.$store.state.numImg = item.url.split(/\D/g).join('')
            return this.$store.dispatch("GET_IMAGESHIPS", item)
        },

    },
    computed: {
        ...mapGetters(['getStarShips', 'getImageShips']),
        ...mapMutations(['setShips']),
        ...mapState(['numImg', 'page'])
    },

}
</script>

<style scoped>
.border {
    background-color: black;
}

.card {
    width: 40vh;
    height: 40vh;
    background-color: rgb(30, 30, 30);
    margin: 20px;
}
.contenidor{
    background-color: black;
}
.title{
    margin-top: 20px;
}
img{
    border-bottom: solid rgb(191, 147, 0) 3px;

}
</style>