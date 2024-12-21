function sleep(delay: number) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

export default defineEventHandler(async () => {
    const products = await $fetch('https://jsonplaceholder.typicode.com/posts')

    await sleep(3000)

    return {
        data: products
    }
})