export default defineNuxtRouteMiddleware((to, from) => {
    console.log('middleware/auth.ts: ', to, from)
    

    /*
    const isLoggedIn = false

    if (isLoggedIn) {
        return navigateTo(to.fullPath)
    }

    return navigateTo('/login')
    */
})