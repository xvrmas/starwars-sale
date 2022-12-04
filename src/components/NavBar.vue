<template>
    <div>
        <div class="caixa ">
            <a @click="home">
                <img src="@/assets/star-wars-4.svg" style="width:250px;margin:20px" alt="">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',

    methods: {
        home() {
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>
.caixa {
    background-color: black;
}
</style>