<template>
  <div class="main-page">
    <div class="all-boxs">
      <div style="font-size: 66px;color: black;margin-bottom: 50px;">Movies</div>
      <div style="display: flex;justify-content: space-between;">
        <div ref="mpBox" class="mpBox">
          <img ref="mpImg" src="../assets/images/Page1/人1.png" />
        </div>
        <div ref="mpBox2" class="mpBox mpBox2">
          <img ref="mpImg2" src="../assets/images/Page1/人2.png" />
        </div>
        <div ref="mpBox3" class="mpBox mpBox3">
          <img ref="mpImg3" src="../assets/images/Page1/人3.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const mpBox = ref(null)
const mpImg = ref(null)
const mpBox2 = ref(null)
const mpImg2 = ref(null)
const mpBox3 = ref(null)
const mpImg3 = ref(null)

function computedTransform(num, doc) {
  return (num / doc * 40 - 20).toFixed(1)
}

function computedBGPosition(num, doc) {
  return (60 - Number((num / doc * 20).toFixed(1)) + '%')
}

onMounted(() => {
  document.addEventListener('mousemove', e => {
    mpBox.value.style.transform = `
      rotateX(${computedTransform(e.clientX, window.innerWidth)}deg)
      rotateY(${computedTransform(e.clientY, window.innerHeight)}deg)
    `
    mpBox.value.style.backgroundPosition = `
      ${computedBGPosition(e.clientX, window.innerWidth)} 
      ${computedBGPosition(e.clientY, window.innerHeight)}
    `
    mpImg.value.style.transform = `
      translateX(${computedTransform(e.clientX, window.innerWidth)}px)
      translateY(${computedTransform(e.clientY, window.innerHeight)}px)
    `
    mpBox2.value.style.transform = `
      rotateX(${computedTransform(e.clientX, window.innerWidth)}deg)
      rotateY(${computedTransform(e.clientY, window.innerHeight)}deg)
    `
    mpBox2.value.style.backgroundPosition = `
      ${computedBGPosition(e.clientX, window.innerWidth)} 
      ${computedBGPosition(e.clientY, window.innerHeight)}
    `
    mpImg2.value.style.transform = `
      translateX(${computedTransform(e.clientX, window.innerWidth)}px)
      translateY(${computedTransform(e.clientY, window.innerHeight)}px)
    `
    mpBox3.value.style.transform = `
      rotateX(${computedTransform(e.clientX, window.innerWidth)}deg)
      rotateY(${computedTransform(e.clientY, window.innerHeight)}deg)
    `
    mpBox3.value.style.backgroundPosition = `
      ${computedBGPosition(e.clientX, window.innerWidth)} 
      ${computedBGPosition(e.clientY, window.innerHeight)}
    `
    mpImg3.value.style.transform = `
      translateX(${computedTransform(e.clientX, window.innerWidth)}px)
      translateY(${computedTransform(e.clientY, window.innerHeight)}px)
    `
  })
})

</script>

<style>
.main-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #c6426e, #642b73);

  .all-boxs {
    width: 700px;
    height: 500px;
    padding: 40px;
    background: #fff;
    border-radius: 30px;
  }

  .mpBox {
    width: 175px;
    height: 250px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 10px 20px 20px rgba(0, 0, 0, 0.17);
    position: absolute;
    font-size: 42px;
    color: #000;
    text-align: center;
    background-image: url('../assets/images/Page1/背景1.jpg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 120% 120%;
    overflow: hidden;

    img {
      height: 100%;
      position: relative;
      top: 25px;
      left: 10px;
    }
  }

  .mpBox2 {
    background-image: url('../assets/images/Page1/背景2.jpg');
    margin-left: 200px;
  }
  
  .mpBox3 {
    background-image: url('../assets/images/Page1/背景3.jpg');
    margin-left: 400px;
  }
}
</style>
