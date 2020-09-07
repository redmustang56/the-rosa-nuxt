<template>
    <div class="cnt">
        <header>
            <nav class="n">
                <div class="m-tg" @click="openMenu">
                    <i class="fas fa-bars"></i>
                    <i class="fas fa-times"></i>
                </div>
                <n-link to="/"><img src="~/assets/img/logo-rosa.png" alt=""></n-link>
                <div class="n__l">
                    <n-link to="" class="active">Home</n-link>
                    <n-link to="">Menu</n-link>
                    <n-link to="">Reservations</n-link>
                    <n-link to="">News</n-link>
                    <n-link to="">Shop</n-link>
                    <n-link to="">Contact</n-link>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
    name: "Navigation",
        data: () => ({

        }),
        methods: {
            openMenu() {
                let body = document.querySelector('body')
                body.classList.toggle('open')
            }
        }
    }
</script>

<style lang="postcss" scoped>
    header {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-image: linear-gradient(to bottom, rgba(0,0,0,.5), transparent);
    }
    .n {
        height: 115px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media(--min900) {
            justify-content: space-between;
        }

        &__l {
            position: fixed;
            top: 0;
            left: 0;
            width: 80%;
            height: 100vh;
            background: var(--main-font-color-dark);
            padding: 70px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            z-index: 1250;
            transform: translateX(-100%);
            transition: transform .5s;
            @media(--min900) {
                position: initial;
                widows: initial;
                height: initial;
                background: transparent;
                padding: 0;
                flex-direction: row;
                transform: initial;
                transition: initial;
            }
        }
        &:before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,.8);
            z-index: 1000;
            opacity: 0;
            transform: scale(0);
            transition: opacity .5s;
        }
        a {
            display: block;
            color: #fff;
            text-transform: uppercase;
            font-size: 25px;
            letter-spacing: 2px;
            margin-right: -2px;
            transition: color .5s;
            &:hover {
                color: var(--secondary-font-color);
            }
            @media(--max1279) {
                margin: 0 20px;
                font-size: 20px;
            }
            @media(--min900) {
                font-size: 16px;
                &:last-child {
                    margin-right: 0;
                }
                &.active {
                    position: relative;
                    &:before {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 2px;
                        border-color: #fff;
                        left: 0;
                        bottom: -3px;
                    }
                }
            }
        }
    }
    .m-tg {
        color: #fff;
        font-size: 35px;
        position: absolute;
        top: 35%;
        transform: translate(-50%);
        right: 20px;
        cursor: pointer;
        z-index: 1500;
        @media(--min900) {
            display: none;
        }
    }
    .fa-times {
        display: none;
    }
    .open {
        .fa-times {
            display: block;
        }
        .fa-bars {
            display: none;
        }
        .n:before {
            opacity: 1;
            transform: scale(1);
        }
        .n__l {
            transform: translateX(0);
        }
    }
</style>