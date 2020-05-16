<template>
   <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent = 'signin'>
					<v-text-field
						label="Email"
						name="email"
						prepend-icon='mdi-account'
						type="email"
						v-model= "email"
					></v-text-field>
					<v-text-field
						id="current-password"
						label="Password"
						name="current-password"
						prepend-icon='mdi-lock'
						type="current-password"
						v-model= "password"
					></v-text-field>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn type="submit" color="primary">Login</v-btn>
					</v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
</template>

<script>
  export default {
	name: 'signin',
	data() {
		return {
			email: '',
			password: '',

		}
	},
	methods: {
		signin(){
			this.$store.dispatch('retrieveToken', {
				email: this.email,
				password: this.password
			});
		}
	}
  }
</script>
