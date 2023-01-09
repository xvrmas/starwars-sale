<template>
    <div class="border">
        <div>
            <div class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getPlanets.results" :key="i">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img :src="require(`@/assets/planets/${item.url.split(/\D/g).join('')}.jpg`)"
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
            this.$store.state.infoPlanets = item
            this.$router.push('/infoPlanets')
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