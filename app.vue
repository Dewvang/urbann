<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'ชื่อเว็บของคุณ',
  meta: [
    { name: 'description', content: 'คำอธิบายของเว็บไซต์' },
    { property: 'og:title', content: 'แชร์ชื่อเว็บบนโซเชียล' },
    { property: 'og:image', content: 'https://example.com/og-image.jpg' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
})
</script>

<style>
* {
  font-family: 'NotoSansThai', sans-serif;
  font-style: normal;

}


body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f9fafb;
}

.container {
  width: 80%;
  height: auto;
  margin: 0 auto;
}

a {
  text-decoration: none;
}
</style>