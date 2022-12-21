<template>
    <div class="box">
        <p>Related starships</p>
        <div v-for="(item, i) in infoFilm.properties.starships" :key="i">
            <div class="card">
                <div class="card-image">
                    <!-- <figure class="image">
                                        <img :src="require(`@/assets/characters/${item.uid}.jpg`)" alt="image film">
                                    </figure> -->
                    <a class="nav-link" @click="setInfoStarships(item),showImageShip(item)">
                        <p style="color:gray" class="title is-size-5"> {{ item }}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'relatedStarships',
    props: ['infoFilm'],
    methods: {
        setInfoStarships(item){
            this.$router.push('/infoStarShip')
            this.$store.dispatch('GET_INFOSTARSHIPS', item)
        },
        showImageShip(item){
            this.$store.state.numImg = item.split(/\D/g).join('')
            return this.$store.dispatch("GET_IMAGESHIPS", item)
        }
    }
}
</script>