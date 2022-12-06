<template>
    <div class="border">       
        <div>
            <a class="columns is-multiline is-centered is-mobile">
                <div v-for="(item, i) in getPlanets.results" :key="i">
                    <div class="card">
                        <div class="card-content">
                            <a class="nav-link">
                                <p style="color:gray" class="is-size-5 is-family-monospace is-bold">{{
                                        item.name
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
    name: 'ShowPlanets',
    computed: {
        ...mapGetters( ['getPlanets'])
    }
}
</script>