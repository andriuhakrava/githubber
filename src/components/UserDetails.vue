<template>
	<div v-if="singleUser">
		<el-row>
			<el-col :xs="24" :sm="16" :md="12" :lg="10">
				<el-card :body-style="{ padding: '0px', cursor: 'pointer' }">
					<img :src="singleUser.avatar_url" alt="">
					<div style="padding: 10px;">
						<el-row>
							<el-col :span="12">
								{{ singleUser.name }}
							</el-col>
							<el-col :span="12">
								Bio:
								<span v-if="singleUser.bio">
									{{ singleUser.bio }}
								</span>
								<span v-else>None</span>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="12">
								Company: 
								<span v-if="singleUser.company">
									{{ singleUser.company }}
								</span>
								<span v-else>None</span>
							</el-col>
							<el-col :span="12">
								Location: 
								<span v-if="singleUser.location">
									{{ singleUser.location }}
								</span>
								<span v-else>None</span>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="24">
								Member Since: {{ formatDate(singleUser.created_at) }}
							</el-col>
						</el-row>
						<el-row :gutter="22">
							<el-col :span="6">
								<el-badge :value="singleUser.public_repos" :max="99" class="item" type="success">
									<el-button size="small">Public repos</el-button>
								</el-badge>
							</el-col>
							<el-col :span="6">
								<el-badge :value="singleUser.public_gists" :max="99" class="item" type="warning">
									<el-button size="small">Public gists</el-button>
								</el-badge>		
							</el-col>
							<el-col :span="6">
								<el-badge :value="singleUser.followers" :max="99" class="item" type="danger">
									<el-button size="small">Followers</el-button>
								</el-badge>		
							</el-col>
							<el-col :span="6">
								<el-badge :value="singleUser.following" :max="99" class="item" type="primary">
									<el-button size="small">Following</el-button>
								</el-badge>		
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="7" :offset="9">
								<el-link type="success" :href="`https://github.com/${singleUser.login}`" target="_blank">
									View Github profile
								</el-link>
							</el-col>
						</el-row>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

	export default {
		name: 'UserDetails',
		data() {
			return {
				login: null
			}
		},
		mounted() {
			this.getSingleUser();
		},
		computed: {
			...mapGetters(['usersList', 'singleUser']),
		},
		methods: {
			...mapActions({
				getUser: 'fetchSingleUser'
			}),
			getSingleUser: function() {
				let paramID = this.$route.params.id;
				let usr;
				for (let i = 0; i < this.usersList.length; i++) {
					if (this.usersList[i].id == paramID) {
						usr = this.usersList[i];
						break;
					}
				}
				this.login = usr.login;
				this.getUser(this.login);
			},
			formatDate(data) {
				let dateArr = data.split('T');
				return dateArr[0];
			}
		}
	}
</script>
