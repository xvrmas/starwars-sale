<template>
    <div class="box">
        <p class="titol is-size-4  is-bold">Related Films</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in films " :key="i">
                <div class="carta">
                    <div>
                        <figure class="image">
                            <img class="imatge" :src="require(`@/assets/portada/${item.url.split(/\D/g).join('')}.jpg`)"
                                alt="image film">
                        </figure>
                        <a class="nav-link" @click="setInfo(item), showImageFilm(item)">
                            <p class="title has-text-grey is-size-6"> {{ item.title }}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'relatedFilms',
    computed: {
        ...mapGetters(['getInfoFilms'])
    },
    data() {
        return {
            films: []
        }
    },

   mounted() {
        this.getFilms()
    },


    methods: {
        setInfo(item) {
            this.$router.push('/infoFilms')
            this.$store.dispatch('GET_INFOFILMS', item)

        },
        showImageFilm: function (item) {
            this.$store.state.numImg = item.url.split(/\D/g).join('')
            return this.$store.dispatch("GET_IMAGEFILM")
        },
        async getFilms() {
            if (this.getInfoFilms.films.length >= 1) {
                for (let i = 0; i < this.getInfoFilms.films.length; i++) {
                    const response = fetch(this.getInfoFilms.films[i])
                    const filming = await (await response).json();
                    this.films.push(filming)

                }
            } else {
                this.$store.state.condition = false
            }
        },

    }
}
</script>
<style>
.box {
    padding: 20px;
    background-color: rgb(45, 45, 45);
    margin: 1px;
    border-radius: 10px;
    /* text-align: center; */
}

img {
    border-radius: 10px;
}

.imatge {
    border: solid rgb(53, 53, 53);
}

.carta {
    padding: 0;
    width: 15vh;
    height: 28vh;
    margin: 8px;
    border-radius: 5%;

}

.titol {
    margin-bottom: 25px;
    border-bottom: solid rgb(191, 147, 0) 2px;
    color: rgb(174, 171, 171);

}
</style>