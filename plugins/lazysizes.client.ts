export default defineNuxtPlugin(() => {
    if (process) {
        import('lazysizes')
    }
})