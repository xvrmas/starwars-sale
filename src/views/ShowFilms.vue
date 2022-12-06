<template>
    <div class="border">       
        <div>
            <a class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getFilms.result" :key="i">
                    <div class="card">
                        <div class="card-content">
                            <a class="nav-link">
                                <p style="color:gray" class="is-size-5 is-family-monospace is-bold">{{
                                        item.properties.title
                                }}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ShowFilms',
    computed: {
        ...mapGetters(['getFilms'])
    }
}
</script>

<style scoped>
.card {
    width: 300px;
    height: 120px;
    background-color: rgb(30, 30, 30);
    border-left: solid rgb(191, 147, 0) 4px;
    margin: 20px;
}
</style>