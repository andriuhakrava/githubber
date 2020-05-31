<template>
  <div>
    <el-row :gutter="30">
      <el-col :xs="8" :sm="6" :md="3" :lg="2" v-for="item in usersList" :key="item.id">
        <UsersItem :user="item" />
      </el-col>
    </el-row>
    {{ info }}
  </div>
</template>

<script>
import UsersItem from './UsersItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'UsersList',
  data() {
    return {
      info: null
    }
  },
  components: {
    UsersItem
  },
  created() {
    this.$store.dispatch('fetchUsers');
  },
  computed: {
    ...mapGetters(['usersList']),
  },
}
</script>
