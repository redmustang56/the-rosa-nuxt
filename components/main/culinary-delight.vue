<template>
    <section class="culinary-delight">
        <div class="cnt">
            <div class="restaurant-info">
                <div class="restaurant-description padding-right" v-scroll-reveal.reset="{ origin: 'left', duration: 1000, distance: '25rem', delay: 300 }">
                    <div class="global-headline">
                        <h2 class="sub-headline">
                            <span class="first-letter">C</span>ulinary
                            <h1 class="headline headline--dark">Delight</h1>
                            <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                        </h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto at commodi consectetur culpa fugit optio, quasi sequi. Aliquam aliquid asperiores blanditiis commodi consectetur culpa deleniti dignissimos ea eaque earum, eius et eum illo impedit in inventore ipsa ipsum natus nihil placeat quae, quas saepe temporibus tenetur veniam, voluptate voluptatibus. At debitis dolores eaque, eius excepturi ipsa omnis possimus quod!
                    </p>
                    <a href="" class="btn btn--body">Make a reservation</a>
                </div>
                <div class="image-group">
                    <img class="animate-top" src="~/assets/img/delight-group-1.jpg" alt="" v-scroll-reveal.reset="{ origin: 'top', duration: 1000, distance: '25rem', delay: 600 }">
                    <img class="animate-bottom" src="~/assets/img/delight-group-2.jpg" alt=""  v-scroll-reveal.reset="{ origin: 'bottom', duration: 1000, distance: '25rem', delay: 600 }">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "culiry-delight"
    }
</script>

<style scoped>
    .image-group {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;
    }
    .discover-our-story .global-headline {
        margin-top: 110px;
    }
</style>