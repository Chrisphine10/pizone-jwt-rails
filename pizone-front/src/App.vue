<template>
  <v-app>
	<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
	<link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
	<v-content>
		<Toolbar/>
	</v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';
export default {
	name: 'App',
	components: {
		Toolbar,
},
  
};
</script>
