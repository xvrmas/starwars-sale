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
</template>1

<script>
import { mapState } from 'vuex'
export default {
    name: 'relatedFilms',
    props: {
        arrayRelatedFilms: {
            type: Object
        }
    },
    computed: {
        ...mapState(['arrayRelatedItems'])
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
            this.$store.state.infoFilm = item,
                this.$router.push('/infoFilms')
        },
        showImageFilm: function (item) {
            this.$store.state.numImg = item.url.split(/\D/g).join('')
            return this.$store.dispatch("GET_IMAGEFILM")
        },
        async getFilms() {
            if (this.arrayRelatedItems.films.length >= 1) {
                this.condition = true
                for (let i = 0; i < this.arrayRelatedItems.films.length; i++) {
                    const response = fetch(this.arrayRelatedItems.films[i])
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