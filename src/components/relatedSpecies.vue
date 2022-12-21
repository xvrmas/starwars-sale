<template>
    <div class="box">
        <p>Related species</p>
        <div v-for="(item, i) in infoFilm.properties.species" :key="i">
            <div class="card">
                <div class="card-image">
                    <!-- <figure class="image">
                                        <img :src="require(`@/assets/characters/${item.uid}.jpg`)" alt="image film">
                                    </figure> -->
                    <a class="nav-link" @click="setInfoSpecies(item)">
                        <p style="color:gray" class="title is-size-5"> {{ item }}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'relatedSpecies',
    props: ['infoFilm'],
    methods: {
        setInfoSpecies(item) {
            this.$router.push('/infoSpecies')
            this.$store.dispatch('GET_INFOSPECIES', item)
        }
    }
}
</script>