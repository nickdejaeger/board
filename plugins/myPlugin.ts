export default defineNuxtPlugin(nuxtApp => {
    console.log('Hello from myPlugin: ', nuxtApp)

    return {
        provide: {
            sayHelloPlug: (msg: string) => console.log(`Hello ${msg}`)
        },
    }
})