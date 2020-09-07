<template>
    <section class="tasteful-recipes between" :style="{ 'background-image': 'url(' + require('~/assets/img/tasteful-recipes.jpg') + ')' }">
        <div class="cnt">
            <div class="global-headline">
                <div class="animate-top" v-scroll-reveal.reset="{ origin: 'top', duration: 1000, distance: '25rem', delay: 600 }">
                    <h2 class="sub-headline">
                        <span class="first-letter">T</span>asteful
                    </h2>
                </div>
                <div class="animate-bottom" v-scroll-reveal.reset="{ origin: 'bottom', duration: 1000, distance: '25rem', delay: 600 }">
                    <h1 class="headline">Recipes</h1>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "tastefull-recipes"
    }
</script>

<style lang="postcss" scoped>
    .tasteful-recipes {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .between {
        min-height: 65vh;
        display: flex;
        align-items: center;
    }
</style>