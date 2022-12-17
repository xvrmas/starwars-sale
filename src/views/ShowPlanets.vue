<template>
    <div class="border">
        <div>
            <div class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getPlanets.results" :key="i">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img :src="(`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`)"
                                    alt="image film">
                            </figure>
                            <a class="nav-link">
                                <p style="color:gray"  @click="setInfoPlanets(item)" class="title is-size-5">{{
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
    name: 'ShowPlanets',
    computed: {
        ...mapGetters(['getPlanets'])
    },
    methods:{
        setInfoPlanets(item){
            this.$router.push('infoPlanets')
            this.$store.dispatch('GET_INFOPLANET', item.url)
        }
    }
}
</script>
<style scoped>
.card {
    width: 40vh;
    height: 50vh;
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