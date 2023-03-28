<template>
    <div class="caixa">
        <div class="text-white">
            <p class="is-size-3 is-start is-family-sans-serif has-text-grey-lighter mb-4">{{ getInfoShips.name }}</p>
            <div class="caixaImatge">
                <img :src="getImageShips">
            </div>
            <div class="columns mt-4">
                <div class="column"></div>

                <div class="column is-family-monospace is-size-5 has-text-left-desktop">
                    <h6>Model: <p>{{ getInfoShips.model }}</p>
                    </h6><br>
                    <h6>Manufacturer: <p> {{ getInfoShips.manufacturer }}</p>
                    </h6><br>
                    <h6>Max speed: <p>{{ getInfoShips.max_atmosphering_speed }} Km/h</p>
                    </h6><br>
                    <h6>Cost: <p> {{ getInfoShips.cost_in_credits }} credits</p>
                    </h6><br>
                    <h6>Crew: <p>{{ getInfoShips.crew }}</p>
                    </h6><br>
                    <h6>Passengers: <p>{{ getInfoShips.passengers }}</p>
                    </h6><br>
                </div>
                <div class="column is-size-5 has-text-left-desktop">

                    <h6>Length: <p>{{ getInfoShips.length }}</p>
                    </h6><br>
                    <h6>Cargo capacity: <p>{{ getInfoShips.cargo_capacity }}</p>
                    </h6><br>
                    <h6>Consumables: <p>{{ getInfoShips.consumables }}</p>
                    </h6><br>
                    <h6>Hyperdrive rating: <p>{{ getInfoShips.hyperdrive_rating }}</p>
                    </h6><br>
                    <h6>Starship class: <p> {{ getInfoShips.starship_class }}</p>
                    </h6><br>
                    <h6>MGLT: <p>{{ getInfoShips.MGLT }}</p>
                    </h6>
                </div>
                <div class="column"></div>
            </div>
            <button @click="retroceder" class="button is-dark">Go back</button>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'InfoStarShip',
    computed: {
        ...mapGetters(['getImageShips', 'getInfoShips'])
    },
    mounted() {
        document.getElementById("op5").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op5").style.borderBottom = 'none';
    },
    methods: {
        retroceder() {
            window.history.back();
        }
    }

}
</script>

<style scoped>
img {
    width: 120vh;
    height: auto;
}

.caixa {
    background-color: black;
}

.caixaImatge {
    border-bottom: solid rgb(191, 147, 0) 1px;
}

.column {
    color: aliceblue;
}

h6 {
    color: gray;
}

p {
    color: white;
}
</style>