<template>
   <v-card class="elevation-12">
		<v-toolbar
		color="primary"
		dark
		flat
		>
		<v-toolbar-title>Trending Posts</v-toolbar-title>
		<v-spacer></v-spacer>
		</v-toolbar>
		<v-card-text>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vero sed quibusdam, nobis beatae, eos dolores magni cumque qui doloremque ducimus minus. Obcaecati doloribus assumenda inventore praesentium optio expedita quisquam!
		</v-card-text>
		<v-card-actions>
		<v-spacer></v-spacer>
		<v-btn color="primary">View Pic</v-btn>
		</v-card-actions>
		</v-card>
</template>

<script>
  export default {
    props: {
      source: String,
    },
  }
</script>
