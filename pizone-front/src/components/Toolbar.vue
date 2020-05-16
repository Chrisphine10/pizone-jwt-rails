<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-3">TOP ARTISTS</v-subheader>
        <v-list>
          <v-list-item
            v-for="item in items2"
            :key="item.text"
            link
          >
            <v-list-item-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
              >
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list-item
          class="mt-4"
          link
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-information-variant</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">About Pizone</v-list-item-title>
        </v-list-item>
        <v-list-item link>
        <v-list-item-action>
            <v-icon color="grey darken-1">mdi-login-variant</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Login</v-list-item-title>
        </v-list-item>
		<v-list-item link>
        <v-list-item-action>
            <v-icon color="grey darken-1">mdi-account-plus</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Signup</v-list-item-title>
        </v-list-item>
		<v-list-item link>
        <v-list-item-action>
            <v-icon color="grey darken-1">mdi-logout-variant</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
   :clipped-left="$vuetify.breakpoint.lgAndUp"
	app
    light
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon
        class="mx-4"
        large
      >
       mdi-camera-iris
      </v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Pizone</span>
	</v-toolbar-title>
	<div id="nav" class="hidden-sm-and-down">
		<v-list
		style="max-width: 380px;
		background: none;
		">
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title><router-link style="
		text-decoration: none;" to="/"><v-btn style="padding: 10px; height: 65px;" tile depressed large>Home</v-btn></router-link></v-list-item-title><v-spacer></v-spacer>
				</v-list-item-content>
				<v-list-item-content>
					<v-list-item-title><router-link style="
		text-decoration: none;" to="/signup"><v-btn style="padding: 10px; height: 64px;" tile depressed large>Signup</v-btn></router-link></v-list-item-title>
				</v-list-item-content>
				<v-list-item-content>
					<v-list-item-title><router-link style="
		text-decoration: none;" to="/signin"><v-btn style="padding: 10px; height: 64px;" tile depressed large>Login</v-btn></router-link></v-list-item-title>
				</v-list-item-content>
				<v-list-item-content>
					<v-list-item-title><router-link style="
		text-decoration: none;" to="/signout"><v-btn style="padding: 10px; height: 64px;" tile depressed large>Logout</v-btn></router-link> </v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>      
    </div><v-spacer></v-spacer>
	<v-row
	align="center"
	style="max-width: 640px"
      ><v-spacer></v-spacer>
          <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search..."
          class="hidden-sm-and-down"
        ></v-text-field>
        <v-spacer></v-spacer>
		<v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
		<v-btn
          icon
          large
        >
          <v-avatar
            size="30px"
            item
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
              alt="Vuetify"
            ></v-img></v-avatar>
        </v-btn>
      </v-row>
    </v-app-bar>

    <v-content style="padding: 0px;">
      <v-container class="fill-height">
        <v-row>
		<v-col class="col-9" style="height:4000px">
					<router-view></router-view>
			</v-col>
			<v-col class="col-3">
				<v-card class="elevation-12">
					<v-toolbar-title>Login form</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-card-text>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe numquam voluptatum eius minima sapiente hic maiores mollitia quo, nobis nisi natus quisquam minus quos officia deleniti quod dicta laboriosam enim?</p>
					</v-card-text>
				</v-card>
			</v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: [
        { icon: 'mdi-fire', text: 'Top Pictures' },
        { icon: 'mdi-heart-multiple', text: 'Favourites' },
        { icon: 'mdi-thumb-up', text: 'Recommended' },
        { icon: 'mdi-playlist-play', text: 'Categies' },
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' },
      ],
    }),
    created () {
      this.$vuetify.theme.light = true
    },
  }
</script>
