<template>
   <v-card class="elevation-12">
		<v-toolbar
		color="primary"
		dark
		flat
		>
		<v-toolbar-title>Create Account</v-toolbar-title>
		<v-spacer></v-spacer>
		</v-toolbar>
		<v-card-text>
		<v-form @submit.prevent= 'signup'>
		<v-text-field
			id="fname"
			label="First Name"
			name="fname"
			prepend-icon='mdi-account'
			type="text"
			v-model= "fname"
		></v-text-field>
		<v-text-field
			id="lname"
			label="	Last Name"
			name="lname"
			prepend-icon='mdi-account'
			type="text"
			v-model= "lname"
		></v-text-field>
		<v-text-field
			id="email"
			label="Email"
			name="email"
			prepend-icon='mdi-account'
			type="text"
			v-model= "email"
		></v-text-field>
		<v-text-field
			id="role"
			label="Role"
			name="role"
			prepend-icon='mdi-account'
			type="text"
			v-model= "role"
			></v-text-field>

			<v-text-field
			id="password"
			label="Password"
			name="password"
			prepend-icon='mdi-lock'
			type="current-password"
			v-model= "password"
			></v-text-field>
			<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn type = "submit" color = "primary">Sign Up</v-btn>
		</v-card-actions>
		</v-form>
		</v-card-text>
	</v-card>
</template>

<script>
  export default {
    data() {
		return {
			fname: '',
			lname: '',
			role: '',
			email: '',
			password: '',
		}
	}, 
	methods: {
		signup(){
			this.$store.dispatch('signup', {
				fname: this.fname,
				lname: this.lname,
				role: this.role,
				password: this.password,
				email: this.email,
			}) 
			.then(response => {
				console.log(response);
				this.$router.push({name: 'signin'});
			})
		}
	}
  }
</script>
