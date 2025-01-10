export default defineNuxtRouteMiddleware((to, from) => {
    console.log('middleware/auth.global.ts: ', to, from)
    console.log('middleware/auth.ts: paths: ', to.path, from.path)

    /*
    const isLoggedIn = false

    if (isLoggedIn) {
        return navigateTo(to.fullPath)
    }

    return navigateTo('/404')
    */
})