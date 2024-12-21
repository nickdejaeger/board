function sleep(delay: number) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

export default defineEventHandler(async () => {
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos')

    await sleep(3000)

    return {
        data: todos
    }
})