export const useComposables = () => {

    const sayHelloComposables = (name: string) => console.log(`composables/useUtils.ts: ${name}`)

    const sleepComp = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))

    return { 
        sayHelloComposables,
        sleepComp
    }
}

