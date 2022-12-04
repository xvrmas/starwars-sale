<template>
   <section class="hero">
        <div class="hero-body">
            <div class="columns">
                <div class="column  is-half  my-5">
                    <a href="#">
                        <img class="m-3" src="@/assets/icons/iconmonstr-facebook-6.svg">
                        <img class="m-3" src="@/assets/icons/iconmonstr-instagram-13.svg">
                        <img class="m-3" src="@/assets/icons/iconmonstr-twitch-3.svg">
                        <img class="m-3" src="@/assets/icons/iconmonstr-twitter-3.svg">
                    </a>
                </div>
                <div class="column is-half adres">
                    <div class="text">
                        <p><strong>Star wars second hand space ships</strong></p>
                        <p><strong>Phone:</strong>+81570055777</p>
                        <p><strong>Address:</strong> Canyons, Sinkholes 67"~33=-</p>
                        <p><strong>City: </strong> Grassy Hills</p>
                        <p><strong>Planet:</strong> Tatooine</p>
                    </div>
                </div>
            </div>
            <div class="column copy">
                <img class="alinear" src="@/assets/icons/iconmonstr-copyright-2.svg"><span> Copyright @xvrmasgarcia </span>
            </div>
        </div>
    </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Footer',
}
</script>
<style scoped>
.hero {
    background-image: url(@/assets/darthvader.jpg);
    background-color: rgb(0, 0, 0);
    color: white;
}
.adres {
    color:rgb(191, 147, 0);
    text-align: start;
}
.text {
    margin-left: 250px;
    color:rgb(191, 147, 0)
}
strong{
  color:rgb(191, 147, 0)
}
.copy {
    padding: 0;
    color:rgb(191, 147, 0);
}
.alinear {
    vertical-align: middle;
    margin: 0px;
}
@media only screen and (max-width: 800px){
    .text{
    margin-left: 40px;

    }
}
</style>
