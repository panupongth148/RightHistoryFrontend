<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#"
          ><router-link to="/">Home</router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#"
              ><router-link to="/search" style="color: white"
                >search</router-link
              ></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="/addacc" style="color: white"
                >New Claimant</router-link
              ></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="/newright" style="color: white"
                >New right</router-link
              ></b-nav-item
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->

          <b-navbar-nav class="ml-auto" v-if="!user">
            <b-nav-item
              ><router-link to="/login" style="color: white"
                >login</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link to="/register" style="color: white"
                >register</router-link
              ></b-nav-item
            >
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto" v-if="user">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>{{ user.Firstname }} {{ user.Lastname }}</em>
              </template>
              <b-dropdown-item @click="logout()">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view 
    :key="$route.fullPath"
      @auth-change="onAuthChange"
      :user="user"/>
      
  </div>
</template>

<script>
import axios from "@/plugins/axios";
export default {
  name: "Home",
  data() {
    return {
      user: null,
    };
  },
  async mounted() {
    await this.onAuthChange();
  },
  methods: {
    onAuthChange() {
      const token = localStorage.getItem("token_right");
      if (token) {
        this.getUser();
      }
    },
    async getUser() {
      await axios
        .get("/user/me")
        .then((res) => {
          this.user = res.data;
        })
        .then((val) => {});
    },
    logout() {
      localStorage.clear();
      this.user = null;
      this.$router.push({ path: "/" });
      // window.location.reload();
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #eff7f3;
}
</style>
