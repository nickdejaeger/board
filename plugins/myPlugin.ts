export default defineNuxtPlugin(nuxtApp => {
    console.log('plugins/myPlugin.ts: ', nuxtApp)

    return {
        provide: {
            sayHelloPlug: (msg: string) => console.log(`plugins/myPlugin.ts: Hello ${msg}`)
        },
    }
})