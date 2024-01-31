<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView /> -->
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-sub-menu key="1">
          <template #title>
            <span>
              <user-outlined />
              <span>CSS</span>
            </span>
          </template>
          <a-menu-item key="1-1">
            <user-outlined />
            <span>
              <RouterLink to="/">跟随鼠标</RouterLink>
            </span>
          </a-menu-item>
          <a-menu-item key="1-2">待定</a-menu-item>
          <a-menu-item key="1-3">待定</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="2">
          <template #title>
            <span>
              <user-outlined />
              <span>THREE</span>
            </span>
          </template>
          <a-menu-item key="2-1">
            <video-camera-outlined />
            <span>
              <RouterLink to="/TwoPage">TwoPage</RouterLink>
            </span>
          </a-menu-item>
          <a-menu-item key="2-2">待定</a-menu-item>
          <a-menu-item key="2-3">待定</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout style="min-height: 100vh;">
      <RouterView />
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref } from 'vue';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
const selectedKeys = ref(['1']);
const collapsed = ref(false);

</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
