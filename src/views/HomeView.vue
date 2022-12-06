<template>
    <div class="border ">
        <div>
        </div>
        <div>
            <a class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getStarShips.results" :key="i">
                    <div class="card">
                        <div class="card-content">
                            <a class="nav-link" @click="setInfoShip(item), showImageShip(item)">
                                <p style="color:gray" class="is-size-5 is-family-monospace is-bold">{{ item.name }}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </a>
            <b-button style="color:gray" class="is-dark m-4" @click="decreasePage">-</b-button>
            <b-button style="color:gray" class="is-dark m-4" @click="increasePage">+</b-button>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name: 'HomeView',


    methods: {
        setInfoShip(item) {
            this.$store.dispatch("GET_INFOSTARSHIPS",item.url)
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
        ...mapGetters(['getStarShips']),
        ...mapMutations(['setShips']),
        ...mapState(['numImg', 'page'])

    },
    created() {
        this.$store.dispatch("GET_STARSHIPS")
    }
}
</script>

<style scoped>
.border {
    background-color: black;
}

.card {
    width: 300px;
    height: 120px;
    background-color: rgb(30, 30, 30);
    border-left: solid rgb(191, 147, 0) 4px;
    margin: 20px;
}

.container {
    margin-top: -24px;
    margin-bottom: 0px;
    background-color: black;
}
</style>