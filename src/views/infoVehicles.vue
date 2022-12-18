<template>
    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="column is-half mt-3">
                    <img :src="(`https://starwars-visualguide.com/assets/img/vehicles/${getInfoVehicles.result.uid}.jpg`)"
                        alt="image film">
                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <p><strong>Name: </strong> {{ getInfoVehicles.result.properties.name }}</p>
                        <p><strong>Model: </strong> {{ getInfoVehicles.result.properties.model }}</p>
                        <p><strong>Vehicle class: </strong> {{ getInfoVehicles.result.properties.vehicle_class }}</p>
                        <p><strong>Manufacturer: </strong> {{ getInfoVehicles.result.properties.manufacturer }}</p>
                        <p><strong>Cost in credits: </strong> {{ getInfoVehicles.result.properties.cost_in_credits }}
                        </p>
                        <p><strong>Lenght: </strong> {{ getInfoVehicles.result.properties.length }}</p>
                        <p><strong>Crew: </strong> {{ getInfoVehicles.result.properties.crew }}</p>
                        <p><strong>Passengers: </strong> {{ getInfoVehicles.result.properties.passengers }}</p>
                        <p><strong>Max atmosphering speed: </strong> {{ getInfoVehicles.result.properties.max_atmosphering_speed }}</p>
                        <p><strong>Cargo capacity: </strong> {{ getInfoVehicles.result.properties.cargo_capacity }}</p>
                        <p><strong>Consumables: </strong> {{ getInfoVehicles.result.properties.consumables }}</p>
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
import { mapGetters } from 'vuex'
export default {
    name: 'inoVehicles',
    computed: {
        ...mapGetters(['getInfoVehicles'])
    }
}
</script>

<style>
.caixa {
    background-color: black;
}
</style>