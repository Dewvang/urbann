<template>
    <div class="portfolio">
        <div class="container">
            <div class="gallery">
                <div class="gallery-item slide-right-on-scroll" v-for="portfolio in portfolios" :key="portfolio.id">
                    <NuxtLink :to="`/portfolio/${portfolio.id}`">
                        <div class="img-container">
                            <img class="lazyload" :data-src="portfolio.cover" alt="" />
                        </div>
                        <p>{{ portfolio.title }}</p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


const portfolios = ref([
    {
        id: 0,
        title: "รีโนเวทบ้านสองชั้น",
        description: "ปรับปรุงทั้งภายในและภายนอก",
        cover: "/assets/portfolio/1.png",
        images: [
            "/assets/portfolio/1.png",
            "/assets/portfolio/renovate2.jpg",
            "/assets/portfolio/renovate3.jpg"
        ]
    },
    {
        id: 1,
        title: "แต่งคอนโดลอฟท์",
        description: "สไตล์ลอฟท์ปูนเปลือยสุดเท่",
        cover: "/assets/portfolio/2.png",
        images: [
            "/assets/portfolio/2.png",
            "/assets/projects/loft2.jpg"
        ]
    },
    {
        id: 2,
        title: "รีโนเวทบ้านสองชั้น",
        description: "สไตล์ลอฟท์ปูนเปลือยสุดเท่",
        cover: "/assets/portfolio/3.png",
        images: [
            "/assets/projects/loft2.jpg",
            "/assets/projects/loft2.jpg"
        ]
    },
    {
        id: 3,
        title: "แต่งคอนโดลอฟท์",
        description: "ปรับปรุงทั้งภายในและภายนอก",
        cover: "/assets/portfolio/1.png",
        images: [
            "/assets/portfolio/1.png",
            "/assets/portfolio/renovate2.jpg",
            "/assets/portfolio/renovate3.jpg"
        ]
    },
    {
        id: 4,
        title: "ปรับปรุงร้านกาแฟ",
        description: "ตกแต่งใหม่ในสไตล์โมเดิร์นลอฟท์",
        cover: "/assets/portfolio/2.png",
        images: [
            "/assets/portfolio/2.png",
            "/assets/projects/loft2.jpg"
        ]
    },
    {
        id: 5,
        title: "ต่อเติมบ้านด้านหลัง",
        description: "เพิ่มพื้นที่ครัวและซักล้าง",
        cover: "/assets/portfolio/3.png",
        images: [
            "/assets/portfolio/3.png",
            "/assets/portfolio/renovate2.jpg"
        ]
    },
    {
        id: 6,
        title: "แต่งห้องทำงาน",
        description: "ปรับโทนให้ดูโปรและอบอุ่น",
        cover: "/assets/portfolio/1.png",
        images: [
            "/assets/portfolio/1.png",
            "/assets/projects/loft2.jpg"
        ]
    },
    {
        id: 7,
        title: "รีโนเวทภายในทั้งหลัง",
        description: "เปลี่ยนบรรยากาศบ้านเก่าเป็นใหม่",
        cover: "/assets/portfolio/2.png",
        images: [
            "/assets/portfolio/2.png",
            "/assets/portfolio/renovate3.jpg"
        ]
    }
])

</script>

<style scoped lang="scss">
$color1: #ff6500;
$color2: #1e1e1e;

.portfolio {
    margin: 100px 0;
    padding: 80px 0;
    background-color: $color2;

    .gallery {
        display: grid;
        grid-template-columns: repeat(4, 1fr); // 4 คอลัมน์บนหน้าจอใหญ่
        gap: 24px;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(3, 1fr); // ลดเหลือ 3 คอลัมน์
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr); // ลดเหลือ 2 คอลัมน์
        }

        @media (max-width: 480px) {
            grid-template-columns: 1fr; // มือถือเล็ก เหลือคอลัมน์เดียว
        }

        .gallery-item {
            overflow: hidden;
            background-color: white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

            &:hover {
                transform: translateY(-5px);
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
                color: $color2;
                padding: 12px;
                font-size: 16px;
                text-align: center;
                font-weight: 500;
            }
        }

    }
}
</style>
