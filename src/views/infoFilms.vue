<template>
    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="column is-half mt-3">
                    <img :src="getImageFilm">
                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <p><strong>Title: </strong> {{ infoFilm.properties.title }}</p>
                        <p><strong>Director: </strong> {{ infoFilm.properties.director }}</p>
                        <p><strong>Producer(s): </strong>{{ infoFilm.properties.producer }}</p>
                        <p><strong>Release date: </strong>{{ infoFilm.properties.release_date }}</p>
                        <p><strong>Synopsis: </strong>{{ infoFilm.properties.opening_crawl }}</p>
                    </div>
                    <div class="box">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem architecto,
                            aspernatur
                            accusamus esse eligendi qui id asperiores voluptates consectetur eum veritatis quasi, enim
                            natus
                            alias deserunt magni et sint molestiae.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    name: 'infoFilms',
    computed: {
        ...mapState(['infoFilm']),
        ...mapGetters(['getImageFilm'])
    }
}
</script>
<style scoped>
.caixa {
    background-color: black;
}
</style>