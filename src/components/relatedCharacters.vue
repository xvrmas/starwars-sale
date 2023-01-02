<template>
    <div class="box">
        <p class="titol is-size-5  is-bold">Related Characters</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in personatges" :key="i">
                <div class="carta">
                    <div>
                        <figure class="image">
                            <img :src="require(`@/assets/characters/${item.url.split(/\D/g).join('')}.jpg`)"
                                alt="image film">
                        </figure>
                        <a class="nav-link" @click="setInfo(item)">
                            <p class="title has-text-grey is-size-6"> {{ item.name }}</p>
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
            this.$store.dispatch('GET_INFOVEHICLES', item)
            console.log('relate characters set info-->',item)
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
<style>
.box {
    padding: 20px;
    background-color: rgb(45, 45, 45);
    margin: 1px;
    border-radius: 10px;
    text-align: center;
}
img{
    border-radius: 10px;
}
.carta {
    padding: 0;
    width: 15vh;
    height: 28vh;
    margin: 8px;
    border-radius: 5%;

}

.titol {
    margin-bottom: 20px;
    color: rgb(174, 171, 171);

}
</style>