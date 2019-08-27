const path = require('path');

/**
 * // TODO: 以下三个变量从settings .ts中获取这个变量
 * @type {number}
 */
const devServerPort = 9527;
const mockServerPort = 9528;
const name = '职场小威-专业的招聘平台';

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-typescript-admin-template/' : '/',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: devServerPort,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // change xxx-api/login => /mock-api/v1/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:${mockServerPort}/mock-api/v1`,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  pwa: {
    name: name,
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: path.resolve(__dirname, 'src/pwa/service-worker.js')
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss')
      ]
    }
  },
  chainWebpack(config) {
    // 在webpack的name字段中提供应用程序的标题
    // 可以在index.html中访问它来注入正确的标题。
    config.set('name', name);

    // https://webpack.js.org/configuration/devtool/#development
    config
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      );

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
              libs: {
                name: 'chunk-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: 'initial' //只依赖最初的第三方包
              },
              // elementUI: {
              //   name: 'chunk-elementUI', // split elementUI into a single package
              //   priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
              //   test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
              // },
              commons: {
                name: 'chunk-commons',
                test: path.resolve(__dirname, 'src/components'),
                minChunks: 3,
                priority: 5,
                reuseExistingChunk: true
              }
            }
          });
          config.optimization.runtimeChunk('single')
        }
      )
  }
};
