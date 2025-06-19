<template>
    <footer>
        <div class="footer-wrap">
            <div class="logo">
                <a href="/" class="logo">UD<span>cp</span></a>
            </div>
            <div class="copy-rights">
                <p>Copyright © 2025 Urbann De concept</p>
                <p>All rights reserved.</p>
            </div>
        </div>

        <div class="contact">
            <div class="contact-item">
                <img src="/assets/icon/phone.svg" alt="">
                <p>085-464-4992</p>
            </div>
            <div class="contact-item">
                <img src="/assets/icon/phone.svg" alt="">
                <p>089-484-8405</p>
            </div>
            <div class="contact-item">
                <img src="/assets/icon/line.svg" alt="">
                <p>@Udcp</p>
            </div>
        </div>
    </footer>
</template>

<script setup>


</script>

<style scoped lang="scss">
$color1: #ff6500;
$color2: #1e1e1e;

footer {
    .footer-wrap {
        background-color: $color2;
        padding: 50px 0;

        .logo {
            text-align: center;
            font-weight: bold;
            font-size: 28px;
            color: white;
            text-decoration: none;

            span {
                color: $color1;
            }
        }

        .copy-rights {
            text-align: center;

            p {
                color: white;
            }
        }
    }

    .contact {
        display: flex;
        justify-content: center;
        background-color: $color1;

        .contact-item {
            display: flex;
            padding: 0 16px;

            img {
                width: 18px;
            }

            p {
                margin-left: 10px;
                color: white;
                font-size: 14px;
            }
        }
    }
}

@media (max-width: 575.98px) {
    footer {
        .contact {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: $color1;

            .contact-item {
                display: flex;
                padding: 0 16px;

                img {
                    width: 18px;
                }

                p {
                    margin-left: 10px;
                    color: white;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>