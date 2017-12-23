<template>
  <div id="app">
    <div class="navigation">
      <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
        <b-navbar-brand href="#">Academy Entertainment Group</b-navbar-brand>
      
        <b-navbar-nav>
          <b-nav-item>
            <a href="#" v-scroll-to="'#about'">About</a>
          </b-nav-item>
          <b-nav-item>
             <a href="#" v-scroll-to="'#members'">Members</a>
          </b-nav-item>
          <b-nav-item>
            <a href="#" v-scroll-to="'#youtube'">YouTube</a>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar-expand-md .navbar-nav .nav-link {
  padding-right: 1em;
  padding-left: 2em;
}

.navbar {
  padding: 9.8px;
}

.navbar-brand {
  margin-left: 1em;
  font-weight: bold;
}

.bg-dark {
  background-color: black !important;
}

a:hover {
  text-decoration: none;
}
</style>
