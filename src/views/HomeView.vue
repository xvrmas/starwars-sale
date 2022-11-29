<template>
    <div class="border">
        <div class="container">
            <a class="columns is-multiline is-centered is-mobile m-5">
                <div v-for="(item, i) in getStarShips.results" :key="i">
                    <div class="caixa1 m-5">
                        <a class="nav-link" @click="showInfo(item)">
                            <p style="color:grey" class="is-size-5">{{ item.name }}</p>
                        </a>
                    </div>
                </div>
            </a>
            <b-button style="" class="m-4" @click="decreasePage">-</b-button>
            <b-button class="btn m-4" @click="increasePage">+</b-button>
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
.caixa1 {
    padding: 20px;
    border-radius: 4%;
    background-color: rgb(49, 48, 48);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-decoration:black;
}

.border {
    background-color: black;
}

.container {
    margin-top:-23px;
    margin-bottom: 0.5px;
    background-color: black;
}
</style>