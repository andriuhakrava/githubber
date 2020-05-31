<template>
  <div id="app">
    <el-container>
      <el-header>
        <Navigation />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>
<style>
	.el-row, .el-col {
    margin-bottom: 10px;
  }
</style>
