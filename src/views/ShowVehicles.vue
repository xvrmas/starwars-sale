<template>
    <div class="border">
        <div>
            <a class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getVehicles.results" :key="i">
                    <div class="card">
                        <div class="card-content">
                            <a class="nav-link">
                                <figure class="image">
                                    <img :src="(`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`)"
                                        alt="image film">
                                </figure>
                                <p style="color:gray" class="title is-size-5 is-family-monospace is-bold">{{
                                        item.name
                                }}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'showVehicles',

    computed: {
        ...mapGetters(['getVehicles'])
    }


}
</script>
<style scoped>
.card {
    width: 45vh;
    height: 40vh;
    background-color: rgb(30, 30, 30);
    margin: 20px;
}
</style>