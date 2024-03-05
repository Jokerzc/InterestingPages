<template>
  <div class="scoll-boxs">
    <section>
      <h2>Scroll To Reveal</h2>
    </section>

    <div class="container">
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

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
  const container = document.querySelector('.container'),
    fragment = document.createDocumentFragment();

  for (let i = 0; i < 60; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = randomColor();
    box.classList.add('box');

    fragment.appendChild(box);
  };
  container.appendChild(fragment);


  /**创建动画 */
  const randomColorBlock = document.querySelectorAll('.box');

  const scrollTrigger = () => {
    randomColorBlock.forEach((box) => {
      if (box.offsetTop <= window.scrollY) {
        box.classList.add('active')
      } else {
        box.classList.remove('active')
      }
    });
  };

  window.addEventListener('scroll', scrollTrigger);
})

</script>

<style>
.scoll-boxs {
  background-color: #000;

  section {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section h2 {
    font-size: 8vw;
    font-weight: 500;
    color: #fff;
  }

  .container {
    width: 80%;
    position: relative;
    top: -200px;
    left: 10%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .container .box {
    width: 200px;
    height: 200px;
    background-color: #fff;
    border-radius: 10px;

    position: relative;
    top: 50vh;
    transition: .5s;
  }

  .container .box:nth-child(3n + 1) {
    transform: translate(-400px, 0) scale(0);
  }

  .container .box:nth-child(3n + 2) {
    transform: translate(0, 400px) scale(0);
  }

  .container .box:nth-child(3n + 3) {
    transform: translate(400px, 0) scale(0);
  }

  .container .box.active {
    transform: translate(0, 0) scale(1);
  }
}
</style>
