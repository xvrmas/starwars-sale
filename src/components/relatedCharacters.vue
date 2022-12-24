<template>
    <div class="box">
        <p class="is-size-5 is-bold">Related Characters</p>
        <div class="separador"></div>
        <div class="columns is-multiline is-centered ">
            <div v-for="(item, i) in personatges" :key="i">
                <div class="card carta">
                    <div class="card-image">
                        <figure class="image">
                            <img class="image is-96x96 is-rounded" :src="require(`@/assets/characters/${item.url.split(/\D/g).join('')}.jpg`)"
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
            for (let i = 0; i < this.infoFilm.properties.characters.length; i++) {
                const response = fetch(this.infoFilm.properties.characters[i])
                const infoCharaters = await (await response).json();
                this.personatges.push(infoCharaters.result.properties)
            }
        },

    }
}
</script>
<style>
.carta {
    padding: 20px;
    width: 20vh;
    height: 180px;
    margin: 5px;
    background-color: rgb(231, 229, 229);

}

.separador {
    margin-top: 2px;
}

</style>