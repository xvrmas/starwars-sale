<template>
    <div class="box">
        <p class="titol is-size-4  is-bold">Related Characters</p>
        <div class="columns is-multiline is-mobile is-centered ">
            <div v-for="(item, i) in personatges" :key="i">
                <div class="carta">
                    <div>
                        <figure class="image">
                            <img class="imatge"
                                :src="require(`@/assets/characters/${item.url.split(/\D/g).join('')}.jpg`)"
                                alt="image film">
                        </figure>
                        <a class="nav-link" @click="setInfo(item)">
                            <p class="title has-text-grey-lighter is-size-6"> {{ item.name }}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>1

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'relatedCharacters',
    data() {
        return {
            personatges: [],
            numImatge: ''
        }
    },
    computed: {
        ...mapGetters(['getInfoFilms'])
    },
    created() {
        this.getcharacters()
    },

    methods: {
        setInfo(item) {
            this.$router.push('/infoCharacters')
            this.$store.dispatch('GET_INFOCHARACTERS', item)
        },
        async getcharacters() {
            for (let i = 0; i < this.getInfoFilms.characters.length; i++) {
                const response = fetch(this.getInfoFilms.characters[i])
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