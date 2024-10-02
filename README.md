## Routing

- Install vue-router
- Create new folder named **routers**
- Create new file named **index.js** under **routers**
- In this file we create router with **createRouter()** imported from 'vue-router'
- Set the configuration of the createRouter()
  - **history** : Take **createWebHistory** / **createHashWebHistory** (**createWebHistory** is recommanded) [link](https://router.vuejs.org/guide/essentials/history-mode.html#different-history-modes)
  - **routes**: array of routes, each route contain specif path, name, and a component (the component can be eather load when starting or lazy loaded) [Example](https://router.vuejs.org/guide/advanced/lazy-loading.html#lazy-loading-routes)
  - Optional **linkActiveClass**: this will take a string and we can set a style to in the composnent of navigation (See TheNavigatino file)
- Add RouterView in App.vue
- Add a middleware in main.js (**app.use(router)**) router is imported from routes/index.js
- Add new Component that handle all navigation (in this example TheNavigation under component)
- In this case we use RouterLink tag (it's a tag under the hood) to not refreshing the page (SPA)
- Dynamic Routes is a route that can have params and query
- To access params / query from route we call useRoute() hook
- When setting name to the router this will help us to manipulate the route when calling RouterLink [link](https://router.vuejs.org/guide/essentials/named-routes.html#named-routes)
