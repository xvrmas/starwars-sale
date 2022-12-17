<template>
    <div class="border">
        <div>
            <div class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getSpecies.results" :key="i">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img :src="(`https://starwars-visualguide.com/assets/img/species/${item.uid}.jpg`)"
                                    alt="image film">
                            </figure>
                            <a class="nav-link" @click="setInfoSpecies(item)">
                                <p style="color:gray" class="title is-size-5">{{
                                        item.name
                                }}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ShowSpecies',
    computed: {
        ...mapGetters(['getSpecies'])
    },
    methods:{
        setInfoSpecies(item){
            this.$router.push('infoSpecies')
            this.$store.dispatch('GET_INFOSPECIES', item.url)
        }
    }
}

</script>
<style scoped>
.card {
    width: 35vh;
    height: 58vh;
    background-color: rgb(30, 30, 30);
    margin: 20px;
}
.title{
    margin-top: 20px;
}
img{
    border-bottom: solid rgb(191, 147, 0) 3px;

}
</style>