export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/core-components.js",'~/plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      pathRewrite: {
        '^/api' : '/api'
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "http://localhost:5000",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  auth: {
    redirect: {
      login: '/login', //middleware:authを設定したURLにアクセスがあった場合の、リダイレクト先。
      logout: '/login', //ログアウト後のリダイレクト先
      callback: false,
      home: '/memo' ///ログイン後のリダイレクト先。
     },
    strategies: {
      local: {
        endpoints: {
          //ログイン処理に関する設定
          login: { url: '/api/auth/sign_in', method: 'post',propertyName: 'access_token'}, 
          //ログアウト処理に関する設定
          logout: { url: '/api/auth/sign_out', method: 'delete' },
          //ログイン時にユーザー情報を保存するか。
          user: false 
         },
       }
     },
   },
}
