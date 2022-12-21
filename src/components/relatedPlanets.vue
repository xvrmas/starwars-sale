<template>
    <div class="box">
        <p>Related planets</p>
        <div v-for="(item, i) in infoFilm.properties.planets" :key="i">
            <div class="card">
                <div class="card-image">
                    <!-- <figure class="image">
                                        <img :src="require(`@/assets/characters/${item.uid}.jpg`)" alt="image film">
                                    </figure> -->
                    <a class="nav-link" @click="setInfoPlanets(item)">
                        <p style="color:gray" class="title is-size-5"> {{ item }}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'relatedPlanets',
    props: ['infoFilm'],
    methods: {
        setInfoPlanets(item) {
            this.$router.push('/infoPlanets')
            this.$store.dispatch('GET_INFOPLANET', item)
        }
    }
}
</script>