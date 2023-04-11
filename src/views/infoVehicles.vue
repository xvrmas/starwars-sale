<template>
    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="column is-half mt-3">
                    <img :src="getImageVehicles"
                        alt="image film">
                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <p><strong>Name: </strong> {{ getInfoVehicles.name }}</p>
                        <p><strong>Model: </strong> {{ getInfoVehicles.model }}</p>
                        <p><strong>Vehicle class: </strong> {{ getInfoVehicles.vehicle_class }}</p>
                        <p><strong>Manufacturer: </strong> {{ getInfoVehicles.manufacturer }}</p>
                        <p><strong>Cost in credits: </strong> {{ getInfoVehicles.cost_in_credits }}
                        </p>
                        <p><strong>Lenght: </strong> {{ getInfoVehicles.length }}</p>
                        <p><strong>Crew: </strong> {{ getInfoVehicles.crew }}</p>
                        <p><strong>Passengers: </strong> {{ getInfoVehicles.passengers }}</p>
                        <p><strong>Max atmosphering speed: </strong> {{ getInfoVehicles.max_atmosphering_speed }}</p>
                        <p><strong>Cargo capacity: </strong> {{ getInfoVehicles.cargo_capacity }}</p>
                        <p><strong>Consumables: </strong> {{ getInfoVehicles.consumables }}</p>
                    </div>
                    <button @click="retroceder" class="button is-dark">Go back</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'infoVehicles',
    computed: {
        ...mapGetters(['getInfoVehicles','getImageVehicles'])
    },
    mounted() {
        document.getElementById("op6").style.borderBottom = 'solid rgb(191, 147, 0) 3px';
    },
    destroyed() {
        document.getElementById("op6").style.borderBottom = 'none';
    },
    methods: {
        retroceder() {
            window.history.back();
        }
    }
}
</script>

<style>
.box{
    background-color: rgb(45, 45, 45);
}
.caixa {
    background-color: black;
}
strong {
    color: rgb(174, 171, 171);
}

p {
    color: rgb(133, 131, 131);
}

</style>