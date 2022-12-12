<template>
    <div class="border">
        <div>
            <a class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getSpecies.results" :key="i">
                    <div class="card">
                        <div class="card-content">
                            <a class="nav-link">
                                <figure class="image">
                                    <img :src="(`https://starwars-visualguide.com/assets/img/species/${item.uid}.jpg`)"
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
    name: 'ShowSpecies',
    computed: {
        ...mapGetters(['getSpecies'])
    }
}

</script>
<style scoped>
.card {
    width: 35vh;
    height: auto;
    background-color: rgb(30, 30, 30);
    margin: 20px;
}
</style>