const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: 'universal',
    ...(!isDev && {
        modern: 'client'
    }),
    head: {
        title: 'Project',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
            { hid: 'description', name: 'description', content: 'description' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' },
        ],
        script:  []
    },

    loading: { color: '#ddd' },

    css: [
        'normalize.css',
        '~/assets/styles/css/global-styles/styles.css',
        '~/assets/styles/css/global-styles/btn.css',
    ],

    plugins: [
        { src: '~plugins/vue-scroll-reveal', ssr: false },
    ],

    modules: [
        '@nuxtjs/axios',
        'nuxt-webfontloader',
        '@nuxtjs/svg-sprite',
    ],
    webfontloader: {
        events: false,
        google: {
            families: ['Cabin|HerrVon+Muellerhoff|Source+Sans+Pro:400,900:&display=swap'],
        },
        timeout: 5000,
    },
    svgSprite: {
        input: '~/assets/svg/'
    },
    build: {
        optimizeCss: false,
        postcss: {
            plugins: {
                // подключение глобальных переменных для медиа запросов
                "postcss-preset-env": {
                    stage: 0,
                    importFrom: "./assets/styles/css/global-variables/media.css",
                },
                'postcss-url': false,
                'postcss-import': {},
                'postcss-custom-media': {},
                'postcss-flexbugs-fixes': {},
                'postcss-nested': {},
                'postcss-responsive-type': {},
                'postcss-hexrgba': {},
                cssnano: {
                    preset: ['advanced', {
                        cssDeclarationSorter: false,
                        zindex: false,
                        discardComments: {
                            removeAll: true
                        },
                        browsers: 'cover 99.5%',
                        autoprefixer: true,
                    }]
                }
            },
            preset: {
                autoprefixer: {
                    grid: true
                }
            }
        },
        //Отключаем для Development всю минификацию html, чтобы ускорить процесс разработки.
        ...(!isDev && {
            html: {
                minify: {
                    collapseBooleanAttributes: true,
                    decodeEntities: true,
                    minifyCSS: true,
                    minifyJS: true,
                    processConditionalComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    trimCustomFragments: true,
                    useShortDoctype: true
                }
            }
        }),
        extend (config, ctx) {
            const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|svg|webp)$/i'

            // Remove any original svg rules

            const vueSvgLoader = [
                {
                    loader: 'vue-svg-loader',
                    options: {
                        svgo: false
                    }
                }
            ]
            const imageMinPlugin = new ImageminPlugin({
                pngquant: {
                    quality: '5-30',
                    speed: 7,
                    strip: true
                },
                jpegtran: {
                    progressive: true

                },
                gifsicle: {
                    interlaced: true
                },
                plugins: [
                    imageminMozjpeg({
                        quality: 70,
                        // arithmetic: true,
                        progressive: true
                    })

                ]
            })
            if (!ctx.isDev) config.plugins.push(imageMinPlugin)

            config.module.rules.forEach(rule => {
                if (rule.test.toString() === ORIGINAL_TEST) {
                    rule.test = /\.(png|jpe?g|gif|webp)$/i
                    rule.use = [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 1000,
                                name: ctx.isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'
                            }
                        }
                    ]
                }
            })
            //  Create the custom SVG rule
            const svgRule = {
                test: /\.svg$/,
                oneOf: [
                    {
                        resourceQuery: /inline/,
                        use: vueSvgLoader
                    },
                    {
                        resourceQuery: /data/,
                        loader: 'url-loader'
                    },
                    {
                        resourceQuery: /raw/,
                        loader: 'raw-loader'
                    },
                    {
                        loader: 'file-loader' // By default, always use file-loader
                    }
                ]
            }

            config.module.rules.push(svgRule) // Actually add the rule
        }
    },
};

