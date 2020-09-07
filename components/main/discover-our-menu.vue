<template>
    <section class="discover-our-menu">
        <div class="cnt">
            <div class="restaurant-info">
                <div class="image-group padding-right"
                     v-scroll-reveal.reset="{ origin: 'left', duration: 1000, distance: '25rem', delay: 300 }">
                    <img src="~/assets/img/menu-group-1.jpg" alt="">
                    <img src="~/assets/img/menu-group-2.jpg" alt="">
                    <img src="~/assets/img/menu-group-3.jpg" alt="">
                    <img src="~/assets/img/menu-group-4.jpg" alt="">
                </div>
                <div class="restaurant-description"
                     v-scroll-reveal.reset="{ origin: 'right', duration: 1000, distance: '25rem', delay: 600 }">
                    <div class="global-headline">
                        <h2 class="sub-headline">
                            <span class="first-letter">D</span>iscover
                            <h1 class="headline headline--dark">Menu</h1>
                            <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                        </h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid assumenda autem blanditiis corporis deserunt esse labore,
                        nihil, nisi quaerat, similique soluta suscipit veritatis. Aperiam aspernatur deleniti dicta eaque eius eum explicabo fuga hic
                        laboriosam laudantium nam necessitatibus, neque, nobis pariatur perferendis quisquam rem repellendus reprehenderit suscipit unde voluptas voluptatem.
                    </p>
                    <a href="" class="btn btn--body">View the full menu</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "discover-our-menu"
    }
</script>

<style lang="postcss" scoped>
    .image-group {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;
    }
    .discover-our-menu .restaurant-description {
        padding-top: 48px;
        margin-bottom: 0;
    }
</style>