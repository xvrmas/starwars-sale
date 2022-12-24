<template>
    <div class="box">
        <p class="is-size-5 is-bold">Related Vehicles</p>
        <div class="columns is-multiline is-centered ">
            <div v-for="(item, i) in vehicles" :key="i">
                <div class="card carta">
                    <div class="card-image">
                        <figure class="image">
                                        <img :src="(`https://starwars-visualguide.com/assets/img/vehicles/${item.url.split(/\D/g).join('')}.jpg`)" alt="image film">
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