<template>
    <footer>
        <div class="cnt">
            <div class="back-to-top">
                <a href="#hero"><i class="fas fa-chevron-up"></i></a>
            </div>
            <div class="footer-content">
<!--                v-scroll-reveal.reset="{ origin: 'top', duration: 1000, distance: '25rem', delay: 600 }"-->
                <div class="footer-content-about animate-top">
                    <h1>About Rosa</h1>
                    <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt illum iste iure labore laborum mollitia nam obcaecati perferendis possimus, quis sunt tempore ullam. Animi architecto deleniti dicta laborum maiores officia quam, quibusdam totam? Ad adipisci aliquam cum, distinctio dolores ea earum magnam maiores nulla quidem quisquam quos reiciendis suscipit?</p>
                </div>
<!--                v-scroll-reveal.reset="{ origin: 'bottom', duration: 1000, distance: '25rem', delay: 600 }"-->
                <div class="footer-content-divider animate-bottom">
                    <div class="social-media">
                        <h4>Follow along</h4>
                        <div class="social-icons">
                            <a href=""><i class="fab fa-twitter"></i></a>
                            <a href=""><i class="fab fa-facebook-square"></i></a>
                            <a href=""><i class="fab fa-pinterest"></i></a>
                            <a href=""><i class="fab fa-vk"></i></a>
                            <a href=""><i class="fab fa-tripadvisor"></i></a>
                        </div>
                    </div>
                    <div class="newsletter-container">
                        <h4>Newsletter</h4>
                        <form action="" class="newsletter-form">
                            <input type="text" class="newsletter-input" placeholder="Your email address">
                            <button class="newsletter-bnt" type="submit">
                                <i class="fas fa-envelope"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="postcss" scoped>
    footer {
        padding: 80px 0;
        background: #121212;
        color: #fff;
        text-align: center;
        position: relative;
    }
    .back-to-top {
        width: 112px;
        height: 112px;
        background: #121212;
        position: absolute;
        top: -120px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        i {
            display: block;
            color: #fff;
            font-size: 32px;
            padding: 32px;
        }
    }
    .footer {
        &-content {
            @media(--min900) {
                max-width: 1240px;
                margin: auto;
            }
            h4 {
                font-size: 30px;
                text-transform: uppercase;
                font-weight: 100;
                letter-spacing: 3px;
                margin-bottom: 48px;
            }
            .asterisk {
                margin: 38px 0;
            }
            &-about {
                margin-bottom: 86px;
                @media(--min900) {
                    max-width: 821px;
                    margin: 0 auto 86px;
                }
                p {
                    line-height: 2;
                    @media (--mobile) {
                        line-height: 1.2;
                    }
                }
            }
            &-divider {
                @media(--min900) {
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
    .social-media, .newsletter-form {
        @media(--min900) {
            width: 100%;
            max-width: 438px;
            margin: 0 16px;
        }
    }
    .social-media {
        @media(--max1279) {
            margin-bottom: 25px;
        }
    }
    .social-icons {
        display: flex;
        justify-content: center;
        i {
            font-size: 32px;
            color: #fff;
            padding: 13px 32px;
            opacity: .5;
            transition: color .5s;
            @media(--min900) {
                opacity: 1;
            }
            @media(--mobile) {
                font-size: 22px;
                padding: 13px 22px;
            }
            &:hover, &:focus {
                color: var(--secondary-font-color);
            }
        }
    }
    .newsletter-form {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
    }
    .newsletter-input {
        width: 100%;
        max-width: 400px;
        padding: 1rem;
        border-radius: 6px;
    }
    .newsletter-bnt {
        background: transparent;
        border: none;
        color: var(--secondary-font-color);
        cursor: pointer;
        font-size: 25px;
        padding: 1px 9.6px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 168px;
        display: none;
        @media(--min900) {
            display: block;
            margin-left: 160px;
        }
    }
</style>