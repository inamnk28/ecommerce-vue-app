<template>
    <NavBar/>
    <router-view/>
    <FooterComp/>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import FooterComp from '@/components/FooterComp.vue'
export default {
  components: {NavBar, FooterComp}
}
</script>

<style>
#app {
  width: 100vw;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
* {
  margin: 0;
  overflow-x: hidden;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */


/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}  */
</style>
