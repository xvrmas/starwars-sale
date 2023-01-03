<template>
    <div class="box">
        <p class="titol is-size-4  is-bold">Related Films</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in filmRelated " :key="i">
                <div class="carta">
                    <div>
                        <figure class="image">
                            <img class="imatge"
                                :src="require(`@/assets/portada/${item.url.split(/\D/g).join('')}.jpg`)"
                                alt="image film">
                        </figure>
                        <a class="nav-link" @click="setInfo(item)">
                            <p class="title has-text-grey is-size-6"> {{ item.title }}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>1

<script>
export default {
    name: 'relatedCharacters',
    props: {
        arrayRelatedFilms: {
            type: Object
        }
    },
  data (){
    return{
        filmRelated:[]
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
        async getFilms() {
            for (let i = 0; i < this.arrayRelatedFilms.films.length; i++) {
                const response = fetch(this.arrayRelatedFilms.films[i])
                const filming = await (await response).json();
                console.log('related films',filming)
                this.filmRelated.push(filming)

            }
        },

    }
}
</script>