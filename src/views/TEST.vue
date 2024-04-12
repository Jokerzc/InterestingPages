<template>
  <div class="test-boxs">
    <div class="biankuang" id="biankuang">
      <div class="box" :style="{background: randomColor()}">{{ randomColor() }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

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

const randomX = () => {
  const x = Math.floor(Math.random() * 1000);
  return x;
};

const randomY = () => {
  const y = Math.floor(Math.random() * 700);
  return y;
};

onMounted(() => {
  document.getElementById('biankuang').addEventListener('click', e => {
    var parent = document.getElementById('biankuang')
    var div = document.createElement("div");
    div.setAttribute("class", "box");
    div.setAttribute("style", `background: ${randomColor()};`);
    console.log(div)
    parent.appendChild(div)
  })
})

onUnmounted(() => {
  
})
</script>

<style lang="less">
.test-boxs {
  background-color: #000;
  height: 100%;

  .biankuang {
    width: 1000px;
    height: 700px;
    margin: 100px 0 0 200px;
    background-color: #eee;
    position: relative;
    transition: all 3s linear;

    & > div {
      position: absolute;
    }

    .box {
      width: 60px;
      height: 60px;
      border-radius: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      left: 0;
      top: 0;
      animation: 
          horizontal 5s infinite linear alternate,
          vertical 3s infinite  linear alternate,
          colorX 35s infinite steps(7),
          colorY 21s infinite steps(7);
      animation-composition: accumulate;
    }

    @keyframes horizontal {
      from { transform: translateX(0); }
        to { transform: translateX(calc(1000px - 100%)); }
    }

    @keyframes vertical {
      from { transform: translateY(0); }
        to { transform: translateY(calc(700px - 100%)); }
    }

    @keyframes colorX {
        to {
            filter: hue-rotate(360deg);
        }
    }

    @keyframes colorY {
        to {
            filter: hue-rotate(360deg);
        }
    }
  }
}
</style>
