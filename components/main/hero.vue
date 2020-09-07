<template>
    <section class="hero"
             id="hero"
             :style="{ 'background-image': 'url(' + require('~/assets/img/hero.jpg') + ')' }">
        <div class="cnt">
            <h2 class="sub-headline">
                <span class="first-letter">W</span>elcome
                <h1 class="headline">the Rosa</h1>
            </h2>
            <div class="headline__description">
                <div class="separator">
                    <div class="line line__left"></div>
                    <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                    <div class="line line-right"></div>
                </div>
                <div class="single-animation">
                    <h5>Ready to be opened</h5>
                    <a href="" class="btn btn--cta">Explore</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "hero"
    }
</script>

<style lang="postcss" scoped>
    .hero {
        width: 100%;
        height: 100vh;
        background-size: cover;
        display: flex;
        align-items: center;
        text-align: center;
    }
    .headline__description h5 {
        color: #fff;
        font-size: 22px;
        font-weight: 100;
        text-transform: uppercase;
        margin-bottom: 19px;
        letter-spacing: 3px;
        margin-right: -3px;
    }
</style>