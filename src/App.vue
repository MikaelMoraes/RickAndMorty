<template>
  <router-view class="space-bg" />
</template>

<script setup lang="ts">
//
</script>
<style>
.space-bg {
  min-height: 100vh;
  background: url('https://i.pinimg.com/originals/6d/4d/56/6d4d562a18a4dbe4e3566b994f822a0f.gif') no-repeat center center fixed;
  background-size: cover;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #001f3f;

}

::-webkit-scrollbar-thumb {
  background-color: #9c27b0;

  border-radius: 10px;
  border: 2px solid #001f3f;

}


* {
  scrollbar-width: thin;
  scrollbar-color: #9c27b0 #001f3f;
}
</style>