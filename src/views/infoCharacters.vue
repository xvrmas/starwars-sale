<template>
    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="column is-half mt-3">
                    <img :src="require(`@/assets/characters/${getInfoCharacters.result.uid}.jpg`)"
                        alt="image film">
                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <p><strong>Name: </strong> {{ getInfoCharacters.result.properties.name }}</p>
                        <p><strong>Gender: </strong>{{ getInfoCharacters.result.properties.gender }}</p>
                        <p><strong>Birthday: </strong> {{ getInfoCharacters.result.properties.birth_year
                        }}</p>
                        <p><strong>Eye color: </strong>{{ getInfoCharacters.result.properties.eye_color
                        }}</p>
                        <p><strong>Skin color: </strong>{{ getInfoCharacters.result.properties.skin_color
                        }}</p>
                        <p><strong>Hair color: </strong>{{ getInfoCharacters.result.properties.hair_color
                        }}</p>
                        <p><strong>Height: </strong>{{ getInfoCharacters.result.properties.height
                        }} cm.</p>
                        <p><strong>Mass: </strong>{{ getInfoCharacters.result.properties.mass
                        }} Kgr.</p>

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
    name: 'infoCharacters',
    computed: {
        ...mapGetters(['getInfoCharacters'])
    },
}
</script>

<style>
.caixa {
    background-color: black;
}
</style>