<template>
    <div class="box">
        <p class="is-size-5 is-bold">Related Characters</p>
        <div v-for="(item, i) in personatges" :key="i">
            <div class="card">
                <div class="card-image">
                    <!-- <figure class="image">
                        <img :src="require(`@/assets/characters/${item.uid}.jpg`)" alt="image film">
                    </figure> -->
                    <a class="nav-link" @click="setInfo()">
                        <p style="color:gray" class="title is-size-5"> {{ item }}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'relatedCharacters',

    props: {
        infoFilm: {
            type: Object
        }
    },
    data() {
        return {
            personatges: []
        }
    },

    mounted() {
        // this.$store.dispatch('GET_RELATEDCHARACTERS',this.infoFilm)
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
        }
    }
}
</script>