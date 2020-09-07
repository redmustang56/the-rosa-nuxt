<template>
    <div>
        <Navigation />
        <Hero />
        <Discover />
        <Tasteful />
        <DiscoverMenu />
        <PerfectBlend />
        <Culinary />
        <Footer />
    </div>
</template>

<script>
    import Navigation from "~/components/Navigation";
    import Hero from "~/components/main/hero";
    import Discover from "~/components/main/discover-our-story";
    import Tasteful from "~/components/main/tastefull-recipes";
    import DiscoverMenu from "~/components/main/discover-our-menu";
    import PerfectBlend from "~/components/main/perfect-blend";
    import Culinary from "~/components/main/culinary-delight";
    import Footer from "~/components/Footer";

    export default {
        data: () => ({

        }),
        components: {
            Navigation,
            Hero,
            Discover,
            Tasteful,
            DiscoverMenu,
            PerfectBlend,
            Culinary,
            Footer
        }
    }
</script>