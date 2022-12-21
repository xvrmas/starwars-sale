<template>
    <div class="box">
        <p>Related Characters</p>
        <div v-for="(item, i) in infoFilm.properties.characters" :key="i">
            <div class="card">
                <div class="card-image">
                    <!-- <figure class="image">
                                        <img :src="require(`@/assets/characters/${item.uid}.jpg`)" alt="image film">
                                    </figure> -->
                    <a class="nav-link" @click="setInfoCharacters(item)">
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
    props:['infoFilm'],
    methods:{
        setInfoCharacters(item){
            this.$router.push('/infoCharacters')
            this.$store.dispatch('GET_INFOCHARACTERS',item)
        }
    }
}
</script>