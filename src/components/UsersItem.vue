<template>
  <router-link tag="div" :to="`/user/${user.id}`">
    <el-avatar :size="80" src="https://empty">
      <img :src="user.avatar_url">
    </el-avatar>
  </router-link>
</template>
<script>
	export default {
		name: 'UsersItem',
		props: ['user']
	}
</script>
<style>
  .el-avatar {
    cursor: pointer;
  }
</style>
