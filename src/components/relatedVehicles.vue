<template>
    <div class="box">
        <p class="titol is-size-5 is-bold">Related Vehicles</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in vehicles" :key="i">
                <div class="carta">
                    <div>
                        <figure class="image">
                            <img :src="(`https://starwars-visualguide.com/assets/img/vehicles/${item.url.split(/\D/g).join('')}.jpg`)"
                                alt="image film">
                        </figure>
                        <a class="nav-link" @click="setInfovehicles(item)">
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
    name: 'relatedVehicles',
    props: ['infoFilm'],
    data() {
        return {
            vehicles: []
        }
    },
    mounted() {
        this.getVehicles()
    },
    methods: {
        setInfovehicles(item) {
            this.$router.push('/infoVehicles')
            this.$store.dispatch('GET_INFOVEHICLES', item)
        },
        async getVehicles() {
            for (let i = 0; i < this.infoFilm.properties.vehicles.length; i++) {
                const response = fetch(this.infoFilm.properties.vehicles[i])
                const infoVehicles = await (await response).json();
                this.vehicles.push(infoVehicles.result.properties)
            }
        }
    }
}
</script>
<style scoped>
.carta {
    padding: 0px;
    width: 15vh;
    height: 20vh;
    margin: 5px;
    border-radius: 5%;

}

.titol {
    margin-bottom: 20px;
}
</style>
