import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Search from '../views/Search.vue'
import DetailList from "../views/DetailsRightList.vue"
import Register from "../views/Signup.vue"
import AddAccountClaimant from "../views/AddAccountClaimant.vue"
import NewRight from "../views/NewRight.vue"
import RightDetail from "../views/DetailRight"
import PdfViewer from "../components/PdfViewer"
import RightRequest from "../views//RightRequest"
import StatusRight from '../views/StatusRight.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    meta: { guess: true },
    component: Login
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/detaillist/:id',
    name: 'detaillist',
    component: DetailList
  },
  {
    path: '/register',
    name: 'register',
    meta: { guess: true },
    component: Register
  },
  {
    path: '/addacc',
    name: 'addacc',
    component: AddAccountClaimant
  },
  {
    path: '/newright',
    name: 'newright',
    component: NewRight
  },
  {
    path: '/detailright/:claimid/:docid',
    name: 'detailright',
    component: RightDetail
  },
  {
    path: '/pdfviewer',
    name: 'pdfviewer',
    component: PdfViewer
  },
  {
    path: '/rightrequest',
    name: 'rightrequest',
    component: RightRequest
  },
  {
    path: '/right/status/:id',
    name: 'statusright',
    component: StatusRight,
    meta: {
      auth: true
  }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('token_right')
  console.log(isLoggedIn)
  if (to.meta.login && !isLoggedIn) {
    console.log
    alert('You are a guess user. Please login to use this function.')
    next({ path: '/' })
  }

  if (to.meta.guess && isLoggedIn) {
    alert("You've already logged in.")
    next({ path: '/'})
  }

  next()
})


export default router
