<template>
    <section class="discover-our-story">
        <div class="cnt">
            <div class="restaurant-info">
                <div class="restaurant-description padding-right" v-scroll-reveal.reset="{ origin: 'left', duration: 1000, distance: '25rem', delay: 300 }">
                    <div class="global-headline">
                        <h2 class="sub-headline">
                            <span class="first-letter">D</span>iscover
                            <h1 class="headline headline--dark">Our Story</h1>
                            <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                        </h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto at commodi consectetur culpa fugit optio, quasi sequi. Aliquam aliquid asperiores blanditiis commodi consectetur culpa deleniti dignissimos ea eaque earum, eius et eum illo impedit in inventore ipsa ipsum natus nihil placeat quae, quas saepe temporibus tenetur veniam, voluptate voluptatibus. At debitis dolores eaque, eius excepturi ipsa omnis possimus quod!
                    </p>
                    <a href="" class="btn btn--body">About us</a>
                </div>
                <div class="restaurant-info-img" v-scroll-reveal.reset="{ origin: 'right', duration: 1000, distance: '25rem', delay: 600 }">
                    <img src="~/assets/img/our-story-1.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "discover-our-story"
    }
</script>

<style lang="postcss" scoped>
    .discover-our-story .global-headline {
        margin-top: 110px;
        @media(--max1279) {
            margin-top: 0;
        }
    }
</style>