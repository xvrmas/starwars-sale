<template>
    <div class="border p-5">
        <div>
            <div class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getVehicles.results" :key="i">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img :src="(`https://starwars-visualguide.com/assets/img/vehicles/${item.url.split(/\D/g).join('')}.jpg`)"
                                    @error ="setErrorImg" alt="image film">
                            </figure>
                            <a class="nav-link">
                                <p style="color:gray" @click="getInfoVehicles(item),  showImageVehicle(item)" class="title is-size-5">{{
                                    item.name
                                }} </p>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="columns is-centered is-mobile is-multiline">
            <button @click="decreasePage()" class="button is-dark active m-3">-</button>
            <h1 class="m-3 has-text-gray">Page: {{ this.$store.state.pageVehicles }} of 4</h1>
            <button @click="increasePage()" class="button is-dark m-3">+</button>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import notImg from '@/assets/errorImg/notImg.jpg'
export default {
    name: 'showVehicles',

    computed: {
        ...mapGetters(['getVehicles'])
    },
    mounted() {
        document.getElementById("op6").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op6").style.borderBottom = 'none';
    },
    methods: {
        setErrorImg(e) {
            e.target.src = notImg
        },
        getInfoVehicles(item) {
            this.$store.state.infoVehicles = item
            this.$router.push('/infoVehicles')
        },
        increasePage() {
            this.$store.state.pageVehicles++;
            if (this.$store.state.pageVehicles > 4) {
                this.$store.state.pageVehicles = 4
            }
            this.$store.dispatch("GET_VEHICLES")
        },
        decreasePage() {
            this.$store.state.pageVehicles--;
            if (this.$store.state.pageVehicles < 1) {
                this.$store.state.pageVehicles = 1
            }
            this.$store.dispatch("GET_VEHICLES")
        },
        showImageVehicle: function (item) {
            this.$store.state.numImg = item.url.split(/\D/g).join('')
            this.$store.dispatch("GET_IMAGEVEHICLES", item)
        },

    }


}
</script>
<style scoped>
.card {
    width: 35vh;
    height: 35vh;
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