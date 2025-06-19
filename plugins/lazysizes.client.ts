export default defineNuxtPlugin(() => {
    if (process.client) {
        import('lazysizes');
    }
});