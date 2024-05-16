<template>
  <div class="gsap-boxs">
    <div class="biankuang">
      <div class="text" :class="`text${index}`" :style="{color: randomColor()}" v-for="(item, index) in texts" :key="index">{{ item }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from 'gsap'

let timer = null

const texts = ref([
  '股权信托',
  '艺术品信托',
  '保险金信托',
  '债券信托',
  '养老信托',
  '债权信托',
  '家庭信托',
  '慈善信托',
  '股权特殊需要信托',
  '上市公司股票信托',
  '股权信托',
  '艺术品信托',
  '保险金信托',
  '债券信托',
  '养老信托',
  '债权信托',
  '家庭信托',
  '慈善信托',
  '股权特殊需要信托',
  '上市公司股票信托',
  '股权信托',
  '艺术品信托',
  '保险金信托',
  '债券信托',
  '养老信托',
  '债权信托',
  '家庭信托',
  '慈善信托',
  '股权特殊需要信托',
  '上市公司股票信托',
])

const textRandomDom = () => {
  for(let i=0;i<30;i++) {
    gsap.to(`.text${i}`, {
      x: Math.floor(Math.random() * 100) > 49 ? Math.floor(Math.random() * 450) : Math.floor(Math.random() * 450)*-1,
      y: Math.floor(Math.random() * 100) > 49 ? Math.floor(Math.random() * 300) : Math.floor(Math.random() * 320)*-1,
      duration: 5,
      scale: Math.floor(Math.random() * 150) / 150 + 0.3,
      opacity: Math.floor(Math.random() * 100) / 100 + 0.3,
      yoyo: true,
      repeat: -1,
      ease: "none",
    })
  }
}

const randomColor = () => {
  const chars = "1234567890abcdef",
    colorLegh = 6;
  let color = '#';
  for (let i = 0; i < colorLegh; i++) {
    const p = Math.floor(Math.random() * chars.length);
    color += chars.substring(p, p + 1);
  };
  return color;
};

onMounted(() => {
  textRandomDom()
  timer = setInterval(() => {
    textRandomDom()
  }, 5000);
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style lang="less">
.gsap-boxs {
  background-color: #000;
  height: 100%;

  .biankuang {
    width: 1000px;
    height: 700px;
    margin: 100px 0 0 200px;
    background-color: #0A152D;

    .text {
      font-size: 42px;
      color: #0098FF;
      position: absolute;
      top: 42%;
      left: 50%;
    }
  }
}
</style>
