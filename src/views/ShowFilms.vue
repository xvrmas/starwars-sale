<template>
    <div class="border">
        <div>
            <a class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getFilms.result" :key="i">
                    <div class="card">
                        <div class="card-content">
                            <figure class="image" >
                                <img :src="require(`@/assets/portada/${item.uid}.jpg`)" alt="image film">
                            </figure>
                            <a class="nav-link" @click="setInfoFilm(item), showImageFilm(item)">
                                <p style="color:gray" class="title is-size-5 is-family-monospace is-bold">{{
                                        item.properties.title
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
    name: 'ShowFilms',
    computed: {
        ...mapGetters(['getFilms', 'getImageFilm'])
    },
    methods: {
        setInfoFilm(item) {
            this.$store.state.infoFilm = item
            this.$router.push('/infoFilms')
        },
        showImageFilm: function (item) {
            this.$store.state.numImg = item.properties.url.split(/\D/g).join('')
            console.log('numero imatge-->', this.$store.state.numImg)
            return this.$store.dispatch("GET_IMAGEFILM", item)
        },
    }
}
</script>

<style scoped>
.card {
    width: 39vh;
    height: 60vh;
    background-color: rgb(30, 30, 30);
    margin: 20px;
}
.title{
    border-top: solid rgb(191, 147, 0) 3px;
    margin-top: 20px;

}
</style>