<template>
    <div class="container">
        <div class="contact">
            <div class="contact-head">
                <h2 class="slide-left-on-scroll">ช่องทางการติดต่อ</h2>
                <p class="slide-right-on-scroll">เรามีหลากหลายช่องทางให้คุณเลือก เลือกวิธีที่สะดวกที่สุดได้เลย</p>
            </div>
            <div class="contact-wrap">
                <div class="contact-item slide-up-on-scroll">
                    <div class="img-contain">
                        <img src="/public/assets/icon/phone-cl.svg" alt="">
                    </div>
                    <h3>Phone</h3>
                    <p>085-464-4992 (คุณโอปอ)</p>
                    <p>089-484-8405 (คุณดิว)</p>
                </div>
                <div class="contact-item slide-down-on-scroll">
                    <div class="img-contain">
                        <img src="/public/assets/icon/mail-cl.svg" alt="">
                    </div>
                    <h3>Email</h3>
                    <p>piyawat.urbann@ gmail.com</p>
                    <p>sittigon.urbann@ gmail.com</p>
                </div>
                <div class="contact-item slide-up-on-scroll">
                    <div class="img-contain">
                        <img src="/public/assets/icon/location-cl.svg" alt="">
                    </div>
                    <h3>Location</h3>
                    <p>พฤกษา 52/1 ต.คลองหนึ่ง </p>
                    <p>อ.คลองหลวง จ.ปทุมธานี 12120</p>
                </div>
            </div>
            <div class="follow">
                <div class="follow-head">
                    <h2 class="slide-left-on-scroll">ติดตามเรา</h2>
                    <p class="slide-right-on-scroll">ติดตามข้อมูลข่าวสารและกิจกรรมจากเราได้ผ่านช่องทางต่อไปนี้</p>
                </div>
                <div class="follow-wrap">
                    <div class="follow-item slide-left-on-scroll">
                        <a href=""><img src="/public/assets/social/facebook.svg" alt=""></a>
                    </div>
                    <div class="follow-item slide-left-on-scroll">
                        <a href=""><img src="/public/assets/social/tiktok.svg" alt=""></a>
                    </div>
                    <div class="follow-item slide-left-on-scroll">
                        <a href=""><img src="/public/assets/social/line.svg" alt=""></a>
                    </div>
                    <div class="follow-item slide-left-on-scroll">
                        <a href=""><img src="/public/assets/social/youtube.svg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="message">
        <div class="message-wrap">
            <div class="message-head">
                <h2 class="slide-left-on-scroll">ส่งข้อความถึงเรา</h2>
                <p class="slide-right-on-scroll">กรอกแบบฟอร์มด้านล่าง เราจะติดต่อกลับหาคุณโดยเร็วที่สุด</p>
            </div>
            <form action="">
                <div class="form-wrap">
                    <div class="form-item slide-left-on-scroll">
                        <label for="fullname">ชื่อ-นามสกุล</label>
                        <input type="text" id="fullname" name="fullname" placeholder="ชื่อ-นามสกุลของคุณ">
                    </div>
                    <div class="form-item slide-left-on-scroll">
                        <label for="email">อีเมล</label>
                        <input type="email" name="email" id="email" placeholder="อีเมลของคุณ">
                    </div>
                </div>
                <div class="form-wrap slide-left-on-scroll">
                    <div class="form-item">
                        <label for="tel">เบอร์โทร</label>
                        <input type="tel" id="tel" name="tel" placeholder="เบอร์โทรของคุณ">
                    </div>
                    <div class="form-item">
                        <label for="subject">หัวข้อเรื่อง</label>
                        <input type="text" name="subject" id="subject" placeholder="เรื่องที่ติดต่อของคุณ">
                    </div>
                </div>
                <div class="form-wrap slide-left-on-scroll">
                    <div class="message-item">
                        <label for="message">ข้อความที่ต้องการส่งถึงเรา</label>
                        <textarea name="message" id="message"
                            placeholder="กรุณาระบุรายละเอียด เรื่องที่ต้องการติดต่อ"></textarea>
                    </div>
                </div>

                <div class="submit slide-left-on-scroll">
                    <button>ส่งข้อความถึงเรา</button>
                </div>
            </form>
        </div>
    </div>

    <div class="map">
        <div class="map-head">
            <h2 class="slide-left-on-scroll">ที่ตั้งของเรา</h2>
            <p class="slide-right-on-scroll">ดูตำแหน่งของเราได้จากแผนที่ด้านล่าง</p>
        </div>
        <div class="map-contain">
            <iframe class="slide-down-on-scroll"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6507.771559911964!2d100.61913640844165!3d14.104067631075406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d808213bdd635%3A0x73024ddbd90c34e5!2z4Lir4Lih4Li54LmI4Lia4LmJ4Liy4LiZIOC4nuC4pOC4geC4qeC4siA1Mi8x!5e0!3m2!1sth!2sth!4v1750285908867!5m2!1sth!2sth"
                style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="map-button">
            <a class="slide-right-on-scroll" href="https://maps.app.goo.gl/SehLy1P5EgjiYCz39">
                <button >
                    <img src="/public/assets/icon/location.svg" alt="">
                    กดเพื่อนำทาง
                </button>
            </a>
        </div>
    </div>
</template>



<script setup>


</script>

<style scoped lang="scss">
$color1: #ff6500;
$color2: #1e1e1e;
$color3: #4b5563;

.contact-head,
.follow-head,
.message-head,
.map-head {
    padding: 80px 0;
    text-align: center;

    h2 {
        display: inline-block;
        font-size: 36px;
        margin: 0 0 16px 0;
        border-bottom: 4px solid $color1;
    }

    p {
        margin: 0px;
        color: $color3;
    }
}

.container {
    .contact {
        .contact-wrap {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;

            .contact-item {
                padding: 32px;
                background: #fff;
                border-radius: 8px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                    0 2px 4px -2px rgba(0, 0, 0, 0.1);
                transition: all 0.8s ease;
                text-align: center;
                border-radius: 16px;

                &:hover {
                    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
                }

                .img-contain {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 0 24px 0;

                    img {
                        width: 40px;
                    }
                }

                h3 {

                    margin: 0 0 16px 0;
                }

                p {
                    box-sizing: border-box;
                    color: $color3;
                    margin: 0 0 8px 0;
                }
            }

            @media (max-width: 768px) {
                grid-template-columns: 1fr;
            }
        }

        .follow {
            .follow-head {
                padding-bottom: 48px;
            }

            .follow-wrap {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;

                .follow-item {
                    margin: 0 24px 80px 24px;

                    a {
                        img {
                            width: 48px;
                            transition: all 0.3s ease-in-out;

                            &:hover {
                                scale: 1.1;
                            }
                        }
                    }
                }
            }
        }
    }
}

.message {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    .message-wrap {
        margin: 80px 0;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        width: 700px;
        border-radius: 16px;

        @media (max-width: 768px) {
            width: 80%;
        }

        .message-head {
            padding-top: 24px;
            padding-bottom: 32px;
            padding-right: 24px;
            padding-left: 24px;
        }

        form {
            padding: 0 24px 24px 24px;

            .form-wrap {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                .form-item,
                .message-item {
                    margin: 24px 0 0 0;
                    display: flex;
                    flex-direction: column;
                    width: 48%;
                    flex-wrap: wrap;

                    label {
                        font-size: 14px;
                        font-weight: bold;
                        margin: 0 0 6px 0;
                    }

                    input,
                    textarea {
                        border: 1px solid #92959957;
                        border-radius: 8px;
                        padding: 8px 12px;
                    }

                    input:focus,
                    textarea:focus {
                        outline: none;
                        border-color: #e55800;
                        box-shadow: 0 0 0 2px rgba(229, 88, 0, 0.2);
                    }

                    @media (max-width: 768px) {
                        width: 100%;
                    }
                }
            }

            .message-item {
                width: 100% !important;

                textarea {
                    height: 120px;
                }
            }

            .submit {
                margin: 24px 0 0 0;

                button {
                    width: 100%;
                    padding: 8px 0;
                    font-size: 16px;
                    background-color: $color1;
                    border: 0;
                    border-radius: 6px;
                    color: white;
                    transition: all 0.3s ease-in-out;
                    cursor: pointer;

                    &:hover {
                        scale: 1.02;
                    }
                }


            }
        }
    }

}

.map {
    padding-bottom: 80px;

    .map-head {
        padding-bottom: 24px;
    }

    .map-contain {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        iframe {
            width: 80%;
            height: 300px;

            @media (max-width: 768px) {
                width: 80%;
            }
        }
    }

    .map-button {
        margin: 50px 0 0 0;
        display: flex;
        justify-content: center;

        button {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 12px 24px;
            font-size: 16px;
            display: flex;
            background-color: $color1;
            border: 0;
            border-radius: 6px;
            color: white;
            transition: all 0.3s ease-in-out;

            img {
                width: 14px;
                margin: 0 8px 0 0;
            }

            &:hover {
                scale: 1.02;
            }
        }

    }
}
</style>