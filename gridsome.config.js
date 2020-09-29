// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

module.exports = {
  port: 8200,
  siteName: 'TRX Functional Training',
  siteUrl: 'https://www.jesuslezamatrx.com',
  description: 'Jesús Lezama TRX Functional Training',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://3.132.165.252:1337',
        queryLimit: 1000,
        contentTypes: ['descuentos', 'plans', 'testimonios', 'youtube'],
        singleTypes: [],
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ],
  css: {
    loaderOptions: {
      /*css: {
        modules: true,
        localIdentName: 'style--[hash:base64:5]'
      },*/
      scss: {
        prependData: `
          @import "~/assets/styles/_variables.scss";
        `
      }
    }
  }
}
