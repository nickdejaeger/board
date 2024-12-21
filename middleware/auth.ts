export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Hello fron middleware.', to, from)

    /*
    const isLoggedIn = false

    if (isLoggedIn) {
        return navigateTo(to.fullPath)
    }

    return navigateTo('/login')
    */
})