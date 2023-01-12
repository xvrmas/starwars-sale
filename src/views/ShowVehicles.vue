<template>
    <div class="border">
        <div>
            <div class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getVehicles.results" :key="i">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img :src="(`https://starwars-visualguide.com/assets/img/vehicles/${item.url.split(/\D/g).join('')}.jpg`)"
                                    alt="image film">
                            </figure>
                            <a class="nav-link">
                                <p style="color:gray" @click="getInfoVehicles(item)" class="title is-size-5">{{
                                        item.name
                                }} </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="columns is-centered is-multiline">
            <button @click="decreasePage()" class="button is-dark active m-3">-</button>
            <h1 class="m-3">Page: {{ this.$store.state.page }} of 4</h1>
            <button @click="increasePage()" class="button is-dark m-3">+</button>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'showVehicles',

    computed: {
        ...mapGetters(['getVehicles'])
    },
    destroyed (){
        this.$store.state.page=1
    },
    methods: {
        getInfoVehicles(item) {
            this.$store.state.infoVehicles = item
            this.$router.push('/infoVehicles')
        },
        increasePage() {
            this.$store.state.page++;
            if (this.$store.state.page > 4) {
                this.$store.state.page = 4
            }
            this.$store.dispatch("GET_VEHICLES")
        },
        decreasePage() {
            this.$store.state.page--;
            if (this.$store.state.page < 1) {
                this.$store.state.page = 1
            }
            this.$store.dispatch("GET_VEHICLES")
        },
    }


}
</script>
<style scoped>
.card {
    width: 45vh;
    height: 43vh;
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