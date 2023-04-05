<template>
    <div class="box">
        <p class="titol is-size-4 is-bold">Related Vehicles</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in vehicles" :key="i">
                <div class="carta">
                    <div>
                        <figure class="image">
                            <img class="imatge"
                                :src="(`https://starwars-visualguide.com/assets/img/vehicles/${item.url.split(/\D/g).join('')}.jpg`)"
                                alt="image film">
                        </figure>
                        <a class="nav-link" @click="setInfovehicles(item)">
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
    name: 'relatedVehicles',
    computed: {
        ...mapGetters(['getInfoFilms', ' getImageShips'])
    },
    data() {
        return {
            vehicles: []
        }
    },
    created() {
        this.getVehicles()
    },


    methods: {
        setInfovehicles(item) {
            this.$router.push('/infoVehicles')
            this.$store.dispatch('GET_INFOVEHICLES', item)

        },
        async getVehicles() {
            if (this.getInfoFilms.vehicles.length >= 1) {
                for (let i = 0; i < this.getInfoFilms.vehicles.length; i++) {
                    const response = fetch(this.getInfoFilms.vehicles[i])
                    const infoVehicles = await (await response).json();
                    this.vehicles.push(infoVehicles)
                }
            }

        }
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