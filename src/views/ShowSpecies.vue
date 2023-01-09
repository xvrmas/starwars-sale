<template>
    <div class="border">
        <div>
            <div class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getSpecies.results" :key="i">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img :src="(`https://starwars-visualguide.com/assets/img/species/${item.url.split(/\D/g).join('')}.jpg`)"
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
            this.$store.state.infoSpecies = item
            this.$router.push('/infoSpecies')
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