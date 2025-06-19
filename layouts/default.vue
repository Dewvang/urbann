<template>
    <div>
        <Navbar :key="route.fullPath" />
        <NuxtPage />
        <Footer />
    </div>
</template>

<script setup>
import { watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

let observer = null
const route = useRoute()

function setupObserver() {
    if (observer) observer.disconnect()

    document.querySelectorAll('.animate-slide').forEach(el => {
        el.classList.remove('animate-slide')
    })

    const options = { threshold: 0.2 }
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide')
            }
        })
    }, options)

    const targets = document.querySelectorAll('.slide-up-on-scroll, .slide-down-on-scroll, .slide-left-on-scroll, .slide-right-on-scroll')
    targets.forEach(el => observer.observe(el))
}

onMounted(() => {
    setupObserver()
})

watch(() => route.fullPath, async () => {
    await nextTick()
    setupObserver()
})

onBeforeUnmount(() => {
    if (observer) observer.disconnect()
})
</script>


<style>

.slide-up-on-scroll,
.slide-down-on-scroll,
.slide-left-on-scroll,
.slide-right-on-scroll {
    opacity: 0;
    transition: all 0.8s ease;
    will-change: transform, opacity;
}

.slide-up-on-scroll {
    transform: translateY(50px);
}

.slide-down-on-scroll {
    transform: translateY(-50px);
}

.slide-left-on-scroll {
    transform: translateX(50px);
}

.slide-right-on-scroll {
    transform: translateX(-50px);
}

.animate-slide {
    opacity: 1;
    transform: translate(0, 0);
}


</style>
