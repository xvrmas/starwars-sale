<template>
    <div class="box">
        <p class="titol is-size-5 is-bold">Related Characters</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in personatges" :key="i">
                <div class="carta">
                    <div>
                        <figure class="image">
                            <img :src="require(`@/assets/characters/${item.url.split(/\D/g).join('')}.jpg`)"
                                alt="image film">
                        </figure>
                        <a class="nav-link" @click="setInfo(item)">
                            <p style="color:gray" class="title is-size-6"> {{ item.name }}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'relatedCharacters',
    props: ['infoFilm'],


    props: {
        infoFilm: {
            type: Object
        }
    },
    data() {
        return {
            personatges: [],
            numImatge: ''
        }
    },

    mounted() {
        this.getcharacters()
    },


    methods: {
        setInfo(item) {
            this.$router.push('/infoCharacters')
            this.$store.dispatch('GET_INFOCHARACTERS', item)
            console.log(item)
        },
        async getcharacters() {
            for (let i = 0; i < this.infoFilm.characters.length; i++) {
                const response = fetch(this.infoFilm.characters[i])
                const infoCharaters = await (await response).json();
                this.personatges.push(infoCharaters)
            }
        },

    }
}
</script>
<style scoped>
.carta {
    padding: 0px;
    width: 15vh;
    height: 28vh;
    margin: 5px;
    border-radius: 5%;

}

.titol {
    margin-bottom: 20px;
}
</style>