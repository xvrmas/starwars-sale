<template>
    <div class="border">
        <div>
            <div class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getPeople.results" :key="i">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img :src="require(`@/assets/characters/${item.url.split(/\D/g).join('')}.jpg`)"
                                    alt="image film">
                            </figure>
                            <a class="nav-link" @click="setInfoFilms(item)">
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
    name: 'ShowPeople',
    computed: {
        ...mapGetters(['getPeople'])
    },
    methods: {
        setInfoFilms(item) {
            this.$store.dispatch('GET_INFOCHARACTERS', item.url)
            this.$router.push('/infoCharacters')
        }
    }
}
</script>

<style scoped>
.card {
    width: 35vh;
    height: 60vh;
    background-color: rgb(30, 30, 30);
    margin: 20px;
}

.title {
    margin-top: 20px;
}

img {
    border-bottom: solid rgb(191, 147, 0) 3px;

}
</style>