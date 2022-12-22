<template>
    <div class="box">
        <p>Related Characters</p>
        <div v-for="(item, i) in infoCharacters" :key="i">
            <div class="card">
                <div class="card-image">
                    <!-- <figure class="image">
                        <img :src="require(`@/assets/characters/${item.uid}.jpg`)" alt="image film">
                    </figure> -->
                    <a class="nav-link" @click="setpersonatges(item)">
                            <p style="color:gray" class="title is-size-5"> {{item }}</p>
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

    mounted() {
        this.getcharacters()
    },


    methods: {
        setpersonatges(item) {
            this.$router.push('/infoCharacters')
            this.$store.dispatch('GET_INFOCHARACTERS', item)
        },
        async getcharacters() {
            for (let i = 0; i < this.infoFilm.properties.characters.length; i++) {
                const response = fetch(this.infoFilm.properties.characters[i])
                 const infoCharaters = await (await response).json();
                console.log( infoCharaters.result.properties)
            }
        }
    }
}
</script>