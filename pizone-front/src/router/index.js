import Vue from 'vue';
import VueRouter from 'vue-router';
import Signin from '../components/Signin'
import Signup from '../components/Signup'
import Signout from '../components/Signout'
import Trending from '../components/Trending'

Vue.use(VueRouter)

const routes = [{
    path: '/signin',
    name: 'signin',
    component: Signin

}, {
    path: '/signup',
    name: 'signup',
    component: Signup
}, {
    path: '/',
    name: 'trending',
    component: Trending

}, {
    path: '/signout',
    name: 'signout',
    component: Signout
}];

export default new VueRouter({
    routes
});