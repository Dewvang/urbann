<template>
    <div class="portfolio-detail" v-if="portfolio">
        <div class="container">
            <div class="portfolio-head">
                <div class="port-head-item slide-up-on-scroll">
                    <h3>{{ portfolio.title }}</h3>
                </div>
                <div class="port-head-item slide-down-on-scroll">
                    <h4>{{ portfolio.description }}</h4>
                </div>
            </div>

            <div class="portfolio-gallery">
                <div class="image-grid">
                    <div class="img-container" v-for="(img, index) in portfolio.images" :key="index">
                        <img class="slide-right-on-scroll" :src="img" alt="portfolio image" @click="openImage(img)" />
                    </div>
                </div>
            </div>

            <div class="related">
                <div class="related-head ">
                    <h3 class="slide-up-on-scroll">ผลงานที่เกี่ยวข้อง</h3>
                </div>

                <div class="portfolio-gallery">
                    <div class="image-grid">
                        <div class="related-item slide-right-on-scroll" v-for="portfolio in randomPortfolios"
                            :key="portfolio.id">
                            <NuxtLink :to="`/portfolio/${portfolio.id}`">
                                <div class="img-container">
                                    <img :src="portfolio.cover" :alt="portfolio.title" />
                                </div>
                                <p>{{ portfolio.title }}</p>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="activeImage" class="lightbox" @click.self="closeImage">
            <span class="close-btn" @click="closeImage">&times;</span>
            <img :src="activeImage" alt="full image" />
        </div>
    </div>

</template>

<script setup>

const activeImage = ref(null)
const route = useRoute()
const id = Number(route.params.id)

const portfolios = ref([
    {
        id: 0,
        title: "รีโนเวทบ้านสองชั้น",
        description: "ปรับปรุงทั้งภายในและภายนอก",
        cover: "/assets/portfolio/1.png",
        images: [
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
        ]
    },
    {
        id: 1,
        title: "แต่งคอนโดลอฟท์",
        description: "สไตล์ลอฟท์ปูนเปลือยสุดเท่",
        cover: "/assets/portfolio/2.png",
        images: [
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
        ]
    },
    {
        id: 2,
        title: "รีโนเวทบ้านสองชั้น",
        description: "สไตล์ลอฟท์ปูนเปลือยสุดเท่",
        cover: "/assets/portfolio/3.png",
        images: [
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
        ]
    },
    {
        id: 3,
        title: "แต่งคอนโดลอฟท์",
        description: "ปรับปรุงทั้งภายในและภายนอก",
        cover: "/assets/portfolio/1.png",
        images: [
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
        ]
    },
    {
        id: 4,
        title: "ปรับปรุงร้านกาแฟ",
        description: "ตกแต่งใหม่ในสไตล์โมเดิร์นลอฟท์",
        cover: "/assets/portfolio/2.png",
        images: [
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
        ]
    },
    {
        id: 5,
        title: "ต่อเติมบ้านด้านหลัง",
        description: "เพิ่มพื้นที่ครัวและซักล้าง",
        cover: "/assets/portfolio/3.png",
        images: [
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
        ]
    },
    {
        id: 6,
        title: "แต่งห้องทำงาน",
        description: "ปรับโทนให้ดูโปรและอบอุ่น",
        cover: "/assets/portfolio/1.png",
        images: [
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
        ]
    },
    {
        id: 7,
        title: "รีโนเวทภายในทั้งหลัง",
        description: "เปลี่ยนบรรยากาศบ้านเก่าเป็นใหม่",
        cover: "/assets/portfolio/2.png",
        images: [
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
            "/assets/portfolio/1.png",
            "/assets/portfolio/2.png",
            "/assets/portfolio/3.png",
        ]
    }
])

const openImage = (img) => {
    activeImage.value = img
}

const closeImage = () => {
    activeImage.value = null
}

const randomPortfolios = computed(() => {
    const shuffled = [...portfolios.value].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 4)
})

const portfolio = computed(() =>
    portfolios.value.find(item => item.id === id)
)
</script>

<style scoped lang="scss">
.portfolio-detail {
    $color1: #ff6500;
    $color2: #1e1e1e;

    .portfolio-head {
        display: flex;
        flex-direction: column;

        .port-head-item {
            h3 {
                display: inline-block;
                color: $color2;
                font-size: 36px;
                margin: 60px 0 0 0;
                border-bottom: 4px solid $color1 ;
            }

            h4 {
                margin: 8px 0 0 0;
            }
        }
    }

    .portfolio-gallery {
        margin-top: 40px;

        .image-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;

            .img-container {
                overflow: hidden;
                transition: transform 0.8s ease;
                cursor: pointer;

                &:hover {
                    transform: translateY(-6px);
                }

                img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                    transition: transform 0.8s ease;

                    &:hover {
                        transform: scale(1.1);
                    }


                }
            }

            @media (max-width: 1024px) {
                grid-template-columns: repeat(3, 1fr);
            }

            @media (max-width: 768px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (max-width: 480px) {
                grid-template-columns: 1fr;
            }
        }
    }

    .related {
        .related-head {
            h3 {
                display: inline-block;
                color: $color2;
                font-size: 36px;
                margin: 60px 0 0 0;
                border-bottom: 4px solid $color1 ;
            }
        }

        .portfolio-gallery {
            margin-top: 40px;
            margin-bottom: 100px;

            .image-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 16px;

                @media (max-width: 1024px) {
                    grid-template-columns: repeat(3, 1fr);
                }

                @media (max-width: 768px) {
                    grid-template-columns: repeat(2, 1fr);
                }

                @media (max-width: 480px) {
                    grid-template-columns: 1fr;
                }

                .related-item {
                    background-color: $color2;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                    overflow: hidden;
                    transition: transform 0.8s ease;

                    &:hover {
                        transform: translateY(-6px);
                    }

                    .img-container {
                        overflow: hidden;

                        img {
                            width: 100%;
                            height: 200px;
                            object-fit: cover;
                            display: block;
                            transition: transform 0.8s ease;
                        }
                    }

                    &:hover .img-container img {
                        transform: scale(1.1);
                    }

                    p {
                        text-align: center;
                        font-size: 16px;
                        color: white;
                    }
                }
            }
        }
    }

    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;

        img {
            max-width: 90%;
            max-height: 90%;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }

        .close-btn {
            position: absolute;
            top: 40px;
            right: 60px;
            font-size: 40px;
            color: white;
            cursor: pointer;
            user-select: none;
            z-index: 10000;
            transition: 0.3s ease;

            &:hover {
                color: #ff6500;
            }
        }
    }
}
</style>
