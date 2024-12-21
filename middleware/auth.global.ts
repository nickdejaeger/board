export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Hello fron global middleware.', to, from)

    /*
    const isLoggedIn = false

    if (isLoggedIn) {
        return navigateTo(to.fullPath)
    }

    return navigateTo('/404')
    */
})