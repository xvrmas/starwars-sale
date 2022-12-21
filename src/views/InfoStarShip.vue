<template>
    <div class="caixa">
        <div class="text-white">
            <p class="is-size-3 is-start is-family-sans-serif mb-4">{{ getInfoShips.result.properties.name }}</p>
            <div class="caixaImatge">
                <img :src="getImageShips">
            </div>
            <div class="columns mt-4">
                <div class="column"></div>
                <div class="column is-family-monospace is-size-5 has-text-left-desktop">
                    <h6>Model: <p>{{ getInfoShips.result.properties.model }}</p>
                    </h6><br>
                    <h6>Manufacturer: <p> {{ getInfoShips.result.properties.manufacturer }}</p>
                    </h6><br>
                    <h6>Max speed: <p>{{ getInfoShips.result.properties.max_atmosphering_speed }} Km/h</p>
                    </h6><br>
                    <h6>Cost: <p> {{ getInfoShips.result.properties.cost_in_credits }} credits</p>
                    </h6><br>
                    <h6>Crew: <p>{{ getInfoShips.result.properties.crew }}</p>
                    </h6><br>
                    <h6>Passengers: <p>{{ getInfoShips.result.properties.passengers }}</p>
                    </h6><br>
                </div>
                <div class="column is-size-5 has-text-left-desktop">

                    <h6>Length: <p>{{ getInfoShips.result.properties.length }}</p>
                    </h6><br>
                    <h6>Cargo capacity: <p>{{ getInfoShips.result.properties.cargo_capacity }}</p>
                    </h6><br>
                    <h6>Consumables: <p>{{ getInfoShips.result.properties.consumables }}</p>
                    </h6><br>
                    <h6>Hyperdrive rating: <p>{{ getInfoShips.result.properties.hyperdrive_rating }}</p>
                    </h6><br>
                    <h6>Starship class: <p> {{ getInfoShips.result.properties.starship_class }}</p>
                    </h6><br>
                    <h6>MGLT: <p>{{ getInfoShips.result.properties.MGLT }}</p>
                    </h6>
                </div>
                <div class="column"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'InfoStarShip',
    computed: {
        ...mapGetters(['getImageShips', 'getInfoShips'])
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