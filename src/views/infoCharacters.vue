<template>
    <div class="caixa">
        <div class="container p-5">
            <div class="columns">
                <div class="column is-half mt-3">
                    <img :src="require(`@/assets/characters/${getInfoCharacters.url.split(/\D/g).join('')}.jpg`)"
                        alt="image film">
                </div>
                <div class="column has-text-left is-half mt-3">
                    <div class="box">
                        <p><strong>Name: </strong> {{ getInfoCharacters.name }}</p>
                        <p><strong>Gender: </strong>{{ getInfoCharacters.gender }}</p>
                        <p><strong>Birthday: </strong> {{ getInfoCharacters.birth_year
                        }}</p>
                        <p><strong>Eye color: </strong>{{ getInfoCharacters.eye_color
                        }}</p>
                        <p><strong>Skin color: </strong>{{ getInfoCharacters.skin_color
                        }}</p>
                        <p><strong>Hair color: </strong>{{ getInfoCharacters.hair_color
                        }}</p>
                        <p><strong>Height: </strong>{{ getInfoCharacters.height
                        }} cm.</p>
                        <p><strong>Mass: </strong>{{ getInfoCharacters.mass
                        }} Kgr.</p>

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
strong{
    color:rgb(174, 171, 171);
}
p{
    color:rgb(133, 131, 131);
}
</style>