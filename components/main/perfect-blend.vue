<template>
    <section class="perfect-blend between" :style="{ 'background-image': 'url(' + require('~/assets/img/perfect-blend.jpg') + ')' }">
        <div class="cnt">
            <div class="global-headline">
                <div class="animate-top" v-scroll-reveal.reset="{ origin: 'top', duration: 1000, distance: '25rem', delay: 600 }">
                    <h2 class="sub-headline">
                        <span class="first-letter">T</span>he Perfect
                    </h2>
                </div>
                <div class="animate-bottom" v-scroll-reveal.reset="{ origin: 'bottom', duration: 1000, distance: '25rem', delay: 600 }">
                    <h1 class="headline">Blend</h1>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "perfect-blend"
    }
</script>

<style lang="postcss" scoped>
    .between {
        min-height: 65vh;
        display: flex;
        align-items: center;
    }
    .perfect-blend {
        background-position: center;
        background-size: cover;
    }
    .sub-headline {
        @media(max-width: 510px) {
            line-height: .9;
        }
    }
</style>