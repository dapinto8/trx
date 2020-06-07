// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    createPage({
      path: '/programs',
      component: './src/pages/Programs/Programs.vue'
    }),
    createPage({
      path: '/contact',
      component: './src/pages/Contact/Contact.vue'
    }),
    createPage({
      path: '/sign-up',
      component: './src/pages/SignUp/SignUp.vue'
    }),
    createPage({
      path: '/sign-in',
      component: './src/pages/SignIn/SignIn.vue'
    })
    createPage({
      path: '/home',
      component: './src/pages/UserHome/UserHome.vue'
    })
    createPage({
      path: '/courses',
      component: './src/pages/Courses/Courses.vue'
    })
    createPage({
      path: '/profile',
      component: './src/pages/Profile/Profile.vue'
    })
    createPage({
      path: '/memberships',
      component: './src/pages/Memberships/Memberships.vue'
    })
  }),
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    const Plans = require('./src/data/plans.json')

    const collection = addCollection({
      typeName: 'Plans'
    })
    
    for (const plan of Plans) {
      collection.addNode(plan)
    }
  })

}