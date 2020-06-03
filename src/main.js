// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import MainLayout from '~/layouts/MainLayout.vue'
import SocialLayout from '~/layouts/SocialLayout.vue'
import PhotosLayout from '~/layouts/PhotosLayout.vue'

import '~/assets/styles/styles.scss'
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('MainLayout', MainLayout)
  Vue.component('SocialLayout', SocialLayout)
  Vue.component('PhotosLayout', PhotosLayout)

  // Font
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
  })

  // Social media cards
  head.meta.push({ 
    property: 'og:title', 
    content: 'Jesús Lezama TRX Functional Training' 
  })
  head.meta.push({ 
    property: 'og:description', 
    content: 'Jesús Lezama, entrenador certificado en el IFBB (International Federationof Bodybuilding and Fitness) con 24 años de experiencia en el rubro. Capacitado en TRX Suspension Training, PilatesSuspension Method en Chile y Nueva York (USA).' 
  })
  head.meta.push({ 
    property: 'og:image', 
    content: 'https://gracious-mclean-7cb8eb.netlify.app/assets/static/logo-desktop.3fc491b.327ebad14e8559f52ddf8dcbd0bd14a5.png' 
  })
  head.meta.push({ 
    property: 'og:url', 
    content: 'https://gracious-mclean-7cb8eb.netlify.app/' 
  })

  // Twitter
  head.meta.push({ 
    property: 'twitter:title', 
    content: 'Jesús Lezama TRX Functional Training' 
  })
  head.meta.push({ 
    property: 'twitter:description', 
    content: 'Jesús Lezama, entrenador certificado en el IFBB (International Federationof Bodybuilding and Fitness) con 24 años de experiencia en el rubro. Capacitado en TRX Suspension Training, PilatesSuspension Method en Chile y Nueva York (USA).' 
  })
  head.meta.push({ 
    property: 'twitter:image', 
    content: 'https://gracious-mclean-7cb8eb.netlify.app/assets/static/logo-desktop.3fc491b.327ebad14e8559f52ddf8dcbd0bd14a5.png' 
  })
  head.meta.push({ 
    property: 'twitter:card', 
    content: 'summary_large_image' 
  })

}
