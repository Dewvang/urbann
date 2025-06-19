<template>
  <div class="about">
    <div class="about-text ">
      <h3 class="slide-up-on-scroll">เกี่ยวกับเรา</h3>
      <p class="slide-right-on-scroll">
        "Urban De Concept คือทีมผู้เชี่ยวชาญด้านงานก่อสร้าง ออกแบบ และรีโนเวทที่พักอาศัย
        เราเกิดจากความตั้งใจที่จะยกระดับคุณภาพชีวิตของผู้คน ผ่านงานออกแบบที่ตอบโจทย์
        ไลฟ์สไตล์ และฟังก์ชันการใช้งานอย่างแท้จริง"
        <br /><br />
        "เราผสมผสานความคิดสร้างสรรค์เข้ากับความรู้ด้านวิศวกรรมและการตกแต่งอย่างมืออาชีพ
        เพื่อสร้างผลงานที่สวยงาม แข็งแรง ใช้งานได้จริง และอยู่ได้นาน
        ไม่ว่าจะเป็นบ้านพักอาศัย คอนโด ออฟฟิศ หรือร้านค้า
        เราพร้อมดูแลตั้งแต่แนวคิดแรกจนถึงงานเสร็จสมบูรณ์"
      </p>
    </div>
    <div class="about-slide">
      <div class="carousel-container slide-left-on-scroll">
        <div class="carousel-fade">
          <div class="carousel-item" v-for="(image, index) in images" :key="index"
            :class="{ active: currentIndex === index }">
            <img :src="image" alt="Slide Image" />
          </div>
        </div>
        <div class="carousel-controls">
          <button @click="prevSlide">‹</button>
          <button @click="nextSlide">›</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="service">
      <div class="service-head">
        <h3 class="slide-right-on-scroll">บริการของเรา</h3>
      </div>
      <div class="service-img">
        <div class="service-img-1 ">
          <img class="slide-down-on-scroll" src="/assets/icon/service-1.svg" alt="">
          <h4 class="slide-down-on-scroll">ปรึกษางาน</h4>
        </div>
        <div class="service-img-2">
          <img class="slide-up-on-scroll" src="/assets/icon/service-2.svg" alt="">
          <h4 class="slide-up-on-scroll">สร้างบ้าน</h4>
        </div>
        <div class="service-img-1">
          <img class="slide-down-on-scroll" src="/assets/icon/service-3.svg" alt="">
          <h4 class="slide-down-on-scroll">รีโนเวท</h4>
        </div>
        <div class="service-img-2">
          <img class="slide-up-on-scroll" src="/assets/icon/service-4.svg" alt="">
          <h4 class="slide-up-on-scroll">ออกแบบ</h4>
        </div>
      </div>
    </div>
  </div>

  <div class="portfolio">
    <div class="container">
      <div class="portfolio-head slide-left-on-scroll">
        <h3>ผลงานของเรา</h3>
      </div>
      <div class="portfolio-wrap slide-right-on-scroll">
        <div class="portfolio-item" v-for="portfolio in portfolios" :key="portfolio.id">
          <div class="img-container">
            <img :src="portfolio.cover" alt="">
          </div>
          <h4>{{ portfolio.title }}</h4>
        </div>
      </div>
    </div>
  </div>

  <div class="blog">
    <div class="container">
      <div class="blog-head">
        <h3 class="slide-left-on-scroll">บทความ/เกล็ดความรู้</h3>
      </div>
      <div class="blog-wrap slide-down-on-scroll">
        <div class="blog-item" v-for="blog in blogs" :key="blog.id">
          <div class="img-container">
            <img :src="blog.cover" alt="">
          </div>
          <div class="content">
            <h5>{{ blog.title }}</h5>
            <p>{{ blog.content }}</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
const currentIndex = ref(0)
let interval

const images = [
  '/assets/carousel/slide1.jpg',
  '/assets/carousel/slide2.jpg',
  '/assets/carousel/slide3.jpg'
]

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
  }
])

const blogs = ref([
  {
    id: 0,
    title: "ข้อควรต้องรู้ก่อน ติดแอร์ในห้องนอน หมดปัญหาแอร์ไม่เย็น",
    cover: "/assets/blog/1.png",
    content: `การติดแอร์ในห้องนอนนั้น ไม่ใช่แค่เลือกเครื่องปรับอากาศที่มี BTU เหมาะสมเท่านั้น แต่ยังต้องพิจารณาตำแหน่งติดตั้ง ทิศทางลม และการระบายอากาศภายในห้องด้วย หากติดตั้งไม่ถูกวิธี อาจทำให้แอร์ทำงานหนักเกินไป หรือไม่เย็นเท่าที่ควร นอกจากนี้ ควรเลือกแอร์ที่มีระบบฟอกอากาศหรือลดเชื้อโรค เพื่อให้เหมาะสมกับสภาพแวดล้อมของห้องนอน และสุขภาพของผู้อยู่อาศัยด้วย`
  },
  {
    id: 1,
    title: "จัดบ้านตามฮวงจุ้ยอย่างไรให้ “เรียกทรัพย์” ให้เงินไหลมาเทมาแบบไม่รู้ตัว ",
    cover: "/assets/blog/2.png",
    content: `การเลือกสีทาบ้านไม่ใช่แค่เรื่องของความสวยงามเท่านั้น แต่สีแต่ละสีสามารถส่งผลต่อพลังงานในบ้านตามหลักฮวงจุ้ย เช่น สีฟ้าช่วยเสริมพลังแห่งความสงบ สีเขียวช่วยเสริมสุขภาพ สีแดงเหมาะกับพื้นที่ที่ต้องการความกระตือรือร้น โดยควรเลือกสีที่เหมาะกับทิศทางของบ้าน เช่น ทิศใต้เหมาะกับโทนร้อน ทิศตะวันออกเหมาะกับโทนเย็น เพื่อส่งเสริมพลังงานดี ๆ ให้กับผู้อยู่อาศัยในบ้าน`
  },
  {
    id: 2,
    title: "ก่อนขอในอนุญาตก่อสร้าง ต้องเตรียมเอกสารอะไรบ้าง?",
    cover: "/assets/blog/3.png",
    content: `ห้องน้ำขนาดเล็กสามารถดูกว้างและโปร่งได้ หากใช้เทคนิคการตกแต่งที่เหมาะสม เช่น ใช้กระจกบานใหญ่เพื่อสะท้อนแสงธรรมชาติ ใช้สีโทนอ่อน เช่น ขาว ครีม หรือฟ้าอ่อน เพื่อลดความอึดอัด เลือกสุขภัณฑ์ที่มีขนาดเล็กกะทัดรัด และควรใช้ชั้นวางของลอยตัวเพื่อลดการใช้พื้นที่บนพื้นผิว นอกจากนี้ การจัดแสงที่เหมาะสม เช่น ไฟ LED สีขาว ช่วยให้ห้องดูสว่างและทันสมัยยิ่งขึ้น`
  },
  {
    id: 3,
    title: "ก่อนขอในอนุญาตก่อสร้าง ต้องเตรียมเอกสารอะไรบ้าง?",
    cover: "/assets/blog/1.png",
    content: `สภาพอากาศเมืองไทยที่มีทั้งแดดแรงและฝนตกหนัก ทำให้การเลือกหลังคาเป็นเรื่องสำคัญ ควรเลือกวัสดุที่ทนความร้อน เช่น หลังคาเมทัลชีทเคลือบสารสะท้อนความร้อน หรือกระเบื้องเซรามิกที่ไม่อมความร้อน นอกจากนี้ ควรมีฉนวนกันความร้อนใต้หลังคา เพื่อช่วยประหยัดพลังงาน และหากอยู่ในพื้นที่น้ำท่วม ควรเลือกหลังคาที่ลาดเอียงเพื่อให้น้ำไหลลงได้ง่าย ไม่รั่วซึมในฤดูฝน`
  }
])

onMounted(() => {
  interval = setInterval(() => {
    nextSlide()
  }, 3000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

</script>

<style scoped lang="scss">
$color1: #ff6500;
$color2: #1e1e1e;

.about {
  display: flex;

  .about-text {
    background-color: $color1;
    width: 50%;
    display: flex;
    flex-direction: column;
    color: white;

    h3 {
      font-size: 36px;
      margin: 0px;
      margin-top: 100px;
      margin-left: 10%;
    }

    p {
      margin: 0px;
      padding: 16px 65px 16px 0;
      margin-bottom: 100px;
      margin-left: 10%;
    }
  }

  .about-slide {
    background-color: $color2;
    width: 50%;
    display: flex;
    align-items: center;

    .carousel-container {
      width: 100%;
      max-width: 960px;
      margin: auto;
      overflow: visible;
      position: relative;
      display: flex;
      justify-content: flex-end;
      margin-right: 9%;

      .carousel-fade {
        position: relative;
        width: 90%;
        height: 350px;

        .carousel-item {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          pointer-events: none;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .carousel-item.active {
          opacity: 1;
          pointer-events: auto;
        }
      }

      .carousel-controls {
        position: absolute;
        top: 50%;
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          background: $color1;
          position: absolute;
          color: white;
          border: none;
          font-size: 32px;
          padding: 8px 16px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;

          &:first-child {
            left: -20px; // 👈 ล้ำซ้ายออกไป
          }

          &:last-child {
            right: -20px; // 👈 ล้ำขวาออกไป
          }

          &:hover {
            transform: scale(1.1); // ขยายขนาดขึ้น 10%
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); // ใส่เงานิดหน่อย
          }
        }
      }
    }
  }
}

.service {
  .service-head {
    display: inline-block;

    h3 {
      font-size: 36px;
      margin: 60px 0 0 0;
      border-bottom: 4px solid $color1 ;
    }
  }

  .service-img {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;

    .service-img-1 {
      background-color: $color2;
      width: 24%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5% 0;

      h4 {
        font-size: 24px;
        color: white;
        margin: 18px 0 0 0;
      }
    }

    .service-img-2 {
      background-color: $color1;
      width: 24%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h4 {
        font-size: 24px;
        color: white;
        margin: 18px 0 0 0;
      }
    }
  }
}

.portfolio {
  margin-top: 100px;
  padding-bottom: 150px;
  background-color: $color2;

  .portfolio-head {
    display: inline-block;

    h3 {
      color: white;
      font-size: 36px;
      margin: 60px 0 0 0;
      border-bottom: 4px solid $color1 ;
    }
  }

  .portfolio-wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;

    .portfolio-item {
      cursor: pointer;
      width: 32.3%;
      display: flex;
      flex-direction: column;
      transition: transform 0.5s ease;

      &:hover {
        transform: translateY(-6px);
      }

      .img-container {
        overflow: hidden;

        img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block; // ป้องกัน line-gap ด้านล่าง
        }
      }

      h4 {
        text-align: center;
        padding: 16px 0;
        margin: 0;
        background-color: white;

      }

      &:hover .img-container img {
        transform: scale(1.1);
      }
    }
  }

}

.blog {
  margin-top: 100px;
  padding-bottom: 150px;

  .blog-head {
    display: inline-block;

    h3 {
      margin: 0;
      color: $color2;
      font-size: 36px;
      border-bottom: 4px solid $color1 ;
    }
  }

  .blog-wrap {
    display: flex !important;
    justify-content: space-between;
    margin-top: 60px;

    .blog-item {
      width: 24%;
      cursor: pointer;
      transition: transform 0.5s ease;

      &:hover {
        transform: translateY(-6px);
      }

      .img-container {
        overflow: hidden;

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block; // ป้องกัน line-gap ด้านล่าง
        }


      }

      .content {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;

        h5 {
          font-size: 16px;
          margin: 8px 0 0 0px;
        }

        p {
          font-size: 14px;
        }
      }


      &:hover .img-container img {
        transform: scale(1.1);
      }
    }
  }
}

@media (max-width: 575.98px) {
  .about {
    display: flex;
    flex-direction: column;

    .about-text {
      background-color: $color1;
      width: 100%;
      display: flex;
      flex-direction: column;
      color: white;

      p {
        margin: 0px;
        padding: 16px 65px 16px 0;
        margin-bottom: 100px;
        margin-left: 10%;
      }
    }

    .about-slide {
      background-color: $color2;
      width: 100%;
      display: flex;
      align-items: center;

      .carousel-container {
        width: 100%;
        max-width: 960px;
        margin: auto;
        overflow: visible;
        position: relative;
        display: flex;
        justify-content: flex-end;
        margin-right: 40px;
        padding: 36px 0;
      }
    }
  }

  .service {

    .service-img {
      display: flex;
      justify-content: space-between;
      margin-top: 60px;
      flex-wrap: wrap;

      .service-img-1 {
        background-color: $color2;
        width: 49%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5% 0;
        margin-top: 8px;

      }

      .service-img-2 {
        background-color: $color1;
        width: 49%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 8px;

      }
    }
  }

  .portfolio {
    margin-top: 100px;
    padding-bottom: 150px;
    background-color: $color2;

    .portfolio-wrap {
      display: flex;
      justify-content: space-between;
      margin-top: 60px;
      flex-wrap: wrap;

      .portfolio-item {
        cursor: pointer;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 28px;

        .img-container {
          overflow: hidden;

          img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            transition: transform 0.5s ease;
            display: block;
          }
        }
      }
    }

  }

  .blog {
    margin-top: 100px;
    padding-bottom: 150px;

    .blog-head {
      display: inline-block;

      h3 {
        margin: 0;
        color: $color2;
        font-size: 36px;
        border-bottom: 4px solid $color1 ;
      }
    }

    .blog-wrap {
      display: flex !important;
      justify-content: space-between;
      margin-top: 60px;
      flex-wrap: wrap;

      .blog-item {
        width: 49%;
        cursor: pointer;

        .img-container {
          overflow: hidden;

          img {
            width: 100%;
            height: 100px;
            object-fit: cover;
            transition: transform 0.5s ease;
            display: block; // ป้องกัน line-gap ด้านล่าง
          }


        }

        h5 {
          margin: 8px 0 0 0px;
        }



        &:hover .img-container img {
          transform: scale(1.1);
        }
      }
    }
  }
}

@media (max-width: 767.98px) {
  .about {
    display: flex;
    flex-direction: column;

    .about-text {
      background-color: $color1;
      width: 100%;
      display: flex;
      flex-direction: column;
      color: white;

      h3 {
        font-size: 36px;
        margin: 0px;
        margin-top: 100px;
        margin-left: 6%;
      }

      p {
        margin: 0px;
        padding: 16px 6% 16px 0;
        margin-bottom: 100px;
        margin-left: 6%;
      }
    }

    .about-slide {
      background-color: $color2;
      width: 100%;
      display: flex;
      align-items: center;

      .carousel-container {
        width: 100%;
        max-width: 960px;
        margin: auto;
        overflow: visible;
        position: relative;
        display: flex;
        justify-content: flex-end;
        margin-right: 10%;
        padding: 36px 0;
      }
    }
  }

  .blog {
    margin-top: 100px;
    padding-bottom: 150px;

    .blog-head {
      display: inline-block;

      h3 {
        margin: 0;
        color: $color2;
        font-size: 36px;
        border-bottom: 4px solid $color1 ;
      }
    }

    .blog-wrap {
      display: flex !important;
      justify-content: space-between;
      margin-top: 60px;
      flex-wrap: wrap;

      .blog-item {
        width: 49%;
        cursor: pointer;

        .img-container {
          overflow: hidden;

          img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            transition: transform 0.5s ease;
            display: block; // ป้องกัน line-gap ด้านล่าง
          }


        }

        h5 {
          margin: 8px 0 0 0px;
        }

        &:hover .img-container img {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
