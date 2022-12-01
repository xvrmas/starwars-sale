<template>
    <div class="border ">
        <div class="mb-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae perspiciatis, expedita nobis accusamus voluptas, et temporibus eos, tempora magnam quo ullam error. Ipsam, facere doloribus maxime sunt quis nam?</p>
        </div>
        <div>
            <a class="columns is-multiline is-centered is-mobile">
                <div  v-for="(item, i) in getStarShips.results" :key="i">
                    <div class="card">
                        <div class="card-content">
                            <a class="nav-link" @click="showInfo(item)">
                                <p style="color:gray" class="is-size-5 is-bold">{{ item.name }}</p>
                                <p style="color:gray" class="is-size-6">{{ item.model }}</p>
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
import { mapGetters } from 'vuex'
export default {
    name: 'HomeView',


    methods: {
        setInfoShip(item) {
            this.$store.state.infoTechShip = item;
            console.log(item)
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
        imatge(item) {
            this.$store.state.numImg = item.url.split(/\D/g).join(''),
                console.log(this.$store.state.numImg)
        },
        showImageShip: function (item) {
            return this.$store.dispatch("GET_IMAGESHIPS", item)
        },
        showInfo(item) {
            console.log(item)
            this.$store.state.infoFilm = (item)
        }
    },
    computed: {
        ...mapGetters(['getStarShips'])
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
.card{
    width: 300px;
    height: 120px;
    background-color: rgb(30, 30, 30) ;
    border-left:solid  rgb(191, 147, 0) 2px;
    margin: 20px;
}
.container {
    margin-top: -24px;
    margin-bottom: 0px;
    background-color: black;
}
</style>