<template>
    <div class="box">
        <p>Related Vehicles</p>
        <div v-for="(item, i) in infoFilm.properties.vehicles" :key="i">
            <div class="card">
                <div class="card-image">
                    <!-- <figure class="image">
                                        <img :src="require(`@/assets/characters/${item.uid}.jpg`)" alt="image film">
                                    </figure> -->
                    <a class="nav-link" @click="setInfovehicles(item)">
                        <p style="color:gray" class="title is-size-5"> {{ item }}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'relatedVehicles',
    props: ['infoFilm'],
    methods: {
        setInfovehicles(item) {
            this.$router.push('/infoVehicles')
            this.$store.dispatch('GET_INFOVEHICLES', item)
        }
    }
}
</script>