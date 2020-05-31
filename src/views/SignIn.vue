<template>
	<div>
		<el-form :model="userForm" status-icon :rules="rules" ref="userForm" label-width="120px" class="demo-userForm">
			<el-form-item label="Email" prop="email">
				<el-input type="email" v-model="userForm.email" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="Password" prop="password">
				<el-input type="password" v-model="userForm.password" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('userForm')">Submit</el-button>
				<el-button @click="resetForm('userForm')">Reset</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	/* eslint-disable no-useless-escape */
	export default {
		name: 'signin',
		data() {
			const regexpEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
			let validateEmail = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Please input the email'));
				} else if (!regexpEmail.test(value)) {
					callback(new Error('Please input correct format of the email'));
				} else {
					callback();
				}
			};

			let validatePassword = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Please input the password'));
				} else {
					callback();
				}
			};

			return {
				userForm: {
					email: '',
          password: ''
        },
        rules: {
					email: [
						{ validator: validateEmail, trigger: 'blur' }
					],
					password: [
						{ validator: validatePassword, trigger: 'blue' }
					]
				}
			}
		},
		methods: {
			submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {=
						localStorage.setItem('githubberEmail', this.userForm.email);
						localStorage.setItem('githubberPassword', this.userForm.password);
						this.$store.dispatch('loginUser', this.userForm);
					} else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
		}
	}
</script>
