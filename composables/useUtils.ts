export const useUtils = () => {

    const sayHello = () => console.log('Hello from useUtils')

    const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))

    return { 
        sayHello,
        sleep
    }
}

