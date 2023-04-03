<template>
   <section class="hero">
        <div class="hero-body">
            <div class="columns">
                <div class="column  is-half  my-5">
                  
                </div>
                <div class="column is-half adres">
                    <div>                      
                    </div>
                </div>
            </div>
            <div class="column copy">
                <img class="alinear" src="@/assets/icons/iconmonstr-copyright-2.svg"><span> Copyright </span>
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
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    color: white;
}
.adres {
    color:rgb(191, 147, 0);
    text-align: start;
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
