<template>
	<el-menu
  class="el-menu-demo"
  mode="horizontal"
  background-color="#28a745"
  text-color="#fff"
  active-text-color="#ffd04b"
  :gutter="8">
  <el-menu-item index="1">
    <router-link :to="`/`">Githubber</router-link>
  </el-menu-item>
  <el-menu-item index="2">
    <router-link :to="`/signin`"><span @click="quitApplication">Quit</span></router-link>
  </el-menu-item>
</el-menu>
</template>
<script>
export default {
	name: 'Navigation',
  methods: {
    quitApplication() {
      localStorage.removeItem('githubberEmail');
      localStorage.removeItem('githubberPassword');
      localStorage.removeItem('usersList');
    }
  }
}	
</script>
