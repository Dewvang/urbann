<template>
    <div :class="['page-bg', routeClass]">
        <nav class="navbar" :class="{ scrolled: isScrolled }">
            <div class="container">
                <div class="nav-wrap">
                    <a href="/" class="logo">UD<span>cp</span></a>

                    <ul class="nav-links" :class="{ open: isOpen }">
                        <li>
                            <NuxtLink class="nav-item" to="/">หน้าแรก</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="nav-item" to="/portfolio">ผลงานของเรา</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="nav-item" to="/blog">เกล็ดความรู้</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="nav-item" to="/contact">ติดต่อเรา</NuxtLink>
                        </li>
                    </ul>

                    <button class="burger" :class="{ open: isOpen }" @click="toggleMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>

        <div class="hero">
            <div class="container">
                <div class="hero-text ">
                    <h1 class="slide-up-on-scroll">{{ heroText.title }}</h1>
                    <h2 class="slide-down-on-scroll">{{ heroText.subtitle }}</h2>
                    <p class="slide-down-on-scroll">{{ heroText.description }}</p>
                </div>
            </div>
        </div>
    </div>

    <button v-show="showBackToTop" class="back-to-top" @click="scrollToTop">
        ▲
    </button>
</template>

<script setup>

const route = useRoute();
const isOpen = ref(false);
const isScrolled = ref(false);
const showBackToTop = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
    showBackToTop.value = window.scrollY > 300;
};


const routeClass = computed(() => {
    if (route.name === 'index') return 'index';
    if (route.name === 'blog' || route.path.startsWith('/blog')) return 'blog';
    if (route.name === 'portfolio' || route.path.startsWith('/portfolio')) return 'portfolio';
    if (route.name === 'contact') return 'contact';
    return '';
});

const heroText = computed(() => {
    const name = route.name;
    const path = route.path;

    if (path === '/') {
        return {
            title: "Urbann De Concept",
            subtitle: "เราคือพันธมิตรที่คุณไว้ใจได้",
            description: "ในการสร้างสรรค์พื้นที่ที่สะท้อนตัวตนคุณ ด้วยมาตรฐานคุณภาพสูง และความใส่ใจในทุกรายละเอียด",
        };
    } else if (path.startsWith("/blog")) {
        return {
            title: "บทความ/เกล็ดความรู้",
            subtitle: "",
            description: "",
        };
    } else if (path.startsWith("/portfolio")) {
        return {
            title: "ผลงานของเรา",
            subtitle: "",
            description: "",
        };
    } else if (name === "contact") {
        return {
            title: "ติดต่อเรา",
            subtitle: "",
            description: "",
        };
    } else {
        return {
            title: "",
            subtitle: "",
            description: "",
        };
    }
});


function toggleMenu() {
    isOpen.value = !isOpen.value;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});


onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

function scrollToTop() {
    console.log('scrollToTop called');
    window.scrollTo({ top: 0, behavior: "smooth" });
}

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
$color1: #ff6500;
$color2: #1e1e1e;

.page-bg {
    background-size: cover;
    background-position: center;
    height: 100vh;

    &.index {
        background-image: url("/assets/headerPic/Home.webp");
    }

    &.portfolio {
        background-image: url("/assets/headerPic/Portfolio.webp");
        height: 500px;
        background-size: cover;
    }

    &.blog {
        background-image: url("/assets/headerPic/Blog.webp");
        height: 500px;
        background-size: cover;
    }

    &.contact {
        background-image: url("/assets/headerPic/Contact.webp");
        height: 500px;
        background-size: cover;
    }

    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
        background-color: transparent; // เริ่มโปร่งใส

        &.scrolled {
            background-color: $color2; // เปลี่ยนเป็นสีดำตอนเลื่อน
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .container {
            .nav-wrap {
                display: flex;
                justify-content: space-between;
                align-items: center;
                

                .logo {
                    font-weight: bold;
                    font-size: 28px;
                    color: white;
                    text-decoration: none;

                    span {
                        color: $color1;
                    }
                }

                .nav-links {
                    display: flex;
                    transition: all 0.3s ease-in-out;
                    margin-top: 24px;

                    li {
                        margin-left: 30px;
                        list-style: none;

                        .nav-item {
                            text-align: center;
                            text-decoration: none;
                            color: white;
                            padding: 0 12px;
                            border-radius: 10px;
                            transition: all 0.3s ease-in-out;

                            &:hover {
                                background-color: $color1;
                            }
                        }
                    }
                }

                .burger {
                    position: fixed;
                    top: 24px;
                    right: 10%;
                    display: none;
                    flex-direction: column;
                    gap: 5px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    z-index: 999;

                    span {
                        width: 25px;
                        height: 3px;
                        background-color: white;
                        display: block;
                        border-radius: 2px;
                        transition: all 0.3s ease;
                    }

                    &.open {
                        span:nth-child(1) {
                            transform: rotate(45deg);
                            position: relative;
                            top: 5px;
                        }

                        span:nth-child(2) {
                            opacity: 0;
                        }

                        span:nth-child(3) {
                            transform: rotate(-45deg);
                            position: relative;
                            top: -11px;
                        }
                    }
                }

                @media (max-width: 768px) {
                    .logo {
                        margin-top: 16px;
                    }

                    .nav-links {
                        position: fixed;
                        top: 0;
                        right: 0;
                        height: 100vh;
                        width: 200px;
                        background-color: $color2;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: flex-start;
                        padding: 80px 24px 24px;
                        box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
                        transform: translateX(100%);
                        pointer-events: none;
                        z-index: 998;
                        margin-top: 0px;

                        &.open {
                            margin-top: 0px;
                            transform: translateX(0);
                            pointer-events: auto;
                        }

                        li {
                            margin: 16px 0;

                            a {
                                font-size: 18px;
                                color: white;
                                width: 100%;
                                display: block;
                            }
                        }
                    }

                    .burger {
                        display: flex;
                    }
                }
            }
        }
    }

    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

        .hero-text {
            text-align: center;
            color: white;

            h1 {
                display: inline-block;
                font-size: 48px;
                border-bottom: 8px solid $color1;
            }

            h2 {
                font-weight: 100;
                font-size: 28px;
            }

            p {
                margin-top: 48px;
                font-size: 20px;
            }
        }
    }
}

.back-to-top {
    position: fixed;
    bottom: 32px;
    right: 32px;
    background-color: $color1;
    color: white;
    border: none;
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 100%;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 1000;
    border: 1px solid white;

    &:hover {
        background-color: $color2;
        transform: translateY(-4px);
    }
}
</style>
