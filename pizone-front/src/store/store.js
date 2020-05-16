import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

Vue.use(vuex)

const API_URL = 'http://localhost:3000'

axios.defaults.baseURL = API_URL, {
    withCredentials: true,
    headers: {
        'X-CSRF-TOKEN': localStorage.csrf,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'X-API-Key, Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, PATCH, DELETE, OPTIONS',
    }
}

export default new vuex.Store({
    state: {
        test: 'this is a test',
        accessToken: localStorage.getItem('access_token') || '',
        currentUser: {}

    },
    actions: {
        async signup(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('signup', {
                        fname: data.fname,
                        lname: data.lname,
                        email: data.email,
                        role: data.role,
                        password: data.password,
                    })
                    .then(response => {
                        if (response.data.accessToken) {
                            localStorage.setItem('user', JSON.stringify(response.data));
                        }
                        reject(response)
                        return response.data;
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },

        retrieveToken(context, credentials) {
            axios.post('signin', {
                    email: credentials.email,
                    password: credentials.password,
                })
                .then(response => {
                    //context.commit('adduser', response.data)
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
    mutations: {

    }
});