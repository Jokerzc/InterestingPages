<template>  
  <div class="doodle-container">  
    <css-doodle ref="doodleRef">  
      @grid: 5 / 100px;    /* 定义网格 */  
      background: @random(#f00, #0f0, #00f);    /* 随机背景色 */  
      border-radius: 50%;      /* 圆角 */  
      transform: scale(@rand(0.5, 1.5));  /* 随机缩放 */  
    </css-doodle>  
  </div>  
</template>  

<script>  
import 'css-doodle';  
import { onMounted, ref } from 'vue';  

export default {  
  name: 'DoodleComponent',  
  setup() {  
    const doodleRef = ref(null);  

    onMounted(() => {  
      // 确保 CSS Doodle 被正确插入  
      if (doodleRef.value) {  
        doodleRef.value.style.visibility = 'visible';  
      }  
    });  

    return { doodleRef };  
  },  
}  
</script>  

<style scoped>  
.doodle-container {  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  height: 100vh;  
  background-color: #222;  /* 背景色 */  
}  
</style>